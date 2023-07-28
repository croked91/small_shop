import {
  combine, createEvent, restore, sample
} from 'effector';
import { $cart } from 'entity/cart';
import { IChangeProductQuantityInCart } from './types';

export const changeProductQuantityInCart = createEvent<IChangeProductQuantityInCart>();

export const $combinedForChange = combine({
  payload: restore(changeProductQuantityInCart, null),
  $cart
});

sample({
  clock: changeProductQuantityInCart,
  source: $combinedForChange,
  filter: ({ payload }) => payload?.id !== null,
  fn: ({ $cart, payload }) => ({
    ...$cart,
    ...($cart?.[payload?.id!] && (
      { [payload?.id!]: { ...$cart[payload?.id!], quantity: payload?.quantity } }
    ))
  }),
  target: $cart
});
