import React,{createElement, useState} from "react";


function TestArray(){
    const [Item,setItem]= useState('')
    const [itemArr,setItemArr] = useState([])

   let handleItem=(items)=>{
        
        setItemArr([...itemArr,items])
    }
    return(
        <div>
    <input type='text' onChange={(e)=>{setItem(e.target.value)}}/>

    <button onClick={()=>handleItem(Item)}>AddItems</button>
    <ul>
      {
        itemArr.map((itemss)=>{
            return <li>{itemss}</li>
        })
      }
    </ul>
        </div>
    )
}

export default TestArray