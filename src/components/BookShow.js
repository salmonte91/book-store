import BookItem from './BookItem'

const BookShow = (props) => {

    const displayBook = props.data.map((book, index) => {

        if(book.id) {
        return <BookItem book={book} key={index} />
        }
        return null
    })
        return (
            <div>
                {displayBook}
            </div>
        )
}

export default BookShow
