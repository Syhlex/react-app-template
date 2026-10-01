import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n';

export const RouteError = () => {
  const { i18n } = useI18n();
  return (
    <main>
      <h1>{i18n.errors.unexpected}</h1>
      <Link to="/">{i18n.errors.backHome}</Link>
    </main>
  );
};
