import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [inputTitle, setInputTitle] = useState(""); // Arxikopoihsh tou title me empty string
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState(""); 

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  return (
    <form className="expense-form">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title: </label>
          <input type="text" onChange={titleChangeHandler} value={inputTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={inputAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={inputDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
