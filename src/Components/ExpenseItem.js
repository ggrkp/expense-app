import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
    // some helper variables
  const expDate = props.date;
  const expAmount = props.amount;
  const expTitle = props.title;
  
  return (
    <div className="expense-item">
      <ExpenseDate  date ={expDate}/>
      <div className="expense-item__description">
        <h2>{expTitle}</h2>
        <div className="expense-item__price">${expAmount}</div>
      </div>
    </div>
  );
}
