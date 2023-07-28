import { FC } from 'react';
import { formatNumberWithSpaceSeparator } from 'shared/lib/formatNumberWithSpaceSeparator/formatNumberWithSpaceSeparator';
import { SemanticButtonWrapper } from 'shared/ui/SemanticButtonWrapper/SemanticButtonWrapper';
import { Text } from 'shared/ui/Text/Text';
import { Title } from 'shared/ui/Title/Title';
import cls from './ProductCard.module.scss';
import { IProductCardAction } from './types';

export interface IProductCardProps {
  id: number,
  img: string,
  title: string,
  description: string,
  price: number,
  layoutType?: 'grid' | 'list';
  actions?: IProductCardAction[]
}

export const ProductCard: FC<IProductCardProps> = ({
  id,
  img,
  description,
  price,
  title,
  layoutType = 'grid',
  actions
}) => {
  const mappedActions = actions?.map(({
    Icon, component, onClick, title
  }) => {
    const onIconClick = (id: number) => () => {
      onClick?.(id);
    };

    return (
      <SemanticButtonWrapper
        key={title}
        onClick={onIconClick(id)}
        className={cls.action}
      >
        {Icon
          ? <Icon />
          : (
            <Text
              className={cls.actionText}
              text={title}
            />
          )}
      </SemanticButtonWrapper>
    );
  });

  if (layoutType === 'grid') {
    return (
      <div className={cls.gridProductCard}>
        <div className={cls.actions}>
          {mappedActions}
        </div>
        <img
          width={379}
          height={250}
          src={img}
          alt={img}
          className={cls.img}
        />
        <Title
          level={3}
          size='l'
          text={title}
          className={cls.title}
        />
        <Text
          size='s'
          text={description}
          className={cls.description}
        />
        <Title
          level={3}
          size='l'
          text={`${formatNumberWithSpaceSeparator(price)} руб.`}
        />
      </div>
    );
  }

  return (
    <div className={cls.listProductCard}>
      <img
        width={379}
        height={250}
        src={img}
        alt={img}
        className={cls.img}
      />
      <div className={cls.productInfo}>
        <Title
          level={3}
          size='l'
          text={title}
          className={cls.title}
        />
        <Text
          size='s'
          text={description}
          className={cls.description}
        />
        <Title
          level={3}
          size='l'
          text={`${formatNumberWithSpaceSeparator(price)} руб.`}
          className={cls.price}
        />
        <div />
        <div className={cls.actions}>
          {mappedActions}
        </div>
      </div>
    </div>
  );
};
