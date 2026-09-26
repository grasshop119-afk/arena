import { DesktopView } from './components/DesktopView';
import { MobileView } from './components/MobileView';

export const App = () => {
  return (
    <main className="w-full h-full">
      <DesktopView />
      <MobileView />
    </main>
  );
};
