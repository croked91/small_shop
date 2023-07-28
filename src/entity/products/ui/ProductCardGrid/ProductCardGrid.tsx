import { useUnit } from 'effector-react';
import { $productsList } from 'entity/products/model/Products';
import { FC } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { IProductCardAction } from '../ProductCard/types';
import cls from './ProductCardGrid.module.scss';

interface IProductCardGridProps {
  actions?: IProductCardAction[]
}

export const ProductCardGrid: FC<IProductCardGridProps> = ({
  actions
}) => {
  const productsList = useUnit($productsList);

  const mappedProducts = productsList?.map(({
    id, imgUrls, title, description, price
  }) => (
    <ProductCard
      key={id}
      id={id}
      img={imgUrls[0]}
      title={title}
      description={description}
      price={price}
      actions={actions}
    />
  ));

  return (
    <div className={cls.productsGrid}>
      {mappedProducts}
    </div>
  );
};
