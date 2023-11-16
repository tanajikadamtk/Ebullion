import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomButton from '../../components/CustomButton/CustomButton';
import './Empty.scss'

const Empty = (props) => {
    return (
        <div>
            <Row>
                <Col className='empty-wrapper pt-5 d-flex flex-column justify-content-center align-items-center'>
                    <img src={props.src} alt="" className='img-fluid' />
                    <h3>Your {props.head} is empty</h3>
                    <p>Add something to make it happy</p>
                    <CustomButton name="Continue Shopping" />
                </Col>
            </Row>
        </div>
    )
}

export default Empty
