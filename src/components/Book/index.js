import React, { useState } from 'react';
import { Spring } from "react-spring";
import { BookWrapper, BookModalWrapper } from './styled';

import ChangeShelf from '../ChangeShelf';
import DefaultImg from '../../img/Default.jpg';

const Book = (props) => {
    const [fetchedImage, setFetchedImage] = useState(false);
    const [closingModal, handleCloseModal] = useState(false);
    const [bookModal, setBookModal] = useState(false);
    const [highResBookImage, setHighResBookImage] = useState('');

    const closeBookModal = () => {
        handleCloseModal(true);

        setTimeout(() => {
            setBookModal(false)
        }, 800);

        setFetchedImage(false);
    }

    const handleBookModal = async (book) => {
        handleCloseModal(false);
        setBookModal(book);
        setFetchedImage(false);

        await fetch(`https://www.googleapis.com/books/v1/volumes/${book.id}`)
            .then(res => res.json())
            .then(data => setHighResBookImage(data.volumeInfo.imageLinks))
            .then(() => setFetchedImage(true))
    }

    return(
        <BookWrapper>
            {bookModal && (
                <Spring
                    from={!closingModal ? {transform: 'translateY(-150vh)'} : {transform: 'translateY(0)'}}
                    to={!closingModal ? {transform: 'translateY(0)'} : {transform: 'translateY(-150vh)'}}>
                    {transform => (
                        <BookModalWrapper style={transform}>
                            {fetchedImage && (
                                highResBookImage ?
                                    (highResBookImage.large ?
                                        <img className='large-image' src={highResBookImage.large} alt="" /> :
                                        <img  src={highResBookImage.thumbnail} alt="" />) :
                                    <img src={DefaultImg} alt="" />
                            )}

                            <div className="modal-text">
                                <span className='close' onClick={() => closeBookModal()}>x</span>
                                <h1>More details about the book:</h1>
                                <h3><span>Title:</span> {bookModal.title}</h3>
                                <h3><span>Authors:</span> {bookModal.authors ? bookModal.authors.join(', ') : 'Not specified'}</h3>
                                <h3><span>Tags:</span> {bookModal.categories ? <span className='tags'>{bookModal.categories.join(' ')}</span> : 'Not found'}</h3>
                                <h3><span>Publisher:</span> {bookModal.publisher ? bookModal.publisher : 'Not found'}</h3>
                                <h3><span>Published date:</span> {bookModal.publishedDate.replace(/-/g, '/')}</h3>
                                <h3><span>Number of pages:</span> {bookModal.pageCount}</h3>
                                <h3><span>Language:</span> {bookModal.language.toUpperCase()}</h3>
                                <h3><span>Current shelf:</span></h3>
                                <ChangeShelf
                                    currentBookShelf={bookModal.shelf}
                                    id={bookModal.id}
                                    getBooks={props.getBooks}
                                    handleShelfState={props.handleShelfState}
                                    addBook={props.addBook}
                                    allBooks={props.allBooks}
                                    closeModal={closeBookModal}
                                />
                                <h3 className='description'><span>Description:</span></h3>
                                <p>{bookModal.description}</p>
                            </div>
                        </BookModalWrapper>
                    )}
                </Spring>
            )}

            {props.books.map(book =>
                <div className="book" key={book.id}>
                    {book.imageLinks ? <img onClick={() => handleBookModal(book)} src={book.imageLinks.thumbnail} alt="" /> : <img onClick={() => handleBookModal(book)} src={DefaultImg} alt="" />}
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
}

export default Book;