import { useState } from 'react'

export default function Counter() {
  // useState(initValue) -> [getter, setter]
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>React計數器</h1>
      <hr />
      <h1
        onClick={() => {
          setCount(count + 1)
        }}
      >
        {count}
      </h1>
    </>
  )
}
