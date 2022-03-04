import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../Filter/EpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const expenses = props.expenses;
  // Create a component for each item in the expenses array
  // resulting to an array of components
  const [filterValue, setFilterValue] = useState('2019')

  const filterChangeHandler = (year) => {
    setFilterValue(year)
  };

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() == filterValue)
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filterValue} onFilterChange={filterChangeHandler} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
