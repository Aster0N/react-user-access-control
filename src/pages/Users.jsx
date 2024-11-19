import { COMMENTS_URL, POSTS_URL } from '@/api/api.js'
import CommentsContent from '@/components/CommentsContent'
import PostsContent from '@/components/PostsContent'
import TabContentWarning from '@/components/UI/TabContentWarning'
import Tabs from '@/components/UI/Tabs'
import UsersContent from '@/components/UsersContent'
import { useEffect, useState } from 'react'

const Users = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(null)
  const [postsData, setPostsData] = useState(null)
  const [commentsData, setCommentsData] = useState(null)

  const tabData = {
    users: {
      element: () => <UsersContent/>,
    },
    posts: {
      getURL: POSTS_URL,
      setData: setPostsData,
      data: postsData,
      element: () => <PostsContent postsData={postsData} />,
    },
    comments: {
      getURL: COMMENTS_URL,
      setData: setCommentsData,
      data: commentsData,
      element: () => <CommentsContent commentsData={commentsData} />,
    },
  }
  const tabs = Object.keys(tabData)

  const handleTabChange = async (tabData) => {
    try {
      let response = await fetch(tabData.getURL).then((response) => response.json())
      tabData.setData(response)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (activeTabIndex !== null) {
      const currentTabData = tabData[tabs[activeTabIndex]]
      if (currentTabData.data || tabs[activeTabIndex] == 'users') return
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
        <div>
          {activeTabIndex !== null ? (
            tabData[tabs[activeTabIndex]]?.element()
          ) : (
            <TabContentWarning />
          )}
        </div>
      </div>
    </div>
  )
}

export default Users
