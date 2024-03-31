import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { CadastroContainer, FormContainer } from './style'
import { ChangeEvent, useEffect, useState } from 'react'
import { api } from '../../../lib/axios'
import { ProdutoProps } from '../Produtos'
import { toast } from 'sonner'

interface Cliente {
  id: number
  name: string
}

interface VendaProps {
  id: number
  idcliente: number
  produtos: string
  quantidade: number
  total: number
}

export const VendaEdit = () => {
  const [venda, setVenda] = useState<VendaProps | null>(null)
  const [cliente, setCliente] = useState<Cliente | null>(null)
  const [produto, setProduto] = useState<ProdutoProps | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [quantAntiga, setQuantAntiga] = useState<number>()

  const navigate = useNavigate()

  const location = useLocation()
  const pathname = location.pathname
  const id = pathname.includes('editvenda') ? pathname.split('/').pop() : null

  useEffect(() => {
    if (id && !venda) {
      const fetchData = async () => {
        const responseVenda = await api.get<VendaProps>(`/venda/${id}`)
        const responseCliente = await api.get<Cliente>(
          `/cliente/${responseVenda.data.idcliente}`,
        )
        const responseProduto = await api.get<ProdutoProps>(
          `/produto/${responseVenda.data.produtos}`,
        )

        setProduto(responseProduto.data)
        setCliente(responseCliente.data)
        setVenda(responseVenda.data)
        setQuantAntiga(responseVenda.data.quantidade)
      }
      fetchData()
    }
  }, [id, venda])

  // logica de muda a quantidade e o total
  const handleQuantidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const quantidade = parseInt(e.target.value)
    const total = quantidade * produto!.valor
    setVenda((prevVenda) => ({
      ...prevVenda!,
      quantidade,
      total,
    }))
  }

  const handleSendVendaEdit = async (e: ChangeEvent) => {
    e.preventDefault()
    try {
      if (venda!.quantidade <= 0) {
        toast.error('Oppss! digite uma quantidade para a venda')
        return
      }

      // esse é só para baixas, não validar
      switch (true) {
        case quantAntiga! === venda!.quantidade:
          navigate('/vendaslist')
          break

        case quantAntiga! > venda!.quantidade:
          await api.patch(`produto/${produto!.id}`, {
            quantidade: quantAntiga! - venda!.quantidade + produto!.quantidade,
          })
          await api.put(`/venda/${venda!.id}`, venda!)
          navigate('/vendaslist')
          break

        case quantAntiga! < venda!.quantidade:
          console.log('remover do estoque')
          if (produto!.quantidade <= 0) {
            toast.error('Oppss! este produto ja acabou!')
            return
          }

          await api.patch(`produto/${produto!.id}`, {
            quantidade: produto!.quantidade - venda!.quantidade + quantAntiga!,
          })
          await api.put(`/venda/${venda!.id}`, venda!)
          navigate('/vendaslist')

          break

        default:
          console.log('situação não reconhecida')
      }

      console.log(venda?.quantidade)
      console.log(produto?.quantidade)
      console.log(quantAntiga)
    } catch (error) {
      console.error('Erro ao finalizar venda:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CadastroContainer>
      <h2>Editar Venda {id}</h2>
      <FormContainer>
        <div>
          <label htmlFor="nomecliente">Cliente:</label>
          <input
            type="text"
            id="namecliente"
            list="clientesugestao"
            value={cliente?.name || ''}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="produtos">Produto:</label>
          <input
            type="text"
            readOnly
            id="produto"
            value={produto?.name || ''}
          />
        </div>

        <div>
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            value={venda?.quantidade || ''}
            onChange={(e) => handleQuantidadeChange(e)}
          />
        </div>

        <div onClick={handleSendVendaEdit}>
          <Button disabled={loading}>Finalizar Venda</Button>
        </div>
      </FormContainer>
    </CadastroContainer>
  )
}
