import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./NotSignedIn.scss";
import AnonymousUser from "../../assets/images/icons/ANONYMOUS.SVG";

const NotSignedIn = () => {
  return (
    <div className="not-signed-in d-flex flex-column justify-content-center align-items-center gap-4">
      <div className="user-logo">
        <img src={AnonymousUser} alt="" />
      </div>

      <div className="text-center">
        <h6>Not signed in</h6>
        <p>Access acount & manage your orders.</p>
      </div>

      <div className="w-100">
        <CustomButton name="Login" />
      </div>
    </div>
  );
};

export default NotSignedIn;
