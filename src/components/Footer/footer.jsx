import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import eblogo from '../../assets/images/logo/eb-logo.png';
import facebook from '../../assets/images/icons/facebook.svg';
import twitter from '../../assets/images/icons/twitter.svg';
import instagram from '../../assets/images/icons/instagram.svg';
import youtube from '../../assets/images/icons/youtube.svg';
import linkedin from '../../assets/images/icons/linkedin.svg';
import './footer.scss';
// import Stack from 'react-bootstrap/Stack';


const Footer = () => {
  return (
    <footer className='py-5 footer'>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} className='pb-4 pb-lg-0'>
            <Image src={eblogo} className='pb-3 img-fluid' />
            <p className='text-white'>
              VIOS Tower, 22<sup>nd</sup> Floor, <br className='footer-break' />
              New Cuffe Parade, <br className='footer-break' />
              Off Eastern Freeway, Wadala, <br className='footer-break' />
              Mumbai 400 037.
            </p>
            <p><a href="mailto:help@ebullion.in">help@ebullion.in</a></p>
          </Col>

          <Col xs={12} sm={6} md={4} lg={2} className='pb-4 pb-lg-0'>
            <ul className='list-unstyled'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Precious Metals</a></li>
              <li><a href="#">Why eBullion?</a></li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={4} lg={2} className='pb-4 pb-lg-0'>
            <ul className='list-unstyled'>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={4} lg={2} className='pb-4 pb-lg-0'>
            <ul className='list-unstyled'>
              <li><a href="#">Gold</a></li>
              <li><a href="#">Silver</a></li>
              <li><a href="#">Platinum</a></li>
              <li><a href="#">Palladium</a></li>
            </ul>
          </Col>


          <Col xs={12} sm={12} md={4} lg={3} className='justify-content-between d-flex flex-column align-items-center text-center'>
            {/* <Stack className="text-center" direction="horizontal" gap={3}>
              <a href="#"><Image src={facebook} className='img-fluid' /></a>
              <a href="#"><Image src={twitter} className='img-fluid' /></a>
              <a href="#"><Image src={instagram} className='img-fluid' /></a>
              <a href="#"><Image src={youtube} className='img-fluid' /></a>
              <a href="#"><Image src={linkedin} className='img-fluid' /></a>
            </Stack> */}
            <ul className='list-unstyled d-flex social-media-icons pb-3 pb-md-0'>
              <li><a href="#"><Image src={facebook} className='img-fluid' /></a></li>
              <li><a href="#"><Image src={twitter} className='img-fluid' /></a></li>
              <li><a href="#"><Image src={instagram} className='img-fluid' /></a></li>
              <li><a href="#"><Image src={youtube} className='img-fluid' /></a></li>
              <li><a href="#"><Image src={linkedin} className='img-fluid' /></a></li>
            </ul>
            <p>Copyright © {new Date().getFullYear()} ebullion.in</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
