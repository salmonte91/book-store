import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config();

// the variable inside teh main branch was searchBook, although i had a similar var in the SearchBar component
// so i decide to change it to BookItem

const BookItem= ({ book }) => {

  const [volume, setVolume] = useState({});

  useEffect(() => {
    const getVolume = async() => {
        const API_KEY = process.env.API_KEY;
        // ? This is gonna get the id of the book instead of the query that i was using on searchBar
        // ? pending
        const API_URL = `https://www.googleapis.com/books/v1/volumes/${book}?key=${API_KEY}`;
        try {
            const res = await axios.get(API_URL)
            setVolume(res.data.volumeinfo);
        } catch (err) {
            console.log(err)
        }
    }
    getVolume()
  }, [book])

  // there was an input tag, a buttom tag & an UL tag mapping each book
  // i remove them because the SearchBar component together with the BookShow
  // are holding those functionalities
  return (
    <div>
          <h4>{book}</h4>
          <h2>{volume.title}</h2>
          {/* <img/> */}
    </div>
  );
}

export default BookItem;