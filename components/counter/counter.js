import { useState } from 'react'

export default function Counter({ value = 1, total, setTotal }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + value)
          setTotal(value + total);
        }}
      >
        {value > 0 ? `+${value}` : value}
      </button>
    </>
  )
}
