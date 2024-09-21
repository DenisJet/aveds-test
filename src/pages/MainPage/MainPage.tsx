import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './MainPage.module.css';
import ServicesList from '../../components/ServicesList/ServicesList';
import { services } from '../../mock/services';
import { useContext } from 'react';
import { ModalContext } from '../../context/modalContext';

export default function MainPage() {
  const { setIsModalOpen } = useContext(ModalContext);
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>
        Место для получения<br></br> медицинской помощи
      </h1>
      <div className={styles.mainButtons}>
        <Button onClick={() => setIsModalOpen(true)}>Войти</Button>
        <Button isPrimaryColor={false} onClick={() => navigate('/contacts')}>
          Контакты
        </Button>
      </div>
      <ServicesList servicesList={services} />
    </main>
  );
}
