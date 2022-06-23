<template>
  <div>
    父组建-{{location}}
    <button @click="updateLocation">update-location</button>
    <DetailItem />
  </div>
</template>

<script>
import DetailItem from './item.vue'
import { defineComponent, provide, ref, reactive } from 'vue'
export default defineComponent({
  components: { DetailItem },
  name: 'Detail',
  setup(props){
    const location  = ref('North Pole')
    const geolocation = reactive({
      longitude: 90,
      latitude: 125
    })
    const updateLocation = () => {
      location.value = 'South'+ new Date().getTime()
    }
    provide('location', location)
    provide('geolocation', geolocation)
    provide('updateLocation', updateLocation)

    return {
      location,
      updateLocation
    }

  },
  // methods: {
  //   updateLocation(){
  //     this.location = 'South'
  //   }
  // }
  methods: {
    beforeunloadHandler (e) {
      console.log('刷新or关闭------')
        e = e || window.event
        if (e) {
          e.returnValue = '关闭提示'
        }
        window.sessionStorage.setItem('a',1)
        return '关闭提示'
      },
  },
  mounted() {
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
  },
  destroyed () {
    window.removeEventListener('beforeunload', e => this.beforeunloadHandler(e))
  }
})
</script>

<style>

</style>