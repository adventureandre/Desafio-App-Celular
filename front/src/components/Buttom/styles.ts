import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme['gray-600']};
    border-color: ${(props) => props.theme['gray-400']};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }

  &:disabled {
    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-400']};
    cursor: not-allowed;
  }
`