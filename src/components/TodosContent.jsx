const TodosContent = ({ todosData }) => {
  return (
    <div className='pt-2'>
      {todosData &&
        todosData.map((todo) => (
          <div
            key={todo.id}
            className='p-4 rounded-md border-solid border-[1px] border-[#535bf2] mb-3'
          >
            <div className={`flex gap-2 ${todo.completed ? 'text-green-200' : 'text-red-400'}`}>
              <h2>{todo.id}.</h2>
              <span>{todo.title}</span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default TodosContent
