
export default function Product({id,name,count,productminus,productplus}) {
  return (
    <>
       <li key={id}>
          {name}(<b>{count}</b>)
          <button
            onClick={() => {
              productplus(id) // 0,1,2
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              productminus(id) // 0,1,2
            }}
          >
            –
          </button>
        </li>
    </>
  )
}
