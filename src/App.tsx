import { I18nProvider, useI18n } from 'i18n';

export const App = () => {
  return (
    <I18nProvider>
      <Content />
    </I18nProvider>
  );
};

const Content = () => {
  const i18n = useI18n();
  return <div>{i18n.get('app.myApp')}</div>;
};
