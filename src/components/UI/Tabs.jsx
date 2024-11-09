const Tabs = ({ tabsContent, activeTabIndex, setActiveTabIndex }) => {
  return (
    <div className='flex flex-row gap-2'>
      {tabsContent.map((content, index) => (
        <button
          key={content}
          onClick={() => setActiveTabIndex(index)}
          className={`px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none
            ${activeTabIndex === index ? 'bg-violet-300 text-indigo-950 border-indigo-500' : 'bg-gray-200 text-gray-800'}
            hover:bg-violet-300 hover:text-indigo-950
          `}
        >
          {content}
        </button>
      ))}
    </div>
  )
}

export default Tabs
