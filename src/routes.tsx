import { RouteObject } from 'react-router-dom';
import { Layout } from './features/layout/Layout';
import { RouteError } from './features/errors/RouteError';

export const routes: RouteObject[] = [
  {
    Component: Layout,
    ErrorBoundary: RouteError,
    children: [
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
      {
        path: '*',
        lazy: async () => {
          const { NotFound } = await import('./features/errors/NotFound');
          return { Component: NotFound };
        },
      },
    ],
  },
];
