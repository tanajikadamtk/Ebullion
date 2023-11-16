import React from 'react';
import './Banner.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="custom-overlay"></div>
            <Container>
                <Row>
                    <Col sm={12} lg={11}>
                        <h1 className='headline_text d-flex align-items-center'>Ready to start investing in precious metal at eBullion?</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
