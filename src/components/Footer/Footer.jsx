import React from "react";
import img12 from "../../img/Vector (16).png";
import img13 from "../../img/Vector (18).png";
import img14 from "../../img/Vector (18).png";
import img15 from "../../img/Vector (17).png";
import img16 from "../../img/secure-p-1 1 (2).png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <div className="d">
            <h2>Services</h2>
            <br />
            <p>
              height: 114px; width: 254px; left: 450px; top: 3622px;
              border-radius: nullpx;
            </p>
          </div>
        </div>
        <div className="box">
          <div className="d">
            <h2>Get in Touch</h2>
            <br />
            <br />  
            <p>info@cloudbudget.com</p>
            <p>+1 844-721-7120</p>
            <img src={img12} alt="" />
            <img src={img13} alt="" />
            <img src={img14} alt="" />
            <img src={img15} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="d">
            <h2>We Support</h2>
            <img src={img16} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
