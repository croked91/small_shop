import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SemanticButtonWrapper.module.scss';

export const SemanticButtonWrapper = (
  { className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>
) => (
  <button
    className={classNames(cls.semanticButtonWrapper, {}, [className])}
    type='button'
    {...props}
  >
    {children}
  </button>
);
