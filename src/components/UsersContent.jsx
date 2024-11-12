import { memo } from 'react'

const UsersContent = memo(({ usersData }) => {
  return (
    <div className='pt-2'>
      {usersData &&
        usersData.map((user) => (
          <div
            key={user.id}
            className='p-4 rounded-md border-solid border-[1px] border-[#535bf2] mb-3'
          >
            <div className='flex gap-2 text-green-200'>
              <h2>{user.id}.</h2>
              <span>{user.name}</span>
            </div>
            <div>
              {user.email} <span className='text-green-200'>/</span> {user.username}
            </div>
          </div>
        ))}
    </div>
  )
})

export default UsersContent
