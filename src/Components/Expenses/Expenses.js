import ExpenseItem from "./ExpenseItem";
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filterValue} onFilterChange={filterChangeHandler} />
        {expenses.filter(expense => expense.date.getFullYear() == filterValue).map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
