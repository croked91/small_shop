import { createEvent, createStore, sample } from 'effector';
import { $productsList, setProductList } from 'entity/products/model/Products';
import { SortDirectionsT, sortDirections } from './types';

export const setSortDirection = createEvent<SortDirectionsT>();
const $sortDirection = createStore<SortDirectionsT | null>(null);

sample({
  clock: setSortDirection,
  target: $sortDirection
});

sample({
  clock: $sortDirection,
  source: { $productsList, $sortDirection },
  filter: ({ $sortDirection }) => $sortDirection === sortDirections.DESC,
  fn: ({ $productsList }) => [...$productsList].sort((a, b) => b.price - a.price),
  target: setProductList
});

sample({
  clock: $sortDirection,
  source: { $productsList, $sortDirection },
  filter: ({ $sortDirection }) => $sortDirection === sortDirections.ASC,
  fn: ({ $productsList }) => [...$productsList].sort((a, b) => a.price - b.price),
  target: setProductList
});

$sortDirection.watch(console.log);
