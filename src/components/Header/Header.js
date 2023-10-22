import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HomeRounded, Telegram } from "@mui/icons-material";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";
/*import { keyboard } from "@testing-library/user-event/dist/keyboard";*/
const telFunction = () => window.open(`https://t.me/AnanMoktan`, "_blank");
const Header = (props) => {
  const pathname = props?.location?.pathname;
  return (
    <>
      <Navbar expand="lg" sticky="top" className="header">
        {/* Home link*/}
        <Nav.Link as={NavLink} to="/" className="header_navlink">
          <Navbar.Brand className="header_home">
            <HomeRounded />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="header_left">
            <Nav.Link
              as={NavLink}
              to="/"
              className={pathname == "/" ? "header_link_active" : "header_link"}
            >
              Resume
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/Portfolio"
              className={
                pathname == "/Portfolio" ? "header_link_active" : "header_link"
              }
            >
              Portfolio
            </Nav.Link>
          </Nav>

          <div className="header_right">
            {Object.keys(resumeData.socials).map((key) => (
              <a href={resumeData.socials[key].link} target="_blank">
                {resumeData.socials[key].icon}
              </a>
            ))}
            <CustomButton
              text={"Hire me"}
              icon={<Telegram />}
              myFunction={telFunction}
            />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
