import styled from 'styled-components'

export const CadastroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;

  width: 100%;

  & > h2 {
    margin-bottom: 10px;

    width: 100%;
    font-weight: bold;
    font-size: 20px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  padding: 5px 50px 5px 50px;
  width: 80%;

  & > div {
    margin-bottom: 10px;
  }

  & label {
    display: flex;
    width: 100%;

    font-weight: bold;
    margin: 0 5px 10px 5px;
  }

  & input {
    display: flex;
    font-weight: 700;
    width: 100%;
    padding: 15px 10px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-500']};
    margin-bottom: 15px;
  }
`
