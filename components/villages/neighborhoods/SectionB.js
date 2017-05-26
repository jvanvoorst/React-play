import React from 'react';
import {Container, Row} from 'react-grid-system';
import ArticleCover from './blocks/houses/ArticleCover.js';
import SectionDescription from './blocks/SectionDescription.js';

class SectionB extends React.Component {
    render() {
        return (
            <section className="section-b">
                <Container>
                    <Row>
                        <ArticleCover/>
                        <SectionDescription/>
                    </Row>
                </Container>
            </section>
        );
    }
}

module.exports = SectionB;
