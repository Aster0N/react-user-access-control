import LinkCard from '@/components/UI/LinkCard'
import { GALLERY_PATH, TODOS_PATH, USERS_PATH } from '@/router/routes.js'

const Homepage = () => {
  const links = [
    { path: USERS_PATH, content: 'Users' },
    { path: GALLERY_PATH, content: 'Gallery' },
    { path: TODOS_PATH, content: 'Todos' },
  ]

  return (
    <div>
      <section className='flex place-content-center place-items-center gap-20 pt-20'>
        {links.map((link) => (
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
