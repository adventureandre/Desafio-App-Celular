import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const StyledFormCadastro = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
  min-width: 500px;
  padding: 5px 50px 5px 50px;
`

export const StyledLabel = styled.label`
  display: flex;
  gap: 5px;
  font-weight: 700;
  width: 100%;
`

export const StyledInputCadastro = styled.input`
  display: flex;
  gap: 5px;
  font-weight: 700;
  width: 100%;
  padding: 15px 10px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-500']};
  margin-bottom: 15px;
`
