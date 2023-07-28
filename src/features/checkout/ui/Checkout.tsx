import { useStoreMap } from 'effector-react';
import { $cart } from 'entity/cart';
import { memo } from 'react';
import { formatNumberWithSpaceSeparator } from 'shared/lib/formatNumberWithSpaceSeparator/formatNumberWithSpaceSeparator';
import { Button } from 'shared/ui/Button/Button';
import { buttonSizes } from 'shared/ui/Button/types';
import { Text } from 'shared/ui/Text/Text';
import { TextSizes } from 'shared/ui/Text/types';
import { Title } from 'shared/ui/Title/Title';
import { TitleFontFams } from 'shared/ui/Title/types';
import cls from './Checkout.module.scss';
import { CheckoutForm } from './checkoutForm/CheckoutForm';

export const Checkout = memo(() => {
  const total = useStoreMap({
    store: $cart,
    fn: $cart => {
      if (!$cart) return 0;

      return Object.values($cart).reduce((acc, cur) => acc + (cur.quantity * cur.product.price), 0);
    },
    defaultValue: 0,
    keys: []
  });

  return (
    <div
      className={cls.checkout}
    >
      <Title
        text='Оформление заказа'
        size='l'
        level={3}
        fontFam={TitleFontFams.SECONDARY}
        className={cls.title}
      />
      <CheckoutForm />
      <span className={cls.total}>
        <Text
          size={TextSizes.L}
          text='Итого:&nbsp;'
        />
        <Title
          level={3}
          size={TextSizes.L}
          text={`${formatNumberWithSpaceSeparator(total)} руб.`}
        />
      </span>

      <Button
        className={cls.button}
        size={buttonSizes.L}
      >
        Оформить заказ
      </Button>
    </div>
  );
});
