import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    { title: "Standup Desk", amount: 494.67, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 1294.67, date: new Date(2021, 2, 22) },
    { title: "Phone", amount: 244.67, date: new Date(2021, 2, 18) },
    { title: "Food", amount: 300.0, date: new Date(2021, 2, 8) },
  ];

  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
