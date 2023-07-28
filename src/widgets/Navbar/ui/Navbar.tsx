import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Title } from 'shared/ui/Title/Title';
import { TitleSizes } from 'shared/ui/Title/types';
import { navbarLinks } from '../lib/mock';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
  const mappedNavbarLinks = navbarLinks.map(({ path, text }) => (
    <AppLink key={path} to={path}>
      {text}
    </AppLink>
  ));

  return (
    <nav
      className={cls.navbar}
    >
      <Title
        className={cls.headerTitle}
        size={TitleSizes.XL}
        level={1}
        text='Интерьер.'
      />
      <div className={cls.links}>
        {mappedNavbarLinks}
      </div>
    </nav>
  );
});
