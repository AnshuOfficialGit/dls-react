import React from "react";

const Header = () => {
  return (
    <>
      <header className="slider slider-prlx fixed-slider text-center">
        <div className="swiper-container parallax-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="bg-img valign"
                data-background="/assets/img/slid/01.jpg"
                data-overlay-dark={6}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                      <div className="caption center mt-30">
                        <h1>
                          Your <span className="color-font">Vision</span> <br />
                          Our <span className="color-font">Innovation</span>
                        </h1>
                        <a
                          href="index.html#0"
                          className="butn bord curve mt-30"
                        >
                          <span>Look More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="bg-img valign"
                data-background="/assets/img/slid/03.jpg"
                data-overlay-dark={6}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-9">
                      <div className="caption center mt-30">
                        <h1 className="color-font">
                          Digital <br /> Design Awards
                        </h1>
                        <p>
                          If you need to redesign your new project, new visual
                          strategy, ux structure or you do have some cool ideas
                          for collaboration.
                        </p>
                        <a
                          href="index.html#0"
                          className="butn bord curve mt-30"
                        >
                          <span>Look More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="bg-img valign"
                data-background="/assets/img/slid/02.jpg"
                data-overlay-dark={6}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-9">
                      <div className="caption center mt-30">
                        <h1 className="color-font">Original Solutions</h1>
                        <p>
                          If you need to redesign your new project, new visual
                          strategy, ux structure or you do have some cool ideas
                          for collaboration.
                        </p>
                        <a
                          href="index.html#0"
                          className="butn bord curve mt-30"
                        >
                          <span>Look More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider setting */}
          <div className="setone setwo">
            <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
              <i className="fas fa-chevron-right" />
            </div>
            <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
              <i className="fas fa-chevron-left" />
            </div>
          </div>
          <div className="swiper-pagination top botm " />
          <div className="social-icon">
            <a href="index.html#0">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="index.html#0">
              <i className="fab fa-twitter" />
            </a>
            <a href="index.html#0">
              <i className="fab fa-behance" />
            </a>
            <a href="index.html#0">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
