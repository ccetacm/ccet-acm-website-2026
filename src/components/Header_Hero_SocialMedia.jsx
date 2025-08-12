"use client";

import { useEffect, useState } from "react";
import backgroundVideo from "../assets/Header_Main/background_video.mp4";
import logoImg from "../assets/Header_Main/logo.png";
import nepImg from "../assets/Header_Main/NEP_2020.png";
import "./Header_Hero_SocialMedia.css";


const Header_Hero_SocialMedia = ({ startAnimation }) => {
  const [animate, setAnimate] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      setAnimate(true);
    }
  }, [startAnimation]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

  };

  return (
    <>
      <div
        className="main-container"
        style={{ background: "white", color: "var(--oxford-blue)" }}
      >
        <nav className={`navbar ${animate ? "animate" : ""}`}>
          <div className="logo">
            <img
              src={logoImg || "/placeholder.svg"}
              alt="CCET ACM"
              className="logo-img"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">ACTIVITIES</a>
            <a href="#">EVENTS</a>
            <a href="#">RESEARCH LAB</a>
            <a href="#">PROJECTS</a>
            <a href="#">DIGITAL OUTLET</a>
            <a href="#">TEAM</a>
            <a href="#">GALLERY</a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className={`hamburger-menu ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>

          <div className="nep-container">
            <img
              src={nepImg || "/placeholder.svg"}
              alt="NEP"
              className="nep-img"
            />
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}
        >
          <div className="mobile-menu">
            <a href="#" onClick={toggleMobileMenu}>
              HOME
            </a>
            <a href="#" onClick={toggleMobileMenu}>
              ABOUT
            </a>
            <a href="#" onClick={toggleMobileMenu}>
              ACTIVITIES
            </a>
            <a href="#" onClick={toggleMobileMenu}>
              EVENTS
            </a>
            <a href="#" onClick={toggleMobileMenu}>
              RESEARCH LAB
            </a>
            <a href="#" onClick={toggleMobileMenu}>
              PROJECTS
            </a>
            <a href="#" onClick={toggleMobileMenu}>
              DIGITAL OUTLET
            </a>
            <a href="#" onClick={toggleMobileMenu}>
              TEAM
            </a>
            <a href="#" onClick={toggleMobileMenu}>
              GALLERY
            </a>
          </div>
        </div>

        {/* Hero Section with Video Background and Animated Text */}
        <div className={`hero-container ${animate ? "animate" : ""}`}>
          {/* Background Video */}
          <video className="background-video" autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Hero Content with Animated Text */}
          <section className="hero">
            <div className="text-container">
              <h1 className="main-title">
                <span className="ccet-text">CCET</span>
                <span className="acm-text">ACM</span>
                <span className="student-chapter-text">STUDENT CHAPTER</span>
              </h1>
              <div className="subtitle">
                <div>Association for Computing Machinery</div>
                <div>Chandigarh College of Engineering & Technology</div>
              </div>
            </div>
          </section>
        </div>
        {/* Breaking Bar */}
        <div className={`breaking-bar ${animate ? "animate" : ""}`}>
          <div className="scrolling-text">
            <span className="bar-text">Innovation in Computing</span>
            <span className="bar-separator">•</span>
            <span className="bar-text">Research Excellence</span>
            <span className="bar-separator">•</span>
            <span className="bar-text">Student Development</span>
            <span className="bar-separator">•</span>
            <span className="bar-text">Technology Leadership</span>
            <span className="bar-separator">•</span>
            <span className="bar-text">Professional Growth</span>
            <span className="bar-separator">•</span>
            <span className="bar-text">Industry Collaboration</span>
            <span className="bar-separator">•</span>
          </div>
        </div>
        {/* Social Media Sidebar with Icons */}
        <div className={`social-sidebar ${animate ? "animate" : ""}`}>
          <a
            href="https://www.facebook.com/acmccet/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/acmccet/?hl=en"
            className="social-icon instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://in.linkedin.com/company/ccet-acm-student-chapter"
            className="social-icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://x.com/acmccet"
            className="social-icon twitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header_Hero_SocialMedia;
