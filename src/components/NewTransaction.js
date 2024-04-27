import React, { useState } from "react";

function AddTransactionform({onAddTransaction}){
    // state for form fields.
    const [date, setDate]=useState("");
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');
    const [amount,seAmount]=useState('');

    // handle form submission
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(date.trim() && description.trim() && category.trim() && amount.trim()){
            onAddTransaction({date,description,category,amount});
            setDate('');
            setDescription('');
            setCategory('');
            seAmount('');
        };
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input type="text" value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <button type="submit">Add New Transaction</button>
            </form>
        </div>
    )



};
export default AddTransactionform;