import { GALLERY_PATH, MAIN_PATH, PROFILE_PATH, TODOS_PATH, USERS_PATH } from '@/router/routes.js'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-[100px] flex place-content-center place-items-center bg-gray-900'>
      <div className='w-[70vw] mx-auto flex place-content-between'>
        <Link to={MAIN_PATH}>Home</Link>
        <div className='flex gap-5'>
          <Link to={USERS_PATH}>Users</Link>
          <span>/</span>
          <Link to={GALLERY_PATH}>Gallery</Link>
          <span>/</span>
          <Link to={TODOS_PATH}>Todos</Link>
        </div>
        <Link to={PROFILE_PATH}>Profile</Link>
      </div>
    </div>
  )
}

export default Header
