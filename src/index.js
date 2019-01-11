import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.css';

import Menu from './components/Menu';
import Shelf from './components/Shelf';
import AddButton from './components/AddButton';
import AddBook from './components/AddBook';

class App extends React.Component {
    
    render() {
        return (
            <Router>
                <div className='container'>
                    <Menu />
                    <div className="wrapper">
                        <Route 
                            path="/"
                            exact
                            render={() => <Shelf currentShelf={'Currently reading'} />}
                        />
                        <Route 
                            path="/want-to-read"
                            render={() => <Shelf currentShelf={'Want to read'} />}
                        />
                        <Route 
                            path="/currently-reading" 
                            render={() => <Shelf currentShelf={'Currently reading'} />}
                        />
                        <Route 
                            path="/read" 
                            render={() => <Shelf currentShelf={'Read'} />}
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
