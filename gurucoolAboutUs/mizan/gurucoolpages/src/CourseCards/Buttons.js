import React from 'react'
import { tests } from '../TestPage/Test_data';
import "./Buttons.css"

function Buttons(props) {

  function generateCustomClassName(text) {

    switch(text) {

      case 'live': return 'live';
      case 'test' : return 'test';
      default: return 'btn'
    }
  }
  return (
    <div className= {generateCustomClassName(props.text)}>
    
        {
            props.text && <div> {props.text}</div>
        }
          
        {/* <div className='btn-text'>
            <span>{props.text}</span>
        </div> */}
      
    </div>
  )
}

export default Buttons
