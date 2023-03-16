/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./nav.css";
import img from "../../img/Vector (15).png"
function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="left">
            <img src={img} alt="" />
            <a href="">CloudBudget</a>
          </div>
          <div className="center">
            {" "}
            <a href="">OVERVIEW FEATURES TECHNOLOGY CONTACT Sign up</a>
          </div>
          <div className="right">
            <a href="">EN</a>
            <button>LOGIN</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
