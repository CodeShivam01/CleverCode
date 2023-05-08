import React from "react";
import Brand from "../Images/Brand.png";

const Footer = () => {
  return (
    <footer>
      <div className="brandSection">
        <img src={Brand} alt="CleverCode" width={70} height={70} />
        <h3>Ultimate Platform for WebDeveloper.</h3>
      </div>
      <div className="NavLink">
        <h2>MENU</h2>
        <ul>
          <li>
            <a href="#link">Home</a>
          </li>
          <li>
            <a href="#link">Blog</a>
          </li>
          <li>
            <a href="#link">Contact</a>
          </li>
          <li>
            <a href="#link">Contact</a>
          </li>
        </ul>
      </div>
      <div className="Services">
      <h2>MENU</h2>
        <ul>
          <li>
            <a href="#link">Privacy Policy</a>
          </li>
          <li>
            <a href="#link">Terms of Use</a>
          </li>
          <li>
            <a href="#link">Refund Policy</a>
          </li>
          
        </ul>
      </div>
      <div className="vertiDiv"></div>
      <div className="Contact">
        <h2>Contact Us</h2>
        <h3>clevercode.connect@gmail.com</h3>
      </div>
    </footer>
  );
};

export default Footer;
