import React from 'react';

class DemoLink extends React.Component {
    render() {
        return (
            <div>
                <a href="#">
                    <span className="demo-link">
                    Demo
                    </span>
                </a>
            </div>
        );
    }
}

module.exports = DemoLink;
