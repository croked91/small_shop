import { useStoreMap, useUnit } from 'effector-react';
import { $cart } from 'entity/cart';
import { cleanCart } from 'features/cleanCart';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/Button/Button';
import { buttonSizes, buttonTypes } from 'shared/ui/Button/types';
import { Text } from 'shared/ui/Text/Text';
import { TextSizes } from 'shared/ui/Text/types';
import { CartItemCard } from '../CartItemCard/CartItemCard';
import cls from './ProductList.module.scss';

export const ProductList = memo(() => {
  const mappedCartItemCards = useStoreMap({
    store: $cart,
    fn: $cart => {
      if (!$cart) {
        return [];
      }

      return Object.values($cart).map(({ product, quantity }) => (
        <CartItemCard
          key={product.id}
          imgUrls={product.imgUrls}
          product={product}
        />
      ));
    },
    updateFilter: (newResult, oldResult) => newResult.length !== oldResult.length,
    keys: []
  });

  const navigate = useNavigate();

  const onCleanCart = useUnit(cleanCart);
  const onContinueShopping = () => {
    navigate('/');
  };

  if (!mappedCartItemCards.length) {
    return null;
  }

  return (
    <div className={cls.productList}>
      <div className={cls.head}>
        <Text
          size={TextSizes.S}
          text='Товар'
        />
        <Text
          size={TextSizes.S}
          text='К-во'
        />
      </div>
      <div className={cls.cartItems}>
        {mappedCartItemCards}
      </div>
      <div className={cls.footer}>
        <Button
          size={buttonSizes.M}
          onClick={onCleanCart}
        >
          Очистить корзину
        </Button>
        <Button
          size={buttonSizes.M}
          buttonType={buttonTypes.FILLED}
          onClick={onContinueShopping}
        >
          Продолжить покупки
        </Button>
      </div>
    </div>
  );
});
