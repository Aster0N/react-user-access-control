import LinkCard from '@/components/UI/LinkCard'
import { getUserLinksByRole } from '@/utils/getUserLinksByRole'

const Homepage = () => {
  const userAccessibleLinks = getUserLinksByRole()

  return (
    <div>
      <section className='flex place-content-center place-items-center gap-20 pt-20'>
        {userAccessibleLinks.map((link) => (
          <LinkCard
            key={link.path}
            path={link.path}
            content={link.placeholder}
          />
        ))}
      </section>
    </div>
  )
}

export default Homepage
