import React from "react";
import Button from "@mui/material/Button";
import "./Button.css";

const CustomButton = ({ text, icon, myFunction }) => {
  return (
    <Button
      className="custom_btn"
      onClick={
        myFunction
      } /*() => window.open(`https://t.me/AnanMoktan`, "_blank")*/
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    >
      <span className="btn-text">{text}</span>
    </Button>
  );
};

export default CustomButton;
