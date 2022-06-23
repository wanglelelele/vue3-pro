import { InjectionKey } from 'vue'

import { createStore, createLogger, Store, useStore as baseUseStore } from 'vuex'
import shoppingCartModule from './modules/shoppingCart'
import RooteStateTypes, { AllStateTypes } from './interface'
const debug = process.env.NODE_ENV !== 'production'

export const key: InjectionKey<Store<RooteStateTypes>> = Symbol()
export const store = createStore<RooteStateTypes>({
    modules: {
        shoppingCartModule,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
export function useStore<T=AllStateTypes> () {
    return baseUseStore<T>(key);
  }