import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'sonner'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { router } from './routes.tsx'

import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import './styles/app.css'
import { AuthProvider } from './context/auth.tsx'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | AppCelular" />
      <Toaster richColors />
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  )
}
