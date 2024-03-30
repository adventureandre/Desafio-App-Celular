import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '../../../components/Button'
import { CadastroContainer, FormContainer } from './styles'
import { api } from '../../../lib/axios'

const dataForm = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),

  descricao: z.string().optional(),

  quantidade: z
    .string()
    .regex(/^[1-9]\d*$/, {
      message:
        'A quantidade deve ser um número inteiro positivo diferente de zero.',
    })

  valor: z
    .string()
    .regex(/^\d*\.?\d*$/, {
      message: 'O valor unitário deve ser um número válido.',
    })
})

type ShemaDataForm = z.infer<typeof dataForm>

export function FormProduto() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<ShemaDataForm>({ resolver: zodResolver(dataForm) })

  const location = useLocation()
  const pathname = location.pathname
  const id = pathname.includes('editproduto') ? pathname.split('/').pop() : null

  const handleCadProduto = async (data: ShemaDataForm) => {
    try {
      console.log(data)
      const response = await api.post('/produto', {
        data,
      })
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
    }

    reset()
  }

  return (
    <CadastroContainer>
      <h2>Cadastro de Produto</h2>
      <FormContainer onSubmit={handleSubmit(handleCadProduto)}>
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
