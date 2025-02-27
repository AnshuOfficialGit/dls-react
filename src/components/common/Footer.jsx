import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="title">
                  <h5>Contact Us</h5>
                </div>
                <ul>
                  <li>
                    <span className="icon pe-7s-map-marker" />
                    <div className="cont">
                      <h6>Officeal Address</h6>
                      <p>504 White St . Dawsonville, GA 30534 , New York</p>
                    </div>
                  </li>
                  <li>
                    <span className="icon pe-7s-mail" />
                    <div className="cont">
                      <h6>Email Us</h6>
                      <p>support@gmail.com</p>
                    </div>
                  </li>
                  <li>
                    <span className="icon pe-7s-call" />
                    <div className="cont">
                      <h6>Call Us</h6>
                      <p>+87986451666</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="title">
                  <h5>Recent News</h5>
                </div>
                <ul>
                  <li>
                    <div className="img">
                      <img src="/assets/img/blog/1.jpg" alt="" />
                    </div>
                    <div className="sm-post">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                      <span className="date">14 sep 2021</span>
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img src="/assets/img/blog/2.jpg" alt="" />
                    </div>
                    <div className="sm-post">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                      <span className="date">14 sep 2021</span>
                    </div>
                  </li>
                  <li>
                    <div className="subscribe">
                      <input type="text" placeholder="Type Your Email" />
                      <span className="subs pe-7s-paper-plane" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="logo">
                  <img src="/assets/img/logo-light.png" alt="" />
                </div>
                <div className="social">
                  <a href="index.html#0">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="index.html#0">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="index.html#0">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="index.html#0">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
                <div className="copy-right">
                  <p>
                    © 2024, DLSTechNexus. <br /> All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
