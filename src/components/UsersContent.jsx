import { memo, useContext } from 'react'
import AuthContext from '../context/AuthContext'

const UsersContent = memo(({ usersData }) => {
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
						`}
          >
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
            <div>
              {userData.email} <span className='text-green-200'>/</span> {userData.username}
            </div>
          </div>
        ))}
    </div>
  )
})

export default UsersContent
