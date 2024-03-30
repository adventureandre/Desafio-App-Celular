import { StyledButton } from './styles'

interface ButtonProps {
  children: React.ReactNode
  disabled: boolean
}

export const Button = ({ children, disabled }: ButtonProps) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>
}
