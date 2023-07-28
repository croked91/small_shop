import { Checkout } from 'features/checkout';
import { memo } from 'react';
import cls from './Cart.module.scss';
import { ProductList } from './ProductList/ProductList';

const Cart = memo(() => (
  <div className={cls.cart}>
    <ProductList />
    <Checkout />
  </div>
));

export default Cart;
