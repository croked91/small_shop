import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from '../Loader/Loader';
import styles from './styles.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }:IPageLoaderProps) => (
  <div className={classNames(styles.pageLoader, {}, [className])}>
    <Loader />
  </div>
));
