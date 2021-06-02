import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  { id: 1, title: "Standup Desk", amount: 494.67, date: new Date(2021, 2, 28) },
  {
    id: 2,
    title: "Car Insurance",
    amount: 1294.67,
    date: new Date(2021, 2, 22),
  },
  { id: 3, title: "Phone", amount: 244.67, date: new Date(2021, 2, 18) },
  { id: 4, title: "Food", amount: 300.0, date: new Date(2021, 2, 8) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log(expense, prevExpenses);
      console.log(expenses);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
