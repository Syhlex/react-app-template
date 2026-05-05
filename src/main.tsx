import { createRoot } from 'react-dom/client';
import { AppContainer } from './AppContainer';
import './css/bootstrap';

const rootEl = document.getElementById('root');

if (!rootEl) {
  throw new Error('Unable to find element with id "root".');
}

const root = createRoot(rootEl);
root.render(<AppContainer />);
