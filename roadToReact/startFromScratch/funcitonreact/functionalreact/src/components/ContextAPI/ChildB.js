import React, {useState, useContext } from 'react'
import {Context} from './Test1'

function ChildB() {
    const {naam} = useContext(Context)
  return (
    <div>
      <h1>my name is {naam}</h1>
      {/* {naam} */}
    </div>
  )
}

export default ChildB
