import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { Home } from 'features/home/Home';
import { App } from './App';

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
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
