
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomIconButton from '../../components/CustomIconButton/CustomIconButton';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import trolley from '../../assets/images/icons/trolley.svg';
import bag from '../../assets/images/icons/bag.svg'
import Tabs from '../../components/Tabs/Tabs';
import Quantity from '../../components/Quantity/Quantity';
import ProductSwiper from '../../components/ProductSwiper/ProductSwiper';
import './ProductDetails.scss';

const ProductDetails = () => {
  const [thumbnailPosition, setThumbnailPosition] = useState("left");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setThumbnailPosition("bottom");
      } else {
        setThumbnailPosition("left");
      }
    };

    // Initialize the thumbnailPosition based on the initial window width
    handleResize();

    // Add a window resize event listener to adjust thumbnailPosition
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className='mt-4'>
      <Container>
        <Row>
          <Col><BreadCrumb /></Col>
        </Row>

        <section className='product-details-wrapper my-5'>
          <Row>
            <Col lg={1} className='d-none d-lg-block'></Col>
            <Col md={12} lg={6}>
              <div>
                {/* <ProductSwiper thumbnailPosition={thumbnailPosition} /> */}
                <ProductSwiper />
              </div>
            </Col>

            {/* <Col lg={1} className='d-none d-lg-block'></Col> */}

            <Col md={12} lg={4} className="product-details">
              <h3 className="mb-3 mt-3 mt-md-0">Gold Bar 24k, 1000 gm</h3>
              <p className="mb-5">₹13,210 <span>(Incl. of 3% GST)</span></p>
      
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter pincode to check availability" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Check</button>
              </div>

              <div className='wishlist_wrapper d-flex justify-items-start align-items-center'>
                <input type="checkbox" className="wishlist-check" />
                <span className='wishlist_icon'></span>
                <p className='ms-3'>Add to Wishlist</p>
              </div>
              <Quantity />

              <div className='product-cta'>
                <CustomIconButton src={bag} name="Buy Now" />
                <CustomIconButton src={trolley} name="Add to cart" />
              </div>
            </Col>

            <Col lg={1} className='d-none d-lg-block'></Col>
          </Row>
        </section>

        <section className="tab-toggle">
          <Tabs/>
        </section>
      </Container>
    </div>
  )
}

export default ProductDetails
