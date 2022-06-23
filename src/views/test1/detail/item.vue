<template>
  <div>
      子组建-{{userLocation}}
        <button>update-location</button>
    </div>
</template>

<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
    name: 'DetailItem',
    setup(props){
        const userLocation = inject('location')
        const userGeolocation = inject('geolocation')
        const userUpdateLocation = inject('updateLocation')
        return {
            userLocation,
            userGeolocation,
            userUpdateLocation
        }
    }

})
</script>

<style>

</style>