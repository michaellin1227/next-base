import styles from '../todo.module.css'

export default function Item( 
  {id=0,
  text='',
  completed=false,
  handleToggleCompleted=()=>{},
  handleRemove=()=>{}}
) {
  return (
    <>
      <li className={`${completed ? styles.completed : styles.active}`}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            handleToggleCompleted(id)
          }}
        />
        {text}
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
