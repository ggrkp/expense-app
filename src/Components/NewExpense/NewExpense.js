import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

// We want to return a form so that the user can enter their new expenses
const NewExpense = (props) => {
  const saveExpenseDataHandler = (inputExpenseData) => {
    const expenseData = { ...inputExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
