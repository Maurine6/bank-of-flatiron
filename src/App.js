import logo from './logo.svg';
import './App.css';
import initialTransactions from './data/Transactions,js';
import { useState } from 'react';
import SearchTransaction from './components/SearchTransaction';

import AddTransactionform from './components/NewTransaction';

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
      <SearchTransaction transactions={transactions}/>
      <AddTransactionform onAddTransaction={addTransaction}/>
      

    </div>
  );
}

export default App;
