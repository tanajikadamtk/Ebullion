import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import eblogo from '../../assets/images/logo/eb-logo.png';
import searchIcon from '../../assets/images/icons/magnifier.svg';
import loggerIcon from '../../assets/images/icons/logger.svg';
import favouriteIcon from '../../assets/images/icons/favourites.svg';
import cartIcon from '../../assets/images/icons/cart.svg';
import NotSignedIn from '../NotSignedIn/NotSignedIn';
import SignedIn from '../SIgnedIn/SignedIn';
import SearchBox from '../SearchBox/SearchBox';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './header.scss'

export const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark header-navigation py-3 py-lg-0">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={eblogo} className='img-fluid' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-content">
              <Nav.Link href="#Home">Home</Nav.Link>
              <NavDropdown title="About eBullion" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Action 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Action 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Products">Products</Nav.Link>
            </Nav>
            <Nav className='ps-lg-5 social-media-icons d-flex flex-row'>
              <Nav.Link href="#search" className='search-show-hide'>
                <Image src={searchIcon} className='img-fluid' />
                {/* <SearchBox/> */}
                </Nav.Link>
              <Nav.Link href="#logger" className='logger-show-hide'>
                <Image src={loggerIcon} className='img-fluid' />
                {/* <SignedIn /> */}
                 {/* <NotSignedIn /> */}
              </Nav.Link>
              <Nav.Link href="#favourite"><Image src={favouriteIcon} className='img-fluid' />
                <span>0</span>
              </Nav.Link>
              <Nav.Link href="#cart"><Image src={cartIcon} className='img-fluid' />
                <span>0</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  )
}
