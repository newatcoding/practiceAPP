import React,{useState} from 'react';
import Card from '../Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
function Expenses(props){
 
    const [selectYear,setselectYear]=useState("1");
    const filteredYear=(selectedYear) => {
     
      if(selectYear!==selectedYear){
        setselectYear(selectedYear);
      }
      
    }
    const filteredExpenses=props.items.filter((item)=>{
        const arr=item.date.toString().split(" ");
        return arr[3]===selectYear|| selectYear==="1" ;
    });

   
    // console.log(filteredExpenses);
    return(
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses} />
        </Card>
        
    );
}

export default Expenses;