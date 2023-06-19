import { Fragment } from 'react'
import styles from '@/styles/jsx-demo2.module.css'

export default function JsxDemo2() {
  // 投影片 2.jsx 第8-9頁

  return (
    <>
      <h1 className="title">JSX中的值與表達式</h1>
      <div className="card" style={{ width: '18rem' }}>
        <img src="/next.svg" className="card-img-top" alt="..." />
        <div className="card-body">
        <h1 className={`card-title ${styles.h1}`}>Hello World</h1>
          <h5 className={`card-title ${styles.test}`}>Card title</h5>
          
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  )
}