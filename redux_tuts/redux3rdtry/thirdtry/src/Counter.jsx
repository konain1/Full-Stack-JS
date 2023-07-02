// Counter.js

import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './Counter.css';

import { increment,decrement } from './features/counter/CounterSlice';

const Counter = () => {

  return (
    <div className="counter">
      <h2 className="counter-value">Counter: {10}</h2>
      <div className="counter-buttons">
        <button className="counter-button" >+</button>
        <button className="counter-button" >-</button>
      </div>
    </div>
  );
};

export default Counter;
