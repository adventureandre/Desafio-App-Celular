import { useContext } from 'react'
import {
  CadastroIcon,
  Container,
  HomeIcon,
  PhoneIcon,
  UserIcon,
  VendaIcon,
} from './styles'
import { AuthContext } from '../../context/auth'
import { SignOut } from 'phosphor-react'
import { Navigate, useNavigate } from 'react-router-dom'

export function Header() {
  const { user, signOut } = useContext(AuthContext)
  const navigate = useNavigate()

  function handSignOut() {
    signOut()
    return <Navigate to="/sign-in" />
  }

  function handleCadastroProd() {
    navigate(`/cadproduto`)
  }

  function handleVenda() {
    navigate(`/vendas`)
  }

  function handleHome() {
    navigate(`/`)
  }

  return (
    <Container>
      <PhoneIcon />
      <nav className=" border-l border-gray-500 h-7 w-3/5">
        <ul className=" w-full flex gap-6">
          <li>
            <div
              onClick={handleHome}
              className="flex items-center gap-1 cursor-pointer"
            >
              <HomeIcon />
              <span>Home</span>
            </div>
          </li>
          <li>
            <div
              onClick={handleCadastroProd}
              className="flex items-center gap-1 cursor-pointer"
            >
              <CadastroIcon />
              <span>Cadastro</span>
            </div>
          </li>
          <li>
            <div
              onClick={handleVenda}
              className="flex items-center gap-1 cursor-pointer"
            >
              <VendaIcon />
              <span>Vender</span>
            </div>
          </li>
        </ul>
      </nav>
      <div className=" w-2/5 flex justify-end items-center mr-7">
        <UserIcon />
        {user.name}
      </div>
      <SignOut
        size={32}
        className="mr-10 cursor-pointer"
        onClick={handSignOut}
      />
    </Container>
  )
}
