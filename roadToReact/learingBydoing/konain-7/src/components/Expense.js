// import './Expense.css'
import React , {useState} from 'react'
import SerialNo from './SerialNo';
import './Expense.css'




function Expense(props){

    let [exp,changeExp] = useState(props.exp);
    
    function clickHandler(){
        // console.log(props.exp);
       changeExp(new_val)
    }
  
    let [new_val,changeValue] = useState("");

    function changeHandler(e){
        changeValue(e.target.value);
        console.log(e.target.value)

    }
    return(

        <div className="container">

        <div className="expense-item">
        
            <h2>{exp}</h2>

            <SerialNo srl={props.serialno} />

            <div className="price">

            <h3>{props.price}</h3>

            </div>
            <input type="text" value={new_val} onChange={changeHandler} />
            <button onClick={clickHandler}>click here</button>

        </div>

        </div>
    )
}

export default Expense;