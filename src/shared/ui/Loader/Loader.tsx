import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './styles.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader = memo(({ className }:ILoaderProps) => (
  <div className={classNames(styles.ldsRipple, {}, [className])}>
    <div />
    <div />
  </div>
));
