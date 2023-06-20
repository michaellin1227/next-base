import data from '@/data/product/products1.json';
import { useState } from 'react';

export default function Product1Table() {
    // console.log(data.products);

    const [data1,setData1] = useState(data.products)
    const [status,setStatus] = useState(0)
    
    function sort(){ 
        let sortdata = [...data.products].sort((a,b)=>{
        return status ? a.price - b.price : -a.price+b.price })
        
        setStatus(prestatus => !prestatus)
        setData1(sortdata);
        }
        // console.log(sortdata)

return(
<>
    <div>
        <button className="sortprice" onClick={sort}>價格排序</button>
    </div>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        
        <tbody>
        {data1.map((v,i)=>{
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <img src={v.picture} />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
            })   
        }
        </tbody>

    </table>
    <style jsx>{`
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        }

        td,
        th {
        border: 1px solid #ddd;
        padding: 8px;
        }

        tr:nth-child(even) {
        background-color: #f2f2f2;
        }

        tr:hover {
        background-color: #ddd;
        }

        th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04AA6D;
        color: white;
        }
    `}</style>   
</>
) 

}