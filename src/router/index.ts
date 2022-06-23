import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import LayoutParent from '@/layout/routerView/parent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name:'Login',
    component:() => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: {
      title: '主页'
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        // meta: {
        //   title: '主页'
        // }
      },
      {
        path: 'resource',
        name: 'Resource',
        component: LayoutParent,
        meta: {
          // title: '平台资源',
          disabled: true
        },
        redirect: '/resource/api',
        children: [
          {
            path: 'api',
            name: 'API',
            component: () => import(/* webpackChunkName: "about" */ '../views/resource/apis/index.vue'),
            meta: {
              title: 'API',
              isHide: true
            }
          }
        ]
      },
      {
        path: 'document',
        name: 'Document',
        component: () => import(/* webpackChunkName: "about" */ '../views/document/index.vue'),
        meta: {
          title: '文档中心'
        }
      },
      {
        path: 'helper',
        name: 'Helper',
        component: () => import(/* webpackChunkName: "about" */ '../views/helper/index.vue'),
        meta: {
          title: '支持与服务'
        }
      },
      {
        path: 'buyerCenter',
        name: 'BuyerCenter',
        component: () => import(/* webpackChunkName: "about" */ '../views/buyerCenter/index.vue'),
        meta: {
          title: '买家中心'
        }
      },
      {
        path: 'sellerCenter',
        name: 'SellerCenter',
        component: () => import(/* webpackChunkName: "about" */ '../views/sellerCenter/index.vue'),
        meta: {
          title: '卖家中心'
        }
      },
      {
        path: 'shoppingCart',
        name: 'ShoppingCart',
        component: () => import(/* webpackChunkName: "about" */ '../views/shoppingCart/index.vue'),
        meta: {
          title: '购物车'
        }
      },
      // 测试多层嵌套子路由
      {
        path: 'test',
        name: 'TEST',
        component: LayoutParent,
        // component: () => import('@/views/test/index.vue')
        redirect: '/test/test-1',
        children: [
          {
            path: 'test-1',
            name: 'TEST-1',
            component: LayoutParent,
            redirect: '/test/test-1/test-2',
            children: [
              {
                path: 'test-2',
                name: 'TEST-2',
                component: LayoutParent,
                redirect: '/test/test-1/test-2/test-3',
                children: [
                  {
                    path: 'test-3',
                    name: 'TEST-3',
                    meta:  {title: 'TEST-3'},
                    component: () => import('@/views/test/index.vue')
                  }
                ]
              }
            ]
          }
        ]
      },
      // 非真实子页面, 
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/test1/index.vue'),
        meta: {
          title: '关于'
        }
      },
      {
        path: 'a',
        name: 'A',
        component: LayoutParent,
        meta: {
          title: '关于',
          realPath: '/about'
        },
        children: [
          {
            path: ':id',
            component: () => import(/* webpackChunkName: "about" */ '@/views/test1/detail/index.vue'),
            meta: {
              title: '详情'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/notFound/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), //createWebHashHistory(),
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !token) next({ name: 'Login' })
//   else next()
// })
export default router
