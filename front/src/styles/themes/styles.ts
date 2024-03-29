import styled from 'styled-components'

export const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-500']};
  min-height: 100vh;
`
export const StyledContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
