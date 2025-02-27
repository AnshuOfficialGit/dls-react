const Portfolio = () => {
  return (
    <>
      <header class="works-header fixed-slider hfixd valign sub-bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-9 static">
              <div class="capt mt-50">
                <div class="parlx text-center">
                  <h1 class="color-font">amazing works</h1>
                  <p>
                    Creativity involves breaking out of expected & repeatable
                    patterns in order to look at things in different way than
                    ever before.
                  </p>
                </div>
                <div class="bactxt custom-font valign">
                  <span class="full-width">Works</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="portfolio section-padding pb-70">
        <div className="container">
          {/* gallery */}
          <div className="gallery full-width">
            {/* gallery item */}
            <div className="col-md-6 items graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <a href="project-details2.html">
                  <img
                    src="/assets/img/portfolio/portfolio/1/7.jpg"
                    alt="image"
                  />
                </a>
              </div>
              <div className="cont">
                <h6>Creativity Demand</h6>
                <span>
                  <a href="works3.html#0">Design</a>,
                  <a href="works3.html#0">WordPress</a>
                </span>
              </div>
            </div>
            {/* gallery item */}
            <div className="col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <a href="project-details2.html">
                  <img
                    src="/assets/img/portfolio/portfolio/1/8.jpg"
                    alt="image"
                  />
                </a>
              </div>
              <div className="cont">
                <h6>Through The Breaking</h6>
                <span>
                  <a href="works3.html#0">Design</a>,
                  <a href="works3.html#0">WordPress</a>
                </span>
              </div>
            </div>
            {/* gallery item */}
            <div className="col-md-6 items brand">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <a href="project-details2.html">
                  <img
                    src="/assets/img/portfolio/portfolio/1/9.jpg"
                    alt="image"
                  />
                </a>
              </div>
              <div className="cont">
                <h6>Create With Creatives</h6>
                <span>
                  <a href="works3.html#0">Design</a>,
                  <a href="works3.html#0">WordPress</a>
                </span>
              </div>
            </div>
            {/* gallery item */}
            <div className="col-md-6 items brand">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <a href="project-details2.html">
                  <img
                    src="/assets/img/portfolio/portfolio/1/10.jpg"
                    alt="image"
                  />
                </a>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
                <span>
                  <a href="works3.html#0">Design</a>,
                  <a href="works3.html#0">WordPress</a>
                </span>
              </div>
            </div>
            {/* gallery item */}
            <div className="col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <a href="project-details2.html">
                  <img
                    src="/assets/img/portfolio/portfolio/1/11.jpg"
                    alt="image"
                  />
                </a>
              </div>
              <div className="cont">
                <h6>See It Yourself</h6>
                <span>
                  <a href="works3.html#0">Design</a>,
                  <a href="works3.html#0">WordPress</a>
                </span>
              </div>
            </div>
            {/* gallery item */}
            <div className="col-md-6 items graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <a href="project-details2.html">
                  <img
                    src="/assets/img/portfolio/portfolio/1/12.jpg"
                    alt="image"
                  />
                </a>
              </div>
              <div className="cont">
                <h6>Energies of Love</h6>
                <span>
                  <a href="works3.html#0">Design</a>,
                  <a href="works3.html#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
