import { createEvent, createStore, sample } from 'effector';
import { productsList } from '../lib/mock';
import { IProduct } from './types';

export const setProductList = createEvent<IProduct[]>();
export const $productsList = createStore<IProduct[]>(productsList);

sample({
  clock: setProductList,
  target: $productsList
});
