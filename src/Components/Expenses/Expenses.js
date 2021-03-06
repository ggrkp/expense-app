import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../Filter/EpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const expenses = props.expenses;
  // Create a component for each item in the expenses array
  // resulting to an array of components
  const [filterValue, setFilterValue] = useState('2019')

  const filterChangeHandler = (year) => {
    setFilterValue(year)
  };

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filterValue)


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filterValue} onFilterChange={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
