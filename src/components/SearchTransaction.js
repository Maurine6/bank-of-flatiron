import React, {useState} from "react";



function SearchTransaction({transactions}){
    const [searchTerm, setSearchTerm]=useState('');
    const [searchResults,setSearchResults]=useState([]);

    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
    }

    const handleSearch = (e)=>{
        const results = transactions.filter((transaction)=>transaction.description.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setSearchResults(results);
    }
    return(
        <div class="input-group mb-3">
          <input  class="form-control" placeholder="Search Transaction" type="text" value={searchTerm} onChange={handleChange} onTouchStart={handleSearch}/>  
        </div>
    )

};
export default SearchTransaction;