import { useState } from 'react'
import {v4} from 'uuid';

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 與呈現有關必需先成為state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        1.列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        2.列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          // id的產生
          // 1. 用外部函式庫 uuid, nanoid
          // 2. 隨機數產生的字串
          // const newId = (Math.random() + 1).toString(36).substring(7)
          // 3. 日期時間物件->產生毫秒整數值(建議單人系統)
          const newId = Number(new Date())
          // 4. 以目前的id值遞增(id要是數字才能用)
          // const ids = data.map((v) => v.id)
          // const newId = Math.max(...ids) + 1
          const newObj = { id: newId, text: 'xxx' }

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        3.列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button onClick={() => {
        const newObj = { id: v4(), text: 'xxx' }

         //1 //2
         const newData = [...data,newObj]

        //3
        setData(newData)
      }}>
        4.列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button onClick={() => {
        // 1. 從目前的狀態拷貝(深拷貝)出一個新的變數值(陣列/物件)
        // 2. 在新的變數值(陣列/物件)上作處理
        const newData = data.filter(v=>v.text.includes('a'))
        // 3. 設定回原本的狀態中
        setData(newData)
      }}>
        5.尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button onClick={() => {
        const newData = data.filter(v=>v.text !=='b')
        
        setData(newData)
      }}>6.刪除文字為b的物件資料</button>
      <br />
      <button onClick={() => {
        const newData = data.filter(v=>v.id !==4)
        
        setData(newData)
      }}>7.刪除id為4的物件資料</button>
      <br />
      <button onClick={() => {
        

      }}>8.在id為2後面插入id為5與文字為bbb的物件</button>
      <br />
      <button onClick={() => {
        const newData = data.map(item=>{
          return item.id===3 ? {...item,text:'cccc'} : item ;
        })
        setData(newData)
      }}>9.取代id為3的文字為cccc</button>
    </>
  )
}
