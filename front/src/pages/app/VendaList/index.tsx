import { useEffect, useState } from 'react'
import {
  ProductContainer,
  ProductTable,
  ProductTableHead,
  TableHeaderTitle,
  ProductTableBody,
  ProductTableRow,
  ProductTableCell,
  Button,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../lib/axios'
import { toast } from 'sonner'

export interface VendaProps {
  id: number
  idcliente: number
  produtos: number
  nomeCliente: string
  nomeProdutos: string
  quantidade: number
  total: number
}

export const VendaList = () => {
  const [vendas, setVendas] = useState<VendaProps[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchVendas = async () => {
      try {
        const response = await api.get('/venda')
        const vendasComNomes = await Promise.all(
          response.data.map(async (venda: VendaProps) => {
            const clienteResponse = await api.get(`/cliente/${venda.idcliente}`)
            const produtoResponse = await api.get(`/produto/${venda.produtos}`)
            return {
              ...venda,
              nomeCliente: clienteResponse.data.name,
              nomeProdutos: produtoResponse.data.name,
            }
          }),
        )
        setVendas(vendasComNomes)
      } catch (error) {
        console.error('Erro ao buscar vendas:', error)
      }
    }

    fetchVendas()
  }, [])

  const handleEdit = (id: number) => {
    navigate(`/editvenda/${id}`)
  }

  const handleDelete = async (id: number) => {
    const confirmarExclusao = window.confirm(
      'Tem certeza que deseja excluir esta venda?',
    )
    if (confirmarExclusao) {
      try {
        const vendaDelete = vendas.filter((venda) => venda.id === id)

        const produtoretorn = await api.get(
          `produto/${vendaDelete[0].produtos}`,
        )

        await api.patch(`produto/${vendaDelete[0].produtos}`, {
          quantidade: vendaDelete[0].quantidade + produtoretorn.data.quantidade,
        })

        await api.delete(`/venda/${id}`)
        const novasVendas = vendas.filter((venda) => venda.id !== id)
        setVendas(novasVendas)
        alert('Venda excluída com sucesso.')
      } catch (error) {
        console.error('Erro ao excluir venda:', error)
        toast.error('Erro ao excluir a venda.')
      }
    }
  }

  return (
    <ProductContainer>
      <h1>Vendas</h1>
      <ProductTable>
        <ProductTableHead>
          <tr>
            <TableHeaderTitle>ID</TableHeaderTitle>
            <TableHeaderTitle>ID Cliente</TableHeaderTitle>
            <TableHeaderTitle>Produtos</TableHeaderTitle>
            <TableHeaderTitle>Quantidade</TableHeaderTitle>
            <TableHeaderTitle>Total</TableHeaderTitle>
            <TableHeaderTitle>Ações</TableHeaderTitle>
          </tr>
        </ProductTableHead>
        <ProductTableBody>
          {vendas.map((venda) => (
            <ProductTableRow key={venda.id}>
              <ProductTableCell>{venda.id}</ProductTableCell>
              <ProductTableCell>{venda.nomeCliente}</ProductTableCell>
              <ProductTableCell>{venda.nomeProdutos}</ProductTableCell>
              <ProductTableCell>{venda.quantidade}</ProductTableCell>

              <ProductTableCell>
                R$ {Number(venda.total).toFixed(2)}
              </ProductTableCell>
              <ProductTableCell>
                <Button onClick={() => handleEdit(venda.id)}>Editar</Button>
                <Button onClick={() => handleDelete(venda.id)}>Excluir</Button>
              </ProductTableCell>
            </ProductTableRow>
          ))}
        </ProductTableBody>
      </ProductTable>
    </ProductContainer>
  )
}
