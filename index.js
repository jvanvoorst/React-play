
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import LandingPage from './components/villages/LandingPage.js';
import Demo from './components/villages/Demo.js';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/demo" component={Demo}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
