import React from 'react';
import Comments from './Comments';

import logo from './logo.svg';
import './App.css';
import show from './views/books/show.jsx';


function App() {
  return (
    <div className="App">
      <h1>Welcome to our Bookstore!</h1>
      <Comments />
    </div>
  );
}

export default App;
