import { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  CadastroClienteIcon,
  CadastroIcon,
  Container,
  HomeIcon,
  PhoneIcon,
  UserIcon,
  VendaIcon,
  VendaListIcon,
} from './styles'
import { AuthContext } from '../../context/auth'
import { SignOut } from 'phosphor-react'

export function Header() {
  const { user, signOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  function handSignOut() {
    signOut()
    navigate('/sign-in')
  }

  return (
    <Container>
      <PhoneIcon />
      <nav className="border-l border-gray-500 h-7 w-3/5">
        <ul className="w-full flex gap-6">
          <li>
            <NavLink
              to="/"
              className={`flex items-center gap-1 cursor-pointer ${location.pathname === '/' ? 'active' : ''}`}
            >
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cadproduto"
              className={`flex items-center gap-1 cursor-pointer ${location.pathname === '/cadproduto' ? 'active' : ''}`}
            >
              <CadastroIcon />
              <span>Cadastro</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vendas"
              className={`flex items-center gap-1 cursor-pointer ${location.pathname === '/vendas' ? 'active' : ''}`}
            >
              <VendaIcon />
              <span>Vender</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vendaslist"
              className={`flex items-center gap-1 cursor-pointer ${location.pathname === '/vendaslist' ? 'active' : ''}`}
            >
              <VendaListIcon />
              <span>Listar Vendas</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cadcliente"
              className={`flex items-center gap-1 cursor-pointer ${location.pathname === '/vendaslist' ? 'active' : ''}`}
            >
              <CadastroClienteIcon />
              <span>Cadastrar Cliente</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-2/5 flex justify-end items-center mr-7">
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
