export default function Item( //??
  {id=0,
  text='',
  completed=false,
  handleToggleCompleted=()=>{},
  handleRemove=()=>{}}
) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            handleToggleCompleted(id)
          }}
        />
        {completed ? <del>{text}</del> : text}
        {'  '}
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
