import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/posts'>posts</Link>
      <Link to='/photos'>photos</Link>
      <Link to='/todos'>todos</Link>
    </div>
  )
}

export default Header
