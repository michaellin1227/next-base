import { Fragment } from 'react'

export default function JsxDemo() {
  const element1 = (
    <>
      <h1>Hello</h1>
      <p>Test</p>
    </>
  )

  const element2 = (
    <div>
      <h1>Hello</h1>
      <p>Test</p>
    </div>
  )

  return <>{element2}</>
}