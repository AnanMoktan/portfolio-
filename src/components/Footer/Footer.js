import React from "react";
import "./Footer.css";
import resumeData from "../../utils/resumeData";
import { Typography, dividerClasses } from "@mui/material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a href="/" target="_blank">
            Anan Moktan
          </a>
          <br />
          Idea from Trevoline.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
