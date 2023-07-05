import React from 'react'
import "./Color.css"
import {useSelector } from 'react-redux'
import { selectedColor } from './canvasSlice'
import { useDispatch } from 'react-redux'
import { changeColor } from './canvasSlice'
import Opacity from './Opacity'
import { changeOpacity } from './canvasSlice'
import { selectedOpacity } from './canvasSlice'



function Color() {

const currentOpacity = useSelector(selectedOpacity)

const color = useSelector(selectedColor)

const dispatch = useDispatch();
  return (
    <div className='color' style={{backgroundColor:`${color}` , opacity:`${currentOpacity}`}  }  >
      <button onClick={(color)=> dispatch(changeColor("green"))}>green</button>
      <button onClick={(color)=> dispatch(changeColor("yellow"))}>yellow</button>
      <button onClick={(color)=> dispatch(changeColor("red"))}>red</button>
      <button onClick={(color)=> dispatch(changeColor("pink"))}>pink</button>


    <Opacity/>
    </div>
  )
}

export default Color
