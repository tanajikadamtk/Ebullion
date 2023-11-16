import React from "react";
import "./CartTotal.scss";
import CustomButton from "../../components/CustomButton/CustomButton";

const CartTotal = (props) => {
  return (
    <div className="cart-total">
      <h4>Cart Total</h4>
      <div className="custom-flex">
        <h5>Goldbar (50 gm):</h5>
        <h5>₹ 1300</h5>
      </div>

      <div className="custom-flex">
        <p>Shipping</p>
        <p>₹ 200</p>
      </div>

      <div className="custom-flex">
        <p>Delivery Charge:</p>
        <p>₹ 300</p>
      </div>

      <div className="custom-flex">
        <p>Premium:</p>
        <p>₹ 600</p>
      </div>

      <div className="custom-flex">
        <p>GST of 18% on premium</p>
        <p>₹ 108</p>
      </div>

      <div className="custom-flex total-amount">
        <h5>Total:</h5>
        <h5 className="text-primary">₹ 2508</h5>
      </div>

      <div className="custom-flex cta">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Coupon Code"
          aria-describedby="emailHelp"
        />
        <CustomButton name="Apply Coupon" />
      </div>

      <div className="text-center">
        <CustomButton name={props.name} />
      </div>
    </div>
  );
};

export default CartTotal;
