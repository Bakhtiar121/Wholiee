import React, { useState } from "react";
import sendEmail from "../api/sendEmail";

function ContactUs() {
  const [data, setData] = useState({
    full_name: "",
    email: "",
    Message_Content: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendEmail(data).then((response) => {
      if (response.status === 200) {
        setResponse("success");
        setData({
          full_name: "",
          email: "",
          Message_Content: "",
          subject: "",
        });
      } else {
        setResponse("error");
      }
      setTimeout(() => {
        setResponse(null);
      }, 2000);
      setLoading(false);
    });
  };
  return (
    <>
      <section
        className="jarallax bg-gradient pt-5 pb-7 pt-md-7"
        data-jarallax
        data-speed="0.25"
      >
        <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient opacity-80"></span>
        <div
          className="jarallax-img"
          style={{
            backgroundImage: "url(img/pages/contacts/page-title-bg.jpg)",
          }}
        ></div>
        <div className="shape shape-bottom shape-slant bg-body">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 260">
            <polygon
              fill="currentColor"
              points="0,257 0,260 3000,260 3000,0"
            ></polygon>
          </svg>
        </div>
        <div className="container position-relative zindex-5 pt-3 pb-7 pt-md-0">
          <div className="row justify-content-center pb-7">
            <div className="col-lg-10">
              <h1 className="text-light">Contacts</h1>
              <p className="text-light">
                Get in touch with by completing the below form or call us now
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container position-relative zindex-5 pb-5">
        <div className="row">
          <div
            className="col-lg-6 col-md-7 offset-lg-1 pb-2 mb-5"
            style={{ marginTop: "-260px" }}
          >
            <div className="card border-0 shadow-lg">
              <form className="card-body p-5" onSubmit={handleSubmit}>
                <div className="mb-3 pb-1">
                  <label className="form-label" htmlFor="contact-fn">
                    Full name<sup className="text-danger ms-1">*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="full_name"
                    id="contact-fn"
                    value={data.full_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="mb-3 pb-1">
                  <label className="form-label" htmlFor="contact-email">
                    Email address<sup className="text-danger ms-1">*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="contact-email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="j.doe@example.com"
                    required
                  />
                </div>
                <div className="mb-3 pb-1">
                  <label className="form-label" htmlFor="cont-subject">
                    Subject<sup className="text-danger ms-1">*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="subject"
                    id="cont-subject"
                    value={data.subject}
                    onChange={handleChange}
                    placeholder="Title of your message"
                    required
                  />
                </div>
                <div className="mb-3 pb-1">
                  <label className="form-label" htmlFor="cont-message">
                    Message<sup className="text-danger ms-1">*</sup>
                  </label>
                  <textarea
                    className="form-control"
                    name="Message_Content"
                    id="cont-message"
                    value={data.Message_Content}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>
                <div className="text-center pt-2">
                  <button
                    className={`btn ${
                      response === "success"
                        ? "btn-success"
                        : response === "error"
                        ? "btn-danger"
                        : "btn-primary"
                    } d-block w-100`}
                    type="submit"
                    disabled={loading}
                    style={{
                      height: 52,
                    }}
                  >
                    {loading ? (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : response === "success" ? (
                      "Your message has been sent"
                    ) : response === "error" ? (
                      "Something went wrong"
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 offset-md-1">
            <h2 className="h4 pb-3">Contact details</h2>
            <h3 className="h6 pb-2">Karachi, Pakistan</h3>
            <ul className="list-unstyled fs-sm pb-3">
              <li className="d-flex align-items-top mb-3">
                <i className="ai-map-pin fs-xl text-muted mt-1 me-2 pe-1"></i>
                <div>Office #6, PECHS block 6, urbansquare</div>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="ai-mail fs-xl text-muted me-2 pe-1"></i>
                <div>whollie@gmail.com</div>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="ai-phone fs-xl text-muted me-2 pe-1"></i>
                <div>+92 334 3505020</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
