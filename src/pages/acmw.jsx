import React, { useEffect, useState } from "react";
import globeImg from "../assets/acmw_pg/globe.png";
import textImg from "../assets/acmw_pg/text.png";
import badge1 from "../assets/acmw_pg/badge1.png";
import badge2 from "../assets/acmw_pg/badge2.png";
import badge3 from "../assets/acmw_pg/badge3.png";
import webdevImg from "../assets/acmw_pg/webdev.jpg";
import datascienceImg from "../assets/acmw_pg/datascience.jpg";
import uiuxImg from "../assets/acmw_pg/uiux.jpg";
import acmLogo from "../assets/acmw_pg/acm-logo.png";
import acmwLogo from "../assets/acmw_pg/acmw-logo.png";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./acmw.css";

const ACMW = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  // ✅ Load FontAwesome once
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // ✅ Scroll animations (IntersectionObserver)
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="acmw-page">
      {/* ✅ Particles background */}
      {engineReady && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            particles: {
              number: { value: 40 },
              color: { value: "#3b82f6" },
              links: {
                enable: true,
                color: "#60a5fa",
                opacity: 0.25,
                width: 0.7,
                distance: 150,
              },
              move: { enable: true, speed: 0.6 },
              opacity: { value: 0.4 },
              size: { value: 3 },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                repulse: { distance: 120 },
                push: { quantity: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Hero Section */}
      <section className="acmw-hero">
        <div className="acmw-hero-container">
          <div className="acmw-hero-left">
            <span className="acmw-tagline">Empowering Women in Technology</span>
            <h1>
              CCET <span className="gradient-text">ACM-W</span>
            </h1>
            <h2>STUDENT CHAPTER</h2>
            <p>
             ACM-W Team at CCET is a dynamic group of individuals passionate about advancing women in computing. Committed to creating an inclusive environment, the team organizes engaging events, workshops, and mentorship programs, providing valuable opportunities for skill enhancement and networking. With a dedication to empowering women in technology, the ACM-W team at CCET cultivates a supportive community, encouraging members to thrive and contribute to the ever-evolving landscape of computing.
            </p>
          </div>
          <div className="acmw-hero-right">
            <div className="acmw-logo-wrapper">
              <img src={globeImg} alt="Rotating Globe" className="acmw-globe" />
              <img src={textImg} alt="ACM-W Text" className="acmw-logo-text" />
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <div className="acmw-badges-container reveal">
        <div className="acmw-badge">
          <img src={badge1} alt="Badge 1" className="acmw-badge-img" />
        </div>
        <div className="acmw-badge">
          <img src={badge2} alt="Badge 2" className="acmw-badge-img" />
        </div>
        <div className="acmw-badge">
          <img src={badge3} alt="Badge 3" className="acmw-badge-img" />
        </div>
      </div>

      {/* About Section */}
      <section className="acmw-about">
        <div className="acmw-about-container">
          <h2>
            Our Purpose - <span className="gradient-text">ACM-W CCET</span>
          </h2>
          <p className="acmw-about-intro">
            Driving innovation and excellence in computing through education,
            research, and global collaboration.
          </p>

          <div className="acmw-about-cards">
            <div className="acmw-about-card mission reveal">
              <i className="fas fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p>
                To advance the field of computing and empower individuals within
                it, promoting innovation and excellence in computing education,
                research, and practice.
              </p>
            </div>

            <div className="acmw-about-card innovation reveal">
              <i className="fas fa-lightbulb"></i>
              <h3>Our Vision</h3>
              <p>
                To be at the forefront of shaping the future of computing,
                fostering a dynamic global community where interdisciplinary
                collaboration thrives.
              </p>
            </div>

            <div className="acmw-about-card global reveal">
              <i className="fas fa-globe"></i>
              <h3>Our Plan</h3>
              <p>
                Drive the future of computing by fostering interdisciplinary
                collaboration, advocating for ethical and responsible technology
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="acmw-what-we-do">
        <div className="acmw-what-container">
          <h2>What We Do</h2>
          <div className="acmw-timeline">
            <div className="acmw-timeline-item">
              <div className="acmw-timeline-icon purple">
                <i className="fas fa-laptop-code reveal"></i>
              </div>
              <div className="timeline-content">
                <h3>Technical Workshops</h3>
                <p>
                  Regular hands-on sessions covering latest technologies,
                  programming languages, and industry best practices.
                </p>
              </div>
            </div>

            <div className="acmw-timeline-item">
              <div className="acmw-timeline-icon green">
                <i className="fas fa-user-friends reveal"></i>
              </div>
              <div className="acmw-timeline-content">
                <h3>Mentorship Programs</h3>
                <p>
                  Connecting students with industry professionals and senior
                  students for guidance and career development.
                </p>
              </div>
            </div>

            <div className="acmw-timeline-item">
              <div className="acmw-timeline-icon orange">
                <i className="fas fa-briefcase reveal"></i>
              </div>
              <div className="acmw-timeline-content">
                <h3>Career Development</h3>
                <p>
                  Resume building workshops, interview preparation, and networking
                  events with tech companies.
                </p>
              </div>
            </div>

            <div className="acmw-timeline-item">
              <div className="acmw-timeline-icon red">
                <i className="fas fa-hand-holding-heart reveal"></i>
              </div>
              <div className="acmw-timeline-content">
                <h3>Community Outreach</h3>
                <p>
                  Organizing events to inspire young girls to pursue careers in
                  STEM fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="acmw-recent-activities">
        <div className="acmw-activities-container">
          <h2>Recent Activities</h2>
          <div className="acmw-activities-grid">
            <div className="acmw-activity-card reveal">
              <img src={webdevImg} alt="Web Development Bootcamp" className="acmw-activity-img" />
              <div className="acmw-activity-content">
                <span className="acmw-tag bootcamp">Bootcamp</span>
                <h3>Web Development Bootcamp</h3>
                <p><i className="fas fa-calendar-alt"></i> Feb 2025</p>
                <p><i className="fas fa-users"></i> 60 Participants</p>
              </div>
            </div>

            <div className="acmw-activity-card reveal">
              <img src={datascienceImg} alt="Data Science Workshop" className="acmw-activity-img" />
              <div className="acmw-activity-content">
                <span className="acmw-tag workshop">Workshop</span>
                <h3>Data Science Workshop</h3>
                <p><i className="fas fa-calendar-alt"></i> Jan 2025</p>
                <p><i className="fas fa-users"></i> 55 Participants</p>
              </div>
            </div>

            <div className="acmw-activity-card reveal">
              <img src={uiuxImg} alt="UI/UX Design Sprint" className="acmw-activity-img" />
              <div className="acmw-activity-content">
                <span className="acmw-tag sprint">Design Sprint</span>
                <h3>UI/UX Design Sprint</h3>
                <p><i className="fas fa-calendar-alt"></i> Dec 2024</p>
                <p><i className="fas fa-users"></i> 40 Participants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="acmw-resources">
        <div className="acmw-resources-container">
          <h2>Resources</h2>
          <div className="acmw-resources-grid">
            <div className="acmw-resource-category reveal">
              <h3>Learning Resources</h3>
              <div className="acmw-resource-cards">
                <div className="acmw-resource-card">
                  <span className="acmw-tag database">Database</span>
                  <h4>ACM Digital Library Access</h4>
                  <p>Full access to research papers, journals, and conference proceedings.</p>
                  <a href="#" className="acmw-resource-link">
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>

                <div className="acmw-resource-card">
                  <span className="acmw-tag pdf">PDF Guide</span>
                  <h4>Women in Tech Career Guide</h4>
                  <p>Comprehensive guide for navigating tech careers as a woman.</p>
                  <a href="#" className="acmw-resource-link">
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="acmw-resource-category reveal">
              <h3>Career Development</h3>
              <div className="acmw-resource-cards">
                <div className="acmw-resource-card">
                  <span className="acmw-tag study">Study Kit</span>
                  <h4>Tech Interview Preparation Kit</h4>
                  <p>Common coding questions, behavioral interview tips, and more.</p>
                  <a href="#" className="acmw-resource-link">
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>

                <div className="acmw-resource-card">
                  <span className="acmw-tag template">Templates</span>
                  <h4>Resume Templates for Tech</h4>
                  <p>Professional resume templates tailored for tech positions.</p>
                  <a href="#" className="acmw-resource-link">
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="acmw-resource-category reveal">
              <h3>Networking & Mentorship</h3>
              <div className="acmw-resource-cards">
                <div className="acmw-resource-card">
                  <span className="acmw-tag platform">Platform</span>
                  <h4>Mentor Connect Platform</h4>
                  <p>Connect with industry professionals for guidance and advice.</p>
                  <a href="#" className="acmw-resource-link">
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>

                <div className="acmw-resource-card">
                  <span className="acmw-tag directory">Directory</span>
                  <h4>Women in Tech Communities</h4>
                  <p>Curated list of online communities and networking groups.</p>
                  <a href="#" className="acmw-resource-link">
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="acmw-team">
        <div className="acmw-team-card-big">
          <h2>Our Teams</h2>
          <div className="acmw-team-split reveal">
            <div className="acmw-team-split-card">
              <img src={acmLogo} alt="CASC Logo" className="acmw-team-img1" />
              <h3>CASC</h3>
              <p>CCET ACM Student Chapter</p>
              <div className="acmw-social-links">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>

            <div className="acmw-team-split-card">
              <img src={acmwLogo} alt="CASC-W Logo" className="acmw-team-img" />
              <h3>CASC-W</h3>
              <p>CCET ACM Student Chapter - W</p>
              <div className="acmw-social-links">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ACMW;
