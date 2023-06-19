export default function JsxDemo3() {
    // 投影片 2.jsx 第15頁
  
    const aa = [1, 2, 3, 4]
  
    //補充: key值的選擇
    // 1. 最優先: 使用來自資料庫的資料的id值(主鍵)
    // 2. 隨機ID函式庫: uuid, nanoid，在資料建立時就要給定，不要在render時給定
    // 3. (不太建議)隨機數: Math.random(), +new Date()
    // 4. 反樣式(anti-pattern): 索引值。唯一能用的情況，只有靜態資料，即render後不會再變動。
    const ab = aa.map((v, i) => {
      return <li key={i}>{v}</li>
    })
    // crypto.randomUUID()
  
    return (
      <>
        <h1>JSX中使用陣列和Array的map方法</h1>
        <ul>{ab}</ul>
        <ul>
          {aa.map((v, i) => {
            return <li key={i}>{v}</li>
          })}
        </ul>
      </>
    )
  }