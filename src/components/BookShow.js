import BookItem from './BookItem'

const BookShow = (props) => {

    const displayBook = props.data.map((item, index) => {
        return (
            <BookItem item={item} key={index} />
        )
    })
        return (
            <div>
                {displayBook}
            </div>
        )
}

export default BookShow
