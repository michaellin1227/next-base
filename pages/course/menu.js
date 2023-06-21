import { useState } from "react"

function Menu() {

  // const [state,setState] = useState({backgroundColor:''});
  const [activeText, setActiveText] = useState('首頁')

  const menuItems = ['首頁', '關於我們', '產品']
  // function click(){
  //     const bgc = [...state,backgroundColor:'red'];
  //     setState(bgc);
  // }

  return (
    <>
      <ul>
      {menuItems.map((v,i)=>{
        return (
        <li key={crypto.randomUUID()} >
          <a className={activeText===v ? 'active' : ''} href="#/" onClick={()=>{
            setActiveText(v);
          }}>
          {v}

          </a>
        </li>
        )
      })}





        {/* <li>
          <a>首頁</a>
        </li>
        <li>
          <a className="active">關於我們</a>
        </li>
        <li>
          <a>產品</a>
        </li> */}
      </ul>
    </>
  )
}

export default Menu
