const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className="alert-danger">
                {data.message}
            </h4>
        )
    }
    return (
        <Def>
          <main>
            <h1>Add a New Book</h1>
            {message}
            <form method="POST" action="/books">
                <div className="form-group">
                    <label htmlFor="name">Book Title</label>
                    <input className="form-control" id="name" name="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Covert Art</label>
                    <input className="form-control" type="url" id="pic" name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id="author" name="author" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input className="form-control" id="description" name="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" id="price" name="price" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <input type="number" className="form-control" id="genre" name="genre" defaultValue={new Date().getFullYear()}/>
                </div>
                <input className="btn btn-primary" type="submit" value="Add Book" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form
