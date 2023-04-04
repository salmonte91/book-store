const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit Book</h1>
        <form method="POST" action={`/books/${data.id}?_method=PUT`}>
          <div className="form-group">
            <label htmlFor="name">Book Title</label>
            <input className="form-control" id="name" name="name" value={data.book.name} required />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Cover Art</label>
            <input className="form-control" id="pic" name="pic" value={data.book.pic} />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input className="form-control" id="author" name="author" value={data.book.city} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input className="form-control" id="description" name="description" value={data.book.state} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input className="form-control" id="price" name="price" value={data.book.founded} />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              className="form-control"
              id="genre"
              name="genre"
              value={data.book.cuisines}
              required
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Update Book" />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
