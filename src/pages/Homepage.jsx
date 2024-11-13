import LinkCard from '@/components/UI/LinkCard'
import { userRouteByRole } from '@/consts/userRouteByRole'
import AuthContext from '@/context/AuthContext'
import { GALLERY_PATH, TODOS_PATH, USERS_PATH } from '@/router/routes.js'
import { useContext } from 'react'

const Homepage = () => {
  const { user } = useContext(AuthContext)
  const links = [
    { path: USERS_PATH, content: 'Users' },
    { path: GALLERY_PATH, content: 'Gallery' },
    { path: TODOS_PATH, content: 'Todos' },
  ]
  const userLinks = userRouteByRole[user.role]
  const userAccessibleLinks = links.filter((link) =>
    userLinks.some((route) => route.path === link.path),
  )

  return (
    <div>
      <section className='flex place-content-center place-items-center gap-20 pt-20'>
        {userAccessibleLinks.map((link) => (
          <LinkCard
            key={link.path}
            path={link.path}
            content={link.content}
          />
        ))}
      </section>
    </div>
  )
}

export default Homepage
