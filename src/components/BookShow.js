import BookItem from './BookItem'

const BookShow = (props) => {

    const displayBook = props.data.map((book) => {

        return <BookItem book={book} volume={book.volume.info}  key={book.id} />
    })
        return (
            <div>
                {displayBook}
            </div>
        )
}

export default BookShow
