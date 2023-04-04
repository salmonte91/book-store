import React, { useState } from 'react';
import { google } from 'googleapis';


const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    const results = await google.books('v1').volumes.list({
      q: query,
    });

    setBooks(results.data.items);
  }

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={searchBooks}>Search</button>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;