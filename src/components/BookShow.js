import React from 'react';
import BookItem from './BookItem';

const BookShow = (props) => {
    const displayBook = props.data.map((book) => {
        return <BookItem book={book} key={book.id} />
    });

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', height: '100vh' }}>
            {displayBook}
        </div>
    );
};

export default BookShow;

