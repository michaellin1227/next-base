import Item from './item'

export default function List(
  { //??
    todos=[],
    handleToggleCompleted=()=>{},
    handleRemove=()=>{},
  }
) {
  return (
      <ul>
        {todos.map((v, i) => {
          // 先解構，方便後續程式撰寫
          const { id, text, completed } = v
          
          // key值為必要，寫在map裡最近的return項目中
          return (
            <Item
              // 一個個分別傳入屬性，為了方便在子元件解構(編輯器提示)
              // 與子女元件最佳化重新渲染也有關
              key={id}
              id={id}
              text={text}
              completed={completed}
              handleToggleCompleted={handleToggleCompleted}
              handleRemove={handleRemove}
            />
          )
        })}
      </ul>
  )
}
