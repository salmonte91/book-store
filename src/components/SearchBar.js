import { useState } from "react"

const SearchBar = (props) => {

    let [query, setQuery] = useState('')

    const handleSearch = (e) => {

        e.preventDefault()
        //check if we are passing the correct info 
        console.log("Event:", e);
        console.log("Search Query:", query);
        props.handleSearch(e, query)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSearch} >
                <label htmlFor="query" > Search</label>
                <input type="text" id="query" value={query} onChange={handleChange} />
                <button type="submit" onClick={(e) => props.handleSearch(e, query)}> Search</button>
            </form>
        </div>

    )
}

export default SearchBar
