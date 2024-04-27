import logo from './logo.svg';
import './App.css';
import initialTransactions from './data/Transactions,js';
import { useState } from 'react';
console.log(initialTransactions);

function App() {
  // state managing Transaction lists.
  const [transactions,setTransactions]=useState(initialTransactions);
  // function  to add a new transaction.
  const addTransaction=(newTransaction)=>{
    setTransactions([...transactions,newTransaction]);
  } 
  return (
    <div className="App">
      {/** title of the page */}
      <h1>The Royal Bank of Flatiron</h1>

    </div>
  );
}

export default App;
