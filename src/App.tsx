import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { I18nProvider } from './i18n';

const routesConfig: RouteObject[] = [
  {
    path: '/',
    lazy: async () => {
      const { Home } = await import('./features/home/Home');
      return { Component: Home };
    },
  },
  {
    path: '/contact',
    lazy: async () => {
      const { Contact } = await import('./features/contact/Contact');
      return { Component: Contact };
    },
  },
];

const router = createBrowserRouter([
  {
    element: (
      <I18nProvider>
        <Outlet />
      </I18nProvider>
    ),
    children: routesConfig,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
