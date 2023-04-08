import React, { useState, useEffect } from "react";
import axios from "axios";

const BookItem = ({ book }) => {
    
    return (
        <div>
          {book.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      );
    };

export default BookItem;
