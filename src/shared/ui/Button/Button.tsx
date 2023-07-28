import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {
  ButtonSizesT, ButtonTypesT, buttonSizes, buttonTypes
} from './types';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizesT;
  buttonType?: ButtonTypesT
}

export const Button = memo(({
  size = buttonSizes.M,
  buttonType = buttonTypes.OUTLINED,
  className,
  ...props
}: IButtonProps) => (
  <button
    type='button'
    className={classNames(cls.button, {}, [className, cls[size], cls[buttonType]])}
    {...props}
  />
));
