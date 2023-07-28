import { memo } from 'react';
import { Input } from 'shared/ui/Input/Input';
import cls from './CheckoutForm.module.scss';

export const CheckoutForm = memo(() => (
  <form className={cls.checkoutForm}>
    <Input
      placeholder='Имя фамилия'
    />
    <Input
      placeholder='+7 904 00 80 80'
    />
    <Input
      placeholder='Адрес доставки'
    />
  </form>
));
