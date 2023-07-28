import { SelectHTMLAttributes } from 'react';
import cls from './Select.module.scss';

export const Select = ({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    className={cls.select}
    {...props}
  >
    {children}
  </select>
);
