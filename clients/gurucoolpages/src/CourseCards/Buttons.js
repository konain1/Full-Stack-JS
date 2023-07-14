import React from 'react'
import { tests } from '../TestPage/Test_data';
import "./Buttons.css"

function Buttons(props) {

  function generateCustomClassName(text) {

    switch(text) {

      case 'Live on oct 15,2023': return 'live';
      case 'Attempt Now Practice Mode' : return 'Practice';
      case 'Download PDF' : return 'pdf';
      case  'Attempt Now Test Mode' : return 'testMode';
      default: return 'btn'
    }
   

  }
  const customClassBtn = 'customeClassBtn'
  return (

    <div className={generateCustomClassName(props.text)}  >
    
        {
            props.text && <div> {props.text}</div>
            
        }
{/* {console.log(props.text)} */}
      
    </div>
  )
}

export default Buttons
