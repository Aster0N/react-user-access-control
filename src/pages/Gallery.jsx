import { ALBUMS_URL, PHOTOS_URL } from '@/api/api.js'
import AlbumsContent from '@/components/AlbumsContent'
import PhotosContent from '@/components/PhotosContent'
import TabContentWarning from '@/components/UI/TabContentWarning'
import Tabs from '@/components/UI/Tabs'
import { useEffect, useState } from 'react'
import RandomPhoto from '../components/RandomPhoto'

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
    'random photo': {
      element: () => <RandomPhoto />,
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
      if (currentTabData.data || tabs[activeTabIndex] == 'random photo') return
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
