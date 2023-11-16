import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import CustomIconButton from '../../components/CustomIconButton/CustomIconButton';
import Headline from '../../components/Headline/Headline';
import CartImg from '../../assets/images/product/cart_item.png'
import BinImg from '../../assets/images/icons/bin.svg'
import EditImg from '../../assets/images/icons/edit.svg'
import ChevronLeft from '../../assets/images/icons/chevron-left.svg'
import ChevronRight from '../../assets/images/icons/chevron-right.svg'
import CartTotal from '../../components/CartTotal/CartTotal';
import './Profile.scss';


const Profile = () => {
    return (
        <div className='mt-4'>
            <Container>
                <Row>
                    <Col><BreadCrumb /></Col>
                </Row>

                <div className='profile-main my-5'>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col className='mb-0'><Headline text='Profile' /></Col>
                            </Row>

                            <div className='contact-details p-4 mt-3 mb-4'>
                                <h6 className='mb-2'>Contact Details</h6>

                                <label>Full Name</label>
                                <div className='custom-flex d-flex justify-content-between align-items-center pb-3 border-btm'>
                                    <p>First Last</p>
                                    <p className='text-primary'>Change</p>
                                </div>

                                <label>Email address</label>
                                <div className='custom-flex d-flex justify-content-between align-items-center pb-3 border-btm'>
                                    <p>abc@xyz.com</p>
                                    <p className='text-primary'>Change</p>
                                </div>

                                <label>Phone Number</label>
                                <div className='custom-flex d-flex justify-content-between align-items-center pb-3 border-btm'>
                                    <p>+91 1234567890</p>
                                    <p className='text-primary'>Change</p>
                                </div>

                                <label>Password</label>
                                <div className='custom-flex d-flex justify-content-between align-items-center'>
                                    <p>************</p>
                                    <p className='text-primary'>Change</p>
                                </div>
                            </div>

                            <div className='order-history-wrapper'>
                                <h6 className='mt-4 mb-3'>Order History</h6>
                                <div className='order-history p-4 border-btm d-flex flex-column flex-sm-row gap-sm-0 gap-4 justify-content-between align-items-start align-items-sm-center mb-3'>
                                    <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3'>
                                        <img src={CartImg} alt="" className='img-fluid' />
                                        <div>
                                        <h5>Gold Bar (50 gm)</h5>
                                            <p className='p-data'>Quantity 1</p>
                                            <p>₹ 650</p>
                                        </div>
                                    </div>

                                    <a className='cta d-flex justify-content-between align-items-center gap-2' href="" target="_blank">
                                        View Details <img src={ChevronRight} alt="" className='img-fluid' />
                                    </a>
                                </div>

                                <div className='order-history p-4 border-btm d-flex flex-column flex-sm-row gap-sm-0 gap-4 justify-content-between align-items-start align-items-sm-center mb-3'>
                                    <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3'>
                                        <img src={CartImg} alt="" className='img-fluid' />
                                        <div>
                                            <h5>Gold Bar (50 gm)</h5>
                                            <p>Quantity 1</p>
                                            <p>₹ 650</p>
                                        </div>
                                    </div>

                                    <a className='cta d-flex justify-content-between align-items-center gap-2' href="" target="_blank">
                                        View Details <img src={ChevronRight} alt="" className='img-fluid' />
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className='address-main mt-3'>
                                <div className='address-head d-flex justify-content-between align-items-center'>
                                    <h6 className='mb-0'>Address</h6>
                                    <p className='d-flex justify-content-between align-items-center gap-2'>
                                        <span>+</span>
                                        Add New</p>
                                </div>

                                <div className="address-body">
                                    <div className="address-block p-4">
                                        <h3 className='mb-3'>FirstName LastName</h3>
                                        <p className='mb-2'>+91 7016812370</p>
                                        <p className='p-data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                             standard dummy text ever since the 1500s when an unknown printer.</p>
                                        <div className='d-flex justify-content-end gap-3 align-items-center'>
                                            <img src={BinImg} alt="" className='img-fluid'/>
                                            <img src={EditImg} alt="" className='img-fluid'/>
                                        </div>
                                    </div>

                                    <div className="address-block p-4">
                                        <h3 className='mb-3'>FirstName LastName</h3>
                                        <p className='mb-2'>+91 7016812370</p>
                                        <p className='p-data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                             standard dummy text ever since the 1500s when an unknown printer.</p>
                                        <div className='d-flex justify-content-end gap-3 align-items-center'>
                                            <img src={BinImg} alt="" className='img-fluid'/>
                                            <img src={EditImg} alt="" className='img-fluid'/>
                                        </div>
                                    </div>
                                </div>



                                <div className='mt-4 d-flex justify-content-end'>
                                    <CustomIconButton src={ChevronLeft} name="Return to Shop" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <Row>

                </Row>
            </Container>
        </div>
    )
}

export default Profile

