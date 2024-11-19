import AuthContext from '@/context/AuthContext'
import { unauthRouts } from '@/router/index.js'
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { getUserLinksByRole } from './utils/getUserLinksByRole'

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext)
  const allUserRoutes = getUserLinksByRole(false)

  return isAuth ? (
    <Routes>
      {allUserRoutes?.map((route) => (
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
