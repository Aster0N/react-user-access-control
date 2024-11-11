const PostsContent = ({ postsData }) => {
  return (
    <div>
      {postsData &&
        postsData.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
    </div>
  )
}

export default PostsContent
