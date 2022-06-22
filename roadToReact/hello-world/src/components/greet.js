import React from 'react'

function Greet(pros){

    return(
        <div>
            <h1> Hello  {pros.name}</h1>
            {pros.children}
        </div>
     
    )
}

export default Greet