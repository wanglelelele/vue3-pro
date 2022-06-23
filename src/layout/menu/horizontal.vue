<template>
  <a-menu
    class="menu-container"
    mode="horizontal"
    :style="{ lineHeight:'  64px'}  "
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
  >
    <template v-for="item in menuList" :key="item.path">
      <template v-if="!item.children">
        <a-menu-item :key="item.path" :style="item.style">
          <router-link :to="item.path">{{item.meta.title}}</router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <a-sub-menu :key="item.path" :title="item.meta.title">
          <MenuItem :chil="item.children" />
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import MenuItem from './subItem.vue'
export default defineComponent({
  components: { MenuItem },
  data() {
    return {
      // menuList: <object>[] 
    }
  },
  setup(props) {
    const route = useRoute();
    const state = reactive({
      selectedKeys: [route.path],
      openKeys: <string[]>[],
      isCollapse: false,
      menuList: <object>[]
    });
    const setMenuList = () => {
      return [
        {
          path: '/',
          key: 'home',
          name: '主页',
          meta: {
            title: '主页'
          }
        },
        {
          path: '/resource',
          key: 'resource',
          name: '平台资源',
          meta: {
            title: '平台资源'
          },
          children: [
            {
              path: '/resource/api',
              key: 'api',
              name: 'API',
              meta: {
                title: 'API'
              }
            },
            {
              path: '/resource/services',
              key: 'services',
              name: '应用系统',
              meta: {
                title: '应用系统'
              }
            }
          ]
        },
        {
          path: '/document',
          key: 'document',
          name: '文档中心',
          meta: {
            title: '文档中心'
          }
        },
        {
          path: '/helper',
          key: 'helper',
          name: '支持与服务',
          meta: {
            title: '支持与服务'
          }
        },
        {
          path: '/buyerCenter',
          key: 'buyerCenter',
          name: '买家中心',
          style: { marginLeft: 'auto' },
          meta: {
            title: '买家中心'
          }
        },
        {
          path: '/sellerCenter',
          key: 'sellerCenter',
          name: '卖家中心',
          meta: {
            title: '卖家中心'
          }
        },
        {
          path: '/shoppingCart',
          key: 'shoppingCart',
          name: '购物车',
          meta: {
            title: '购物车'
          }
        },
        {
          path: '/workCenter',
          key: 'workCenter',
          name: '工作中心',
          meta: {
            title: '工作中心'
          }
        },
        {
          path: '/about',
          key: 'about',
          name: '测试非菜单项当中的菜单',
          meta: {
            title: '测试非菜单项当中的菜单'
          }
        },
        {
          path: '/test',
          key: 'test',
          name: '测试多级嵌套菜单',
          meta: {
            title: '测试多级嵌套菜单'
          },
          children: [
            {
              path: '/test/test-1',
              key: 'test1',
              name: '测试菜单-1',
              meta: {
                title: '测试菜单-1'
              },
              children: [
                {
                  path: '/test/test-1/test-2',
                  key: 'test2',
                  name: '测试菜单-2',
                  meta: {
                    title: '测试菜单-2'
                  },
                  children: [
                    {
                      path: '/test/test-1/test-2/test-3',
                      key: 'test3',
                      name: '测试菜单-3',
                      meta: {
                        title: '测试菜单-3'
                      },
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }

    const setParentHighlight = (currentRoute: any): any[] => {
      const { path, meta } = currentRoute;
      const pathSplit = path.split('/');
      console.log('pathSplit', pathSplit)
			if (pathSplit.length >= 3 && meta.isHide) {
        // return pathSplit.splice(0, 2).join('/')
        return ['/resource']
        }
			else return [path]
    }
    const setParentOpen = (route: any):string[] => {
      return ['/test', '/test/test-1']
    }

    onMounted(() => {
      state.menuList = setMenuList()

      // state.selectedKeys = setParentHighlight(route);
      console.log(' state.selectedKeys',  state.selectedKeys)
      // state.openKeys = setParentOpen(route)
    })
    onBeforeRouteUpdate((to) => {
      // console.log('to-path', to)
      // console.log(' state.openKeys', state.openKeys)
    })
    return {
      ...toRefs(state)
    }
  }
})
</script >

<style lang="less" scoped="scoped">
</style>