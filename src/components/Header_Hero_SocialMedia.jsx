import React from "react";
import backgroundVideo from "../assets/Header_Main/background_video.mp4";
import logoImg from "../assets/Header_Main/logo.png";
import nepImg from "../assets/Header_Main/NEP_2020.png";

const Header_Hero_SocialMedia = () => {
  return (
    <>
      {/* Font and Icon imports - using link tags in head equivalent */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Anton&family=Alex+Brush&family=Allura&family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap");
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
      `}</style>

      <style jsx>{`
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

        body {
          background: white;
          color: var(--oxford-blue);
          padding-top: 0;
        }

        /* Fixed Header Styles - Improved spacing and fonts */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 5%;
          background: var(--header-bg);
          box-shadow: 0 3px 20px rgba(52, 237, 243, 0.2);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(52, 237, 243, 0.3);
          min-height: 70px;
        }

        /* Logo container styles */
        .logo {
          display: flex;
          align-items: center;
          height: 50px;
          flex-shrink: 0;
        }

        .logo-img {
          height: 45px;
          width: auto;
          filter: drop-shadow(0 0 8px rgba(7, 15, 52, 0.3));
          transition: all 0.3s ease;
        }

        .logo-img:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 12px rgba(7, 15, 52, 0.5));
        }

        /* Fixed navigation links */
        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex: 1;
          justify-content: center;
          margin: 0 1rem;
          overflow: hidden;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--oxford-blue);
          font-size: 0.85rem;
          font-weight: 600;
          font-family: "Orbitron", monospace;
          letter-spacing: 0.08em;
          transition: all 0.3s ease;
          padding: 0.6rem 0.8rem;
          position: relative;
          white-space: nowrap;
          display: inline-block;
          text-transform: uppercase;
          flex-shrink: 1;
          min-width: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .nav-links a:hover {
          color: var(--zaffre);
          text-shadow: 0 0 15px rgba(3, 19, 166, 0.8),
            0 0 25px rgba(52, 237, 243, 0.4);
          transform: translateY(-1px);
          background: rgba(3, 19, 166, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(3, 19, 166, 0.2);
          letter-spacing: 0.12em;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            var(--zaffre),
            var(--fluorescent-cyan)
          );
          transition: width 0.3s ease;
          border-radius: 1px;
        }

        .nav-links a::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 1px solid transparent;
          border-radius: 8px;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(52, 237, 243, 0.1),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .nav-links a:hover::after {
          width: 80%;
          box-shadow: 0 0 10px rgba(3, 19, 166, 0.7);
        }

        .nav-links a:hover::before {
          opacity: 1;
        }

        /* NEP Image styles */
        .nep-container {
          flex-shrink: 0;
        }

        .nep-img {
          height: 50px;
          width: auto;
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .nep-img:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        /* Hero Section */
        .hero-container {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-top: 0;
        }

        .background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.2;
          z-index: 1;
          /* Slow down the video playback */
          animation: slowMotion 20s infinite linear;
        }

        /* Animation to create slow motion effect */
        @keyframes slowMotion {
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

        .hero {
          position: relative;
          text-align: center;
          z-index: 2;
          width: 100%;
          margin-top: 0px;
          padding: 0 5%;
        }

        /* Animated Text Styles from text anime.html */
        .text-container {
          text-align: center;
          z-index: 10;
        }

        .main-title {
          position: relative;
          display: inline-block;
          font-size: 12rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 0px;
          margin-top: 40px;
          color: var(--oxford-blue);
          text-transform: uppercase;
          letter-spacing: -4px;
          transform: perspective(500px) rotateX(15deg);
          animation: titleFloat 6s ease-in-out infinite;
        }

        .ccet-text {
          position: absolute;
          top: -30px;
          right: 70%;
          font-size: 3.1rem;
          font-weight: 700;
          color: var(--zaffre);
          text-transform: uppercase;
          letter-spacing: 1px;
         
            3px 3px 3px rgba(0, 0, 0, 0.15);
          opacity: 0;
          transform: translateX(-50px) translateY(20px);
          animation: titleFloat 6s ease-in-out infinite,
            slideInCCET 1.2s ease-out 0.3s forwards;
        }

        .acm-text {
          display: inline-block;
          opacity: 0;
          transform: scale(0.5) rotateY(90deg);
          animation: titleFloat 6s ease-in-out infinite,
            slideInACM 1.5s ease-out 0.8s forwards;
        }

        .student-chapter-text {
          position: absolute;
          bottom: -67px;
          right: -120px;
          font-size: 2.8rem;
          font-weight: 600;
          color: var(--zaffre);
          text-transform: uppercase;
          letter-spacing: 1px;
          
            3px 3px 3px rgba(0, 0, 0, 0.15);
          opacity: 0;
          transform: translateX(50px) translateY(-20px);
          animation: titleFloat 6s ease-in-out infinite,
            slideInStudent 1.2s ease-out 1.5s forwards;
        }

        .hero p {
          font-size: 1.5rem;
          color: var(--dark-violet);
          margin-bottom: 15px;
          margin-top: 30px;
          font-weight: 600;
          opacity: 0;
          animation: fadeInUp 1s ease-out 2s forwards;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.3em;
        }

        .subtitle {
          font-size: 1.2rem;
          color: var(--zaffre);
          margin-top: 80px;
          
          margin-bottom: 10px;
          font-weight: 900;
          opacity: 0;
          animation: fadeInUp 1s ease-out 2.8s forwards;
          letter-spacing: 0.15em;
          line-height: 1.4;
        }

        @keyframes titleFloat {
          0%,
          100% {
            transform: perspective(500px) rotateX(15deg) translateY(0px);
          }
          50% {
            transform: perspective(500px) rotateX(15deg) translateY(-10px);
          }
        }

        @keyframes slideInCCET {
          0% {
            opacity: 0;
            transform: translateX(-50px) translateY(20px) rotateZ(-10deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotateZ(0deg);
          }
        }

        @keyframes slideInACM {
          0% {
            opacity: 0;
            transform: scale(0.5) rotateY(90deg) perspective(500px)
              rotateX(15deg);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8) rotateY(45deg) perspective(500px)
              rotateX(15deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg) perspective(500px) rotateX(15deg);
          }
        }

        @keyframes slideInStudent {
          0% {
            opacity: 0;
            transform: translateX(50px) translateY(-20px) rotateZ(10deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotateZ(0deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cta-btn {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: var(--zaffre);
          color: white;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.2em;
          transition: all 0.3s;
          box-shadow: 0 4px 10px rgba(3, 19, 166, 0.2);
          opacity: 0;
          animation: fadeInUp 1s ease-out 2.5s forwards;
        }

        .cta-btn:hover {
          background: var(--dark-violet);
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(146, 1, 203, 0.3);
        }

        /* Updated Social Sidebar with Icons */
        .social-sidebar {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          z-index: 1500;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          background: var(--zaffre);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(3, 19, 166, 0.3);
        }

        .social-icon i {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 8px 25px rgba(3, 19, 166, 0.4);
        }

        /* Individual social media brand colors on hover */
        .social-icon.facebook:hover {
          background: #1877f2;
          box-shadow: 0 8px 25px rgba(24, 119, 242, 0.4);
        }

        .social-icon.instagram:hover {
          background: linear-gradient(
            45deg,
            #405de6,
            #5851db,
            #833ab4,
            #c13584,
            #e1306c,
            #fd1d1d
          );
          box-shadow: 0 8px 25px rgba(225, 48, 108, 0.4);
        }

        .social-icon.linkedin:hover {
          background: #0a66c2;
          box-shadow: 0 8px 25px rgba(10, 102, 194, 0.4);
        }

        .social-icon.twitter:hover {
          background: #1da1f2;
          box-shadow: 0 8px 25px rgba(29, 161, 242, 0.4);
        }

        .social-icon:hover i {
          transform: scale(1.1);
        }

        /* Breaking Bar Styles */
        .breaking-bar {
          z-index: 1000;
          margin-top: -55px;
          background: var(--oxford-blue) !important;
          border-top: 1px solid rgba(52, 237, 243, 0.3);
          border-bottom: 1px solid rgba(52, 237, 243, 0.3);
          padding: 1rem 0;
          overflow: hidden;
          position: relative;
          opacity: 1 !important;
        }

        .scrolling-text {
          display: flex;
          white-space: nowrap;
          animation: scrollRight 25s linear infinite;
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .bar-text {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-family: "Montserrat", sans-serif;
          padding-right: 3rem;
        }

        .bar-separator {
          color: var(--fluorescent-cyan);
          margin: 0 2rem;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .bar-text {
            font-size: 0.95rem;
            letter-spacing: 0.1em;
          }

          .bar-separator {
            font-size: 0.95rem;
            margin: 0 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .breaking-bar {
            padding: 0.8rem 0;
          }

          .bar-text {
            font-size: 0.85rem;
            letter-spacing: 0.08em;
          }

          .bar-separator {
            font-size: 0.85rem;
            margin: 0 1rem;
          }
        }

        /* Responsive Design */
        @media (max-width: 1400px) {
          .nav-links {
            gap: 1.2rem;
          }

          .nav-links a {
            font-size: 0.8rem;
            padding: 0.5rem 0.7rem;
            letter-spacing: 0.06em;
          }

          .social-sidebar {
            right: 1.5rem;
          }
        }

        @media (max-width: 1200px) {
          .nav-links {
            gap: 1rem;
          }

          .nav-links a {
            font-size: 0.75rem;
            padding: 0.5rem 0.6rem;
            letter-spacing: 0.05em;
          }

          .main-title {
            font-size: 9rem;
          }

          .ccet-text {
            font-size: 2.8rem;
            top: -27px;
          }

          .student-chapter-text {
            font-size: 2.5rem;
            bottom: -58px;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .social-sidebar {
            right: 1rem;
          }

          .social-icon {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 992px) {
          .navbar {
            padding: 0.5rem 3%;
          }

          .nav-links {
            gap: 0.8rem;
            margin: 0 0.5rem;
          }

          .nav-links a {
            font-size: 0.7rem;
            padding: 0.4rem 0.5rem;
            letter-spacing: 0.04em;
          }

          .logo-img {
            height: 40px;
          }

          .nep-img {
            height: 40px;
          }

          .social-sidebar {
            right: 0.8rem;
          }

          .social-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 0.5rem 2%;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .nav-links {
            order: 3;
            flex-basis: 100%;
            justify-content: center;
            gap: 0.5rem;
            margin: 0.5rem 0 0 0;
            flex-wrap: wrap;
          }

          .nav-links a {
            font-size: 0.65rem;
            padding: 0.3rem 0.5rem;
            letter-spacing: 0.03em;
          }

          .logo-img {
            height: 35px;
          }

          .nep-img {
            height: 35px;
          }

          .main-title {
            font-size: 6rem;
            letter-spacing: -2px;
          }

          .ccet-text {
            font-size: 2.3rem;
            top: -23px;
          }

          .student-chapter-text {
            font-size: 2rem;
            bottom: -47px;
          }

          .subtitle {
            font-size: 1rem;
            margin-top: 30px;
          }

          body {
            padding-top: 0;
          }

          .social-sidebar {
            right: 0.5rem;
            gap: 0.8rem;
          }

          .social-icon {
            width: 38px;
            height: 38px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 0.4rem 2%;
            min-height: 100px;
          }

          .nav-links {
            gap: 0.3rem;
            margin: 0.3rem 0 0 0;
          }

          .nav-links a {
            font-size: 0.6rem;
            padding: 0.25rem 0.4rem;
            letter-spacing: 0.02em;
          }

          .main-title {
            font-size: 4.5rem;
          }

          .ccet-text {
            font-size: 1.8rem;
            top: -18px;
          }

          .student-chapter-text {
            font-size: 1.65rem;
            bottom: -43px;
          }

          .subtitle {
            font-size: 0.9rem;
            margin-top: 25px;
            letter-spacing: 0.1em;
          }

          .nep-img {
            height: 30px;
          }

          body {
            padding-top: 0;
          }

          .social-sidebar {
            right: 0.3rem;
            gap: 0.6rem;
          }

          .social-icon {
            width: 35px;
            height: 35px;
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div style={{ background: "white", color: "var(--oxford-blue)" }}>
        <nav className="navbar">
          <div className="logo">
            <img src={logoImg} alt="CCET ACM" className="logo-img" />
          </div>
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
          <div className="nep-container">
            <img src={nepImg} alt="NEP" className="nep-img" />
          </div>
        </nav>

        {/* Hero Section with Video Background and Animated Text */}
        <div className="hero-container">
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
        <div className="breaking-bar">
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
        <div className="social-sidebar">
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
