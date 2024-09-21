import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './MainPage.module.css';
import ServicesList from '../../components/ServicesList/ServicesList';
import { services } from '../../mock/services';

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>
        Место для получения<br></br> медицинской помощи
      </h1>
      <div className={styles.mainButtons}>
        <Button>Войти</Button>
        <Button isPrimaryColor={false} onClick={() => navigate('/contacts')}>
          Контакты
        </Button>
      </div>
      <ServicesList servicesList={services} />
    </main>
  );
}
