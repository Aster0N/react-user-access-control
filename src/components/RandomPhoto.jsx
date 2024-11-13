import { RANDOM_PHOTO_URL } from '@/api/api.js'

const RandomPhoto = () => {
  return (
    <img
      alt='Random image'
      src={`${RANDOM_PHOTO_URL}?timestamp=${Date.now()}`}
    />
  )
}

export default RandomPhoto
