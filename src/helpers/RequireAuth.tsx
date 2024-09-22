import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const user = localStorage.getItem('user');

  if (!user) {
    return <Navigate to='/' replace />;
  }

  return children;
};
