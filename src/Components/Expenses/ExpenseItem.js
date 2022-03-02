import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // Initial state mesw tou useState Hook. Sto prwto argument pairnei thn current
  // timi tis metavlitis (expTitle = props.title) kai sto deutero argument einai mia function
  // pou mporei na allazei thn metavliti auth (expTitle = 'Updated')
  const [expTitle, setTitle] = useState(props.title);
 
  let expDate = props.date;
  let expAmount = props.amount;

  const clickHandler = () => {
    setTitle('Updated')
  }

  // some helper variables

  return (
    <Card className="expense-item">
      <ExpenseDate date={expDate} />
      <div className="expense-item__description">
        <h2>{expTitle}</h2>
        <div className="expense-item__price">${expAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
