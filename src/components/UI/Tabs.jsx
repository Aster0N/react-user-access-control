const Tabs = ({ tabsContent, activeTabIndex, setActiveTabIndex }) => {
  return (
    <div className='p-2 bg-gray-500 rounded-lg inline-block'>
      <div className='flex flex-row gap-2'>
        {tabsContent.map((content, index) => (
          <button
            key={content}
            onClick={() => setActiveTabIndex(index)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none
            ${
              activeTabIndex === index
                ? 'bg-gray-200 text-indigo-950 border-indigo-500'
                : 'bg-gray-500 text-gray-800 underline'
            }
            hover:bg-gray-200 hover:text-indigo-950
          `}
          >
            {content}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs
