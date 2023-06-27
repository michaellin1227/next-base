import { useState } from 'react'
import AddForm from './add-form'
import List from './list'

const sample = [
  { id: 1, text: '給我好好學React', completed: false },
  { id: 6, text: '給我努力做專題', completed: false }]

export default function TodoIndex() {
  const [todos, setTodos] = useState(sample)

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
        todos={todos} // ??
        handleToggleCompleted={handleToggleCompleted}
        handleRemove={handleRemove}
      />
    </>
  )
}
