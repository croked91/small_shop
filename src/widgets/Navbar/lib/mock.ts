import { RoutePath } from 'app/providers/RouteProvider/routeConfig/routeConfig';
import { ReactComponent as Cart } from 'shared/assets/icons/24/cart.svg';
import { ReactComponent as Catalogue } from 'shared/assets/icons/24/catalogue.svg';

export const navbarLinks = [
  {
    path: RoutePath.main,
    text: 'Каталог'
  },
  {
    path: RoutePath.cart,
    text: 'Корзина'
  }
];

export const navbarIcons = [
  {
    path: RoutePath.main,
    Icon: Catalogue
  },
  {
    path: RoutePath.cart,
    Icon: Cart
  }
];
