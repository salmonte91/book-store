import { useState } from "react"

const SearchBar = (props) => {

    let [searchQuery,setSearchQuery] = useState('')
 
    const handleSearch =  (e) => {

        e.preventDefault()
        //check if we are passing the correct info 
        console.log("Event:", e);
        console.log("Search Query:", searchQuery);
        props.handleSearch(e, searchQuery)
    }
    
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

        return (
            <div>
                <form onSubmit={handleSearch} >
                    <label htmlFor="searchQuery" > Search</label>
                    <input type="text" id="searchQuery" value={searchQuery} onChange={handleChange} />
                    <button type="submit" onClick={(e) => props.handleSearch(e, searchQuery)}> Search</button>
                </form>
            </div>
           
        )
}

export default SearchBar
