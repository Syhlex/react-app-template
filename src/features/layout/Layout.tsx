import { NavLink, Outlet } from 'react-router-dom';
import { useI18n } from '../../i18n';
import styles from './Layout.module.scss';

export const Layout = () => {
  const { i18n } = useI18n();
  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/" end>
          {i18n.layout.home}
        </NavLink>
        <NavLink to="/contact">{i18n.layout.contact}</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
