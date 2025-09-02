import React from "react";
import "./Footer.css";

// Import images from assets
// import ccetLogoWhite from "../assets/acm-logo/ccet-logo-white.png";
// import acmLogo from "../assets/acm-logo/acmlogo.png";

const Footer = () => {
  return (
      <footer className="footer">
        {/* Left Section */}
        <div className="footer-section footer-left">
          <div className="imgage">
            <img
                src="/acm-logo/ccet-logo-white.png"
                alt="CCET Logo"
                className="footer-logo"
            />
          </div>
          <div>
            <div className="text">
              <h3>
                Association for
                <br />
                Computing Machinery
              </h3>
            </div>
            <div className="minitext">
              <p>
                Chandigarh College of <br />
                Engineering and Technology
              </p>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <div className="footer-column">
            <div className="textsetup">
              <h4>CCET ACM</h4>
              <ul>
                <li>About Us</li>
                <li>Resources</li>
                <li>Gallery</li>
                <li>Events</li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="textsetup">
              <h4>Explore</h4>
              <ul>
                <li>About</li>
                <li>Home</li>
                <li>Team</li>
                <li>Achievements</li>
                <li>ACM-W</li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="textsetup">
              <h4>Contact Us</h4>
              <ul>
                <li>Webmasters</li>
                <li>Magazine</li>
                <li>Get In Touch</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-section footer-right">
          <div className="imgage">
            <img
                src="/acm-logo/acmlogo.png"
                alt="ACM Logo"
                className="footer-logo2"
            />
          </div>
          <div className="footer-text-right">
            <div className="developed-by">
              <div className="text">
                <h3>Developed By</h3>
              </div>
              <div className="minitext2">
                <p>Web-Development Team</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
