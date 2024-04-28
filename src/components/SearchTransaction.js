import React, {useState} from "react";


// search transaction component.
function SearchTransaction({onSearch}){
    // search term state.
    const [searchTerm, setSearchTerm]=useState('');

    // function to handle change
    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
        onSearch(searchTerm);
    }
    
    
    return(
        // displaying an input field for searching transaction.
        <div>
            <div class="input-group mb-3">
                <input  class="form-control" placeholder="Search Transaction" type="text" value={searchTerm} onChange={handleChange}/>  
            </div>
        </div>
    )

};
export default SearchTransaction;