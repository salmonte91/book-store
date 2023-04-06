import React, { useState, useEffect } from 'react';
import axios from 'axios';
// require('dotenv').config();

// the variable inside teh main branch was searchBook, although i had a similar var in the SearchBar component
// so i decide to change it to BookItem

const BookItem= ({ book, volume }) => {

 
  return (
    <div>
      
          <h2>{volume.title ? volume.title : 'No title available'}</h2>
          
    </div>
  );
}

export default BookItem;