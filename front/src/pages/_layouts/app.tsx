import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../../components/Header'

const Container = styled.main`
  height: 100vh;

  background-color: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-500']};
  min-height: 100vh;
`

export function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
