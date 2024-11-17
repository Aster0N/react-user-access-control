import UserActions from '@/components/UserActions'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

const UsersContent = ({ usersData }) => {
  const { user } = useContext(AuthContext)

  return (
    <div className='pt-2'>
      {usersData &&
        usersData.map((userData) => (
          <div
            key={userData.id}
            className={`
							p-4 rounded-md border-solid border-[1px] border-[#535bf2] mb-3
							${user.id == userData.id ? 'bg-slate-800' : 'bg-transparent'}
							flex justify-between place-items-center
						`}
          >
            <div className='user-content'>
              <div className='flex gap-2 text-green-200'>
                <h2>{userData.id}.</h2>
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
            {user.role == 'admin' && userData.role != 'admin' && (
              <UserActions userData={userData} />
            )}
          </div>
        ))}
    </div>
  )
}

export default UsersContent
