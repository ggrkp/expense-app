import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState} from "react";

// We want to return a form so that the user can enter their new expenses
const NewExpense = (props) => {
  const saveExpenseDataHandler = (inputExpenseData) => {
    const expenseData = { ...inputExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setEditMode(false)
  };

  const [editMode, setEditMode] = useState(false)

  const addHandler = (e) => {
    setEditMode(true)
  }

  const cancelHandler = (e) => {
    setEditMode((false))
  }

  return (
    <div className="new-expense">
      {editMode && <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler} />}
       {!editMode && <button onClick={addHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
