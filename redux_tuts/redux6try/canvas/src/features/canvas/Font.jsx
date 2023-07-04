import React from 'react'
import { useSelector } from 'react-redux'
import { changeFont } from './canvasSlice'
import { useDispatch } from 'react-redux'
import { selectedFont } from './canvasSlice'
import './Font.css'

function Font() {

    const currentFontSize = useSelector(selectedFont)

    const dispatch = useDispatch()


  return (
    <div className='btn'>
    <h1>{currentFontSize}</h1>
    <div className='para'>
      <p style={{fontSize : `${currentFontSize}px`}}>this code will change when slice will be clicked by the user </p>

    </div>
      

<div className='inputrange'>

      <input type='range' max="30" min="10" value={currentFontSize} onChange={(e) => dispatch(changeFont(e.target.value))} />
</div>

     
    </div>
  )
}

export default Font
