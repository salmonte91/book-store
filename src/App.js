import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import axios from 'axios'
import BookShow from './components/BookShow';


function App() {

  let [searchBook, setSearchBook] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search the Book you want!')
  const [query, setQuery] = useState('');

  const API_KEY = process.env.KEY
  // const API_URL = `https://www.googleapis.com/books/v1/volumes?q=&key=${API_KEY}`
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`


  useEffect(() => {
    if(searchBook) {
      document.title = `${searchBook} Book`
      // fetch data using axios
      const axiosData = async () => {
        try {
          const res = await axios.get(API_URL + searchBook)
          // Making sure the res has something to return
          const resData = await res.json()
          if(resData.results.length > 0) {
            setData(resData.results)
          } else {
            setMessage('Not found')
          }
        } catch (err) {
          console.log(err)
        }
      }
      axiosData()
    }
  }, [searchBook])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchBook(term)
  }
  console.log(process.env)
  return (
    <div className="App">
      <h1>BOOM BOOKSTORE </h1>
       <SearchBar handleSearch={handleSearch} />
       {message}
       <BookShow data={data}/>
    </div>
  );
}

export default App;
