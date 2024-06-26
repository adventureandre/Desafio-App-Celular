import { Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/auth'
import { AppLayout } from '../pages/_layouts/app'
import { Dashboard } from '../pages/app/Dashboard'
import { FormProduto } from '../pages/app/FormProduto'
import { Vendas } from '../pages/app/Venda'
import { VendaList } from '../pages/app/VendaList'
import { VendaEdit } from '../pages/app/VendaEdit'
import { CadastroCliente } from '../pages/app/CadastroCliente'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cadproduto" element={<FormProduto />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/vendaslist" element={<VendaList />} />
        <Route path="/editvenda/:id" element={<VendaEdit />} />
        <Route path="/editproduto/:id" element={<FormProduto />} />
        <Route path="/cadcliente/" element={<CadastroCliente />} />
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}
