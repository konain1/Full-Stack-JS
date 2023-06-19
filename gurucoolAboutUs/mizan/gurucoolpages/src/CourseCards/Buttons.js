import React from 'react'
import { tests } from './Test_data'
import "./Buttons.css"

function Buttons(props) {
  return (
    <div className= {props.Live ? 'live' : 'btn ' }>
    
        {
            props.Live && <div> {props.Live}</div>
        }
          
            <div className='btn-text'>
                <span>{props.details}</span>
            </div>
      
    </div>
  )
}

export default Buttons
