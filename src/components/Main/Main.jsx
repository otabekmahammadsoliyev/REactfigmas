/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../img/Video_bg (4).png";
import img2 from "../../img/Bg (3).png";
import img3 from "../../img/Bg (4).png";
import img4 from "../../img/Bg (5).png";
import img5 from "../../img/01 (1).png";
import img6 from "../../img/02 (1).png";
import img7 from "../../img/03 (1).png";
import img8 from "../../img/04 (1).png";
import img9 from "../../img/Video_bg (5).png";
import "./main.css";
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="center">
            <h1>CloudBudget</h1>
            <p>
              Cloud budget management for everyone. Only €69.95 a Month After a
              7 Day Trial of Up to €4.99
            </p>
            <button> Sign Up</button>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="left">
            <div className="left"></div>
            <h1>Easy to Use Cloud Budget Management Software</h1>
            <br />
            <br />
            <p>
              Our software is made so you can access and manage your budget and
              expenses online at any time from any device. It provides detailed
              income and expense reports with graphs so you can easilly see your
              spending patterns and budget at a glance. Read below to find out
              more.
            </p>
            <br />
            <button> Learn More</button>
          </div>
          <div className="right">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="boxses">
        <div className="container">
          <h1>Features</h1>
          <div className="box">
            <div className="card">
              <img src={img2} alt="" />
              <div className="sa">
                <h1>Supports All Currencies and Cards</h1>
                <br />
                <p>
                  We support all popular currencies and is fully customizable to
                  add
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="card">
              <img src={img3} alt="" />
              <div className="sa">
                <h1>Manage your expenses on the go</h1>
                <br />
                <p>
                  You can access your account from anywhere in the world on any
                  device
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="card">
              <img src={img4} alt="" />
              <div className="sa">
                <h1>Cloud Budget Management Software</h1>
                <br />
                <p>
                  Our software is made so you can access and manage your budget
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tech">
        <div className="container">
          <h1>Technology</h1>
          <div className="center">
            <div className="box">
              <img src={img5} alt="" />
              <h1>Cloud Storage</h1>
              <p>
                Access your account from anywhere in the world on any device
              </p>
            </div>
            <div className="box">
              <img src={img6} alt="" />
              <h1>Cloud Storage</h1>
              <p>
                Access your account from anywhere in the world on any device
              </p>
            </div>
            <div className="box">
              <img src={img7} alt="" />
              <h1>Cloud Storage</h1>
              <p>
                Access your account from anywhere in the world on any device
              </p>
            </div>
            <div className="box">
              <img src={img8} alt="" />
              <h1>Cloud Storage</h1>
              <p>
                Access your account from anywhere in the world on any device
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="finsh">
        <div className="container">
          <div className="left">
            <h1>Stay focused on saving money</h1>
            <br />
            <p>
              It is important to stay focused on saving money in any way you
              can. We help you monitor your spending habits so you can easily
              spot and cut any unnecessary expenses. Simply join today to get
              started!
            </p>
          </div>
          <div className="right">
            <img src={img9} alt="" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="dad">
        <div className="container">
          <div className="left">
            <div className="left"></div>
            <h1>Contact</h1>
            <br />
            <p>
              Questions or concerns? Just fill out the form below and our
              support team will get back to you within 24 hours
            </p>
          </div>
          <div className="right">
            <form action="">
              <input className="in" type="text" placeholder="First Name" />
              <input className="in" type="text" placeholder="Last Name" />
              <input className="inp" type="text" placeholder="Phone Number" />
              <input className="inp" type="text" placeholder="Select Service" />
            </form>
            <br />
            <button>Submit Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
