import { ContentWrapper } from 'shared/ui/ContentWrapper/ContentWrapper';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/RouteProvider';

export const App = () => (
  <div>
    <ContentWrapper>
      <Navbar />
      <AppRouter />
    </ContentWrapper>
  </div>
);
