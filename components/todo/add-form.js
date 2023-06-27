import {useState} from 'react'

export default function AddForm({handleAdd}) {

  const [inputText, setInputText] = useState('')
  // 修正中文輸入法用(組字用Enter鍵時要排除掉)
  const [isCompositing, setIsCompositing] = useState(false)

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
          if (e.key === 'Enter' && !isCompositing && e.target.value) {
            // 加入到todos列表用的狀態中
            // 傳一個props為handleAdd函式，讓setTodos(add(todos, inputText))轉變為handleAdd(inputText)
            // function handleAdd(inputText){ setTodos(add(todos, inputText)) }
            
            // setTodos(add(todos, inputText))
            handleAdd(inputText)

            //清空輸入框
            setInputText('')
          }
        }}
      />
    </>
  )
}
