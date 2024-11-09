import Tabs from '@/components/UI/Tabs'
import { useState } from 'react'

const Users = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(null)
  const tabs = ['user profiles', 'posts', 'comments']

  return (
    <div className='pt-10'>
      <h2>User data</h2>
      <div className='pt-8'>
        <Tabs
          tabsContent={tabs}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
        <div></div>
      </div>
    </div>
  )
}

export default Users
