import { createEvent, sample } from 'effector';
import { $cart } from 'entity/cart';

export const cleanCart = createEvent();

sample({
  clock: cleanCart,
  fn: () => null,
  target: $cart
});
