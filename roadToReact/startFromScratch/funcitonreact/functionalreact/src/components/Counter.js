

import React, {useState} from "react";


function Test(){
    const [ count,setCounter] = useState(0)

    return(
        <div>
        <h1>counting {count}</h1>
        <button onClick={()=>{setCounter(count+1)}}>+1</button>
        <button onClick={()=>{setCounter(count-1)}}>-1</button>

    </div>
    )
    
}
export default Test