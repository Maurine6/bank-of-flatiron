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
            <form  onSubmit={handleSubmit}>
                <div class="row">
                <div class="col-auto">
                <label class="col-form-label">Date:</label>
                </div>
                <div class="col">
                    <input type="date"  class="form-control form-control-sm" value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Description" aria-label="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Category" aria-label="Category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                 </div>               
                <div class="col">
                    <input type="text" class="form-control form-control-sm" placeholder="Amount"  aria-label="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <div> <br/>
                <button type="submit">Add New Transaction</button>
                </div>
                </div>
            </form>
        </div>
    )



};
export default AddTransactionform;