import React, { useState, useEffect } from 'react';
import axios from 'axios';
// require('dotenv').config();

// the variable inside teh main branch was searchBook, although i had a similar var in the SearchBar component
// so i decide to change it to BookItem

const BookItem= ({ book, volume }) => {

  const [volume, setVolume] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY
  const API_URL = `https://www.googleapis.com/books/v1/volumes/${book.id}?key=${API_KEY}`;

  useEffect(() => {
    const getVolume = async() => {

        
        // ? This is gonna get the id of the book instead of the query that i was using on searchBar
        // ? pending
       
        try {
            const res = await axios.get(API_URL)
            setVolume(res.data.volumeinfo);
        } catch (err) {
            console.log(err)
        }
    }
    getVolume()
  }, [book.id])

  // there was an input tag, a buttom tag & an UL tag mapping each book
  // i remove them because the SearchBar component together with the BookShow
  // are holding those functionalities
  return (
    <div>
          <h2>{volume.title}</h2>
          {/* <img/> */}
    </div>
  );
}

export default BookItem;