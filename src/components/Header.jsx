import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-[100px] flex place-content-center place-items-center bg-gray-900'>
      <div className='w-[1024px] mx-auto flex place-content-between'>
        <Link to='/'>Home</Link>
        <div className='flex gap-5'>
          <Link to='/users'>Users</Link>
          <span>/</span>
          <Link to='/gallery'>Gallery</Link>
          <span>/</span>
          <Link to='/todos'>Todos</Link>
        </div>
        <Link to='/profile'>Profile</Link>
      </div>
    </div>
  )
}

export default Header
