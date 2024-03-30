import { useState, useEffect } from 'react'
import { Button } from '../../../components/Button'
import { CadastroContainer, FormContainer } from './styles'
import { api } from '../../../lib/axios'

export const Vendas = () => {
  const [searchProductValue, setSearchProductValue] = useState('')
  const [productSuggestions, setProductSuggestions] = useState([])
  const [clienteName, setClienteName] = useState('')
  const [quantidade, setQuantidade] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get(`/produto/buscar/${searchProductValue}`)
        setProductSuggestions(response.data)
      } catch (error) {
        console.error('Erro ao buscar produto:', error)
      }
    }

    if (searchProductValue !== '') {
      const timeoutId = setTimeout(fetchProducts, 500)
      return () => clearTimeout(timeoutId)
    }
  }, [searchProductValue])

  const handleSearchChange = (event) => {
    setSearchProductValue(event.target.value)
  }

  return (
    <CadastroContainer>
      <h2>Cadastro de Produto</h2>
      <FormContainer>
        <div>
          <label htmlFor="nomecliente">Cliente:</label>
          <input
            type="text"
            id="namecliente"
            value={clienteName}
            onChange={(event) => setClienteName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="produtos">Produto:</label>
          <input
            type="text"
            id="produto"
            value={searchProductValue}
            onChange={handleSearchChange}
            list="produtosugestao"
          />
          <datalist id="produtosugestao">
            {productSuggestions.map((product) => (
              <option key={product.id} value={product.name} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            onChange={(event) => setQuantidade(event.target.value)}
            value={quantidade}
          />
        </div>

        <div>
          <Button>Finalizar Venda</Button>
        </div>
      </FormContainer>
    </CadastroContainer>
  )
}
