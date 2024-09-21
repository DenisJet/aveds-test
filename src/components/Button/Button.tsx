import { ReactNode } from 'react';
import styles from './Button.module.css';

export default function Button({
  children,
  type = 'button',
  isPrimaryColor = true,
  onClick,
}: {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isPrimaryColor?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className={isPrimaryColor ? styles.primaryColorButton : styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
