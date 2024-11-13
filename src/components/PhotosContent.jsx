const PhotosContent = ({ photosData }) => {
  return (
    <div className='pt-2'>
      {photosData &&
        photosData.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.url}
              width={50}
              height={50}
              alt={photo.title}
            />
          </div>
        ))}
    </div>
  )
}

export default PhotosContent
