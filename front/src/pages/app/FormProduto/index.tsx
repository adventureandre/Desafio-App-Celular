import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '../../../components/Button'
import { CadastroContainer, FormContainer } from './styles'
import { api } from '../../../lib/axios'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const dataForm = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),

  descricao: z.string().optional(),

  quantidade: z.string().regex(/^[1-9]\d*$/, {
    message:
      'A quantidade deve ser um número inteiro positivo diferente de zero.',
  }),

  valor: z.string().regex(/^\d*\.?\d*$/, {
    message: 'O valor unitário deve ser um número válido.',
  }),
})

type ShemaDataForm = z.infer<typeof dataForm>

export function FormProduto() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue,
  } = useForm<ShemaDataForm>({ resolver: zodResolver(dataForm) })

  const location = useLocation()
  const pathname = location.pathname
  const id = pathname.includes('editproduto') ? pathname.split('/').pop() : null

  const handleActionForm = async (data: ShemaDataForm) => {
    try {
      if (!id) {
        console.log(data)
        await api.post('/produto', data)
        toast.success('Produtos cadastrado com sucesso')
      } else {
        await api.put(`/produto/${id}`, data)
        toast.success('Produtos Editado com sucesso')
      }
    } catch (error) {
      console.error('Erro:', error)
      toast.error('Oppss!  Erro ao executar o comando!')
    }

    reset()
  }

  useEffect(() => {
    const produtoById = async () => {
      try {
        const response = await api.get(`/produto/${id}`)
        const produtoData = response.data

        setValue('name', produtoData.name)
        setValue('descricao', produtoData.descricao)
        setValue('quantidade', produtoData.quantidade)
        setValue('valor', produtoData.valor)
      } catch (error) {
        console.error('Erro:', error)
        toast.error('Erro ao obter dados do produto.')
      }
    }
    if (id) {
      produtoById()
    }
  }, [id, setValue])

  return (
    <CadastroContainer>
      <Helmet title="Cadastrar / Editar Venda" />
      <h2>Cadastro de Produto</h2>
      <FormContainer onSubmit={handleSubmit(handleActionForm)}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="name" {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="descricao">Descrição:</label>
          <input type="text" id="descricao" {...register('descricao')} />
          <p>{errors.descricao?.message}</p>
        </div>

        <div>
          <label htmlFor="quantidadeDisponivel">Quantidade Disponível:</label>
          <input
            type="number"
            id="quantidadeDisponivel"
            {...register('quantidade')}
          />
          <p>{errors.quantidade?.message}</p>
        </div>

        <div>
          <label htmlFor="valorUnitario">Valor Unitário:</label>
          <input {...register('valor')} />
          <p>{errors.valor?.message}</p>
        </div>

        <div>
          <Button disabled={isSubmitting}>{id ? 'Editar' : 'Cadastrar'}</Button>
        </div>
      </FormContainer>
    </CadastroContainer>
  )
}
