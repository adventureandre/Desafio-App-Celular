import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth'

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
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
