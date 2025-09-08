import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
      <footer className="footer">
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

        <div className="footer-center">
          <div className="footer-column">
            <div className="textsetup">
              <h4>CCET ACM</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/events">Events</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="textsetup">
              <h4>Explore</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/teams">Team</Link></li>
                <li><Link to="/icrg">Achievements</Link></li>
                <li><Link to="/acmw">ACM-W</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="textsetup">
              <h4>Contact Us</h4>
              <ul>
                <li><Link to="/teams">Webmasters</Link></li>
                <li><Link to="/magazine">Magazine</Link></li>
                <li><Link to="/contact-section">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

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
