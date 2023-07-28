import {
  combine, createEvent, createStore, sample
} from 'effector';
import { $cart, CartItemsT } from 'entity/cart';
import { $productsList } from 'entity/products';

// Нет информации о том, что должно происходить при повторном нажатии на кнопку
// Делаю так, что происходить ничего не будет
export const $lastAddedProductId = createStore<number | null>(null);
export const addProductToCartId = createEvent<number>();

// По хорошему, конечно, нужна нормализация, но в отведенное время, не успеваю
const $combinedForAddProductToCart = combine({
  $productsList,
  $cart,
  $lastAddedProductId
});

sample({
  clock: addProductToCartId,
  target: $lastAddedProductId
});

// TODO: Вынести в хелпер
sample({
  clock: addProductToCartId,
  source: $combinedForAddProductToCart,
  filter: ({ $lastAddedProductId }) => $lastAddedProductId !== null,
  fn: ({
    $productsList,
    $cart,
    $lastAddedProductId
  }): CartItemsT | null => {
    const product = $productsList.find(({ id }) => id === $lastAddedProductId);
    if (!product) {
      return $cart;
    }

    return ({
      ...$cart,
      [product.id]: {
        product,
        quantity: 1
      }
    });
  },
  target: $cart
});
