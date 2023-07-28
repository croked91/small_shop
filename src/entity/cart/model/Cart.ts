import { createStore } from 'effector';
import { CartItemsT } from './types';

export const $cart = createStore<CartItemsT | null>(null);
