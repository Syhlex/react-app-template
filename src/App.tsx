import { I18nProvider, useI18n } from 'i18n';
import styles from './App.module.scss';

export const App = () => {
  return (
    <I18nProvider>
      <Content />
    </I18nProvider>
  );
};

const Content = () => {
  const i18n = useI18n();
  return (
    <div className={styles.contentContainer}>{i18n.get('app.helloWorld')}</div>
  );
};
