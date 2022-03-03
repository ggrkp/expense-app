import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // Initial state mesw tou useState Hook. Sto prwto argument pairnei thn current
  // timi tis metavlitis (expTitle = props.title) kai sto deutero argument einai mia function
  // pou mporei na allazei thn metavliti auth (expTitle = 'Updated')
  const expTitle = props.title // Deconstruction enos pinaka. Const giati den kanw assignement me = operator ara den trww error otan allazw thn timh 
  const expDate = props.date;
  const expAmount = props.amount;
 
  // some helper variables

  return (
    <Card className="expense-item">
      <ExpenseDate date={expDate} />
      <div className="expense-item__description">
        <h2>{expTitle}</h2>
        <div className="expense-item__price">${expAmount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
