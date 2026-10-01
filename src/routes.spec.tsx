import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { I18nProvider } from './i18n';
import { routes } from './routes';
import { Layout } from './features/layout/Layout';
import { RouteError } from './features/errors/RouteError';

const renderAt = (path: string) =>
  render(
    <I18nProvider>
      <RouterProvider
        router={createMemoryRouter(routes, { initialEntries: [path] })}
      />
    </I18nProvider>,
  );

describe('routes', () => {
  it('should render not found page for unknown paths', async () => {
    renderAt('/unknown');
    expect(
      await screen.findByRole('heading', { name: 'Page not found' }),
    ).toBeVisible();
    expect(screen.getByRole('navigation')).toBeVisible();
  });

  it('should navigate between pages', async () => {
    renderAt('/');
    expect(await screen.findByText('Welcome')).toBeVisible();

    const contactLink = screen.getByRole('link', { name: 'Contact' });
    fireEvent.click(contactLink);

    await waitFor(() =>
      expect(contactLink).toHaveAttribute('aria-current', 'page'),
    );
    expect(screen.queryByText('Welcome')).not.toBeInTheDocument();
  });

  it('should render error page when a route throws', async () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const Throws = () => {
      throw new Error('Test error');
    };
    render(
      <I18nProvider>
        <RouterProvider
          router={createMemoryRouter([
            {
              Component: Layout,
              ErrorBoundary: RouteError,
              children: [{ path: '/', Component: Throws }],
            },
          ])}
        />
      </I18nProvider>,
    );
    expect(
      await screen.findByRole('heading', { name: 'Something went wrong' }),
    ).toBeVisible();
    expect(screen.getByRole('link', { name: 'Go to home page' })).toBeVisible();
    consoleError.mockRestore();
  });
});
