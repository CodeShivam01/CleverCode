import React from "react";
import Brand from "../Images/Brand.png";

const Footer = () => {
  return (
    <footer>
      <div className="fsection">
        <div className="brandSection">
          <img src={Brand} alt="CleverCode" width={70} height={70} />
          <h3>Ultimate Platform for Developer.</h3>
        </div>
        <div className="vertiDiv"></div>
        <div className="NavLink">
          <ul>
          <h2>MENU</h2>
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
        <div className="vertiDiv"></div>
        <div className="Services">
          <ul>
          <h2>MENU</h2>
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
      </div>
      <div className="Rights">
        <p>Copyrights &copy; CleverCode. All rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
