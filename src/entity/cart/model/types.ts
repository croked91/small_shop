import { IProduct } from 'entity/products';

export interface ICartItem {
  product: IProduct,
  quantity: number
}

export type CartItemsT = Record<string, ICartItem>
