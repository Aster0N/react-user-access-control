const CommentsContent = ({ commentsData }) => {
  return (
    <div>
      {commentsData &&
        commentsData.map((comment) => (
          <div key={comment.id}>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
            <hr />
          </div>
        ))}
    </div>
  )
}

export default CommentsContent
