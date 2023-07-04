import React from 'react'
import "./Color.css"
import {useSelector } from 'react-redux'
import { selectedColor } from './canvasSlice'
import { useDispatch } from 'react-redux'
import { changeColor } from './canvasSlice'



function Color() {

const color = useSelector(selectedColor)

const dispatch = useDispatch();
  return (
    <div className='color' style={{backgroundColor:`${color}`}} >
      <button onClick={(color)=> dispatch(changeColor("green"))}>green</button>
      <button onClick={(color)=> dispatch(changeColor("yellow"))}>yellow</button>
      <button onClick={(color)=> dispatch(changeColor("red"))}>red</button>
      <button onClick={(color)=> dispatch(changeColor("pink"))}>pink</button>



    </div>
  )
}

export default Color
