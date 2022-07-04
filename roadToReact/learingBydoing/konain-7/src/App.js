
import './App.css'
import Expense from './components/Expense'
import SerialNo from './components/SerialNo'
import MyExpenses from './components/MyExpenses'





let expenses = [
    {
        id:'e1',
        amount:'$400',
        payto:'school',
        serialno:'1'
    },
    {
        id:'e2',
        amount:'$300',
        payto:'bus',
        serialno:'2'
    },
    {
        id:'e3',
        amount:'$200',
        payto:'food',
        serialno:'3'
    }
];


function App(props){
    return(


        <div className="app-container">

        <h2>hello world</h2>

        <MyExpenses item={expenses} />
        </div>

        // <div>

        // {expenses.map((expense) => <Expense price={expense.amount} exp={expense.payto} serialno={expense.serialno}/>)}
        // </div>
        // <Expense
       
        // price ={expenses[0].amount}
        // exp = { expenses[0].payto}

    

        // >
        // </Expense>

        // <Expense
        // price ={expenses[1].amount}
        // exp = { expenses[1].payto}

        // >
        // </Expense>

        // <Expense
        // price ={expenses[2].amount}
        // exp = { expenses[2].payto}
        // >
        // </Expense>

       
    );
}

export default App