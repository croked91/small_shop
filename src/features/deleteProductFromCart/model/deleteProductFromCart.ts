import {
  combine, createEvent,
  restore,
  sample
} from 'effector';
import { $cart } from 'entity/cart';

export const deleteProductFromCart = createEvent<number>();

const $combinedForDelete = combine({
  id: restore(deleteProductFromCart, null),
  $cart
});

sample({
  clock: deleteProductFromCart,
  source: $combinedForDelete,
  filter: ({ id }) => id !== null,
  fn: ({ $cart, id }) => {
    delete $cart?.[id!];
    return { ...$cart };
  },
  target: $cart
});
