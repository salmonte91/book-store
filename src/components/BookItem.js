import React, { useState, useEffect } from 'react';
import axios from 'axios';
// require('dotenv').config();

// the variable inside teh main branch was searchBook, although i had a similar var in the SearchBar component
// so i decide to change it to BookItem

const BookItem= ({ book, volume }) => {

  // there was an input tag, a buttom tag & an UL tag mapping each book
  // i remove them because the SearchBar component together with the BookShow
  // are holding those functionalities
  return (
    <div>
        {/* {boo} */}
          <h2>{volume.title}</h2>
          {/* <img/> */}
    </div>
  );
}

export default BookItem;