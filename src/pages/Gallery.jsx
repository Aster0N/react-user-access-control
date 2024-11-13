import { ALBUMS_URL, PHOTOS_URL } from '@/api/api.js'
import AlbumsContent from '@/components/AlbumsContent'
import PhotosContent from '@/components/PhotosContent'
import TabContentWarning from '@/components/UI/TabContentWarning'
import Tabs from '@/components/UI/Tabs'
import { useEffect, useState } from 'react'

const Gallery = () => {
  const [photosData, setPhotosData] = useState(null)
  const [albumsData, setAlbumsData] = useState(null)
  const [activeTabIndex, setActiveTabIndex] = useState(null)

  const tabData = {
    photos: {
      getURL: PHOTOS_URL,
      setData: setPhotosData,
      data: photosData,
      element: () => <PhotosContent photosData={photosData} />,
    },
    albums: {
      getURL: ALBUMS_URL,
      setData: setAlbumsData,
      data: albumsData,
      element: () => <AlbumsContent albumsData={albumsData} />,
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
      if (currentTabData.data) return
      handleTabChange(currentTabData)
    }
  }, [activeTabIndex])

  return (
    <div className='pt-10'>
      <h2>Gallery data</h2>
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

export default Gallery
