import { InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export const Input = memo(({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={classNames(cls.input, {}, [className])} {...props} />
));
