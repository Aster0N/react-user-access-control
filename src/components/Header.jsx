import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-4 w-full h-[100px]'>
      <div className='w-[1024px] mx-auto flex place-content-between'>
        <Link to='/'>Home</Link>
        <div className='flex gap-5'>
          <Link to='/posts'>posts</Link>
          <Link to='/photos'>photos</Link>
          <Link to='/todos'>todos</Link>
        </div>
        <Link to='/profile'>Profile</Link>
      </div>
    </div>
  )
}

export default Header
