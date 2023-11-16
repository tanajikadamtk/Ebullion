import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Quantity from "../../components/Quantity/Quantity";
import CustomIconButton from "../../components/CustomIconButton/CustomIconButton";
import Headline from "../../components/Headline/Headline";
import CartImg from "../../assets/images/product/cart_item.png";
import BinImg from "../../assets/images/icons/bin.svg";
import ChevronLeft from "../../assets/images/icons/chevron-left.svg";
import CartTotal from "../../components/CartTotal/CartTotal";
import "./AddToCart.scss";

// import ProductAvailability from '../../components/Product/ProductAvailability';
const AddToCart = () => {
  return (
    <div className="mt-4 add-to-cart">
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

        <div className="add-to-cart-wrapper mt-2 mb-5">
          <Row>
            <Col lg={7}>
              <Row className="cart-history-wrapper">
                <Col
                  xs={12}
                  className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-start align-items-md-center cart-history"
                >
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                    <img src={CartImg} alt="" className="img-fluid" />
                    <div>
                      <h5>Gold Bar (50 gm)</h5>
                      <p>₹ 650</p>
                    </div>
                  </div>

                  {/* Add Product Stock Status  */}
                  <div className="product">
                    <p className="product_status product_status_in">In Stock</p>
                  </div>

                  <Quantity />
                  <img
                    src={BinImg}
                    alt=""
                    className="img-fluid text-md-start text-center"
                  />
                </Col>

                <Col
                  xs={12}
                  className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-start align-items-md-center cart-history"
                >
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                    <img src={CartImg} alt="" className="img-fluid" />
                    <div>
                      <h5>Gold Bar (50 gm)</h5>
                      <p>₹ 650</p>
                    </div>
                  </div>
                  {/* Add Product Stock Status  */}
                  <div className="product">
                    <p className="product_status product_status_out">
                      Out Of Stock
                    </p>
                  </div>

                  <Quantity />
                  <img src={BinImg} alt="" className="img-fluid" />
                </Col>

                <Col
                  xs={12}
                  className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-start align-items-md-center cart-history"
                >
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                    <img src={CartImg} alt="" className="img-fluid" />
                    <div>
                      <h5>Gold Bar (50 gm)</h5>
                      <p>₹ 650</p>
                    </div>
                  </div>
                  {/* Add Product Stock Status  */}
                  <div className="product">
                    <p className=" product_status product_status_in">
                      In Stock
                    </p>
                  </div>

                  <Quantity />
                  <img src={BinImg} alt="" className="img-fluid" />
                </Col>

                <Col
                  xs={12}
                  className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-start align-items-md-center cart-history"
                >
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                    <img src={CartImg} alt="" className="img-fluid" />
                    <div>
                      <h5>Gold Bar (50 gm)</h5>
                      <p>₹ 650</p>
                    </div>
                  </div>
                  {/* Add Product Stock Status  */}
                  <div className="product ">
                    <p className="product_status product_status_out">
                      Out Of Stock
                    </p>
                  </div>
                  <Quantity />
                  <img src={BinImg} alt="" className="img-fluid" />
                </Col>
              </Row>

              <Row>
                <Col className="mt-4">
                  <CustomIconButton src={ChevronLeft} name="Return to Shop" />
                </Col>
              </Row>
            </Col>
            <Col lg={5} className="mt-5 mt-lg-0">
              <CartTotal name="Proceed to checkout " />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AddToCart;
