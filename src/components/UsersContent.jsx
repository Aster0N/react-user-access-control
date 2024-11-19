import UserActions from '@/components/UserActions'
import { userRoles } from '@/consts/userRoles'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

const UsersContent = () => {
  const { user, users } = useContext(AuthContext)

  return (
    <div className='pt-2'>
      {users &&
        Object.entries(users)?.map(([userId, userData]) => (
          <div
            key={userId}
            className={`
							p-4 rounded-md border-solid border-[1px] border-[#535bf2] mb-3
							${user.id == userId ? 'bg-slate-800' : 'bg-transparent'}
							flex justify-between place-items-center
						`}
          >
            <div className='user-content'>
              <div className='flex gap-2 text-green-200'>
                <h2>{userId}.</h2>
                <span>{userData.name}</span>
                {userData.role.map((role) => (
                  <span
                    key={role}
                    className='text-orange-500'
                  >
                    {role}&nbsp;
                  </span>
                ))}
              </div>
              <p>{userData.email}</p>
            </div>
            {user.role == userRoles.ROLE_ADMIN && userData.role != userRoles.ROLE_ADMIN && (
              <UserActions userData={userData} />
            )}
          </div>
        ))}
    </div>
  )
}

export default UsersContent
