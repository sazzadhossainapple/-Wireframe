import React from "react";
import "./header.css";
import Logo from "../../../Assets/Group 114.png";
import Button from "../../../components/Button/Button";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <nav>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="pricing">Pricing</a>
          </li>
          <li>
            <a href="aboutUs">About Us</a>
          </li>
          <li>
            <Button classes="btn">Start a Company</Button>
          </li>
        </ul>
        <FaBars className="mobile-icon" />
      </div>
    </nav>
  );
};

export default Header;
