import React from "react";

function BankTransactionList({transactions}){
    return(
        // transaction list table
        <div>
            <table class="table table-striped">
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
                {transactions.map((transaction,index)=>(
                    <tr key={index} scope="row">
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.amount}</td>
                    
                    </tr>
                ))}
            </table>
        </div>
    )

};
export default BankTransactionList;