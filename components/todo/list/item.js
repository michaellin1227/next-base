
export default function Item() {
  return (
    <>
      <li key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            // const newTodos = todos.map((v2) => {
            //   if (v2.id === id) {
            //     return { ...v2, completed: !v2.completed }
            //   } else {
            //     return { ...v2 }
            //   }
            // })
            // setTodos(toggleCompleted(todos, id))
            handletoggleCompleted(id)
          }}
        />
        {completed ? <del>{text}</del> : text}{'  '}
        <button
          onClick={() => {
            // setTodos(remove(todos, id))
            handleRemove(id)
          }}
        >
          X
        </button>
      </li>
    </>
  )
}
