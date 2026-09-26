import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      if (typeof tg.disableVerticalSwipes === 'function') {
        tg.disableVerticalSwipes();
      }
    }
  }, []);

  return (
    <main className="w-full h-full bg-dark" />
  );
};
