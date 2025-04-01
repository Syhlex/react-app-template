import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './features/home/Home';
import { App } from './App';
import { Contact } from './features/contact/Contact';

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
    element: <App />,
    children: routesConfig,
  },
]);

export const AppContainer = () => {
  return <RouterProvider router={router} />;
};
