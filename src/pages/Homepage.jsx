import LinkCard from '@/components/UI/LinkCard'
import { availableSectionLinks } from '@/consts/availableSectionLinks'
import { getUserLinksByRole } from '@/utils/getUserLinksByRole'

const Homepage = () => {
  const userAccessibleLinks = getUserLinksByRole(availableSectionLinks)

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
