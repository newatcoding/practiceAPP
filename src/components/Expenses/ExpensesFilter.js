
import React from 'react'
import './ExpensesFilter.css';
function ExpensesFilter(props) {
    // const classes=";
    const selectYearHandler=(selectedYear)=>{
        props.selected(selectedYear);
        // classes=[...classes]
    };
    return (
        <div className="expensesFilter">
            <h2>Filter by Year</h2>
          
            <div className="dropdown">
                <button className="dropbtn">Years</button>
                <div className="dropdown-content">
                    <p onClick={()=>{selectYearHandler("1")}}>All</p>
                    <p onClick={()=>{selectYearHandler("2021")}}>2021</p>
                    <p onClick={()=>{selectYearHandler("2020")}}>2020</p>
                    <p onClick={()=>{selectYearHandler("2019")}}>2019</p>
                    <p onClick={()=>{selectYearHandler("2018")}}>2018</p>
                </div>
            </div>
            
        </div>
    )
}

export default ExpensesFilter;
