import { useState } from 'react'
import AddForm from './add-form'
import List from './list'

import styles from './todo.module.css'

const sample = [
  { id: 1, text: '複習JavaScript', completed: false },
  { id: 6, text: '整理客廳', completed: false },
  { id: 9, text: '準備明天的早餐', completed: false },
]

export default function TodoIndex() {
  const [todos, setTodos] = useState(sample)

  // type = '所有' | '進行中' | '已完成'
  const [type, setType] = useState('所有')
  // 所有的選項
  const typeOptions = ['所有', '進行中', '已完成']

  //   // !!impure
  //   const addTodo = (text) => {
  //     const newTodo = {
  //       id: Number(new Date()),
  //       text: text,
  //       completed: false,
  //     }

  //     return [...todos,newTodo]
  //   }

  // pure
  
  const add = (todos, text) => {
    // 用遞增id
    const ids = todos.map((v) => v.id) // [1,2,3]
    // const newId = Math.max(...ids)+1 // 最大的id+1
    // 狀態 todos沒資料時定義為1
    const newId = todos.length > 0 ? Math.max(...ids) + 1 : 1

    const newTodo = {
      id: newId,
      text: text, // ??
      completed: false,
    }
    return [...todos, newTodo]
  }

  // (單純處理狀態改變)pure 如果有比對到v.id是id，就作切換布林值的動作
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      if (v.id === id) {
        return { ...v, completed: !v.completed }
      } else {
        return { ...v }
      }
    })
  }

  // (單純處理狀態改變)pure 如果有比對到v.id是id，就作移除
  const remove = (todos, id) => {
    return todos.filter((v) => v.id !== id)
  }

  //專門設計組合後給AddForm元件用的
  const handleAdd = (inputText) => {
    setTodos(add(todos, inputText))
  }

  // pure function(單純處理狀態改變) 因類型過濾
  const filterByType = (todos, type) => {
    if (type === '進行中') return todos.filter((v) => !v.completed)
    if (type === '已完成') return todos.filter((v) => v.completed)

    return todos
  }

  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

  const handleRemove = (id) => {
    setTodos(remove(todos, id))
  }

  return (
    <>
      <AddForm handleAdd={handleAdd} />
      <List
        todos={filterByType(todos, type)}
        handleToggleCompleted={handleToggleCompleted}
        handleRemove={handleRemove}
      />
      <hr />
      {typeOptions.map((v, i) => {
        return (
          <button
            key={i} //靜態資料用索引當key是可以
            className={type === v ? styles['filter-button-active'] : styles['filter-button-normal']}
            onClick={() => {
              setType(v)
            }}
          >
            {v}
          </button>
        )
      })}
    </>
  )
}
