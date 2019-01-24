import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './index.css';

import Menu from './components/Menu';
import Shelf from './components/Shelf';
import AddButton from './components/AddButton';
import AddBook from './components/AddBook';

import { getAll } from './BooksAPI';

class App extends React.Component {
    state = {
        shelfs: ['wantToRead', 'currentlyReading', 'read'],
        currentShelf: 'currentlyReading',
        books: {}
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
                    books: data.filter(book => book.shelf === this.state.currentShelf)
                }))
            })
        console.log(this.state.books)
    }

    componentDidMount() {
        this.getBooks();
    }

    componentDidUpdate() {
        this.getBooks();
    }
    
    render() {
        const { currentShelf } = this.state;

        return (
            <Router>
                <div className='container'>
                    <Menu currentShelf={currentShelf} handleShelfState={this.handleShelfState} />
                    <div className="wrapper">
                        <Switch>
                            <Route exact path="/"><Redirect to="/currently-reading" /></Route>
                            <Route exact path="/currently-reading" render={(props) => <Shelf {...props} currentShelf={this.state.currentShelf} handleShelfState={this.handleShelfState} />} />
                            <Route exact path="/want-to-read" render={(props) => <Shelf {...props} currentShelf={this.state.currentShelf} handleShelfState={this.handleShelfState} />} />
                            <Route exact path="/read" render={(props) => <Shelf {...props} currentShelf={this.state.currentShelf} handleShelfState={this.handleShelfState} />} />
                            <Route 
                                path="/add"
                                component={AddBook}
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
