import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomButton from '../../components/CustomButton/CustomButton';
import NotFound from '../../assets/images/background/not-found.png'
import './PageNotFound.scss'

const PageNotFound = (props) => {
    return (
        <div>
           
                <Col className='empty-wrapper  d-flex flex-column justify-content-center align-items-center'>
                    <img src={NotFound} alt="" className='img-fluid' />
                    <h3>Page not found</h3>
                    <p>The page you are looking for does not exist an other<br className='d-none d-lg-block'/> error occured, go back to home page</p>
                    <CustomButton name="Back to home" />
                </Col>
           
        </div>
    )
}

export default PageNotFound
