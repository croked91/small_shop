import { FC, ReactNode } from 'react';
import cls from './ContentWrapper.module.scss';

interface IContentWrapperProps {
  children: ReactNode
}

export const ContentWrapper: FC<IContentWrapperProps> = ({
  children
}) => (
  <div className={cls.contentWrapper}>
    {children}
  </div>
);
