import React from 'react';
import { Spring } from 'react-spring';
import { FormWrapper, StyledInput } from './styled'

import { search } from '../../BooksAPI';

import Loading from "../Loading";


class AddBook extends React.Component {
    state = {
        query: {},
        animationClosing: false,
        loadingQuery: false
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
                })
        })
    }

    backHomePage = () => {
        setTimeout(() => {
            return (
                this.props.history.push('/')
            )
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
                            <Loading />
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