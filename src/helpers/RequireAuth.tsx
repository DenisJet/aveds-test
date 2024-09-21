import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const isAuth = localStorage.getItem('isAuth');

  if (!isAuth) {
    return <Navigate to='/' replace />;
  }

  return children;
};
