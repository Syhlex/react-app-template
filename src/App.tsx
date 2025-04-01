import { Outlet } from 'react-router-dom';
import { I18nProvider } from './i18n';

export const App = () => {
  return (
    <I18nProvider>
      <Outlet />
    </I18nProvider>
  );
};
