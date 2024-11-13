import AuthContext from '@/context/AuthContext'
import {
  adminRoutes,
  galleryManagerRoutes,
  todosManagerRoutes,
  unauthRouts,
  userManagerRoutes,
} from '@/router/index.js'
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  const { user, isAuth } = useContext(AuthContext)
  const userRouteByRole = {
    admin: adminRoutes,
    'user-manager': userManagerRoutes,
    'gallery-manager': galleryManagerRoutes,
    'todos-manager': todosManagerRoutes,
  }

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
