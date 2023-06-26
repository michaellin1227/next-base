import { useState } from 'react'
// import { v4 } from 'uuid'

export default function TodoIndex() {
  const [todos, setTodos] = useState([
    { id: 1, text: '給我好好學React', completed: false },
    { id: 6, text: '給我努力做專題', completed: false },
  ])

  //   // !!impure
  //   const addTodo = (text) => {
  //     const newTodo = {
  //       id: Number(new Date()),
  //       text: text,
  //       completed: false,
  //     }

  //     return [...todos,newTodo]
  //   }

  const [inputText, setInputText] = useState('')
  
  // 修正中文輸入法用(組字用Enter鍵時要排除掉)
  const [isCompositing, setIsCompositing] = useState(false)


  // pure
  const add = (todos,text)=>{
    // 用遞增id
    const ids = todos.map(v=>v.id) // [1,2,3]
    const newId = Math.max(...ids)+1 // 最大的id+1

    const newTodo ={
      id:newId,
      text:text, // ??
      completed:false
    }
    return [...todos,newTodo]
  }

  // pure 如果有比對到v.id是id，就作切換布林值的動作
  const toggleCompleted = (todos,id)=>{
    return todos.map(v=>{
      if(v.id===id){
        return {...v,completed: !v.completed}
      }
      else {
        return {...v}
      }
    })
  }


  return (
    <>
      <input
        type="text"
        value={inputText}
        // 取得輸入框的值
        onChange={(e) => {
          setInputText(e.target.value)
        }}

        // 中文輸入法組字時，打開信號狀態
        onCompositionEnd={() => setIsCompositing(false)}
        onCompositionStart={() => setIsCompositing(true)}
        
        // 送出資料
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !isCompositing) {
            // const newTodos = { id: v4(), text: inputText ,completed:false}
            setTodos(add(todos, inputText))
            //清空輸入框
            setInputText('')
          }
        }}
      />

      <ul>
        {todos.map((v, i) => {
          // 先解構，方便後續程式撰寫
          const {id,text,completed} = v

          return (
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
                  setTodos(toggleCompleted(todos,id))

                }}
              />
              {completed ? <del>{text}</del> : text}
            </li>
          )
        })}
      </ul>
    </>
  )
}
