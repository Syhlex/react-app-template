import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './features/home/Home';
import { Contact } from './features/contact/Contact';
import { I18nProvider } from './i18n';

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
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
