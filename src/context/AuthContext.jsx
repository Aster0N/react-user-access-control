import { USERS_DATA_URL } from '@/api/api'
import { userRoles } from '@/consts/userRoles'
import { createContext, useEffect, useState } from 'react'
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true)
  const [roles, setRoles] = useState(null)
  const [users, setUsers] = useState(null)
  const [user, setUser] = useState(null)

  const loadUsers = async () => {
    try {
      let response = await fetch(USERS_DATA_URL).then((response) => response.json())
      const usersById = response.reduce((acc, user) => {
        acc[user.id] = user
        return acc
      }, {})
      setUsers(usersById)

      if (!user) {
        setUser(usersById[1])
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setRoles(Object.values(userRoles))
    if (users) return
    loadUsers()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
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
