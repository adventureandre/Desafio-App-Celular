import { Helmet } from 'react-helmet-async'
import { Envelope, LockKey } from 'phosphor-react'
import {
  StyledFormCadastro,
  StyledHeader,
  StyledInputCadastro,
  StyledLabel,
} from './styles'
import { StyledContainer, StyledContent } from '../../styles/themes/styles'
import { Button } from '../../components/Buttom'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />

      <StyledContainer>
        <StyledContent>
          <StyledHeader>
            <h1 className="text-5xl font-extralight">Fazer Login</h1>
            <p className="text-lg">
              Ainda não tem conta?{' '}
              <a
                className="text-green-800 font-bold"
                title="Cadastre-se!"
                href=""
              >
                Cadastre-se!
              </a>
            </p>
          </StyledHeader>
          <StyledFormCadastro>
            <StyledLabel>
              <Envelope size={20} /> Email:
            </StyledLabel>
            <StyledInputCadastro
              type="email"
              placeholder="Informe seu e-mail:"
            />

            <StyledLabel>
              <LockKey size={20} /> Senha:
            </StyledLabel>
            <StyledInputCadastro
              type="password"
              placeholder="Informe sua senha:"
            />

            <Button>Entrar</Button>
          </StyledFormCadastro>
        </StyledContent>
      </StyledContainer>
    </>
  )
}
