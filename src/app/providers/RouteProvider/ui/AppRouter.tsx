import { Suspense, memo } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from '../routeConfig/routeConfig';

export const AppRouter = memo(() => {
  const renderWithWrapper = ({ path, element }: RouteProps) => (
    <Route
      key={path}
      path={path}
      element={element}
    />
  );

  return (
    <Suspense>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => renderWithWrapper({ path, element }))}
      </Routes>
    </Suspense>
  );
});
