const CommentsContent = ({ commentsData }) => {
  return (
    <div className='pt-2'>
      {commentsData &&
        commentsData.map((comment) => (
          <div
            key={comment.id}
            className='p-4 rounded-md border-solid border-[1px] border-[#535bf2] mb-3'
          >
            <div className='flex gap-2 text-green-200 underline'>
              <h2>by: {comment.email}</h2>
            </div>
            <div>{comment.body}</div>
          </div>
        ))}
    </div>
  )
}

export default CommentsContent
