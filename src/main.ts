import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/svgIcon/index.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { store } from './store'
import { FontAwesomeIcon } from "@/plugins/font-awesome";
console.log('starot', store)
createApp(App)
.component('SvgIcon', SvgIcon)
.component("fa", FontAwesomeIcon)
.use(router)
.use(Antd)
.use(store)
.mount('#app')
