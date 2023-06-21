import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

function BookList() {
  // const [fav,setfav] = useState(0);

  const newList = [...data].map((v, i) => {
    return { ...v, favorite: 'false' }
  })
  // console.log(newList);

  function click(){}

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={crypto.randomUUID()}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image src={bookmarkIcon} alt="" ocClick={click}/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default BookList
