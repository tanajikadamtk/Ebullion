import "./CustomButton.scss";

import Button from "react-bootstrap/Button";
import "./CustomButton.scss";

const CustomButton = (props) => {
  return (
    <>
      <Button className="custom-button" variant="primary">
        {props.name}
      </Button>

      {/* changes In Button Classname pass as props */}
      {/* <button className={props.classname}>{props.name}</button> */}
    </>
  );
};

export default CustomButton;
