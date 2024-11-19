import { userRoles } from '@/consts/userRoles'
import AuthContext from '@/context/AuthContext'
import { useContext, useEffect, useState } from 'react'

const UserActions = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentUserRoles, setCurrentUserRoles] = useState(null)
  const { setUsers } = useContext(AuthContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const updateUserRoles = () => {
    const newRoles = Object.entries(currentUserRoles)
      .filter(([_, value]) => value)
      .map(([key]) => key)

    setUsers((prevUsers) => ({
      ...prevUsers,
      [userData.id]: { ...prevUsers[userData.id], role: newRoles },
    }))
  }

  const handleUserRoleChange = (changedRole) => {
    setCurrentUserRoles((prevRoles) => ({
      ...prevRoles,
      [changedRole]: !prevRoles[changedRole],
    }))
  }

  useEffect(() => {
    if (!currentUserRoles) return
    updateUserRoles()
  }, [currentUserRoles])

  useEffect(() => {
    if (currentUserRoles) return
    let currentRoles = {}
    Object.values(userRoles).map((availableRole) => {
      currentRoles[availableRole] = userData.role.includes(availableRole)
    })
    setCurrentUserRoles(currentRoles)
  }, [])

  return (
    <div className='relative inline-block text-left'>
      <button
        onClick={toggleMenu}
        className='flex items-center justify-center w-15 h-15 p-4'
      >
        <svg
          className={`
							w-3 h-3 text-gray-800 dark:text-white
							transition-transform duration-200 
							${isOpen ? 'rotate-0' : '-rotate-90'}`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 8'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1'
          />
        </svg>
      </button>
      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10'>
          <div className='py-2 px-4 space-y-2'>
            {Object.entries(currentUserRoles)?.map(([role, isChecked]) => (
              <label
                key={role}
                className='flex items-center space-x-2 text-sm text-gray-300 cursor-pointer'
              >
                <input
                  type='checkbox'
                  checked={isChecked}
                  className='form-checkbox h-4 w-4'
                  onChange={() => handleUserRoleChange(role)}
                />
                <span>{role}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserActions
