import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Expensebox from "./components/Expensebox";
import Transactions from "./Transactions";
import AddTransaction from "./components/AddTransaction";
import "./App.css";
const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <Expensebox></Expensebox>
        <Transactions></Transactions>
        <AddTransaction></AddTransaction>
      </div>
    </div>
  );
};

export default App;
