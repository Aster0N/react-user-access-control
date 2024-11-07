import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <section>
        <Link to='/posts'>posts</Link>
        <Link to='/photos'>photos</Link>
        <Link to='/todos'>todos</Link>
      </section>
    </div>
  )
}

export default Homepage
