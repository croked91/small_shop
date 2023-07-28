import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './styles.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode
}

export const AppLink = memo(({
  to,
  className,
  children,
  ...props
}:AppLinkProps) => (
  <Link
    to={to}
    className={classNames(styles.applink, {}, [className])}
    {...props}
  >
    {children}
  </Link>
));
