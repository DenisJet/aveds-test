import { FormEvent, useContext } from 'react';
import styles from './Modal.module.css';
import { ModalContext } from '../../context/modalContext';
import Button from '../Button/Button';

export default function Modal(): JSX.Element {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    // dispatch(userActions.clearLoginError());
    // const target = e.target as typeof e.target & LoginForm;
    // const { email, password } = target;
    // await sendLogin(email.value, password.value);
  };

  if (isModalOpen) {
    return (
      <div
        className={isModalOpen ? `${styles.modal} ${styles.active}` : styles.modal}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className={isModalOpen ? `${styles.modalContent} ${styles.active}` : styles.modalContent}
          onClick={(evt) => evt.stopPropagation()}
        >
          <h4 className={styles.modalTitle}>Вход</h4>
          <form className={styles.modalForm} onSubmit={submit}>
            <div className={styles.modalFormField}>
              <label htmlFor='login'>Ваш логин</label>
              <input id='login' name='login' type='text' placeholder='Логин' />
            </div>
            <div className={styles.modalFormField}>
              <label htmlFor='password'>Ваш пароль</label>
              <input id='password' name='password' type='password' placeholder='Пароль' />
            </div>
            <Button>Войти</Button>
          </form>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
