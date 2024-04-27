import React, { useState } from "react";

function AddTransactionform({onAddTransaction}){
    // state for form fields.
    const [date, setDate]=useState("");
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');
    const [amount,setAmount]=useState('');

    // handle form submission
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(date.trim() && description.trim() && category.trim() && amount.trim()){
            onAddTransaction({date,description,category,amount});
            setDate('');
            setDescription('');
            setCategory('');
            setAmount('');
        };
    };
    return(
        <div>
            <form class="row" onSubmit={handleSubmit}>
                <div class="col-auto">
                <label class="col-form-label">Date:</label>
                </div>
                <div class="col">
                    <input type="text"  class="form-control form-control-sm" value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Description" aria-label="Description"/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Category" aria-label="Category"/>
                 </div>               
                <div class="col">
                    <input type="text" class="form-control form-control-sm" placeholder="Amount"  aria-label="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <div>
                <button type="submit">Add New Transaction</button>
                </div>
            </form>
        </div>
    )



};
export default AddTransactionform;