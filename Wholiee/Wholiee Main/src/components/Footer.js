import React from "react";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-dark">
      {/* <div className="container pt-3 pb-0 pt-md-0 pb-md-3">
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="widget widget-light pb-2 mb-4">
              <h4 className="widget-title">Sitemap</h4>
              <ul>
                <li>
                  <Link to="/" className="widget-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/all-ads" className="widget-link">
                    All Ads
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="widget-link">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="widget-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="widget-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="widget widget-light pb-2 mb-4">
              <h4 className="widget-title">Customer zone</h4>
              <ul>
                <li>
                  <Link to="/" className="widget-link">
                    Your account
                  </Link>
                </li>
                <li>
                  <Link to="/" className="widget-link">
                    Shipping rates &amp; policies
                  </Link>
                </li>
                <li>
                  <Link to="/" className="widget-link">
                    Refunds &amp; replacements
                  </Link>
                </li>
                <li>
                  <Link to="/" className="widget-link">
                    Delivery info
                  </Link>
                </li>
                <li>
                  <Link to="/" className="widget-link">
                    Taxes &amp; fees
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="widget widget-light pb-2 mb-4">
              <h4 className="widget-title">Social links</h4>
              <div className="d-flex pt-2 pt-sm-0 ms-auto">
                <a
                  className="btn-social bs-twitter bs-light me-2 mb-2"
                  href="/"
                >
                  <i className="ai-twitter"></i>
                </a>
                <a
                  className="btn-social bs-facebook bs-light me-2 mb-2"
                  href="/"
                >
                  <i className="ai-facebook"></i>
                </a>
                <a
                  className="btn-social bs-instagram bs-light me-2 mb-2"
                  href="/"
                >
                  <i className="ai-instagram"></i>
                </a>
                <a
                  className="btn-social bs-pinterest bs-light me-2 mb-2"
                  href="/"
                >
                  <i className="ai-pinterest"></i>
                </a>
                <a className="btn-social bs-youtube bs-light mb-2" href="/">
                  <i className="ai-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-darker pt-2">
        <div className="container py-sm-3">
          <div className="d-sm-flex justify-content-between align-items-center pb-4 pb-sm-2">
            <div className="order-sm-2 mb-4 mb-sm-3">
              <img
                src="img/footer/cards.png"
                alt="Payment methods"
                width="181"
              />
            </div>
            <div className="order-sm-1 mb-3">
              <p className="fs-ms mb-0">
                <span className="text-light opacity-50 me-1">
                  © All rights reserved.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
