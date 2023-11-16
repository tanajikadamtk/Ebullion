import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProductCard from '../../components/product/productCard';
import { data } from '../../utils/data';
import './Homepage.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Banner from '../../components/Banner/Banner';
import chevron from '../../assets/images/icons/chevron-up.svg';
import { useState } from 'react';
import funnel from '../../assets/images/icons/funnel.png'
import close from '../../assets/images/icons/close.svg'


const HomePage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="homepage_wrapper">
            {/* Banner Goes here */}
            <Banner />

            <section className='product-section py-5'>
                <Container>
                    <Row>
                        <Col xs={12} lg={3}>
                            <span className='funnel'>
                                <img src={funnel} alt="" onClick={handleShow} />
                            </span>
                            <div className={`sidebar-wrapper ${show ? 'active' : ''}`}>
                                <img src={close} className='close' alt="" onClick={handleClose} />
                                {/* BreadCrumb goes here*/}
                                <BreadCrumb />
                                <h4 className='m-0'>Refine By</h4>
                                {/* Sidebar goes here */}
                                <Sidebar />
                            </div>
                        </Col>

                        <Col xs={12} lg={9}>
                            <div className="items-filter mb-3">
                                <Row className='align-items-center justify-content-center justify-content-sm-between text-center text-sm-start'>
                                    <Col sm={6} lg={8} className='mb-3 mb-sm-0'>
                                        <p className='text-primary'>51,732 Items Found</p>
                                    </Col>

                                    <Col sm={6} lg={4}>
                                        <div className="dropdown">
                                            <ul id="my-dropdown2">
                                                <li><a href="#">Action A</a></li>
                                                <li><a href="#">Action B</a></li>
                                            </ul>
                                            <a href="#my-dropdown2"
                                                aria-controls="my-dropdown2"
                                                role="button"
                                                data-toggle="dropdown"
                                                id="my-dropdown2-btn">
                                                Sort By: New Arrival
                                            </a>
                                            <a href="#my-dropdown2-btn"
                                                aria-controls="my-dropdown2"
                                                role="button"
                                                data-toggle="dropdown"
                                                className="close">
                                                Close dropdown
                                            </a>

                                            <span><img src={chevron} alt="" /></span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Product Card Goes here */}
                            <div className='card-wrapper'>
                                <Row>{
                                    data.map((item, index) => (
                                        <ProductCard productDetails={item} key={index} />
                                    ))
                                }
                                </Row>
                            </div>

                            <div className="pagination-section">
                                <div className="row align-items-start justify-content-start">
                                    <div className="col d-flex justify-content-sm-start justify-content-center mb-4 mb-sm-0 align-items-center">
                                        <p>Page</p>
                                        <select className="form-select">
                                            <option disabled>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="3">10</option>
                                        </select>
                                        <p>of 10</p>
                                    </div>

                                    <div className="col d-flex justify-content-sm-end justify-content-center">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link prev-page" href="#" tabIndex="-1" aria-disabled="true">Prev</a>
                                                </li>
                                                <li className="page-item"><a className="page-link page-active" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link dots" href="#">...</a></li>
                                                <li className="page-item"><a className="page-link" href="#">10</a></li>
                                                <li className="page-item">
                                                    <a className="page-link next-page" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )

};


export default HomePage
