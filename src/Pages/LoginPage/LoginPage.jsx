import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton/CustomButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import infoIcon from "../../assets/images/icons/info.svg";
import eyeIcon from "../../assets/images/icons/eye.svg";
import TopRight from "../../assets/images/background/bottom_left.png";
import BottomLeft from "../../assets/images/background/top_right.png";
import loginImage from "../../assets/images/background/login_banner.png";

import "./LoginPage.scss";

let LoginPage = () => {
  // OTP JS START
  let otp_inputs = document.querySelectorAll(".otp__digit");
  let mykey = "0123456789".split("");
  otp_inputs.forEach((_) => {
    _.addEventListener("keyup", handle_next_input);
  });
  function handle_next_input(event) {
    let current = event.target;
    let index = parseInt(current.classList[1].split("__")[2]);
    current.value = event.key;

    if (event.keyCode == 8 && index > 1) {
      current.previousElementSibling.focus();
    }
    if (index < 6 && mykey.indexOf("" + event.key + "") != -1) {
      let next = current.nextElementSibling;
      next.focus();
    }
    let _finalKey = "";
    for (let { value } of otp_inputs) {
      _finalKey += value;
    }
    if (_finalKey.length == 6) {
      document.querySelector("#_otp").classList.replace("_notok", "_ok");
      document.querySelector("#_otp").innerText = _finalKey;
    } else {
      document.querySelector("#_otp").classList.replace("_ok", "_notok");
      document.querySelector("#_otp").innerText = _finalKey;
    }
  }
  // OTP JS END

  // OTP CHECKBOX START
  let [isChecked, setIsChecked] = useState(false);

  let handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  // OTP CHECKBOX END
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={6} className="m-sm-0 p-0 login-left d-none d-lg-block">
          <img src={TopRight} alt="" className="left-img img-fluid" />
          <img src={loginImage} alt="" className="center-img img-fluid" />
          <img src={BottomLeft} alt="" className="right-img img-fluid" />
        </Col>
        <Col
          xs={12}
          lg={6}
          className="d-flex justify-content-center align-items-center login-body m-sm-0"
        >
          <div className="login-form">
            <h3>Login with eBullion</h3>
            <p className="supporting-line mb-4 pb-2">
              Ready to start investing in preciousmetal at eBullion?
            </p>

            <Form.Label htmlFor="phone">Phone Number</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="country-code">+91</InputGroup.Text>
              <Form.Control
                id="phone"
                aria-describedby="basic-addon3"
                placeholder="7016812370"
                type="text"
              />
            </InputGroup>

            {!isChecked && (
              <>
                <Form.Label htmlFor="password">Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="password"
                    className="password"
                    aria-describedby="basic-addon3"
                    placeholder="Type your password here"
                    type="password"
                  />
                  <img
                    src={eyeIcon}
                    alt=""
                    className="show-password img-fluid"
                  />
                </InputGroup>{" "}
              </>
            )}

            {isChecked ? (
              <div className="otp-wrapper">
                <Form.Label htmlFor="password">Please enter OTP</Form.Label>
                <div className="otp-input-fields">
                  <input type="number" className="otp__digit otp__field__1" />
                  <input type="number" className="otp__digit otp__field__2" />
                  <input type="number" className="otp__digit otp__field__3" />
                  <input type="number" className="otp__digit otp__field__4" />
                  <input type="number" className="otp__digit otp__field__5" />
                  <input type="number" className="otp__digit otp__field__6" />
                </div>

                <p className="otp-timer text-end">0:13</p>

                <div className="otp-alert">
                  <p>OTP has been sent to your registered mobile number.</p>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="d-flex align-items-center justify-content-between">
              <Form.Group>
                <Form.Check
                  required
                  label="Login with OTP"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </Form.Group>

              <ul className="otp-alert list-unstyled d-flex align-items-center">
                {isChecked && (
                  <li className="ms-1">
                    <img src={infoIcon} alt="" /> Please enter OTP{" "}
                  </li>
                )}
              </ul>
            </div>
            <CustomButton
              classname="button button-primary w-100"
              name={isChecked ? "Verify OTP" : "Login to continue"}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
