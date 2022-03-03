import React from "react"
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
// We want to return a form so that the user can enter their new expenses
const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm/>
        </div>

    )
}

export default NewExpense