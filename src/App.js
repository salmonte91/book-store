import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import axios from 'axios'
import BookShow from './components/BookShow';
import Footer from './components/Footer'

function App() {

  let [searchBook, setSearchBook] = useState('')   /* in charge to track the search term entred by the user  */
  let [data, setData] = useState([])               /* store the data retrieved from the api */
  let [message, setMessage] = useState('Search the Book you want!')      /* display certain info to the user */
  const [query, setQuery] = useState('');         /* kkeep track of the query that is used to fetch data from the API */
  const [ratings, setRatings] = useState({})      /* store the ratig of each book */

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

  //set the rating of a book
  const setRat = (bookId, rating) => {
    setRat({
      ...ratings,
      [bookId]: rating
    })
  }

  //and this gets the rating of a book

  const getRat = (bookId) => {
    return ratings[bookId]
  }


  // his function sets the searchBook state to the value of query 
  // it also sets the query state to the same value of query 
  const handleSearch = (query) => {
    setSearchBook(query)
    setQuery(query)
  }

  return (
    <div className="App">
      <h1>BOOM Book Library </h1>
      <h3> {message}</h3>
      <SearchBar handleSearch={handleSearch} />
      <br />

      {searchBook || query ? null : (
        <div style={{ 'color': 'black', 'background': 'white', 'opacity': '0.6', 'width': '53em', 'display': 'block', 'margin': '0 auto ', 'paddingBottom': '20px' }} >
          <img src="" alt="NYU - Logo" />
          <div>
            <h2>Welcome to our Book Search App</h2>
            <p>"Welcome to Boom Book Library, an app designed to help you discover your next great
              read. Our app utilizes the Google Books API to provide you with a vast library of
              books to search through. Simply type in the name of a book you're interested in,
              and our app will fetch all relevant information about it, including its title, author, cover art, and more. </p>
            <p>
              We understand that finding the perfect book can be daunting, which is why our app
              offers a range of features to help you narrow down your search. You can filter your
              results by genre, publication date, author, and more, ensuring that you find exactly
              what you're looking for. </p>

            <p>In addition to our search functionality, our app also offers a range of social features.
              You can rate books you've read, leave reviews, and share your thoughts with other users.
              We believe that sharing your love of books is an essential part of the reading experience,
              and we've designed our app to facilitate that.</p>

            <p>Thank you for choosing Boom Book Library, and happy reading!"</p>
          </div>
          <p>Features:</p>
          <div >
            <ul style={{ 'textAlign': 'left' }}>
              <li>Search for books by title, author, or keyword.</li>
              <li>View book details including description, author, and publication information.</li>
              <li>Rate books using our star rating system.</li>
            </ul>
          </div>
        </div>
      )}
      <BookShow data={searchResults} />
      <div className="footer-links">
      <Footer></Footer>
    </div>
    </div>
    
  );
}

export default App;