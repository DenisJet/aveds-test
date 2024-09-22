import { Link, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import { useContext } from 'react';
import { ModalContext } from '../context/modalContext';
import Modal from '../components/Modal/Modal';

export default function Layout() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const navigate = useNavigate();

  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

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
            <button
              className={styles.headerButton}
              type='button'
              onClick={user ? handleLogout : () => setIsModalOpen(true)}
            >
              {user ? 'Выйти' : 'Войти'}
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
