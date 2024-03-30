import { Navigate, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../../components/Header'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'

const Container = styled.main`
  height: 100vh;

  background-color: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-500']};
  min-height: 100vh;
`

export function AppLayout() {
  const { signed } = useContext(AuthContext)

  return signed ? (
    <Container>
      <Header />
      <Outlet />
    </Container>
  ) : (
    <Navigate to="/sign-in" />
  )
}
