import { useState } from "react"

const SearchBar = (props) => {

    let [searchBook,setSearchBook] = useState('')

        return (
            <div>
                <form onSubmit={(e) => props.handleSearch(e, searchBook)} >
                    <input type="text" placeholder="Search here" onChange={(e) => setSearchBook(e.target.value)} />
                    <input type="submit" />
                </form>
            </div>
           
        )
}

export default SearchBar
