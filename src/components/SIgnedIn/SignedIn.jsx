// import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./SignedIn.scss";

const SignedIn = () => {
  return (
    <div className="signed-in d-flex flex-column justify-content-center align-items-center gap-4">
      <div className="user-logo">
        <p>SK</p>
      </div>

      <div className="text-center">
        <h6>Saurabh Kute!</h6>
        <p>Access acount & manage your orders.</p>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-2 btn-combo">
        <CustomButton name="My Profile" />
        <CustomButton name="Logout" />
      </div>
    </div>
  );
};

export default SignedIn;
