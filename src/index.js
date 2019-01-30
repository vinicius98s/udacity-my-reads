import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './index.css';

import Menu from './components/Menu';
import Shelf from './components/Shelf';
import AddButton from './components/AddButton';
import AddBook from './components/AddBook';
import Loading from "./components/Loading";

import { getAll } from './BooksAPI';

class App extends React.Component {
    state = {
        shelfs: ['wantToRead', 'currentlyReading', 'read'],
        currentShelf: '',
        allBooks: false
    }

    handleShelfState = (shelf) => {
        this.setState(() => ({
            currentShelf: shelf
        }));
    }

    getBooks = () => {
        getAll()
            .then((data) => {
                this.setState(() => ({
                    allBooks: data
                }))
            })
    }

    componentDidMount() {
        this.getBooks();
    }
    
    render() {
        const { currentShelf, allBooks } = this.state;

        if(!allBooks) {
            return (
                <Loading />
            )
        }

        return (
            <Router>
                <div className='container'>
                    <Menu 
                        currentShelf={currentShelf} 
                        handleShelfState={this.handleShelfState} 
                    />

                    <div className="wrapper">
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/currently-reading" />
                            </Route>
                            
                            <Route 
                                exact
                                path="/add"
                                render={ (props) => 
                                    <AddBook {...props} 
                                        getBooks={this.getBooks} 
                                        books={allBooks} 
                                        handleShelfState={this.handleShelfState} 
                                        allBooksOnShelf={allBooks} 
                                    />
                                }
                            />

                            <Route 
                                path="/"
                                render={ (props) => 
                                    <Shelf {...props} 
                                        currentShelf={currentShelf} 
                                        books={allBooks} 
                                        handleShelfState={this.handleShelfState} 
                                        getBooks={this.getBooks} 
                                    /> 
                                } 
                            />
                        </Switch>

                        <AddButton />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
