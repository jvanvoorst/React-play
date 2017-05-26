
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/villages/LandingPage.js';

class App extends React.Component {
    render() {
        return (
            <LandingPage/>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
