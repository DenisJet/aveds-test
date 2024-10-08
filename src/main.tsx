import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RequireAuth } from './helpers/RequireAuth.tsx';
import Layout from './layout/Layout.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.tsx';
import { ModalContextProvider } from './context/modalContext.tsx';
import UserPage from './pages/UserPage/UserPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/contacts',
        element: <ContactsPage />,
      },
      {
        path: '*',
        element: <div>404 - page not found</div>,
      },
    ],
  },
  {
    path: '/users',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/users/:id',
        element: <UserPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalContextProvider>
      <RouterProvider router={router} />
    </ModalContextProvider>
  </StrictMode>
);
