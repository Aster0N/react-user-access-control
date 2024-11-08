import LinkCard from '../components/UI/LinkCard'

const Homepage = () => {
  const links = [
    { path: '/users', content: 'Users' },
    { path: '/gallery', content: 'Gallery' },
    { path: '/todos', content: 'Todos' },
  ]

  return (
    <div>
      <section className='flex place-content-center place-items-center gap-20 pt-44'>
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
