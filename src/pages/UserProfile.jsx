import UsersContent from '@/components/UsersContent'
import { userRoles } from '@/consts/userRoles'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

const UserProfile = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      {user.role == userRoles.ROLE_ADMIN ? (
        <div>
          <h1 className='pt-20 mb-10'>Users to manage</h1>
          <UsersContent />
        </div>
      ) : (
        <h1 className='pt-20'>Hello, {user.name}</h1>
      )}
    </>
  )
}

export default UserProfile
