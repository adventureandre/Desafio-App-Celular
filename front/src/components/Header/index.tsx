import {
  CadastroIcon,
  Container,
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from './styles'

export function Header() {
  return (
    <Container>
      <PhoneIcon />
      <nav className=" border-l border-gray-500 h-7 w-3/5">
        <ul className=" w-full flex gap-6">
          <li>
            <a href="/" className="flex items-center gap-1">
              <HomeIcon />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/cadproduto" className="flex items-center gap-1">
              <CadastroIcon />
              <span>Cadastro</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className=" w-2/5 flex justify-end items-center mr-7">
        <UserIcon />
        Andre Luiz
      </div>
    </Container>
  )
}
