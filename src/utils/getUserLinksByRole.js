import { availableSectionLinks } from '@/consts/availableSectionLinks'
import { userRouteByRole } from '@/consts/userRouteByRole'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

export function getUserLinksByRole(getOnlySectionLinks = true) {
  const { user } = useContext(AuthContext)

  let userLinks = []
  user.role.forEach((role) => userLinks.push(...userRouteByRole[role]))

  const allUniqueUserLinks = Array.from(
    new Map(userLinks.map((item) => [item.path, item])).values()
  )

  const accessibleSectionLinks = availableSectionLinks.filter((link) =>
    allUniqueUserLinks.some((route) => route.path === link.path)
  )

  return getOnlySectionLinks ? accessibleSectionLinks : allUniqueUserLinks
}
