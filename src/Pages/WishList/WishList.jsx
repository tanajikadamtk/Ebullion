import "./WishList.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CustomIconButton from "../../components/CustomIconButton/CustomIconButton";
import CustomButton from "../../components/CustomButton/CustomButton";
import Headline from "../../components/Headline/Headline";
import WishListImg from "../../assets/images/product/wishlist_item.png";
import BinImg from "../../assets/images/icons/bin.svg";
import ChevronLeft from "../../assets/images/icons/chevron-left.svg";

const WishList = () => {
  return (
    <div className="mt-4 wishlist">
      <Container>
        <Row>
          <Col>
            <BreadCrumb />
          </Col>
        </Row>

        <Row>
          <Col className="mt-5 mb-3 headline_highlighted">
            <Headline text="Wishlist" />
          </Col>
        </Row>

        {/* display -Flex  */}
        {/* <div className="add-to-cart-wrapper mt-2 mb-5">
          <Row>
            <Col lg={12}>
              <Row className="cart-history-wrapper">
                <Col
                  xs={12}
                  className="d-flex flex-column flex-md-row gap-3 justify-content-around align-items-start align-items-md-center cart-history"
                >
                  <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center gap-3">
                    <img src={WishListImg} alt="" className="img-fluid" />
                    <h5>Gold Bar (50 gm)</h5>
                  </div>
                  

                    <div>
                      <p>₹ 650</p>
                    </div>

                  <div className="product">
                    <p className="product_status product_status_in">In Stock</p>
                  </div>
                  <CustomButton name="Add to Cart" />

                  <img
                    src={BinImg}
                    alt=""
                    className="img-fluid text-md-start text-center"
                  />
                </Col>

                <Col
                  xs={12}
                  className="d-flex flex-column flex-md-row gap-3 justify-content-around align-items-start align-items-md-center cart-history"
                >
                  <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center gap-3">
                    <img src={WishListImg} alt="" className="img-fluid" />
                    <div>
                      <h5>Gold Bar (50 gm)</h5>
                      <p>₹ 650</p>
                    </div>
                  </div>

                  <div className="product">
                  <p className="product_status product_status_out">Out Of Stock </p>
                  </div>
                  <CustomButton name="Add to Cart" />

                  <img
                    src={BinImg}
                    alt=""
                    className="img-fluid text-md-start text-center"
                  />
                </Col>

                <Col
                  xs={12}
                  className="d-flex flex-column flex-md-row gap-3 justify-content-around align-items-start align-items-md-center cart-history"
                >
                  <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center gap-3">
                    <img src={WishListImg} alt="" className="img-fluid" />
                    <div>
                      <h5>Gold Bar (50 gm)</h5>
                      <p>₹ 650</p>
                    </div>
                  </div>

                  <div className="product">
                    <p className="product_status product_status_in">In Stock</p>
                  </div>
                  <CustomButton name="Add to Cart" />

                  <img
                    src={BinImg}
                    alt=""
                    className="img-fluid text-md-start text-center"
                  />
                </Col>

                <Col
                  xs={12}
                  className="d-flex flex-column flex-md-row gap-3 justify-content-around align-items-start align-items-md-center cart-history"
                >
                  <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center gap-3">
                    <img src={WishListImg} alt="" className="img-fluid" />
                    <div>
                      <h5>Gold Bar (50 gm)</h5>
                      <p>₹ 650</p>
                    </div>
                  </div>

                  <div className="product">
                  <p className="product_status product_status_out">Out Of Stock </p>

                  </div>
                  <CustomButton name="Add to Cart" />

                  <img
                    src={BinImg}
                    alt=""
                    className="img-fluid text-md-start text-center"
                  />
                </Col>
              </Row>

              <Row>
                <Col className="mt-4">
                  <CustomIconButton src={ChevronLeft} name="Return to Shop" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div> */}

        {/* Display grids */}
        <h1>Grid</h1>
        <div className="wishlist-wrapper mt-2 mb-5">
          <Row>
            <Col>
              <Row className="wishlist-history-wrapper ">
                {/* classnames remove */}

                <Col xs={12} className=" wishlist-history">
                  <div className="image_wrapper">
                    <img src={WishListImg} alt="" className="img-fluid" />
                  </div>
                  <h5>Gold Bar (50 gm)</h5>

                  <div className="product">
                    <p className=" product_status product_status_in">
                      In Stock
                    </p>
                  </div>
                  <p>₹ 650</p>
                  <CustomButton className="img-fluid" name="Add to Cart" />
                  <img
                    src={BinImg}
                    alt="Add to Cart Button"
                    className="img-fluid"
                  />
                </Col>

                <Col xs={12} className="wishlist-history">
                  <div className="image_wrapper">
                    <img src={WishListImg} alt="" className="img-fluid" />
                  </div>
                  <h5>Gold Bar (50 gm) long</h5>
                  {/* Add Product Stock Status  */}
                  <div className="product">
                    <p className="product_status product_status_out">
                      Out Of Stock
                    </p>
                  </div>
                  <p>₹ 650</p>
                  <CustomButton name="Add to Cart" />
                  <img src={BinImg} alt="" className="img-fluid" />
                </Col>

                <Col xs={12} className=" wishlist-history">
                  <div className="image_wrapper">
                    <img src={WishListImg} alt="" className="img-fluid" />
                  </div>
                  <h5>Gold Bar (50 gm)</h5>
                  {/* Add Product Stock Status  */}
                  <div className="product">
                    <p className=" product_status product_status_in">
                      In Stock
                    </p>
                  </div>
                  <p>₹ 650</p>
                  <CustomButton name="Add to Cart" />
                  <img src={BinImg} alt="" className="img-fluid" />
                </Col>

                <Col xs={12} className=" wishlist-history">
                  <div className="image_wrapper">
                    <img src={WishListImg} alt="" className="img-fluid" />
                  </div>
                  <h5>Gold Bar (50 gm)</h5>
                  {/* Add Product Stock Status  */}
                  <div className="product">
                    <p className="product_status product_status_out">
                      Out Of Stock
                    </p>
                  </div>
                  <p>₹ 650</p>
                  <CustomButton name="Add to Cart" />
                  <img src={BinImg} alt="" className="img-fluid" />
                </Col>

                <Col xs={12} className=" wishlist-history">
                  <div className="image_wrapper">
                    <img src={WishListImg} alt="" className="img-fluid" />
                  </div>
                  <h5>Gold Bar (50 gm)</h5>
                  {/* Add Product Stock Status  */}
                  <div className="product">
                    <p className=" product_status product_status_in">
                      In Stock
                    </p>
                  </div>
                  <p>₹ 650</p>
                  <CustomButton name="Add to Cart" />
                  <img src={BinImg} alt="" className="img-fluid" />
                </Col>
              </Row>

              <Row>
                <Col className="mt-4">
                  <CustomIconButton src={ChevronLeft} name="Return to Shop" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WishList;
