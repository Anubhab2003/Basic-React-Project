import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import TransactionList from "./Components/TransactionList";
import Transaction from "./Components/AddTransaction";

import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <div className="p-1 border-cyan-400">
      <GlobalProvider>
        <Header />
        <div classNameName="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <Transaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
