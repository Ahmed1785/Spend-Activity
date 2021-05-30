import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    { title: "Standup Desk", amount: 494.67, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 1294.67, date: new Date(2021, 2, 22) },
    { title: "Phone", amount: 244.67, date: new Date(2021, 2, 18) },
    { title: "Food", amount: 300.0, date: new Date(2021, 2, 8) },
  ];

  const addExpenseHandler = (event) => {
    const saveNewExpenseData = {};
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
