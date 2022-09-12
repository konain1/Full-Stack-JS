import React, { useState,useEffect } from 'react'

function Ue1() {

    const [count,setcounterfn] = useState(0)

    useEffect(()=>{
        document.title = `this is useEffect ${count}`
    })
  return (

    
    <div>
    <h1>useEffect actually use for data fetching (API) same as DidMountupdate</h1>
    <button onClick={()=>setcounterfn(count+1)}>click</button>
    <p>{count}</p>

    </div>
  )
}

export default Ue1
