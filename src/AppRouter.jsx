import { userRouteByRole } from '@/consts/userRouteByRole'
import AuthContext from '@/context/AuthContext'
import { unauthRouts } from '@/router/index.js'
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  const { user, isAuth } = useContext(AuthContext)

  return isAuth ? (
    <Routes>
      {userRouteByRole[user.role].map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
      <Route
        path='*'
        element={<Navigate to='/' />}
      />
    </Routes>
  ) : (
    <Routes>
      {unauthRouts.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
      <Route
        path='*'
        element={<Navigate to='/' />}
      />
    </Routes>
  )
}

export default AppRouter
