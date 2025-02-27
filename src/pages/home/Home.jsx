import React from "react";
const Home = () => {
  return (
    <>
      <section className="about-us section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 valign md-mb50">
              <div className="mb-50">
                <h6 className="fw-100 text-u ls10 mb-10">About Us</h6>
                <h3 className="fw-600 text-u ls1 mb-30 color-font">
                  Our Comapny
                </h3>
                <p>
                  Your Trusted Technology Partner At DLSTech Nexus, we transform
                  your ideas into powerful digital solutions. We specialize in
                  end-to-end software development, from design to deployment,
                  ensuring seamless experiences. Whether it's Figma design,
                  development, testing, or cloud services, we cover all aspects
                  to elevate your business. Let's build the future together!
                </p>
                <a href="about.html" className="butn bord curve mt-30">
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div className="col-lg-7 img">
              <img src="/assets/img/feat.jpg" alt="" />
              <div className="stauts">
                <div className="item">
                  <h4>
                    3<span>K</span>
                  </h4>
                  <h6>Happy Clients</h6>
                </div>
                <div className="item">
                  <h4>
                    14<span>K</span>
                  </h4>
                  <h6>Success Projects</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End about ==================== */}
      {/* ==================== Start Services ==================== */}
      <section className="services bords section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Best Features
                </h6>
                <h3 className="wow color-font">
                  We are a new digital product development agency
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".5s">
              <div className="item-box md-mb50">
                <span className="icon pe-7s-paint-bucket" />
                <h6>Web 3.0 &amp; Mobile Apps</h6>
                <p>
                  User Experience | Responsive Design | Quality Assurance |
                  Secure Data
                </p>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".7s">
              <div className="item-box md-mb50">
                <span className="icon pe-7s-phone" />
                <h6>IoT &amp; Automation</h6>
                <p>Innovation | Scalability | Connectivity | Efficiency</p>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".9s">
              <div className="item-box">
                <span className="icon pe-7s-display1" />
                <h6>Cloud &amp; DevOps</h6>
                <p>Reliability | Availability | Security | Performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End Services ==================== */}
      {/* ==================== Start works ==================== */}
      <section className="work-carousel metro position-re">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div
                      className="content wow noraidus fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="item-img bg-img wow imago"
                        data-background="/assets/img/portfolio/slider/01.webp"
                      ></div>
                      <div className="cont">
                        <h6 className="color-font">
                          <a href="index.html#0">Ecommerce Platform</a>
                        </h6>
                        <h4>
                          <a href="project-details2.html">Next Gen Mart</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="content wow noraidus fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="item-img bg-img wow imago"
                        data-background="/assets/img/portfolio/slider/02.webp"
                      ></div>
                      <div className="cont">
                        <h6 className="color-font">
                          <a href="index.html#0">Learning Management System</a>
                        </h6>
                        <h4>
                          <a href="project-details2.html">Learn Sphere.</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="content wow noraidus fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="item-img bg-img wow imago"
                        data-background="/assets/img/portfolio/slider/03.webp"
                      ></div>
                      <div className="cont">
                        <h6 className="color-font">
                          <a href="index.html#0">CRM Software</a>
                        </h6>
                        <h4>
                          <a href="project-details2.html">Factory Flow</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="content wow noraidus fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="item-img bg-img wow imago"
                        data-background="/assets/img/portfolio/slider/04.webp"
                      ></div>
                      <div className="cont">
                        <h6 className="color-font">
                          <a href="index.html#0">ERP Software</a>
                        </h6>
                        <h4>
                          <a href="project-details2.html">Industrix ERP</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="content wow noraidus fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="item-img bg-img wow imago"
                        data-background="/assets/img/portfolio/slider/05.webp"
                      ></div>
                      <div className="cont">
                        <h6 className="color-font">
                          <a href="index.html#0">Mobile Applications</a>
                        </h6>
                        <h4>
                          <a href="project-details2.html">
                            Work Tracking System
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* slider setting */}
                <div className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer">
                  <span className="simple-btn right">Next</span>
                </div>
                <div className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer">
                  <span className="simple-btn">Prev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End works ==================== */}
      {/* ==================== Start numbers ==================== */}
      <section className="number-sec section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  FUN FACTS
                </h6>
                <h3 className="wow color-font">
                  Pleasure in the job puts perfection in the work.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="item no-bord sm-mb50">
                <span className="icon pe-7s-smile" />
                <h3 className="">
                  <span className="count">2400</span>
                </h3>
                <p className="wow txt" data-splitting="">
                  People who are commited to their management tasks.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item no-bord sm-mb50">
                <span className="icon pe-7s-portfolio" />
                <h3 className="">
                  <span className="count">133</span>
                </h3>
                <p className="wow txt" data-splitting="">
                  Signed projects that have been confirmed complete!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item no-bord">
                <span className="icon pe-7s-medal" />
                <h3 className="">
                  <span className="count">46</span>
                </h3>
                <p className="wow txt" data-splitting="">
                  International awards and cups for design projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End numbers ==================== */}
      {/* ==================== Start video ==================== */}
      <section className="block-sec">
        <div
          className="background bg-img pt-100 pb-0 parallaxie"
          data-background="/assets/img/bg-vid.jpg"
          data-overlay-dark={5}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="vid-area">
                  <span className="text">Watch Video</span>
                  <div className="vid-icon">
                    <a className="vid" href="https://vimeo.com/127203262">
                      <div className="vid-butn">
                        <span className="icon">
                          <i className="fas fa-play" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="testim-box">
                  <div className="head-box">
                    <h6 className="wow fadeIn" data-wow-delay=".5s">
                      Our Clients
                    </h6>
                    <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                      What Client's Say?
                    </h4>
                  </div>
                  <div className="slic-item wow fadeInUp" data-wow-delay=".5s">
                    <div className="item">
                      <p>
                        Nulla metus metus ullamcorper vel tincidunt sed euismod
                        nibh volutpat velit class aptent taciti sociosqu ad
                        litora.
                      </p>
                      <div className="info">
                        <div className="img">
                          <div className="img-box">
                            <img src="/assets/img/clients/1.jpg" alt="" />
                          </div>
                        </div>
                        <div className="cont">
                          <div className="author">
                            <h6 className="author-name ">Alex Regelman</h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <p>
                        Nulla metus metus ullamcorper vel tincidunt sed euismod
                        nibh volutpat velit class aptent taciti sociosqu ad
                        litora.
                      </p>
                      <div className="info">
                        <div className="img">
                          <div className="img-box">
                            <img src="/assets/img/clients/2.jpg" alt="" />
                          </div>
                        </div>
                        <div className="cont">
                          <div className="author">
                            <h6 className="author-name ">Alex Regelman</h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <p>
                        Nulla metus metus ullamcorper vel tincidunt sed euismod
                        nibh volutpat velit class aptent taciti sociosqu ad
                        litora.
                      </p>
                      <div className="info">
                        <div className="img">
                          <div className="img-box">
                            <img src="/assets/img/clients/3.jpg" alt="" />
                          </div>
                        </div>
                        <div className="cont">
                          <div className="author">
                            <h6 className="author-name ">Alex Regelman</h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End video ==================== */}
      {/* ==================== Start Skills Circle ==================== */}
      <section className="skills-circle pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="">
                <div className="row">
                  <div className="col-md-6">
                    <div className="item wow fadeInLeft" data-wow-delay=".6">
                      <div className="skill" data-value="0.9">
                        <span className="">90%</span>
                      </div>
                      <div className="cont">
                        <span>Project</span>
                        <h6>Consulting</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item wow fadeInLeft" data-wow-delay=".3">
                      <div className="skill" data-value="0.75">
                        <span className="">75%</span>
                      </div>
                      <div className="cont">
                        <span>App</span>
                        <h6>Development</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End Skills Circle ==================== */}
      {/* ==================== Start clients Brands ==================== */}
      <section className="clients section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 valign md-mb50">
              <div className="sec-head mb-0">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Best Features
                </h6>
                <h3 className="wow mb-20 color-font">Our Expertise</h3>
                <p>
                  Our area of practice is quite wide: design, graphics,
                  branding, development &amp; deployment.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div>
                <div className="row bord">
                  <div className="col-md-3 col-6 brands">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img src="/assets/img/clients/brands/01.png" alt="" />
                        <a
                          href="index.html#0"
                          className="link"
                          data-splitting=""
                        >
                          Laravel
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 brands">
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="img">
                        <img src="/assets/img/clients/brands/02.png" alt="" />
                        <a
                          href="index.html#0"
                          className="link"
                          data-splitting=""
                        >
                          Node.js
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 brands">
                    <div className="item wow fadeIn" data-wow-delay=".8s">
                      <div className="img">
                        <img src="/assets/img/clients/brands/03.png" alt="" />
                        <a
                          href="index.html#0"
                          className="link"
                          data-splitting=""
                        >
                          React.js
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 brands">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img src="/assets/img/clients/brands/04.png" alt="" />
                        <a
                          href="index.html#0"
                          className="link"
                          data-splitting=""
                        >
                          Python
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-6 brands sm-mb30">
                    <div className="item wow fadeIn" data-wow-delay=".4s">
                      <div className="img">
                        <img src="/assets/img/clients/brands/05.png" alt="" />
                        <a
                          href="index.html#0"
                          className="link"
                          data-splitting=""
                        >
                          PHP
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 brands sm-mb30">
                    <div className="item wow fadeIn" data-wow-delay=".7s">
                      <div className="img">
                        <img src="/assets/img/clients/brands/06.png" alt="" />
                        <a
                          href="index.html#0"
                          className="link"
                          data-splitting=""
                        >
                          MySQL
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 brands">
                    <div className="item wow fadeIn" data-wow-delay=".5s">
                      <div className="img">
                        <img src="/assets/img/clients/brands/07.png" alt="" />
                        <a
                          href="index.html#0"
                          className="link"
                          data-splitting=""
                        >
                          MongoDb
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 brands">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img src="/assets/img/clients/brands/08.png" alt="" />
                        <a
                          href="index.html#0"
                          className="link"
                          data-splitting=""
                        >
                          Microsoft Azure
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End clients Brands ==================== */}
      {/* ==================== Start Blog ==================== */}
      <section className="blog section-padding sub-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  RECENT ARTICLES
                </h6>
                <h3 className="wow color-font">From our blogs.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
                <div className="img">
                  <img src="/assets/img/blog/1.jpg" alt="" />
                </div>
                <div className="cont">
                  <div>
                    <div className="info">
                      <a href="index.html#0" className="date">
                        <span>
                          <i>06</i> August
                        </span>
                      </a>
                      <span>/</span>
                      <a href="index.html#0" className="tag">
                        <span>WordPress</span>
                      </a>
                    </div>
                    <h5>
                      <a href="index.html#0">
                        How to use solid color combine with simple furnitures.
                      </a>
                    </h5>
                    <div className="btn-more">
                      <a href="index.html#0" className="simple-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
                <div className="img">
                  <img src="/assets/img/blog/2.jpg" alt="" />
                </div>
                <div className="cont">
                  <div>
                    <div className="info">
                      <a href="index.html#0" className="date">
                        <span>
                          <i>06</i> August
                        </span>
                      </a>
                      <span>/</span>
                      <a href="index.html#0" className="tag">
                        <span>WordPress</span>
                      </a>
                    </div>
                    <h5>
                      <a href="index.html#0">
                        How to use solid color combine with simple furnitures.
                      </a>
                    </h5>
                    <div className="btn-more">
                      <a href="index.html#0" className="simple-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End Blog ==================== */}
      {/* ==================== Start call-to-action ==================== */}
      <section
        className="call-action section-padding sub-bg bg-img"
        data-background="/assets/img/patrn.svg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <h6 className="wow" data-splitting="">
                  Let’s discuss
                </h6>
                <h2 className="wow" data-splitting="">
                  about your <br /> <b className="back-color">next project</b>.
                </h2>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 valign">
              <a
                href="contact.html"
                className="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
