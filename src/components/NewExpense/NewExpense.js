import "./NewExpense.css";
import ExpenseForm from "./ExpenseFrom";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsediting(false);
  };

  const [isEditing, setIsediting] = useState(false);
  const changeEditingHandler = () => {
    setIsediting(true);
  };
  const changeFromHandler = () => {
    setIsediting(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={changeEditingHandler}>New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={changeFromHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
