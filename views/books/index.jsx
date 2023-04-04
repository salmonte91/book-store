const React = require("react");
const Def = require("../default");

function index(data) {
  let booksFormatted = data.books.map((book) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/books/${book.id}`}>{book.name}</a>
        </h2>
        <p className="text-center">{place.cuisines}</p>
        <img src={book.pic} alt={book.name} width="250" height="250" />
        <p className="text-center">
          Located in {book.city}, {book.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Book Store</h1>
        <div className="row">{booksFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
