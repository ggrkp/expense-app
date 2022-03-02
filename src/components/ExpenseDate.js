import './ExpenseDate.css'

export default function ExpenseDate(props) {
    // Helper variables
  const expDate = props.date;
    // Split date to M D Y
  let expMonth = expDate.toLocaleDateString("en-Us", { month: "long" });
  let expDay = expDate.toLocaleDateString("en-Us", { day: "2-digit" });
  let expYear = expDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expMonth}</div>
      <div className="expense-date__day">{expDay}</div>
      <div className="expense-date__year">{expYear}</div>
    </div>
  );
}