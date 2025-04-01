import { useI18n } from '../../i18n';

export const Contact = () => {
  const i18n = useI18n();
  return <div>{i18n.get('contact.title')}</div>;
};
