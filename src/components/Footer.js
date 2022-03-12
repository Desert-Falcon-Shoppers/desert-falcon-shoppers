import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">Story</a>
              </li>
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Partners</h4>
            <ul>
              <li>
                <a href="#">Rolex</a>
              </li>
              <li>
                <a href="#">Shinola</a>
              </li>
              <li>
                <a href="#">Breitling</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="#">(555)-555-5555</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Technical Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
