const Contact = () => {
  return (
    <>
      <header class="pages-header circle-bg valign position-re">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9 col-md-11">
              <div class="capt">
                <div class="text-center">
                  <h1 class="color-font mb-10 fw-700">
                    Let's discuss <br />
                    about your project.
                  </h1>
                  <p>
                    Feel free to ask me any question or let’s do discussion
                    about our future collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="circle-color">
          <div class="gradient-circle"></div>
          <div class="gradient-circle two"></div>
        </div>
        <div class="line bottom right"></div>
      </header>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
                <form
                  id="contact-form"
                  method="post"
                  action="https://ui-themez.smartinnovates.net/items/vie/vie-dark/contact.php"
                >
                  <div className="messages" />
                  <div className="controls">
                    <div className="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows={4}
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit" className="butn bord">
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
                <h3 className="wow" data-splitting="">
                  Let's Talk.
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="contact.html#0">Email@example.com</a>
                  </h5>
                  <h5>+4.930.705.5448</h5>
                </div>
                <h3 className="wow" data-splitting="">
                  Visit Us.
                </h3>
                <div className="item">
                  <h6>
                    295 Witting Streets Suite 666, <br />
                    Melbourne, Australia
                  </h6>
                </div>
                <div className="social mt-50">
                  <a href="contact.html#0" className="icon">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="contact.html#0" className="icon">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="contact.html#0" className="icon">
                    <i className="fab fa-pinterest" />
                  </a>
                  <a href="contact.html#0" className="icon">
                    <i className="fab fa-behance" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
