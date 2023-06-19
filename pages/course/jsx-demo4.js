import { useState } from "react";

export default function JsxDemo4() {
    // 投影片 2.jsx 第16-17頁
    const count = 0
    // const isLoggedIn = false

    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const Login = ()=>{
      setIsLoggedIn(isLoggedIn ? false : true)
    }
       

    return (
      <>
        <h1>JSX中使用條件渲染</h1>
        <h2>內聯if表達式 inline if(if expression)</h2>
        {/* 會出現0，因為前面是用falsy判斷，0是會呈現的數字 */}
        {count && <p>訊息是 {count}</p>}
        {/* 下面幾種是比較好的寫法，前面判斷式要一定最後運算出布林值 */}
        {count !== 0 && <p>訊息是 {count}</p>}
        {!!count && <p>訊息是 {count}</p>}
        {Boolean(count) && <p>訊息是 {count}</p>}

        <h2>三元運算子(if...else簡寫)</h2>
        <button onClick={Login}>切換狀態</button>

        <p>目前狀態 :{isLoggedIn ? <span className="logout">登出logout</span> : <span className="login">登入login</span>} </p>
        
        
        
        
        <style jsx>{`
        .login {
          background-color:lightgreen;
          font-size:24px;
        }
        .logout {
          background-color:red;
          font-size:24px;
        }
        `}</style>
      </>
      
    )
  }