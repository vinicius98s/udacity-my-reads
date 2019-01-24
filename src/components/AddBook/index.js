import React from 'react';
import { Spring } from 'react-spring';
import { FormWrapper, StyledInput, LoadingWrapper } from './styled'

import { search } from '../../BooksAPI';

import Loading from "../Loading";


class AddBook extends React.Component {
    state = {
        query: {},
        animationClosing: false,
        loadingQuery: false,
        requestError: false
    }

    handleAddBook = (e) => {
        e.preventDefault();
        const query = e.target.query.value;

        this.setState(state => ({
            loadingQuery: !state.loadingQuery
        }), () => {
            search(query)
                .then(response => {
                    this.setState(() => ({
                        query: response
                    }), () => {
                        this.setState(state => ({
                            loadingQuery: !state.loadingQuery
                        }))
                    })
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
            this.backHomePage()
        })
    }
    
    render() {
        return(
            <Spring
                from={!this.state.animationClosing ? {transform: 'translateY(-100px)'} : {transform: 'translateY(0)'}}
                to={!this.state.animationClosing ? {transform: 'translateY(0px)'} : {transform: 'translateY(-100px)'}}>
                {transform => (
                    <FormWrapper>
                        <div className='search-form' style={transform}>
                            <span className='arrow-right' onClick={this.closingAnimation}>🡠</span>
                            <form onSubmit={(e) => {this.handleAddBook(e)}}>
                                <StyledInput type='text' name='query' placeholder='TELL ME ANY TYPE OF BOOK' />
                            </form>
                        </div>
                        
                        {this.state.loadingQuery && (
                            <LoadingWrapper>
                                <Loading />
                            </ LoadingWrapper>
                        )}

                        {this.state.requestError && (
                            <h1>Sorry, something went wrong <span role='img' aria-label='Sad face'>😞</span></h1>
                        )}

                        {this.state.query.error && (
                            <h1>Sorry, couldn't find your book <span role='img' aria-label='Sad face'>😞</span></h1>
                        )}
                    </FormWrapper>
                )}
            </Spring>
        )
    }
}

export default AddBook;