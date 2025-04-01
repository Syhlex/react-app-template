import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from './Home';

jest.mock('i18n', () => ({ useI18n: () => ({ get: () => 'Welcome' }) }));

describe('App', () => {
  it('should render Welcome', () => {
    render(<Home />);

    expect(screen.getByText('Welcome')).toBeVisible();
  });
});
