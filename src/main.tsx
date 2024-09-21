import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RequireAuth } from './helpers/RequireAuth.tsx';
import Layout from './layout/Layout.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';

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
        element: <div>Contacts</div>,
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
        element: <div>user page</div>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
