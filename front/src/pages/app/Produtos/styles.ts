import styled from 'styled-components'

export const ProductContainer = styled.div`
  margin: 20px;
`

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`

export const ProductTableHead = styled.thead`
  background-color: ${(props) => props.theme['gray-200']};
`

export const TableHeaderTitle = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;
`

export const ProductTableBody = styled.tbody``

export const ProductTableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.theme['gray-200']};
  }
`

export const ProductTableCell = styled.td`
  padding: 10px;
`

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  border: none;
  width: 90px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme['blue-600']};
  }

  &:first-child {
    margin-right: 10px;
  }

  @media screen and (max-width: 940px) {
    font-size: 14px;
    padding: 6px 12px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 576px) {
    font-size: 12px;
    padding: 4px 8px;
    margin-bottom: 5px;
  }
`
