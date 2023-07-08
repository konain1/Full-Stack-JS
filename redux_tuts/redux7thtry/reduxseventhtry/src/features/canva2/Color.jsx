import React from 'react'


import { changeColor } from './canvaSlice'
import {useDispatch,useSelector} from 'react-redux'
import {coloredSeleted} from './canvaSlice.js'




function Color() {
    // const color = useSelector(coloredSeleted)
  return (
    <div style={{backgroundColor:`red`, border:`1px solid black` , width:`300px` , height:`300px` , borderRadius:`50%` }}>
      
    </div>
  )
}

export default Color
