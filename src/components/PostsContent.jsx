const PostsContent = ({ postsData }) => {
  return (
    <div className='pt-2'>
      {postsData &&
        postsData.map((post) => (
          <div
            key={post.id}
            className='p-4 rounded-md border-solid border-[1px] border-[#535bf2] mb-3'
          >
            <div className='flex gap-2 text-green-200'>
              <h2>{post.id}.</h2>
              <span>{post.title}</span>
            </div>
            <div>{post.body}</div>
          </div>
        ))}
    </div>
  )
}

export default PostsContent
