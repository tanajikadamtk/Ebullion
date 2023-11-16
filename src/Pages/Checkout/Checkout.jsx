import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CustomIconButton from "../../components/CustomIconButton/CustomIconButton";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Headline from "../../components/Headline/Headline";
import ChevronLeft from "../../assets/images/icons/chevron-left.svg";
import CartTotal from "../../components/CartTotal/CartTotal";
import "./Checkout.scss";
import Button from "react-bootstrap/Button";

const Checkout = () => {
  let [isChecked, setIsChecked] = useState(false);

  let handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className="mt-4 checkout">
      <Container>
        <Row>
          <Col>
            <BreadCrumb />
          </Col>
        </Row>

        <Row>
          <Col className="mt-5 h3">
            <Headline text="Cart details" />
          </Col>
        </Row>

        <div className="checkout-wrapper my-2 p-4">
          <Row>
            <Col md={6} lg={6} className="checkout-form">
              <Form.Label htmlFor="fullname">Full Name</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="fullname"
                  aria-describedby="basic-addon3"
                  placeholder="Full name"
                  type="text"
                />
              </InputGroup>

              <Form.Label htmlFor="default_address">Street Address</Form.Label>
              <Form.Control
                className="mb-3"
                id="default_address"
                placeholder="Street Address"
                as="textarea"
              />

              <Form.Group className="mb-4">
                <Form.Check
                  required
                  label="Set address as default"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </Form.Group>

              {!isChecked && (
                <>
                  <Form.Label htmlFor="address">Street Address</Form.Label>
                  <Form.Control
                    className="mb-3 textbox_secondary"
                    id="address"
                    placeholder="Street Address"
                    as="textarea"
                  />
                

              <Row>
                <Col md={4} className="mb-3">
                  <Form.Label htmlFor="state">State</Form.Label>
                  <InputGroup>
                    <Form.Control id="state" placeholder="State" type="text" />
                  </InputGroup>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Label htmlFor="city">City</Form.Label>
                  <InputGroup>
                    <Form.Control id="city" placeholder="City" type="text" />
                  </InputGroup>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Label htmlFor="pincode">Pin Code</Form.Label>
                  <InputGroup>
                    <Form.Control
                      id="pincode"
                      placeholder="Pin Code"
                      type="text"
                    />
                  </InputGroup>
                </Col>
              </Row>

              
               {/* Add Addres Buuton */}
              <div className="Save_address">
                <Row>
                  <Col
                    md={12}
                    className="mb-3  save_button"
                  >
                    <InputGroup>
                      <CustomIconButton
                        variant="primary"
                        id="SaveAddress" className='save-add-button'
                        name="Save Address"
                      >
                        Save Address
                      </CustomIconButton>
                    </InputGroup>
                  </Col>
                </Row>{" "}
              </div>
                  {/* Add Addres Buuton */}
                  </>
              )}
              <Form.Label htmlFor="Phone">
                Phone<span>*</span>
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="Phone"
                  aria-describedby="basic-addon3"
                  placeholder="+91 1234567890"
                  type="text"
                />
              </InputGroup>

              <Form.Label htmlFor="email">
                Email Address<span>*</span>
              </Form.Label>
              <InputGroup>
                <Form.Control
                  id="email"
                  aria-describedby="basic-addon3"
                  placeholder="abc@xyz.com"
                  type="email"
                />
              </InputGroup>
            </Col>

            <Col lg={1} className="d-none d-lg-block"></Col>

            <Col md={6} lg={5} className="checkout-total mt-5 mt-lg-0">
              <CartTotal name="Place Order" />
            </Col>
          </Row>
        </div>

        <Row>
          <Col className="mt-2 mb-5">
            <CustomIconButton src={ChevronLeft} name="Return to Shop" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;


