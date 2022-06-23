<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="logo" />
      <Menu/>
    </a-layout-header >
    <a-layout-content class="content">
      <Breadcrumb />
      <div class="main-content">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer class="footer">CityDo ©2018</a-layout-footer>
  </a-layout>
</template>

<script>
import Breadcrumb from './breadcrumb/index.vue'
import Menu from './menu/horizontal.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Layout',
  components: {
    Breadcrumb,
    Menu
  },
  setup(){
    
  }
})
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  width: 100%;
  .header{
    position: fixed;
    z-index: 1;
    width: 100%;
    background: #fff
  }
  .content {
    padding: 64px 50px 0 50px;
    overflow-y: auto;
    .main-content {
      background: #fff;
      padding: 24px;
      min-height: 280px
    }
  }
  .footer {
    text-align: center;
  }
}
</style >