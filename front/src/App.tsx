import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'sonner'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import './styles/app.css'
import { AuthProvider } from './context/auth.tsx'
import { AppRouter } from './Routes/index.tsx'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | AppCelular" />
      <Toaster richColors />
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </AuthProvider>
        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  )
}
