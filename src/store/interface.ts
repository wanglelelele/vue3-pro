import ShoppingCartModuleTypes from '@/store/modules/shoppingCart/interface'
export default interface RooteStateTypes{
    test: string
}
export interface AllStateTypes extends RooteStateTypes{
    shoppingCartModule: ShoppingCartModuleTypes;
  }
