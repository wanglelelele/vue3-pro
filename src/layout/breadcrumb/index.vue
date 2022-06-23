<template>
  <div class="breadcrumb-contaier">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item,index) in routes" :key="index">
        <span v-if="index === routes.length - 1 || item.meta.disabled===true">{{ item.meta.title }}</span>
        <router-link :to="item.meta.realPath || item.path" v-else>{{item.meta.title}}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import { watch, ref } from "vue";

export default {
  name: "Breadcrumb",
  setup() {
    const route = useRoute();
    const routes = ref<any[]>([])
    watch(
      () => route.path,
      (newValues) => {
        routes.value = route.matched.filter((item:any={meta:{}}) => item.meta.title);
      },
      { immediate: true }
    );
    return { routes };
  },
};
</script  >

<style>
</style>