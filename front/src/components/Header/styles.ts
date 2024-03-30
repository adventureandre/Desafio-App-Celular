import { DeviceMobile, FilePlus, House, Swap, UserCircle } from 'phosphor-react'
import { styled } from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;

  width: 100%;
  height: 55px;
  border-bottom: 1px solid ${({ theme }) => theme['gray-300']};
`
export const PhoneIcon = styled(DeviceMobile).attrs(({ theme }) => ({
  size: 50,
  color: theme['gray-500'],
}))`
  margin-left: 15px;
  margin-right: 15px;
`

export const HomeIcon = styled(House).attrs(({ theme }) => ({
  size: 30,
  color: theme['gray-500'],
}))`
  margin-left: 10px;
`

export const CadastroIcon = styled(FilePlus).attrs(({ theme }) => ({
  size: 30,
  color: theme['gray-500'],
}))`
  margin-left: 10px;
`

export const UserIcon = styled(UserCircle).attrs(({ theme }) => ({
  size: 30,
  color: theme['gray-500'],
}))`
  margin-left: 10px;
`
export const VendaIcon = styled(Swap).attrs(({ theme }) => ({
  size: 30,
  color: theme['gray-500'],
}))`
  margin-left: 10px;
`
