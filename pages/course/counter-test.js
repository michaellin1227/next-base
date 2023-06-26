import { useState } from 'react'
import Counter from '@/components/counter/counter'

export default function CounterTest(){

    const [total,setTotal] = useState(0);

    return (
    <>
        {/* <Counter/> */}
        <h1>Total: {total}</h1>
        <Counter value={10} setTotal={setTotal} total={total}/>
        <Counter value={-2} setTotal={setTotal} total={total}/>
    </>
    )
}