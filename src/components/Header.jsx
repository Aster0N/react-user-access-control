import { availableSectionLinks } from '@/consts/availableSectionLinks'
import { MAIN_PATH, PROFILE_PATH } from '@/router/routes'
import { getUserLinksByRole } from '@/utils/getUserLinksByRole'

import { Link } from 'react-router-dom'

const Header = () => {
  const userAccessibleLinks = getUserLinksByRole(availableSectionLinks)

  return (
    <div className='w-full h-[100px] flex place-content-center place-items-center bg-gray-900'>
      <div className='w-[70vw] mx-auto flex place-content-between'>
        <Link to={MAIN_PATH}>Home</Link>
        <div className='flex gap-5'>
          {userAccessibleLinks.map((link) => (
            <span key={link.path}>
              <Link to={link.path}>{link.placeholder}</Link>
            </span>
          ))}
        </div>
        <Link to={PROFILE_PATH}>Profile</Link>
      </div>
    </div>
  )
}

export default Header
