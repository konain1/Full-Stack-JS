import React from 'react'

import {useDispatch} from 'react-redux'

import Count from './comp/Count';
function App() {

  const dispatch = useDispatch();
  return (
    <div>
      <h1>this is redux</h1>


      <button onClick={()=> dispatch({type:'inc'})}>increment</button>
      <Count/>
      <button onClick={()=> dispatch({type:'dec'})} >decrement</button>

    </div>
  )
}

export default App
