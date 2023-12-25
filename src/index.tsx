import { createRoot } from 'react-dom/client';
import { App } from './App';
import './css';

const rootEl = document.getElementById('root');

if (!rootEl) {
  throw new Error('Unable to find element with id "root".');
}

const root = createRoot(rootEl);
root.render(<App />);
