import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { SignIn } from './pages/auth'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/Dashboard'
import { FormProduto } from './pages/app/FormProduto'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/cadproduto',
        element: <FormProduto />,
      },
      {
        path: '/editproduto/:id',
        element: <FormProduto />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
