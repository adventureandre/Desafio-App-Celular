import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface UserProps {
  id: string
  name: string
  email: string
  password: string
  token: string
}

interface AuthProviderProps {
  children: ReactNode
}

interface signInProps {
  email: string
  password: string
}

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadingStoreData = async () => {
    const storegeUser = localStorage.getItem('@AuthAppCelular:user')
    const storegeToken = localStorage.getItem('@AuthAppCelular:token')

    if (storegeUser && storegeToken) {
      const user: UserProps = JSON.parse(storegeUser)
      setUser(user)
    }
  }

  const signIn = async ({ email, password }: signInProps) => {
    try {
      const response = await api.post('/sign-in', {
        email,
        password,
      })

      setUser(response.data)
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`

      // So Para Exenplos vou enviar tudo kkkk tempo ta curto
      localStorage.setItem('@AuthAppCelular:user',JSON.stringify(response.data),)
      localStorage.setItem('@AuthAppCelular:token', response.data.token)
    } catch (e) {
      throw new Error('Credenciais inválidas.')
    }
  }

  const signOut = () => {
    localStorage.removeItem('@AuthAppCelular:user')
    localStorage.removeItem('@AuthAppCelular:token')
    setUser(null)
  }

  const value = {
    user,
    signed: user !== null && user !== undefined,
    signIn,
    signOut,
  }

  useEffect(() => {
    loadingStoreData()
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
