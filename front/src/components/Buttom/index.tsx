import { StyledButton } from './styles'

interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>
}
