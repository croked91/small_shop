import { useStoreMap, useUnit } from 'effector-react';
import { $cart } from 'entity/cart';
import { IProductCardAction, IProductCardProps, ProductCard } from 'entity/products';
import { changeProductQuantityInCart } from 'features/changeProductQuantityInCart';
import { deleteProductFromCart } from 'features/deleteProductFromCart';
import { FC, useCallback } from 'react';
import { InputCounter } from 'shared/ui/InputCounter/InputCounter';
import cls from './CartItemCard.module.scss';

interface ICartItemCardProps {
  product: Omit<IProductCardProps, 'img'>;
  imgUrls: string[];
}

const actions: IProductCardAction[] = [
  {
    title: 'Избранные'
  },
  {
    title: 'Удалить',
    onClick: (id: number) => {
      deleteProductFromCart(id);
    }
  }
];

// TODO: убрать лишние перерисовки
export const CartItemCard: FC<ICartItemCardProps> = ({ product, imgUrls }) => {
  const {
    id, description, price, title
  } = product;

  const onChangeProductQuantityInCart = useUnit(changeProductQuantityInCart);

  const quantity = useStoreMap({
    store: $cart,
    fn: $cart => $cart?.[id].quantity,
    keys: []
  });

  const onChangeHandler = useCallback((quantity: number) => {
    onChangeProductQuantityInCart({ id, quantity });
  }, [id, onChangeProductQuantityInCart]);

  return (
    <div
      className={cls.cartItemCard}
    >
      <ProductCard
        layoutType='list'
        id={id}
        img={imgUrls[1] || imgUrls[0]}
        description={description}
        price={price}
        title={title}
        actions={actions}
      />
      <InputCounter
        min={1}
        max={5}
        current={quantity}
        onChange={onChangeHandler}
      />
    </div>
  );
};
