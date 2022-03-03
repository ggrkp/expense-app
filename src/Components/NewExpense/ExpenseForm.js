import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // ! Dinatothta na exw 1 state gia kathe difatoretiko input. To pio sunithes na sumbei.
  const [inputTitle, setInputTitle] = useState(""); //  Arxikopoihsh tou title me empty string
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // ! Dinatothta na exw ena state object anti gia 3 diaforetika states( 1 gia kathe input )
  //   const [userInput, setUserInput] = useState({
  //     inputTitle: "",
  //     inputAmount: "",
  //     inputDate: "",
  //   });

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
    // ! epilogi gia 1 state object:
    // ! Lathos tropos na kanw update state otan eksartomai apo palio version ths state (prevstate)
    // ! Νot Safe Way. Mporei na kataliksw se lathos state snapshot.
    // setUserInput({
    //   ...userInput,
    //   inputTitle: e.target.value,
    // });
    // ! Swstos troposo na kanw update state otan eksartomai apo palio version ths state
    // setUserInput((prevState) => { // Pernaw function pou dexetai to prevState object automata.
    //   return {
    //     ...prevState,
    //     inputTitle: e.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
    // ! epilogi gia 1 state object:
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveExpenseData(expenseData);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title: </label>
          <input value={inputTitle} type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
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
