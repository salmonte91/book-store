// the variable inside teh main branch was searchBook, although i had a similar var in the SearchBar component
// so i decide to change it to BookItem

// we destructured props from bookShow

const BookItem = ({ book }) => {

    //inside the return i use a ternary operator so when theres no title available it manage the error
    //same primciple with author 
    //use join (, ) so when a book has multiple authors, this get separate by a coma
    return (
        <div>
            <h2>{book.volumeInfo.title}</h2>
            <p>
                <strong>Author:</strong>{" "}
                {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown"}
            </p>
        </div>
    );
}

export default BookItem;