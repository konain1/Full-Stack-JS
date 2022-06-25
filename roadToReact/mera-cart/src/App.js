// import logo from './logo.svg';
// import './App.css';
import Todolist from "./todoList";
import React,{useState} from 'react'

function App() {
  return( 
    <>
    <Todolist />
    <input type="text"></input>
    <button>add Todo</button>
    <button>clear </button>
   

    </>
     )
  
}

export default App;
