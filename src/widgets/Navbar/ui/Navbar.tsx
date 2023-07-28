import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Title } from 'shared/ui/Title/Title';
import { TitleSizes } from 'shared/ui/Title/types';
import { navbarIcons, navbarLinks } from '../lib/mock';
import cls from './Navbar.module.scss';

const mappedNavbarLinks = navbarLinks.map(({ path, text }) => (
  <AppLink key={path} to={path}>
    {text}
  </AppLink>
));

const mappedNavbarIcons = navbarIcons.map(({ path, Icon }) => (
  <AppLink key={path} to={path}>
    <Icon />
  </AppLink>
));

export const Navbar = memo(() => (
  <nav
    className={cls.navbar}
  >
    <div className={cls.mobileFlex}>
      <Title
        className={cls.headerTitle}
        size={TitleSizes.XL}
        level={1}
        text='Интерьер.'
      />
      <div className={cls.icons}>
        {mappedNavbarIcons}
      </div>
    </div>
    <div className={cls.links}>
      {mappedNavbarLinks}
    </div>
  </nav>
));
