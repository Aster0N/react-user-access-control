import UsersContent from '@/components/UsersContent'
import { userRoles } from '@/consts/userRoles'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

const UserProfile = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <div>
        <h1 className='pt-20'>Hello, {user.name}</h1>
        {user.role != userRoles.ROLE_ADMIN && (
          <p className='underline'>Click on a user to switch to another account</p>
        )}
        <UsersContent />
      </div>
    </>
  )
}

export default UserProfile
