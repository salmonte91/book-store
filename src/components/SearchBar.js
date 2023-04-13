import { useState } from "react"

const SearchBar = (props) => {

    let [query, setQuery] = useState('')

    //the hanlde function call the props 'app-handlesearch'

    const handleSearch = (e) => {
        //check if we are passing the correct info 
        console.log("Event:", e);
        console.log("Search Query:", query);
        props.handleSearch(query)
        setQuery('');
        e.preventDefault()
    }

    //handle the update of the input value

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSearch} >
                <label htmlFor="query" />
                <input type="text" id="query" value={query} onChange={handleChange} />
                <button type="submit" > Search</button>
            </form>
        </div>

    )
}

export default SearchBar
