import { createContext, useState } from 'react'
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true)
  const [roles, setRoles] = useState(['admin', 'user-manager', 'gallery-manager', 'todos-manager'])
  const [user, setUser] = useState({
    "id": 1,
    "name": "Boss",
    "role": ["admin"],
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
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
