import { Module } from 'vuex'
import ShoppingCartModuleTypes from './interface'
import RooteStateTypes from '@/store/interface'
const module: Module<ShoppingCartModuleTypes, RooteStateTypes> = {
  namespaced: true,
  state: {
    items: [],
    checkoutStatus: null
  },
  getters: {},
  actions: {
    getCarts({ commit }) {
      const data: any[]  = [{key:1}] 
      commit('setCartItems', data)
    },
    addProductToCart() {
    },
  },
  mutations: {
    setCartItems(state, items) {
      state.items = items
    },
    pushProductToCart() {

    }
  }
}
export default module