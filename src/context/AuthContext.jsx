import { createContext, useState } from 'react'
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true)
  const [roles, setRoles] = useState(['admin', 'user-manager', 'gallery-manager', 'todos-manager'])
  const [user, setUser] = useState({
    "name": "multi",
    "role": ["user-manager", "gallery-manager"]
  })

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        roles,
        setRoles,
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
