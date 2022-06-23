<template>
  <div class="home">
   ss
  </div>
</template>

<script lang="tsx">
// @ is an alias to /src
import { useStore } from 'vuex'
import { InjectionKey } from 'vue'
export default {
  name: 'Home',
  components: {},
  setup(){
       const store = useStore()
       console.log('store----', store.state.shoppingCartModule)
  }
}
</script >
