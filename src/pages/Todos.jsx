import { COMPLETED_TODOS_URL, TODOS_URL, UNCOMPLETED_TODOS_URL } from '@/api/api.js'
import TodosContent from '@/components/TodosContent'
import TabContentWarning from '@/components/UI/TabContentWarning'
import Tabs from '@/components/UI/Tabs'
import { useEffect, useState } from 'react'

const Todos = () => {
  const [todosData, setTodosData] = useState(null)
  const [completedTodosData, setCompletedTodosData] = useState(null)
  const [uncompletedTodosData, setUncompletedTodosData] = useState(null)
  const [activeTabIndex, setActiveTabIndex] = useState(null)

  const tabData = {
    todos: {
      getURL: TODOS_URL,
      setData: setTodosData,
      data: todosData,
      element: () => <TodosContent todosData={todosData} />,
    },
    completed: {
      getURL: COMPLETED_TODOS_URL,
      setData: setCompletedTodosData,
      data: completedTodosData,
      element: () => <TodosContent todosData={completedTodosData} />,
    },
    uncompleted: {
      getURL: UNCOMPLETED_TODOS_URL,
      setData: setUncompletedTodosData,
      data: uncompletedTodosData,
      element: () => <TodosContent todosData={uncompletedTodosData} />,
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
      if (currentTabData.data) return
      handleTabChange(currentTabData)
    }
  }, [activeTabIndex])

  return (
    <div className='pt-10'>
      <h2>Todos data</h2>
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

export default Todos
