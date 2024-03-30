import { useState } from 'react'
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

interface ProdutoProps {
  id: number
  nome: string
  descricao?: string
  quantidadeDisponivel: number
  valorUnitario: number
  tipo: string
}

const Produtos = () => {
  // state produtos
  const [produtos, setProdutos] = useState<ProdutoProps[]>([
    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Descrição do Produto 1',
      quantidadeDisponivel: 10,
      valorUnitario: 15.99,
      tipo: 'Tipo A',
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Descrição do Produto 2',
      quantidadeDisponivel: 5,
      valorUnitario: 25.49,
      tipo: 'Tipo B',
    },
    {
      id: 3,
      nome: 'Produto 3',
      quantidadeDisponivel: 20,
      valorUnitario: 10.99,
      tipo: 'Tipo C',
    },
  ])

  const navigate = useNavigate()

  // editar um produto
  const handleEdit = (id: number) => {
    navigate(`/editproduto/${id}`)
  }

  const handleDelete = (id: number) => {
    const vendaVinculada = false // Substitua com a lógica real para verificar a existência de vendas

    if (!vendaVinculada) {
      const confirmarExclusao = window.confirm(
        'Tem certeza que deseja excluir este produto?',
      )
      if (confirmarExclusao) {
        const novosProdutos = produtos.filter((produto) => produto.id !== id)
        setProdutos(novosProdutos)
      }
    } else {
      alert(
        'Não é possível excluir o produto pois existem vendas vinculadas a ele.',
      )
    }
  }

  return (
    <ProductContainer>
      <h1>Produtos</h1>
      <ProductTable>
        <ProductTableHead>
          <tr>
            <TableHeaderTitle>ID</TableHeaderTitle>
            <TableHeaderTitle>Nome</TableHeaderTitle>
            <TableHeaderTitle>Descrição</TableHeaderTitle>
            <TableHeaderTitle>Quantidade disponível</TableHeaderTitle>
            <TableHeaderTitle>Valor unitário</TableHeaderTitle>
            <TableHeaderTitle>Ações</TableHeaderTitle>
          </tr>
        </ProductTableHead>
        <ProductTableBody>
          {produtos.map((produto) => (
            <ProductTableRow key={produto.id}>
              <ProductTableCell>{produto.id}</ProductTableCell>
              <ProductTableCell>{produto.nome}</ProductTableCell>
              <ProductTableCell>{produto.descricao}</ProductTableCell>
              <ProductTableCell>
                {produto.quantidadeDisponivel}
              </ProductTableCell>
              <ProductTableCell>{produto.valorUnitario}</ProductTableCell>
              <ProductTableCell>
                <Button onClick={() => handleEdit(produto.id)}>Editar</Button>
                <Button onClick={() => handleDelete(produto.id)}>
                  Excluir
                </Button>
              </ProductTableCell>
            </ProductTableRow>
          ))}
        </ProductTableBody>
      </ProductTable>
    </ProductContainer>
  )
}

export default Produtos
