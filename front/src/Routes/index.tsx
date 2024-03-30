import { Routes, Route } from 'react-router-dom'
import { AppLayout } from '../pages/_layouts/app'
import { SignIn } from '../pages/auth'
import { Dashboard } from '../pages/app/Dashboard'
import { FormProduto } from '../pages/app/FormProduto'
import { Vendas } from '../pages/app/Venda'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cadproduto" element={<FormProduto />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/editproduto/:id" element={<FormProduto />} />
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}
