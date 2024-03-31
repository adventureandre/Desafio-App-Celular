import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../../../components/Button'
import { CadastroContainer, FormContainer } from './styels'
import { api } from '../../../lib/axios'
import { useNavigate } from 'react-router-dom'

export const CadastroCliente = () => {
  const [name, setName] = useState('')

  const navigate = useNavigate()

  function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }

  async function handleSendCriente(e: FormEvent) {
    e.preventDefault()
    await api.post('/cliente', { name })
    navigate('/vendas')
  }

  return (
    <CadastroContainer>
      <h2>Cadastro de Cliente</h2>
      <FormContainer>
        <div>
          <label htmlFor="nomecliente">Name:</label>
          <input
            type="text"
            id="namecliente"
            value={name}
            onChange={(e) => {
              handleChangeName(e)
            }}
          />
        </div>
        <div onClick={(e) => handleSendCriente(e)}>
          <Button>Cadastrar Cliente</Button>
        </div>
      </FormContainer>
    </CadastroContainer>
  )
}
