import BookItem from './BookItem';

const BookShow = (props) => {
    const displayBook = props.data.map((book, rating) => {
        return <BookItem book={book} key={book.id} rating={rating} />
    });

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', height: '100vh' }}>
            {displayBook}
        </div>
    );
};

export default BookShow;

