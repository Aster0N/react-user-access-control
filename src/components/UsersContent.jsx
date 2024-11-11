const UsersContent = ({ usersData }) => {
  return (
    <div>
      {usersData &&
        usersData.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr />
          </div>
        ))}
    </div>
  )
}

export default UsersContent
