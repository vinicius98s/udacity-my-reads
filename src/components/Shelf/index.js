import React from 'react';

import Book from '../Book';

const Read = (props) => {
    if(!props.currentShelf) {
        if(props.location.pathname === '/currently-reading') {
            props.handleShelfState('currentlyReading');
        }

        if(props.location.pathname === '/want-to-read') {
            props.handleShelfState('wantToRead');
        }

        if(props.location.pathname === '/read') {
            props.handleShelfState('read');
        }
    }

    const filteredBooks = props.books.filter(book => book.shelf === props.currentShelf);

    return (
        <Book
            books={filteredBooks}
            getBooks={props.getBooks}
            handleShelfState={props.handleShelfState}
        />
    )
}

export default Read;