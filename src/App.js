import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import axios from 'axios'
import BookShow from './components/BookShow';
import StarRating from './StarRating';

function App() {

  let [searchBook, setSearchBook] = useState('')   /* in charge to track the search term entred by the user  */
  let [data, setData] = useState([])               /* store the data retrieved from the api */
  let [message, setMessage] = useState('Search the Book you want!')      /* display certain info to the user */
  const [query, setQuery] = useState('');         /* kkeep track of the query that is used to fetch data from the API */

  const API_KEY = process.env.REACT_APP_API_KEY
  let API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`

  useEffect(() => {
    console.log("Query: ", query, "Search term: ", searchBook)
    console.log("API URL: ", API_URL);

    if (searchBook) {
      document.title = `${searchBook} Book`
    }
  }, [searchBook, query]);

  useEffect(() => {
    if (query) {
      let API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;
      // fetch data using axios
      // store data
      const axiosData = async () => {
        try {
          const res = await axios.get(API_URL)
          setData(res.data.items)
        } catch (err) {
          console.log(err)
        }
      }
      axiosData()
    }
  }, [query, API_KEY])

  const searchResults = data.filter(book => book.volumeInfo.title)


  // his function sets the searchBook state to the value of query 
  // it also sets the query state to the same value of query 
  const handleSearch = (query) => {
    setSearchBook(query)
    setQuery(query)
  }

  return (
    <div className="App">
      <h1>BOOM BOOKSTORE </h1>
      <h3> {message}</h3>
      <SearchBar handleSearch={handleSearch} />
      <BookShow data={searchResults} />
      <br />
      {/* <Comment/> */}
       <StarRating />
    </div>
  );
}

export default App;

