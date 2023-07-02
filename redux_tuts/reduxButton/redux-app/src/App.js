import './App.css';
import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {incNumber , decNumber} from './action/action'

function App() {

  const mystate = useSelector((state) => state.changeTheNumber)

  const dispatch = useDispatch()


  return (
    <div className="App">
     <h1>redux classes</h1>





     <div className="counter-container">
      <h2 className="counter-value">Counter: {mystate}</h2>
      <div className="counter-buttons">
        <button className="counter-button" onClick={()=> dispatch(incNumber )}>+</button>
        <button className="counter-button" onClick={()=> dispatch(decNumber)}>-</button>
      </div>
    </div>
    
    </div>
  );
}

export default App;
