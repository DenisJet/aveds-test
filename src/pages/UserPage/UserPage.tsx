import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './UserPage.module.css';

export default function UserPage() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  if (!user) navigate('/');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>Привет, {user}</h1>
      <div className={styles.mainButtons}>
        <Button onClick={handleLogout}>Выйти из аккаунта</Button>
        <Button isPrimaryColor={false} onClick={() => navigate('/contacts')}>
          Перейти в контакты
        </Button>
      </div>
    </main>
  );
}
