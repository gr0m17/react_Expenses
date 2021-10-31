// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: 1,
      title: "car insurance",
      amount: 295.11,
      date: new Date(2021, 2, 28),
    },
    { id: 2, title: "shoes", amount: 79.95, date: new Date(2021, 2, 27) },
    {
      id: 3,
      title: "rental costs",
      amount: 1441.0,
      date: new Date(2021, 2, 26),
    },
    {
      id: 4,
      title: "something else",
      amount: 2.0,
      date: new Date(2021, 2, 25),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
