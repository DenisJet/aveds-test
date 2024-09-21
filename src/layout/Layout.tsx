import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link to='/'>
            <img src='/logo.svg' alt='logo' />
          </Link>
          <div>
            <Link className={styles.headerLink} to='/contacts'>
              Контакты
            </Link>
            <button className={styles.headerButton} type='button'>
              Войти
            </button>
          </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
