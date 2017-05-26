import React from 'react';

import Header from './neighborhoods/Header.js';
import Footer from './neighborhoods/Footer.js';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

module.exports = Demo;
