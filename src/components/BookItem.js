// the variable inside teh main branch was searchBook, although i had a similar var in the SearchBar component
// so i decide to change it to BookItem

// we destructured props from bookShow

const BookItem= ({ book}) => {

  return (
    <div>
      
          <h2>{book.volumeInfo.title ? book.volumeInfo.title : 'No title available'}</h2>
          <p>
        <strong>Author:</strong>{" "}
        {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown"}
      </p>
          
    </div>
  );
}

export default BookItem;