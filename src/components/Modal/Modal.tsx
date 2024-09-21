import { useContext } from 'react';
import styles from './Modal.module.css';
import { ModalContext } from '../../context/modalContext';

export default function Modal(): JSX.Element {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

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
          Modal
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
