import React, { useState,useEffect } from 'react'

function Ue2() {

    const [count,setcounterfn] = useState(0)

    useEffect(()=>{
        document.title = `this is useEffect ${count}`
    },[])//dependany array or list if it is empty it will work as componentdidmount
  return (

    
    <div>
    <h1>useEffect []dependancy array  == componentdidmount</h1>
    <button onClick={()=>setcounterfn(count+1)}>click</button>
    <p>{count}</p>

    </div>
  ) 
}

export default Ue2
