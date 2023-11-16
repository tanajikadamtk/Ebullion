import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import CartImage from '../../assets/images/background/empty-cart.png'
import WishlistImage from '../../assets/images/background/empty-wishlist.png'
import Empty from '../../components/Empty/Empty';

const SelectionEmpty = () => {
    return (
        <div className='cart py-5'>
            <Container>
                <Row>
                    <Col><BreadCrumb /></Col>
                </Row>

                <Row>
                    {/* <Empty src={CartImage} head='cart' /> */}
                    <Empty src={WishlistImage} head='wishlist' />
                </Row>
            </Container>
        </div>
    )
}

export default SelectionEmpty
