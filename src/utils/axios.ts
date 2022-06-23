import axios from "axios";
import debounce from "lodash/debounce";
import { message, notification } from 'ant-design-vue';
import router from '@/router'
axios.defaults.withCredentials = true;
const baseUrl = '/api'

const instance = axios.create({
  timeout: 60 * 1000,
  baseURL: baseUrl,
  //headers: { "Content-Type": "application/json" },
});

const redirectToLogin = debounce(() => {
  router.push("/login");
}, 500);

const notificationError = debounce((tit = "提示") => {
  message.error(tit, 4);
}, 100);

// 添加拦截器
instance.interceptors.request.use(
  (config) => {
    if(config.headers){
      config.headers.token = sessionStorage.getItem("token") || '';
    }
    return config;
  },
  (err) => {
    console.warn("error: ", err);
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 不拦截部分接口
    // @ts-ignore
    if (!response.config.noInterceptor) {
      if (response.data && response.data.code === -402) {
        redirectToLogin();
      } else if (response.data && response.data.code !== 0) {
        // 错误提示
        notificationError(response.data.msg);
      }
    }
    return response;
  },
  (error) => {
    console.warn("error: ", error);
    if (!error) return Promise.reject(null);

    if (error.message?.indexOf("timeout") > -1) {
      notification.error({
        message: "请求超时",
        description: `接口：${error.config.url}`,
        duration: 4,
      });
    } else if (error.message?.indexOf("Network") > -1) {
      notification.error({
        message: "网络异常",
        description: `请求失败！`,
        duration: 4,
      });
    } else {
      error.message && notificationError(error.message);
    }

    return Promise.reject(error);
  }
);

export default instance;

export const all = axios.all;

export const spread = axios.spread;
