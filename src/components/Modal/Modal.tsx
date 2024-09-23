import { FormEvent, useContext, useState } from 'react';
import styles from './Modal.module.css';
import { ModalContext } from '../../context/modalContext';
import Button from '../Button/Button';
import usersData from './../../mock/users.json';
import { useNavigate } from 'react-router-dom';

export type LoginForm = {
  login: {
    value: string;
  };
  password: {
    value: string;
  };
};

export default function Modal(): JSX.Element {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const [isTrueCredentials, setIsTruCredentials] = useState(true);

  const navigate = useNavigate();

  const loginHandler = (e: FormEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
    setIsTruCredentials(true);
    if (e.currentTarget.value.length < 3) {
      setLoginError(true);
    } else {
      setLoginError(false);
    }
  };

  const passwordHandler = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setIsTruCredentials(true);
    if (e.currentTarget.value.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const passwordTypeChange = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    const isValid = !!login && !!password;
    if (!isValid) {
      setLoginError(!login);
      setPasswordError(!password);
      return;
    }

    const existUser = usersData.users.find((user) => user.login === login && user.password === password);

    if (existUser) {
      localStorage.setItem('user', existUser.name);
      setIsTruCredentials(true);
      setIsModalOpen(false);
      navigate(`/users/${existUser.id}`);
    } else {
      setIsTruCredentials(false);
    }
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
          <button type='button' title='Закрыть' className={styles.modalClose} onClick={() => setIsModalOpen(false)}>
            <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z'
                fill='#737373'
              ></path>
            </svg>
          </button>
          <h4 className={styles.modalTitle}>Вход</h4>
          <form className={styles.modalForm} onSubmit={submit}>
            <div className={styles.modalFormField}>
              <label htmlFor='login'>Ваш логин</label>
              <input
                className={loginError ? styles.inputError : ''}
                onChange={(e) => loginHandler(e)}
                id='login'
                name='login'
                type='text'
                placeholder='Логин'
              />
              {loginError && <small className={styles.error}>Минимум 3 символа</small>}
            </div>
            <div className={styles.modalFormField}>
              <label htmlFor='password'>Ваш пароль</label>
              <input
                className={loginError ? styles.inputError : ''}
                onChange={(e) => passwordHandler(e)}
                id='password'
                name='password'
                type={passwordType}
                placeholder='Пароль'
              />
              <span className={styles.hide} onClick={passwordTypeChange}>
                <img src='/hide.svg' alt='показать' width={24} height={24} />
              </span>
              {passwordError && <small className={styles.error}>Минимум 8 символов</small>}
            </div>
            <div className={styles.buttonContainer}>
              {!isTrueCredentials && <span className={styles.submitError}>Неверный логин или пароль</span>}
              <Button type='submit'>Войти</Button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
