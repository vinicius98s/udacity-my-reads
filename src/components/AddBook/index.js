import React from 'react';
import { Spring } from 'react-spring';

import { FormWrapper, StyledInput } from './styled';

import { search } from '../../BooksAPI';

import Book from '../Book';

class AddBook extends React.Component {
    state = {
        query: false,
        animationClosing: false,
        loadingQuery: false,
        requestError: false
    }

    handleAddBook = (e) => {
        const query = e.target.value;

        if(!query) {
            this.setState(() => ({
                query: false
            }))

            return;
        }

        search(query)
            .then(response => {
                this.setState((state) => ({
                    query: response,
                    loadingQuery: !state.loadingQuery
                }))
                // Uncomment bellow to simulate bad requests
                // throw new Error('Bad request simulated')
            })
            .catch(err => {
                console.error(err);

                this.setState(() => ({
                    requestError: true,
                    loading: false,
                    query: {}
                }))
            })
    }

    backHomePage = () => {
        setTimeout(() => {
            this.props.history.goBack();
        }, 300)
    }

    closingAnimation = () => {
        this.setState(state => ({
            animationClosing: !state.animationClosing
        }), () => {
            this.backHomePage();
        })
    }

    render() {
        const  { query, requestError, animationClosing } = this.state;

        return(
            <div>
                <Spring
                    from={!animationClosing ? {transform: 'translateY(-100px)'} : {transform: 'translateY(0)'}}
                    to={!animationClosing ? {transform: 'translateY(0px)'} : {transform: 'translateY(-100px)'}}>
                    {transform => (
                        <FormWrapper>
                            <div className='search-form' style={transform}>
                                <span className='arrow-right' onClick={this.closingAnimation}>🡠</span>
                                <form onChange={(e) => {this.handleAddBook(e)}} onSubmit={(e) => e.preventDefault()}>
                                    <StyledInput type='text' name='query' placeholder='TELL ME ANY TYPE OF BOOK' />
                                </form>
                            </div>

                            {!query && (
                                <h1>What're you looking for? <span role='img' aria-label='Thinking face'>🤔</span></h1>
                            )}

                            {requestError && (
                                <h1>Sorry, something went wrong <span role='img' aria-label='Sad face'>😞</span></h1>
                            )}

                            {query.error && (
                                <h1>Sorry, couldn't find your book <span role='img' aria-label='Sad face'>😞</span></h1>
                            )}
                        </FormWrapper>
                    )}
                </Spring>

                {query && query !== {} && !query.error && (
                    <Book
                        books={query}
                        getBooks={this.props.getBooks}
                        handleShelfState={this.props.handleShelfState}
                        allBooks={this.props.books}
                        addBook={true}
                    />
                )}
            </div>
        );
    }
}

export default AddBook;