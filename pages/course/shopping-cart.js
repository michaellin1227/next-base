import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  const productplus = (productid) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productid) {
          return { ...product, count: product.count + 1 }
        }
        return product
      })
    })
  }

  const productminus = (productid) => {
    setProducts((prevProducts) => {
      return prevProducts
        .map((product) => {
          if (product.id === productid) {
            return { ...product, count: product.count - 1 }
          }
          return product
        })
        .filter((product) => product.count > 0)
    })
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name}(<b>{product.count}</b>)
          <button
            onClick={() => {
              productplus(product.id) // 0,1,2
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              productminus(product.id) // 0,1,2
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
