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
   // function to filter transactions onsearch.
  function handleOnSearch(searchTerm){
    setTransactions(transactions=>transactions.filter((transaction)=>transaction.description.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    ))
  
  }
  return (
    <div className="App">
      {/** title of the page */}
      <h1>The Royal Bank of Flatiron</h1>
      {/**  displayin search transaction component */}
      <SearchTransaction onSearch={handleOnSearch}/>
      {/**  displaying add transaction component */}
      <AddTransactionform onAddTransaction={addTransaction}
      />
      <br/>
      {/** displaying transaction table */}
      <BankTransactionList transactions={transactions}/>
      

    </div>
  );
}

export default App;
