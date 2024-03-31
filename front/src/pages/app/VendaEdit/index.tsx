import { Button } from '../../../components/Button'
import { CadastroContainer, FormContainer } from './style'

export const VendaEdit = () => {
  const location = useLocation()
  const pathname = location.pathname
  const id = pathname.includes('editproduto') ? pathname.split('/').pop() : null


  return (
    <CadastroContainer>
      <h2>Editar Venda</h2>
      <FormContainer>
        <div>
          <label htmlFor="nomecliente">Cliente:</label>
          <input type="text" id="namecliente" list="clientesugestao" />
        </div>

        <div>
          <label htmlFor="produtos">Pesquise o Produto:</label>
          <input type="text" id="produtosugestao" list="produtosugestao" />

          <label htmlFor="produtos">Produto:</label>
          <input type="text" disabled id="produto" />
        </div>

        <div>
          <label htmlFor="quantidade">Quantidade:</label>
          <input type="number" id="quantidade" />
        </div>

        <div>
          <Button>Finalizar Venda</Button>
        </div>
      </FormContainer>
    </CadastroContainer>
  )
}
