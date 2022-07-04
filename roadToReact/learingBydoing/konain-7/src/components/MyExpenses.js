import Expense from "./Expense";
import SerialNo from "./SerialNo";


function MyExpenses(props){

    return(
        <div>

        <Expense
       
        price ={props.item[0].amount}
        exp = { props.item[0].payto}
        srl = {props.item[0].serialno}

    

        >
        </Expense>

        <Expense
        price ={props.item[1].amount}
        exp = { props.item[1].payto}
        srl = {props.item[1].serialno}

        >
        </Expense>

        <Expense
        price ={props.item[2].amount}
        exp = { props.item[2].payto}
        srl = {props.item[2].serialno}
        >
        </Expense>


        </div>
    )
}

export default MyExpenses