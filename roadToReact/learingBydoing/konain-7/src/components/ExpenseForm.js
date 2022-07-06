import React, { useState } from 'react'


function ExpenseForm(){

    const [enteredTitle,setTitle] = useState('');
    const [enteredAmount,setAmount] = useState('');
    const [enteredDate,setDate] = useState('');

    


    const titleHandler = (e)=>{
        setTitle(e.target.value);

    }


    const amountHandler = (e)=>{
        setAmount(e.target.value);

    }

    const dateHandler = (e)=>{
        setDate(e.target.value);

    }
    return (
        <form>
        
        <div className='New-Expense__Controls'>

        <div className='New-Expense__Control'>
        <label>Titile</label>
        <input type="text"  onChange={titleHandler} />
        </div>

        <div className='New-Expense__Control'>
        <label>amount</label>
        <input type="text"  onChange={amountHandler} />
        </div>


        <div className='New-Expense__Control'>
        <label>Date</label>
        <input type="Date" onChange={dateHandler} />
        </div>
        

        </div>

        <div> <button>add Expense</button></div>
        </form>
    )
}


export default ExpenseForm