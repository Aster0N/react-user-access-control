import { userRouteByRole } from '@/consts/userRouteByRole'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

export function getUserLinksByRole(availableLinks) {
  const { user } = useContext(AuthContext)

  const userLinks = userRouteByRole[user.role]

  const userAccessibleLinks = availableLinks.filter((link) =>
    userLinks.some((route) => route.path === link.path),
  )

  return userAccessibleLinks
}
