import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
export default function Expenses(props) {
  const expenses = props.expenses;
    // Create a component for each item in the expenses array
    // resulting to an array of components
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}