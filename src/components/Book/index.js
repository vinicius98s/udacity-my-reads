import React from 'react';

import ChangeShelf from '../ChangeShelf';
import BookWrapper from './styled';
import DefaultImg from '../../img/Default.jpg';

const Book = (props) => {
    return(
        <BookWrapper>
            {props.books.map(book =>
                <div className="book" key={book.id}>
                    {book.imageLinks ? <img src={book.imageLinks.thumbnail} alt="" /> : <img src={DefaultImg} alt="" />}
                    <h3>{book.title}</h3>
                    <p>{book.authors ? book.authors.join(', ') : false}</p>
                    <ChangeShelf
                        currentBookShelf={book.shelf}
                        id={book.id}
                        getBooks={props.getBooks}
                        handleShelfState={props.handleShelfState}
                        addBook={props.addBook}
                        allBooks={props.allBooks}
                    />
                </div>
            )}
        </BookWrapper>
    )
};

export default Book;