import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Envelope, LockKey } from 'phosphor-react'
import { z } from 'zod'
import { toast } from 'sonner'

import {
  StyledFormCadastro,
  StyledHeader,
  StyledInputCadastro,
  StyledLabel,
} from './styles'
import { StyledContainer, StyledContent } from '../../styles/themes/styles'
import { Button } from '../../components/Button'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { Navigate } from 'react-router-dom'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  const {signed, signIn } = useContext(AuthContext)

  async function handleSignIn(data: SignInForm) {
    try {
      await signIn(data)
    } catch (e) {
      toast.error('Credenciais inválidas.')
    }
  }

  if (signed) {
    return <Navigate to="/" />
  } else {
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
            <StyledFormCadastro onSubmit={handleSubmit(handleSignIn)}>
              <StyledLabel>
                <Envelope size={20} /> Email:
              </StyledLabel>
              <StyledInputCadastro
                type="email"
                id="email"
                placeholder="Informe seu e-mail:"
                {...register('email')}
              />

              <StyledLabel>
                <LockKey size={20} /> Senha:
              </StyledLabel>
              <StyledInputCadastro
                type="password"
                placeholder="Informe sua senha:"
                {...register('password')}
              />

              <Button disabled={isSubmitting}>Entrar</Button>
            </StyledFormCadastro>
          </StyledContent>
        </StyledContainer>
      </>
    )
  }
}
