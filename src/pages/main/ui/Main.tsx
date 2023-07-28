import { IProductCardAction, ProductCardGrid } from 'entity/products';
import { addProductToCartId } from 'features/addProductToCart';
import { SortProductsByPrice } from 'features/sortProductsByPrice';
import { ReactComponent as AddToCart } from 'shared/assets/icons/24/addToCart.svg';
import { ReactComponent as Heart } from 'shared/assets/icons/24/heart.svg';
import cls from './Main.module.scss';

const actions: IProductCardAction[] = [
  {
    title: 'Добавить в корзину',
    Icon: AddToCart,
    onClick: (id: number) => {
      addProductToCartId(id);
    }
  },
  {
    title: 'Добавить в избранное',
    Icon: Heart
  }
];

export const Main = () => (
  <>
    <div className={cls.fiters}>
      <SortProductsByPrice />
    </div>
    <ProductCardGrid
      actions={actions}
    />
  </>
);
