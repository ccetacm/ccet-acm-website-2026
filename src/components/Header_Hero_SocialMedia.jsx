"use client";

import { useEffect, useState } from "react";
import backgroundVideo from "../assets/Header_Main/background_video.mp4";
import logoImg from "../assets/Header_Main/logo.png";
import nepImg from "../assets/Header_Main/NEP_2020.png";
import ccetImg from "../assets/Header_Main/ccetLogo.png";
import sdgImg from "../assets/Header_Main/SDG.png";
import puImg from "../assets/Header_Main/pu-logo.png";
import acmImg from "../assets/Header_Main/acmlogo.png";

const Header_Hero_SocialMedia = ({ startAnimation }) => {
  const [animate, setAnimate] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarAnimated, setNavbarAnimated] = useState(false);
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [sidebarAnimated, setSidebarAnimated] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [logoFading, setLogoFading] = useState(false);

  const cards = [
    {
      title: "Innovation Hub",
      description: "Fostering creativity and technological advancement",
      icon: "💡",
      color: "var(--hollywood-cerise)",
    },
    {
      title: "Research Excellence",
      description: "Cutting-edge research in computer science",
      icon: "🔬",
      color: "var(--zaffre)",
    },
    {
      title: "Student Development",
      description: "Empowering the next generation of tech leaders",
      icon: "🎓",
      color: "var(--dark-violet)",
    },
    {
      title: "Industry Connect",
      description: "Bridging academia and industry partnerships",
      icon: "🤝",
      color: "var(--fluorescent-cyan)",
    },
  ];

  const logos = [
    { src: logoImg || "/placeholder.svg", alt: "CCET ACM" },
    { src: nepImg || "/placeholder.svg", alt: "NEP" },
    { src: ccetImg || "/placeholder.svg", alt: "CCET" },
    { src: sdgImg || "/placeholder.svg", alt: "CCET" },
    { src: puImg || "/placeholder.svg", alt: "CCET" },
    { src: acmImg || "/placeholder.svg", alt: "CCET" },
  ];

  useEffect(() => {
    if (startAnimation) {
      setAnimate(true);
      setTimeout(() => setNavbarAnimated(true), 200);
      setTimeout(() => setHeroAnimated(true), 600);
      setTimeout(() => setSidebarAnimated(true), 1000);
    }
  }, [startAnimation]);

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(cardInterval);
  }, [cards.length]);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setLogoFading(true);
      setTimeout(() => {
        setCurrentLogoIndex((prev) => (prev + 1) % logos.length);
        setLogoFading(false);
      }, 300);
    }, 2000);

    return () => clearInterval(logoInterval);
  }, [logos.length]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Font and Icon imports - using link tags in head equivalent */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Anton&family=Alex+Brush&family=Allura&family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap");
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
      `}</style>
      <style jsx>{`
        /* Added prefix 'acm-' to all class names to avoid conflicts */
        :root {
          /* Updated color palette */
          --oxford-blue: #070f34;
          --zaffre: #0313a6;
          --dark-violet: #9201cb;
          --hollywood-cerise: #f715ab;
          --fluorescent-cyan: #34edf3;
          /* Additional colors */
          --light: #f9fbfc;
          /* Header specific - Updated for darker neon blue transparent */
          --header-bg: rgba(52, 237, 243, 0.25);
          --highlight-color: #f715ab;
          --highlight-glow: 0 0 10px rgba(247, 21, 171, 0.7);
          --accent-color: #34edf3;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Montserrat", sans-serif;
        }

        .acm-main-container {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        /* Navbar Styles */
        .acm-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 50px;
          background: var(--header-bg);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(52, 237, 243, 0.3);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(-100%);
          opacity: 0;
        }

        .acm-navbar.animate {
          transform: translateY(0);
          opacity: 1;
          animation: acm-navbarSlide 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Added 'acm-' prefix to all keyframe animations */
        @keyframes acm-navbarSlide {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Updated navbar layout - both logos on left with switching animation */
        .acm-navbar-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .acm-logo-switcher {
          height: 80px;
          width: 100px;
          position: relative;
          transition: all 0.3s ease;
        }

        .acm-switching-logo {
          height: 100%;
          width: 100%;
          object-fit: fill;
          filter: drop-shadow(0 0 10px rgba(52, 237, 243, 0.5));
          transition: all 0.3s ease;
          opacity: 1;
        }

        .acm-switching-logo.fading {
          opacity: 0;
          transform: scale(0.9);
        }

        .acm-switching-logo:hover {
          filter: drop-shadow(0 0 15px rgba(52, 237, 243, 0.8));
          transform: scale(1.05);
        }

        /* Navigation Links */
        .acm-nav-links {
          display: flex;
          gap: 40px;
          align-items: center;
          margin-left: auto;
          margin-right: 60px;
        }

        .acm-nav-links a {
          color: var(--oxford-blue);
          text-decoration: none;
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
          position: relative;
          transition: all 0.3s ease;
          padding: 8px 0;
        }

        .acm-nav-links a::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            var(--hollywood-cerise),
            var(--fluorescent-cyan)
          );
          transition: width 0.3s ease;
        }

        .acm-nav-links a:hover {
          color: var(--hollywood-cerise);
          text-shadow: var(--highlight-glow);
        }

        .acm-nav-links a:hover::after {
          width: 100%;
        }

        /* Hamburger Menu */
        .acm-hamburger-menu {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
          z-index: 1001;
        }

        .acm-hamburger-line {
          width: 25px;
          height: 3px;
          background: var(--oxford-blue);
          margin: 3px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .acm-hamburger-menu.active .acm-hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
          background: var(--hollywood-cerise);
        }

        .acm-hamburger-menu.active .acm-hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .acm-hamburger-menu.active .acm-hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
          background: var(--hollywood-cerise);
        }

        /* Mobile Menu */
        .acm-mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(7, 15, 52, 0.95);
          backdrop-filter: blur(10px);
          z-index: 999;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .acm-mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .acm-mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 30px;
          text-align: center;
        }

        .acm-mobile-menu a {
          color: var(--light);
          text-decoration: none;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          padding: 10px 20px;
          border-radius: 10px;
        }

        .acm-mobile-menu a:hover {
          color: var(--hollywood-cerise);
          background: rgba(247, 21, 171, 0.1);
          text-shadow: var(--highlight-glow);
        }

        /* Hero Container */
        .acm-hero-container {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
        }

        /* Background Video */
        .acm-background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.2;
          z-index: 1;
        }

        .acm-hero-container.animate .acm-background-video {
          animation: acm-slowMotion 20s ease-in-out infinite;
          animation-delay: 0s; /* Start immediately when animate class is added */
        }

        @keyframes acm-slowMotion {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.05);
          }
        }

        .acm-hero-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        /* Updated hero section layout - text moved left, space for cards on right */
        .acm-hero {
          flex: 1;
          max-width: 60%;
          padding: 0 50px;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .acm-text-container {
          transform: translateX(0);
          opacity: 0;
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          position: relative;
        }

        .acm-hero-container.animate .acm-text-container {
          transform: translateX(0);
          opacity: 1;
        }

        .acm-main-title {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 12rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 0px;
          margin-top: 60px;
          color: var(--oxford-blue);
          text-transform: uppercase;
          letter-spacing: -4px;
          transform: perspective(500px) rotateX(15deg);
          max-width: 100%;
          overflow: visible;
          text-align: center;
          gap: 20px;
        }

        /* Synchronized floating animation for all text elements */
        .acm-hero-container.animate .acm-main-title {
          animation: acm-titleFloat 20s ease-in-out infinite;
          animation-delay: 0s;
        }

        .acm-ccet-text {
          position: relative;
          font-size: 3.1rem;
          font-weight: 600;
          color: var(--zaffre);
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0;
          will-change: transform, opacity;
          z-index: 10;
          order: 1;
        }

        .acm-hero-container.animate .acm-ccet-text {
          animation: acm-titleFloat 20s ease-in-out infinite,
            acm-slideInCCET 1.2s ease-out 0.3s forwards;
          animation-delay: 0s, 0.3s;
        }

        .acm-acm-text {
          position: relative;
          font-size: 12rem;
          opacity: 0;
          transform: scale(0.5) rotateY(90deg);
          will-change: transform, opacity;
          order: 2;
        }

        .acm-hero-container.animate .acm-acm-text {
          animation: acm-titleFloat 20s ease-in-out infinite,
            acm-slideInACM 1.5s ease-out 0.8s forwards;
          animation-delay: 0s, 0.8s;
        }

        .acm-student-chapter-text {
          position: relative;
          font-size: 2.8rem;
          font-weight: 600;
          color: var(--zaffre);
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
          opacity: 0;
          will-change: transform, opacity;
          z-index: 10;
          white-space: nowrap;
          order: 3;
        }

        .acm-hero-container.animate .acm-student-chapter-text {
          animation: acm-titleFloat 20s ease-in-out infinite,
            acm-slideInStudent 1.2s ease-out 1.5s forwards;
          animation-delay: 0s, 1.5s;
        }

        .acm-hero p {
          font-size: 1.5rem;
          color: var(--zaffre);
          margin-bottom: 15px;
          margin-top: 30px;
          font-weight: bolder;
          opacity: 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.3em;
        }

        .acm-hero-container.animate .acm-hero p {
          animation: acm-fadeInUp 1s ease-out 2s forwards;
        }

        .acm-subtitle {
          font-size: 1.2rem;
          color: var(--zaffre);
          margin-top: 90px;
          margin-bottom: 10px;
          font-weight: 900;
          opacity: 0;
          letter-spacing: 0.15em;
          line-height: 1.4;
        }

        .acm-hero-container.animate .acm-subtitle {
          animation: acm-fadeInUp 1s ease-out 2.8s forwards;
        }

        /* Updated animations to match video timing (20s cycle) */
        @keyframes acm-titleFloat {
          0%,
          100% {
            transform: perspective(500px) rotateX(15deg) translateY(0px);
          }
          50% {
            transform: perspective(500px) rotateX(15deg) translateY(-10px);
          }
        }

        /* Added missing animation keyframes for text elements */
        @keyframes acm-slideInCCET {
          0% {
            opacity: 0;
            transform: translateX(-5%) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(-5%) translateY(0);
          }
        }

        @keyframes acm-slideInACM {
          0% {
            opacity: 0;
            transform: scale(0.5) rotateY(90deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        @keyframes acm-slideInStudent {
          0% {
            opacity: 0;
            transform: translateX(-3%) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(-3%) translateY(0);
          }
        }

        @keyframes acm-fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* New animated card section on the right */
        .acm-card-section {
          flex: 0 0 35%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px 30px;
          z-index: 1;
        }

        .acm-card-container {
          position: relative;
          width: 400px;
          height: 500px;
          perspective: 1000px;
        }

        .acm-card {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(100%) rotateY(90deg);
          opacity: 0;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .acm-card.active {
          transform: translateX(0) rotateY(0deg);
          opacity: 1;
        }

        .acm-card.exit {
          transform: translateX(-100%) rotateY(-90deg);
          opacity: 0;
        }

        @keyframes acm-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Breaking Bar */
        .acm-breaking-bar {
          position: relative;
          background: linear-gradient(90deg, var(--oxford-blue), var(--zaffre));
          color: var(--light);
          padding: 15px 0;
          overflow: hidden;
          z-index: 100;
          transform: translateY(100%);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .acm-breaking-bar.animate {
          transform: translateY(0);
          opacity: 1;
          animation: acm-breakingBarSlide 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.4s
            forwards;
        }

        @keyframes acm-breakingBarSlide {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .acm-scrolling-text {
          display: flex;
          animation: acm-scroll 20s linear infinite;
          white-space: nowrap;
        }

        @keyframes acm-scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .acm-bar-text {
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 2px;
          margin: 0 30px;
          text-transform: uppercase;
        }

        .acm-bar-separator {
          color: var(--fluorescent-cyan);
          font-size: 20px;
          margin: 0 15px;
        }

        /* Social Media Sidebar */
        .acm-social-sidebar {
          position: fixed;
          left: 30px;
          top: 50%;
          transform: translateY(-50%) translateX(-100px);
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 1000;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .acm-social-sidebar.animate {
          transform: translateY(-50%) translateX(0);
          opacity: 1;
          animation: acm-sidebarSlide 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s
            forwards;
        }

        @keyframes acm-sidebarSlide {
          0% {
            transform: translateY(-50%) translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateY(-50%) translateX(0);
            opacity: 1;
          }
        }

        .acm-social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-size: 20px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .acm-social-icon:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .acm-facebook {
          background: linear-gradient(135deg, #1877f2, #42a5f5);
        }
        .acm-instagram {
          background: linear-gradient(135deg, #e4405f, #f77737, #fccc63);
        }
        .acm-linkedin {
          background: linear-gradient(135deg, #0077b5, #00a0dc);
        }
        .acm-twitter {
          background: linear-gradient(135deg, #1da1f2, #0d8bd9);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .acm-navbar {
            padding: 15px 20px;
          }

          .acm-nav-links {
            display: none;
          }

          .acm-hamburger-menu {
            display: flex;
          }

          .acm-hero {
            max-width: 100%;
            padding: 0 20px;
            text-align: center;
          }

          .acm-text-container {
            transform: translateX(0);
          }

          .acm-hero-container.animate .acm-text-container {
            transform: translateX(0);
          }

          .acm-card-section {
            display: none;
          }

          .acm-main-title {
            font-size: clamp(2rem, 12vw, 4rem);
          }

          .acm-social-sidebar {
            left: 20px;
            gap: 15px;
          }

          .acm-social-icon {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .acm-navbar {
            padding: 10px 15px;
          }

          .acm-logo {
            height: 45px;
          }

          .acm-nep-container {
            height: 40px;
          }

          .acm-hero {
            padding: 0 15px;
          }

          .acm-main-title {
            font-size: clamp(1.8rem, 15vw, 3rem);
            margin-bottom: 20px;
          }

          .acm-subtitle {
            font-size: clamp(0.9rem, 4vw, 1.1rem);
          }

          .acm-social-sidebar {
            left: 15px;
            gap: 12px;
          }
        }
      `}</style>

      <div
        className="acm-main-container"
        style={{ background: "white", color: "var(--oxford-blue)" }}
      >
        {/* Navbar */}
        <nav className={`acm-navbar ${navbarAnimated ? "animate" : ""}`}>
          <div className="acm-navbar-left">
            <div className="acm-logo-switcher">
              <img
                src={logos[currentLogoIndex].src || "/placeholder.svg"}
                alt={logos[currentLogoIndex].alt}
                className={`acm-switching-logo ${logoFading ? "fading" : ""}`}
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="acm-nav-links">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">CORE ACTS</a>
            <a href="#">EVENTS</a>
            <a href="#">RESEARCH LAB</a>
            <a href="#">PROJECTS</a>
            <a href="#">DIGITAL OUTLET</a>
            <a href="#">TEAM</a>
            <a href="#">GALLERY</a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className={`acm-hamburger-menu ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="acm-hamburger-line"></div>
            <div className="acm-hamburger-line"></div>
            <div className="acm-hamburger-line"></div>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`acm-mobile-menu-overlay ${
            mobileMenuOpen ? "active" : ""
          }`}
        >
          <div className="acm-mobile-menu">
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
        <div className={`acm-hero-container ${heroAnimated ? "animate" : ""}`}>
          {/* Background Video */}
          <video className="acm-background-video" autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="acm-hero">
            <div className="acm-text-container">
              <div className="acm-main-title">
                <div className="acm-ccet-text">CCET</div>
                <div className="acm-acm-text">ACM</div>
                <div className="acm-student-chapter-text">Student Chapter</div>
              </div>
              <p>Innovation • Technology • Excellence</p>
              <div className="acm-subtitle">
                Empowering the next generation of computer scientists and
                technologists
              </div>
            </div>
          </div>

          <div className="acm-card-section">
            <div className="acm-card-container">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`acm-card ${
                    index === currentCard
                      ? "active"
                      : index ===
                        (currentCard - 1 + cards.length) % cards.length
                      ? "exit"
                      : ""
                  }`}
                  style={{
                    backgroundImage: `url(/${index + 1}.jpg)`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Breaking Bar */}
        <div className={`acm-breaking-bar ${animate ? "animate" : ""}`}>
          <div className="acm-scrolling-text">
            <span className="acm-bar-text">Innovation in Computing</span>
            <span className="acm-bar-separator">•</span>
            <span className="acm-bar-text">Research Excellence</span>
            <span className="acm-bar-separator">•</span>
            <span className="acm-bar-text">Student Development</span>
            <span className="acm-bar-separator">•</span>
            <span className="acm-bar-text">Technology Leadership</span>
            <span className="acm-bar-separator">•</span>
            <span className="acm-bar-text">Professional Growth</span>
            <span className="acm-bar-separator">•</span>
            <span className="acm-bar-text">Industry Collaboration</span>
            <span className="acm-bar-separator">•</span>
          </div>
        </div>

        {/* Social Media Sidebar with Icons */}
        <div
          className={`acm-social-sidebar ${sidebarAnimated ? "animate" : ""}`}
        >
          <a
            href="https://www.facebook.com/acmccet/"
            target="_blank"
            rel="noopener noreferrer"
            className="acm-social-icon acm-facebook"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/acmccet/?hl=en"
            className="acm-social-icon acm-instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://in.linkedin.com/company/ccet-acm-student-chapter"
            className="acm-social-icon acm-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://x.com/acmccet"
            className="acm-social-icon acm-twitter"
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
