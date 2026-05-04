import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { I18nProvider } from '../../i18n';

describe('App', () => {
  it('should render Welcome', () => {
    render(
      <I18nProvider>
        <Home />
      </I18nProvider>,
    );
    expect(screen.getByText('Welcome')).toBeVisible();
  });
});
