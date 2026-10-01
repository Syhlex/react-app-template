import { useI18n } from '../../i18n';

export const NotFound = () => {
  const { i18n } = useI18n();
  return <h1>{i18n.errors.notFound}</h1>;
};
