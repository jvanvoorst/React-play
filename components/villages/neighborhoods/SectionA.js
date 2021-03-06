import React from 'react';
import {Container, Row} from 'react-grid-system';
import SectionDescription from './blocks/SectionDescription.js';
import Laptop from './blocks/houses/Laptop.js';

class SectionA extends React.Component {
    render() {
        return (
            <section className="section-a">
                <Container>
                    <Row>
                        <SectionDescription/>
                        <Laptop/>
                    </Row>
                </Container>
            </section>
        );
    }
}

module.exports = SectionA;
