const AlbumsContent = ({ albumsData }) => {
  return (
    <div className='pt-2'>
      <div className='flex gap-2 flex-wrap text-green-200'>
        {albumsData &&
          albumsData.map((album) => (
            <div
              key={album.id}
              className='w-[120px] inline-block border-[1px] rounded-lg border-solid border-gray-400 p-2'
            >
              <h2>{album.id}.</h2>
              <span>{album.title}</span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default AlbumsContent
