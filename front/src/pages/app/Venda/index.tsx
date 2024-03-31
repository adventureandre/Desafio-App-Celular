import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { api } from '../../../lib/axios'

import { ProdutoProps } from '../Produtos'
import { Button } from '../../../components/Button'
import { CadastroContainer, FormContainer } from './styles'

interface Client {
  id: number
  name: string
}

export const Vendas = () => {
  const navigate = useNavigate()

  const [productSuggestions, setProductSuggestions] = useState<ProdutoProps[]>(
    [],
  )
  const [clientSuggestions, setClientSuggestions] = useState<Client[]>([])
  const [searchProductValue, setSearchProductValue] = useState<string>('')
  const [searchClientValue, setSearchClientValue] = useState<string>('')
  const [quantidade, setQuantidade] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  const handleProductSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchProductValue(event.target.value)
  }

  const handleClientSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchClientValue(event.target.value)
  }

  const handleFinalizarVenda = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (
      !productSuggestions.length ||
      !clientSuggestions.length ||
      quantidade <= 0
    ) {
      toast.error('Por favor, preencha todos os campos corretamente.')
      return
    }

    const productSendVenda = productSuggestions[0]
    const clienteSendVenda = clientSuggestions[0]
    const total = productSendVenda.valor * quantidade

    const dataSend = {
      idcliente: clienteSendVenda.id,
      produtos: productSendVenda.id,
      quantidade,
      total,
    }

    try {
      setLoading(true)

      const responseProduto = await api.get<ProdutoProps>(
        `/produto/${dataSend.produtos}`,
      )
      const produto = responseProduto.data

      if (produto.quantidade <= 0 || produto.quantidade < dataSend.quantidade) {
        toast.error('Estoque a Baixo da quantidade')
        return
      }
      const quantidade = produto.quantidade - dataSend.quantidade
      const updateProduto = { ...produto, quantidade }

      await api.put(`/produto/${produto.id}`, updateProduto)

      await api.post('/venda', dataSend)
      navigate('/vendaslist')
    } catch (error) {
      console.error('Erro ao finalizar venda:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchProductValue) return

      try {
        const response = await api.get<ProdutoProps[]>(
          `/produto/buscar/${searchProductValue}`,
        )
        setProductSuggestions(response.data)
      } catch (error) {
        console.error('Erro ao buscar produto:', error)
      }
    }

    const timeoutId = setTimeout(fetchProducts, 500)
    return () => clearTimeout(timeoutId)
  }, [searchProductValue])

  useEffect(() => {
    const fetchClients = async () => {
      if (!searchClientValue) return

      try {
        const response = await api.get<Client[]>(
          `/cliente/buscar/${searchClientValue}`,
        )
        setClientSuggestions(response.data)
      } catch (error) {
        console.error('Erro ao buscar cliente:', error)
      }
    }

    const timeoutId = setTimeout(fetchClients, 500)
    return () => clearTimeout(timeoutId)
  }, [searchClientValue])

  return (
    <CadastroContainer>
      <h2>Vendas de Produto</h2>
      <FormContainer>
        <div>
          <label htmlFor="nomecliente">Selecione o Cliente:</label>
          <input
            type="text"
            id="namecliente"
            value={searchClientValue}
            onChange={handleClientSearchChange}
            list="clientesugestao"
          />
          <datalist id="clientesugestao">
            {clientSuggestions.map((client) => (
              <option key={client.id} value={client.name} />
            ))}
          </datalist>
          <label htmlFor="cliente">Cliente:</label>
          <input
            type="text"
            disabled
            id="produto"
            value={
              clientSuggestions.length > 0 ? clientSuggestions[0].name : ''
            }
          />
        </div>

        <div>
          <label htmlFor="produtos">Pesquise o Produto:</label>
          <input
            type="text"
            id="produtosugestao"
            value={searchProductValue}
            onChange={handleProductSearchChange}
            list="produtosugestao"
          />
          <datalist id="produtosugestao">
            {productSuggestions.map((product) => (
              <option key={product.id} value={product.name} />
            ))}
          </datalist>

          <label htmlFor="produtos">Produto:</label>
          <input
            type="text"
            disabled
            id="produto"
            value={
              productSuggestions.length > 0 ? productSuggestions[0].name : ''
            }
          />
        </div>

        <div>
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            onChange={(event) => setQuantidade(Number(event.target.value))}
            value={quantidade}
          />
        </div>

        <div onClick={handleFinalizarVenda}>
          <Button disabled={loading}>Finalizar Venda</Button>
        </div>
      </FormContainer>
    </CadastroContainer>
  )
}
