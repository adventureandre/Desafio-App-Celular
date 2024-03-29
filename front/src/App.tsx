import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './styles/app.css'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | AppCelular" />
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  )
}
