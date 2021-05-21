import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const Expenseslist= (props)=> {

    let expenseContent=<p className="expenses-list__fallback" >Found No Expenses</p>;
    if(props.items.length>0){
      expenseContent=props.items.map((data)=>(
                          (<ExpenseItem  key={data.id} title={data.title}
                                      date={data.date}
                                      amount={data.amount}></ExpenseItem>
                          )
                      )
                    )
    }
    return (
        <ul className="expenses-list">
            {expenseContent}
        </ul>
    )
}

export default Expenseslist;
