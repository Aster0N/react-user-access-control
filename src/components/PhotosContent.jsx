const PhotosContent = ({ photosData }) => {
  return (
    <div className='pt-2 flex flex-wrap gap-4 justify-center'>
      {photosData &&
        photosData.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.url}
              width={450}
              alt={photo.title}
            />
          </div>
        ))}
    </div>
  )
}

export default PhotosContent
