import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <h1>About Us</h1>
        <a>story</a>
        <a>clients</a>
        <a>testimonials</a>
      </div>
      <div>
        <h1>Partners</h1>
        <a>Rolex</a>
        <a>Shinola</a>
        <a>Breitling</a>
      </div>
      <div>
        <h1>Contact Us</h1>
        <a>Phone 555-555-5555</a>
        <a>Email</a>
        <a>Technical Support</a>
      </div>
      <div>
        {/* inside here will be the tags to import icons 
          from web and make them clickable */}
      </div>
    </footer>
  );
}

export default Footer;
