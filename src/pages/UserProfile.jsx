import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

const UserProfile = () => {
  const { user } = useContext(AuthContext)

  return <h1 className='pt-20'>Hello, {user.name}</h1>
}

export default UserProfile
