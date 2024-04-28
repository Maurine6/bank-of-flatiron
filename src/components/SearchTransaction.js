import React, {useState} from "react";



function SearchTransaction({onSearch}){
    const [searchTerm, setSearchTerm]=useState('');

    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
        onSearch(searchTerm);
    }
    
    
    return(
        <div>
            <div class="input-group mb-3">
                <input  class="form-control" placeholder="Search Transaction" type="text" value={searchTerm} onChange={handleChange}/>  
            </div>
        </div>
    )

};
export default SearchTransaction;