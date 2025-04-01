import { useI18n } from 'i18n';
import styles from './Home.module.scss';

export const Home = () => {
  const i18n = useI18n();
  return <div className={styles.home}>{i18n.get('home.welcome')}</div>;
};
