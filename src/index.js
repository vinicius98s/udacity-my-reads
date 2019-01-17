import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Redirect, history } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import './index.css';

import Menu from './components/Menu';
import Shelf from './components/Shelf';
import AddButton from './components/AddButton';
import AddBook from './components/AddBook';

class App extends React.Component {
    state = {
        shelfs: ['wantToRead', 'currentlyReading', 'read'],
        currentShelf: ''
    }

    componentDidMount() {
        this.handleShelfState('currentlyReading');
        
    }

    handleShelfState = (shelf) => {
        this.setState(() => ({
            currentShelf: shelf
        }));
    }

    checkChange = () => {
        history.listen((location, action) => {
            // location is an object like window.location
            console.log(action, location.pathname, location.state)
        });
    }
    

    render() {
        const { currentShelf } = this.state;

        if(currentShelf === '') {
            return (
                <Router>
                    <Redirect to="/currently-reading"/>
                </Router>
            )
        }

        return (
            <Router>
                <div className='container'>
                    <Menu currentShelf={currentShelf} handleShelfState={this.handleShelfState} />
                    <div className="wrapper">
                        <Route 
                            path="/want-to-read"
                            onChange={() => this.checkChange()}
                            render={() => 
                                <Shelf 
                                    currentShelf={'Want to read'} 
                                    handleCurrentShelf={this.handleCurrentShelf} 
                                />
                            }
                        />
                        <Route 
                            path="/currently-reading"
                            onChange={() => this.checkChange()}
                            render={() => 
                                <Shelf 
                                    currentShelf={'Currently reading'} 
                                    handleCurrentShelf={this.handleCurrentShelf} 
                                />
                            }
                        />
                        <Route 
                            path="/read"
                            onChange={() => this.checkChange()}
                            render={() => 
                                <Shelf 
                                    currentShelf={'Read'} 
                                    handleCurrentShelf={this.handleCurrentShelf} 
                                />
                            }
                        />
                        <Route 
                            path="/add"
                            component={AddBook}
                        />
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
