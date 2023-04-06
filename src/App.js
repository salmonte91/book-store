import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import axios from 'axios'
import BookShow from './components/BookShow';

function App() {

  //remove query & data variable since the other components are being incharge of that
  let [searchBook, setSearchBook] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search the Book you want!')
  const [query, setQuery] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`

  useEffect(() => {
    
    if (searchBook) {
      document.title = `${searchBook} Book`
      setQuery(searchBook);
    }
  }, [searchBook]);


  useEffect(() => {
    
    if(query) {
      // fetch data using axios
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
  }, [query, API_URL])

  const searchResults = data.filter( book => book.volumeInfo?.title)

  const handleSearch = (term) => {
   
    setSearchBook(term)

  }


  console.log(API_KEY)
  return (
    <div className="App">
      <h1>BOOM BOOKSTORE </h1>
       <SearchBar handleSearch={handleSearch} />
       {message}
       <BookShow data={searchResults}/>
       <br/>
       {/* <Comment/> */}
    </div>
  );
}

export default App;