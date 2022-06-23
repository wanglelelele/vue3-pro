<template></template>

<script lang="ts">
// @ is an alias to /src
import { defineComponent, PropType } from 'vue'
interface Goods {
    name: string,
    price: number,

}
export default defineComponent({
    name: 'Goods',
    props: {
        data: {
            type: Object as PropType<Goods>,
            default: () => (
                {
                    name: ''
                }
            ),
            validator: (goods: Goods) => !!goods.name
        }
    },
    emits: {},
    setup(props) {

    }
})
</script >
