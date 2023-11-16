import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './ProductCard.scss';

const ProductCard = ({productDetails} ) => {
  return (
<Col xs={12} md={6} lg={4}>
    <Card className='mb-4'>
      <Card.Img variant="top" src={productDetails.image} className='img-fluid'/>
      <div className='wishlist-main'>
        <input type="checkbox" className="wishlist-check" />
        <span className='wishlist_icon'></span>
      </div>
      <Card.Body>
        <div>
        <Card.Title>Metal Type</Card.Title>
        <p className='product-description text-primary mb-2'>{productDetails.title}</p>

        <Card.Title>Metal Weight</Card.Title>
        <p className='product-description text-primary'>{productDetails.weight}</p>
        </div>
        
        <div className='stroke'></div>

        <div>
        <Card.Title>Metal Fineness</Card.Title>
        <p className='product-description text-primary mb-2'>{productDetails.fineness}</p>

        <Card.Title>Stock Details</Card.Title>
        <p className={`product-description ${productDetails.status === 'In Stock' ? 'text-success' : 'text-danger'}`}>{productDetails.status}</p>
        </div>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default ProductCard
