import { USERS_DATA_URL } from '@/api/api'
import UsersContent from '@/components/UsersContent'
import AuthContext from '@/context/AuthContext'
import { useContext, useEffect, useState } from 'react'

const UserProfile = () => {
  const [usersData, setUsersData] = useState(null)
  const { user } = useContext(AuthContext)

  const loadUsers = async () => {
    try {
      let response = await fetch(USERS_DATA_URL).then((response) => response.json())
      setUsersData(response)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <>
      {user.role == 'admin' ? (
        <div>
          <h1 className='pt-20 mb-10'>Users to manage</h1>
          <UsersContent usersData={usersData} />
        </div>
      ) : (
        <h1 className='pt-20'>Hello, {user.name}</h1>
      )}
    </>
  )
}

export default UserProfile
