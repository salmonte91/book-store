import { useState } from "react"
import axios from "axios"
import BookItem from "./BookItem"
require('dotenv').config();

const SearchBar = (props) => {

    let [searchBook,setSearchBook] = useState('')
    let [searchResults, setSearchResults] = useState([])

    const handleSearch = async (e) => {
        e.preventDefault()
        const API_KEY = process.env.API_KEY
        const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&key=${API_KEY}`
        try {
            const res = await axios.get(API_URL)
            setSearchResults(res.data.items)
            console.log(res)
        } catch (err){
            console.log(err)
        }
    }

        return (
            <div>
                <form onSubmit={handleSearch} >
                    <input type="text" placeholder="Search here" onChange={(e) => setSearchBook(e.target.value)} />
                    <input type="submit" />
                </form>
                <BookItem data={searchResults} />
            </div>
           
        )
}

export default SearchBar
