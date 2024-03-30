import { Helmet } from 'react-helmet-async'
import Produtos from '../Produtos'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <Produtos />
    </>
  )
}
