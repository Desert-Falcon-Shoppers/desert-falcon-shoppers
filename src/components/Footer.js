<<<<<<< HEAD
import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-container">
        <h1 className="about-us-footer">About Us</h1>
        <div>
          <a class="list" href="#">
            Story
          </a>
          <a class="list" href="#">
            Clients
          </a>
          <a class="list" href="#">
            Testimonials
          </a>
        </div>
      </div>
      <div className="links-container">
        <h1 className="partner-footer-header">Partners</h1>
        <div>
          <a
            class="list"
            href="https://www.rolex.com/?ef_id=CjwKCAiAyPyQBhB6EiwAFUuakq-uiylPTh8L8ylZIoXKJ0VorIFHjNtb68ZjfM4r3zXgQCOPM3bKRBoCWtYQAvD_BwE:G:s&s_kwcid=AL!141!3!407424517607!e!!g!!rolex"
          >
            Rolex
          </a>
          <a
            class="list"
            href="https://www.shinola.com/?gclid=CjwKCAiAyPyQBhB6EiwAFUuakpYKwitLOw5ulpvqaVxdO12Ro6pItUZLRr_-Lh_RY5LzUhTgcJOYlBoCv94QAvD_BwE"
          >
            Shinola
          </a>
          <a
            class="list"
            href="https://www.breitling.com/us-en/?gclid=CjwKCAiAyPyQBhB6EiwAFUuakuuQAfLBJDtQx9apJH_tdYlQ4lvRo41v5RDhkx2nkXz7f6UvDobi2hoCygsQAvD_BwE&gclsrc=aw.ds"
          >
            Breitling
          </a>
        </div>
      </div>
      <div className="links-container">
        <h1 className="contact-us-footer">Contact Us</h1>
        <div>
          <a class="list">Phone 555-555-5555</a>
          <a class="list" href="#">
            Email
          </a>
          <a class="list" href="#">
            Technical Support
          </a>
        </div>
      </div>
      <div className="icon-container">
        <a href="https://www.instagram.com/">
          <img
            class="item-image"
            src="https://www.transparentpng.com/thumb/logo-instagram/orzG9u-instagram-picture-logo-png.png"
          ></img>
        </a>
        <a href="https://www.facebook.com/">
          <img
            class="item-image"
            src="https://i0.wp.com/thepowercleanpros.com/wp-content/uploads/2014/12/facebook-flat-vector-logo-400x400.png?ssl=1"
          ></img>
        </a>
        <a href="https://www.youtube.com/">
          <img
            class="item-image"
            src="https://www.freeiconspng.com/uploads/youtube-icon-400x400-png-17.png"
          ></img>
        </a>
        <a href="https://twitter.com/?lang=en">
          <img
            class="item-image"
            src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image_preview"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
=======
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
>>>>>>> main
