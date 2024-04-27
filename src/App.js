import './App.css';
import { useState } from 'react';
import SearchTransaction from './components/SearchTransaction';
import AddTransactionform from './components/NewTransaction';
import BankTransactionList from './components/BankTransactionList';

import initialTransactions from './data/Transactions';
console.log(initialTransactions)




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
      <AddTransactionform onAddTransaction={addTransaction}
      />
      <br/>
      <BankTransactionList transactions={transactions}/>
      

    </div>
  );
}

export default App;
