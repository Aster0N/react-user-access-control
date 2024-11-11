import { COMMENTS_URL, POSTS_URL, USERS_URL } from '@/api/api.js'
import CommentsContent from '@/components/CommentsContent'
import PostsContent from '@/components/PostsContent'
import Tabs from '@/components/UI/Tabs'
import UsersContent from '@/components/UsersContent'
import { useEffect, useState } from 'react'

const Users = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(null)
  const [usersData, setUsersData] = useState(null)
  const [postsData, setPostsData] = useState(null)
  const [commentsData, setCommentsData] = useState(null)

  const tabData = {
    users: {
      getURL: USERS_URL,
      setData: setUsersData,
      element: () => <UsersContent usersData={usersData} />,
    },
    posts: {
      getURL: POSTS_URL,
      setData: setPostsData,
      element: () => <PostsContent postsData={postsData} />,
    },
    comments: {
      getURL: COMMENTS_URL,
      setData: setCommentsData,
      element: () => <CommentsContent commentsData={commentsData} />,
    },
  }
  const tabs = Object.keys(tabData)

  const handleTabChange = async (tabData) => {
    try {
      let response = await fetch(tabData.getURL).then((response) => response.json())
      let currData = response.length > 10 ? response.splice(0, 9) : response
      tabData.setData(currData)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (activeTabIndex !== null) {
      const currentTabData = tabData[tabs[activeTabIndex]]
      handleTabChange(currentTabData)
    }
  }, [activeTabIndex])

  return (
    <div className='pt-10'>
      <h2>User data</h2>
      <div className='pt-8'>
        <Tabs
          tabsContent={tabs}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
        <div>{tabData[tabs[activeTabIndex]]?.element()}</div>
      </div>
    </div>
  )
}

export default Users
