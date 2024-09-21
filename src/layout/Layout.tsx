import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { useContext } from 'react';
import { ModalContext } from '../context/modalContext';
import Modal from '../components/Modal/Modal';

export default function Layout() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link to='/'>
            <img src='/logo.svg' alt='logo' />
          </Link>
          <div>
            <Link className={styles.headerLink} to='/contacts'>
              Контакты
            </Link>
            <button className={styles.headerButton} type='button' onClick={() => setIsModalOpen(true)}>
              Войти
            </button>
          </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
      {isModalOpen && <Modal />}
    </>
  );
}
