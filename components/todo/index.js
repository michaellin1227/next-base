import { useState } from 'react'
import { v4 } from 'uuid'

export default function TodoIndex() {
  const [todos, setTodos] = useState([
    { id: 1, text: '給我好好學React', completed: false },
    { id: 2, text: '給我努力做專題', completed: false },
  ])

  // 是否完成狀態
  const [isCompleting, setIsCompelting] = useState(false)

  const [inputText, setInputText] = useState('')

  return (
    <>
      <input
        type="text"
        value={inputText}
        // 取得輸入框的值
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        onCompositionEnd={() => setIsCompelting(false)}
        onCompositionStart={() => setIsCompelting(true)}
        
        // 送出資料
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !isCompleting) {
            const newTodos = { id: v4(), text: inputText }
            setTodos([...todos, newTodos])
            //清空輸入框
            setInputText('')
          }
        }}
      />

      <ul>
        {todos.map((v, i) => {
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                check={v.completed}
                onChange={(e) => {
                  const newTodos = todos.map((v2) => {
                    if (v2.id === v.id) {
                      return { ...v2, completed: !v2.completed }
                    } else {
                      return { ...v2 }
                    }
                  })

                  setTodos(newTodos)
                }}
              />
              {v.completed ? <del>{v.text}</del> : v.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}
