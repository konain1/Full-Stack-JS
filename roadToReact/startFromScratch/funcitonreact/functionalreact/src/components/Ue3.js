import React, { useState,useEffect } from 'react'

function Ue3() {

    const [count,setcounterfn] = useState(0)
    const [name,setName] = useState('neeru')

    useEffect(()=>{
        document.title = `this is useEffect ${count} ${name}`
    },[count])// it update when count update but not update name in document.tittle
  return (

    
    <div>
    <h1>useEffect dependancy array updated when [value ] updated</h1>
    <button onClick={()=>setcounterfn(count+1)}>click</button>
    <button onClick={()=>setName('konain')}>changeName</button>

    <p>{count} {name}</p>

    </div>
  )
}

export default Ue3
