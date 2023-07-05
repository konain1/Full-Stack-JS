import React from 'react'
import {useSelector} from 'react-redux'
import { selectedOpacity } from './canvasSlice'
import { useDispatch } from 'react-redux'
import { changeOpacity } from './canvasSlice'


function Opacity() {

    const opa = useSelector(selectedOpacity);

    const dispatch = useDispatch();




  return (
    <div>
      
      <input type='range' max={10/10 * 6}  min="0.1"  value={opa} onChange={(e)=> dispatch(changeOpacity(e.target.value))} />
    </div>
  )
}

export default Opacity
