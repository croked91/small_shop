import { Cart } from 'pages/cart';
import { Main } from 'pages/main';
import { RouteProps } from 'react-router-dom';

export const AppRoutes = {
  MAIN: 'main',
  CART: 'cart'
} as const;

export type AppRoutesT = typeof AppRoutes[keyof typeof AppRoutes];

export const RoutePath: Record<AppRoutesT, string> = {
  [AppRoutes.MAIN]: '/small_shop/',
  [AppRoutes.CART]: '/small_shop/cart'
};

export const routeConfig: Record<AppRoutesT, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <Cart />
  }
};
