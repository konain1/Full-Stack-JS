import React from 'react'
import { tests } from './Test_data'

function Buttons(props) {
  return (
    <div className='btn'>
    {
        tests.map((items,index) =>{
            return <>
            <div className='btn-text'>
                <span>{props.details}</span>
            </div>
            </>
        })
    }
  
      
    </div>
  )
}

export default Buttons
