import { AppProvider } from './Context';
import MultiRouteWrapper from './Wrapper';

export default function MultiRoute() {
  return (
    <AppProvider>
      <MultiRouteWrapper />
    </AppProvider>
  );
}
