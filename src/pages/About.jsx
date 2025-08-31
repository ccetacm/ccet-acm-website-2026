"use client";

// About.jsx
import { useEffect, useState } from "react";
import "./About.css";
import acmDiamondLogo from "../assets/acm-logo/acmlogo.png";
import ccetAcmLogo from "../assets/acm-logo/ccet-acm-logo_black_bg.png";
import acmWLogo from "../assets/acm-logo/acm-w-logo.png";
import ContactSection from "./ContactSection";


import {
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaExternalLinkAlt,
  FaBullseye,
  FaRocket,
  FaEye,
  FaHandshake,
  FaArrowUp,
} from "react-icons/fa";
import ContactForm from "./ContactForm"; // Importing separate ContactForm component

function About() {
  // State to track scroll for showing the arrow
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    initNavigation();
    initScrollAnimations();
    initCounters();
    initBackToTop();
    initProgramOutcomes();
    initScrollEffects();
    initCardAnimations();
    setTimeout(initTypingAnimation, 1000);

    // Fade out loader on window load
    window.addEventListener("load", () => {
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }
      document.body.classList.add("loaded");
    });

    // Debounced scroll handler to toggle scroll-to-top button visibility
    const debouncedScrollHandler = debounce(() => {
      if (window.pageYOffset > 200) setShowScrollTop(true);
      else setShowScrollTop(false);
    }, 10);
    window.addEventListener("scroll", debouncedScrollHandler);

    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="acm-about">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in-up">
              <h1 className="hero-main-title">About ACM</h1>
              <h2 className="hero-subtitle-typing typing-animation">
                "<span id="heroTypingText"></span>"
              </h2>
              <p className="hero-subtitle">
                CCET ACM Student Chapter - Building a community of innovators,
                creators, and technology enthusiasts who shape the future of
                computing.
              </p>
              <div className="hero-buttons">
                <a href="#about" className="btn btn-primary">
                  Discover More
                </a>
                <a href="#teams" className="btn btn-secondary">
                  Our Teams
                </a>
              </div>
            </div>
            <div className="hero-visual fade-in-right">
              <div className="acm-logo-display">
                <img
  src={acmDiamondLogo}
  alt="ACM Logo"
  className="acm-diamond-logo"
/>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <FaChevronDown />
        </div>
      </section>

      {/* About ACM Section */}
      <section id="about" className="about-acm section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">About ACM</h2>
            <p className="section-subtitle">
              The world's largest scientific and educational computing society
            </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="content-card slide-in-left">
                <p className="lead-text">
                  The Association for Computing Machinery (ACM) is an
                  international learned society for computing. Founded in 1947,
                  it serves as an umbrella organization for academic and
                  scholarly interests in computer science.
                </p>
              </div>
            </div>
            <div className="about-stats-section">
              <div className="stats-card slide-in-up">
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-number" data-target="100000">
                      0
                    </span>
                    <span className="stat-label">Members Worldwide</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number" data-target="1947">
                      0
                    </span>
                    <span className="stat-label">Founded</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number" data-target="50">
                      0
                    </span>
                    <span className="stat-label">Countries</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-features">
              <div className="feature-grid">
                <div className="feature-card slide-in-up" data-delay="100">
                  <div className="feature-icon">
                    <FaGlobe />
                  </div>
                  <h3>Global Community</h3>
                  <p>
                    100,000+ members worldwide working together to advance
                    computing
                  </p>
                </div>
                <div className="feature-card slide-in-up" data-delay="200">
                  <div className="feature-icon">
                    <FaRocket />
                  </div>
                  <h3>International Impact</h3>
                  <p>Leading global initiatives in technology and innovation</p>
                </div>
                <div className="feature-card slide-in-up" data-delay="300">
                  <div className="feature-icon">
                    <FaHandshake />
                  </div>
                  <h3>Technology Collaboration</h3>
                  <p>Fostering partnerships across industries and academia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About CASC Section */}
      <section id="casc" className="about-casc section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">About CASC</h2>
            <p className="section-subtitle">CCET ACM Student Chapter</p>
          </div>
          <div className="casc-content">
            <div className="casc-intro slide-in-right">
              <div className="content-card">
                <p className="lead-text">
                  CCET ACM Student Chapter believes in providing a healthy
                  environment where creativity and imagination can flourish.
                  Through collaboration and engagement in technical activities
                  and projects, we envision building a community of like-minded
                  people who love to code, collaborate and have fun!
                </p>
              </div>
            </div>
            <div className="mission-vision-grid">
              <div className="mission-card slide-in-left">
                <div className="card-header">
                  <FaBullseye />
                  <h3>Our Purpose</h3>
                </div>
                <p>
                  Driving innovation and excellence in computing through
                  education, research, and global collaboration.
                </p>
              </div>
              <div className="mission-vision-row">
                <div className="mission-card slide-in-up">
                  <div className="card-header">
                    <FaRocket />
                    <h3>Our Mission</h3>
                  </div>
                  <p>
                    To advance the field of computing and empower individuals
                    within it, promoting innovation and excellence in computing
                    education, research, and practice.
                  </p>
                </div>
                <div className="mission-card slide-in-right">
                  <div className="card-header">
                    <FaEye />
                    <h3>Our Vision</h3>
                  </div>
                  <p>
                    To be at the forefront of shaping the future of computing,
                    fostering a dynamic global community where interdisciplinary
                    collaboration thrives.
                  </p>
                </div>
              </div>
              <div className="plan-card-center">
                <div className="mission-card slide-in-up" data-delay="200">
                  <div className="card-header">
                    <FaMapMarkerAlt />
                    <h3>Our Plan</h3>
                  </div>
                  <p>
                    Drive the future of computing by fostering interdisciplinary
                    collaboration, advocating for ethical and responsible
                    technology development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section id="department" className="department section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              Department of Computer Science & Engineering
            </h2>
            <p className="section-subtitle">
              Excellence in Computing Education
            </p>
          </div>
          <div className="department-content">
            <div className="department-about slide-in-left">
              <div className="content-card">
                <h3>About Us</h3>
                <p>
                  The Computer Science and Engineering Department at Chandigarh
                  College of Engineering and Technology (CCET) is committed to
                  delivering world-class education, fostering innovation, and
                  nurturing skilled professionals in the field of computing and
                  technology.
                </p>
                <p>
                  With a strong emphasis on academic excellence and practical
                  learning, the department offers a robust curriculum,
                  state-of-the-art facilities, and opportunities for research
                  and development.
                </p>
                <a
                  href="https://ccet.ac.in/CSE-overview.php"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="department-goals">
              <div className="goal-card slide-in-right">
                <div className="goal-header">
                  <FaEye />
                  <h3>Vision</h3>
                </div>
                <p>
                  To produce self-motivated and globally competent technocrats
                  equipped with computing, innovation, and human values for ever
                  changing world and shape them towards serving the society.
                </p>
              </div>
              <div className="goal-card slide-in-up" data-delay="100">
                <div className="goal-header">
                  <FaRocket />
                  <h3>Mission</h3>
                </div>
                <ul className="mission-list">
                  <li>
                    Make the department a smart centre for learning, innovation
                    and research
                  </li>
                  <li>
                    Inculcate strong background in mathematical, theoretical,
                    and practical knowledge
                  </li>
                  <li>
                    Promote interaction with institutions, industries and
                    research organizations
                  </li>
                  <li>
                    Provide a friendly environment while developing
                    interpersonal skills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Outcomes Section */}
      <section id="outcomes" className="outcomes section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Program Outcomes</h2>
            <p className="section-subtitle">
              Comprehensive learning objectives for holistic development
            </p>
          </div>

          <div className="outcomes-grid">
            {[
              {
                num: "01",
                title: "Engineering Knowledge",
                desc: "Apply knowledge of mathematics, science, and engineering fundamentals",
              },
              {
                num: "02",
                title: "Problem Analysis",
                desc: "Identify, formulate, and solve complex engineering problems",
              },
              {
                num: "03",
                title: "Design/Development",
                desc: "Design solutions for complex problems with appropriate consideration",
              },
              {
                num: "04",
                title: "Investigation",
                desc: "Conduct investigations of complex problems using research-based knowledge",
              },
              {
                num: "05",
                title: "Modern Tool Usage",
                desc: "Create, select, and apply appropriate techniques and modern tools",
              },
              {
                num: "06",
                title: "Engineer and Society",
                desc: "Apply reasoning informed by contextual knowledge to assess issues",
              },
            ].map(({ num, title, desc }, i) => (
              <div
                className="outcome-card slide-in-up"
                data-delay={i * 100}
                key={num}
              >
                <div className="outcome-number">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          {/* View all outcomes button */}
          <div className="text-center">
            <button
              className="btn btn-outline show-more-outcomes"
              id="showMoreOutcomes"
              type="button"
            >
              View All Program Outcomes <FaChevronDown />
            </button>
          </div>

          {/* Additional Outcomes Section */}
          <div className="additional-outcomes" id="additionalOutcomes">
            <div className="outcomes-grid">
              {[
                {
                  num: "07",
                  title: "Environment and Sustainability",
                  desc: "Understand and assess societal, health, safety, legal and cultural issues",
                },
                {
                  num: "08",
                  title: "Ethics",
                  desc: "Apply ethical principles and commit to professional ethics and responsibilities",
                },
                {
                  num: "09",
                  title: "Individual and Team Work",
                  desc: "Function effectively as an individual and as a member of diverse teams",
                },
                {
                  num: "10",
                  title: "Communication",
                  desc: "Communicate effectively on complex engineering activities with peers",
                },
                {
                  num: "11",
                  title: "Project Management",
                  desc: "Demonstrate knowledge of engineering and management principles",
                },
                {
                  num: "12",
                  title: "Life-long Learning",
                  desc: "Recognize the need for and engage in independent learning",
                },
              ].map(({ num, title, desc }) => (
                <div className="outcome-card slide-in-up" key={num}>
                  <div className="outcome-number">{num}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>

            {/* Show Less button now BELOW left-aligned */}
            <div className="text-left mt-3">
              <button
                className="btn btn-outline show-less-outcomes"
                id="showLessOutcomes"
                type="button"
              >
                <FaChevronUp /> Show Less
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="teams section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Teams</h2>
            <p className="section-subtitle">
              Dedicated groups working towards computing excellence
            </p>
          </div>
          <div className="teams-grid">
            <div className="team-card slide-in-left">
              <div className="team-logo">
                <img src={ccetAcmLogo} alt="CASC Logo" />
              </div>
              <div className="team-content">
                <h3>CASC</h3>
                <p className="team-subtitle">CCET ACM Student Chapter</p>
                <p>
                  The main chapter focused on advancing computing education,
                  research, and fostering a community of technology enthusiasts
                  and innovators.
                </p>
                <div className="team-features">
                  <span className="feature-tag">Technical Events</span>
                  <span className="feature-tag">Research Projects</span>
                  <span className="feature-tag">Industry Connect</span>
                </div>
              </div>
            </div>
            <div className="team-card slide-in-right">
              <div className="team-logo">
                <img src={acmWLogo} alt="CASC-W Logo" />
              </div>
              <div className="team-content">
                <h3>CASC-W</h3>
                <p className="team-subtitle">CCET ACM Student Chapter - W</p>
                <p>
                  Dedicated to supporting, celebrating, and advocating for women
                  in computing, creating an inclusive environment for all to
                  thrive in technology.
                </p>
                <div className="team-features">
                  <span className="feature-tag">Women Empowerment</span>
                  <span className="feature-tag">Mentorship</span>
                  <span className="feature-tag">Diversity & Inclusion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     
      <ContactSection />
      {/* Scroll to Top Arrow Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: 40,
            right: 40,
            backgroundColor: "#1e88e5",
            border: "none",
            borderRadius: "50%",
            width: 50,
            height: 50,
            cursor: "pointer",
            color: "white",
            boxShadow: "0 4px 12px rgba(30, 136, 229, 0.5)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

function initProgramOutcomes() {
  const showMoreBtn = document.getElementById("showMoreOutcomes");
  const additionalOutcomes = document.getElementById("additionalOutcomes");
  const showLessBtn = document.getElementById("showLessOutcomes");
  if (!showMoreBtn || !additionalOutcomes || !showLessBtn) return;

  showMoreBtn.addEventListener("click", () => {
    additionalOutcomes.classList.add("show");
    showMoreBtn.style.display = "none"; // hide view more
  });

  showLessBtn.addEventListener("click", () => {
    additionalOutcomes.classList.remove("show");
    showMoreBtn.style.display = "inline-block"; // re-show view more
  });
}

function initNavigation() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (!navbar || !navToggle || !navMenu) return;

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("nav-open");
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("nav-open");
    });
  });

  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");

    if (scrollTop > lastScrollTop && scrollTop > 200)
      navbar.style.transform = "translateY(-100%)";
    else navbar.style.transform = "translateY(0)";
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });

  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const about = document.querySelector("#about");
      if (about) about.scrollIntoView({ behavior: "smooth" });
    });
  }
}

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".slide-in-left, .slide-in-right, .slide-in-up, .fade-in-up, .fade-in-left, .fade-in-right"
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = Number.parseInt(el.getAttribute("data-delay") || "0", 10);
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateX(0) translateY(0)";
          el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }, delay);
        obs.unobserve(el);
      }
    });
  }, observerOptions);

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    if (el.classList.contains("slide-in-left"))
      el.style.transform = "translateX(-50px)";
    else if (el.classList.contains("slide-in-right"))
      el.style.transform = "translateX(50px)";
    else if (
      el.classList.contains("slide-in-up") ||
      el.classList.contains("fade-in-up")
    )
      el.style.transform = "translateY(50px)";
    else if (el.classList.contains("fade-in-left"))
      el.style.transform = "translateX(-30px)";
    else if (el.classList.contains("fade-in-right"))
      el.style.transform = "translateX(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

function initScrollEffects() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector(".hero-background");
    if (heroBackground)
  heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;

  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
     if (link.getAttribute("href") === `#${currentSection}`) {

        link.classList.add("active");
      }
    });
  });

  const cards = document.querySelectorAll(
    ".feature-card, .mission-card, .outcome-card, .team-card, .content-card"
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll(".stat-number");
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = Number.parseInt(counter.getAttribute("data-target"));
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = Math.floor(current).toLocaleString();
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent =
                target === 100000 ? "100,000+" : target.toLocaleString();
            }
          };

          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

function initBackToTop() {
  const backToTopButton = document.getElementById("backToTop");
  if (!backToTopButton) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) backToTopButton.classList.add("show");
    else backToTopButton.classList.remove("show");
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    setTimeout(() => {
      showNotification(
        "Message sent successfully! We'll get back to you soon.",
        "success"
      );
      contactForm.reset();
      submitButton.innerHTML =
        'Send Message <i class="fas fa-paper-plane"></i>';
      submitButton.disabled = false;
      contactForm.style.transform = "scale(0.98)";
      setTimeout(() => {
        contactForm.style.transform = "scale(1)";
      }, 200);
    }, 2000);
  });

  const formControls = contactForm.querySelectorAll(".form-control");
  formControls.forEach((control) => {
    control.addEventListener("focus", () =>
      control.parentElement.classList.add("focused")
    );
    control.addEventListener("blur", () => {
      if (!control.value) control.parentElement.classList.remove("focused");
    });
  });
}
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;

  notification.innerHTML = `
  <div class="notification-content">
    <i class="fas fa-${
      type === "success"
        ? "check-circle"
        : type === "error"
        ? "exclamation-circle"
        : "info-circle"
    }"></i>
    <span>${message}</span>
  </div>
  <button class="notification-close"><i class="fas fa-times"></i></button>
`;


  if (!document.getElementById("notification-styles")) {
    const style = document.createElement("style");
    style.id = "notification-styles";
    style.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        min-width: 300px;
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.3s ease;
      }
      .notification.show {
        opacity: 1;
        transform: translateX(0);
      }
      .notification-success {
        border-left: 4px solid #27ae60;
      }
      .notification-error {
        border-left: 4px solid #e74c3c;
      }
      .notification-info {
        border-left: 4px solid #3498db;
      }
      .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 15px 20px;
      }
      .notification-content i {
        color: var(--primary-color);
      }
      .notification-close {
        position: absolute;
        top: 5px;
        right: 5px;
        background: none;
        border: none;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.2s;
      }
      .notification-close:hover {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add("show"), 100);
  setTimeout(() => hideNotification(notification), 5000);

  const closeButton = notification.querySelector(".notification-close");
  closeButton.addEventListener("click", () => hideNotification(notification));

  function hideNotification(notif) {
    notif.classList.remove("show");
    setTimeout(() => {
      if (notif.parentNode) notif.parentNode.removeChild(notif);
    }, 300);
  }
}

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

function initTypingAnimation() {
  const typingElement = document.getElementById("heroTypingText");
  if (!typingElement) {
    console.log("Hero typing element not found");
    return;
  }
  const text = "Advancing Computing as a Science & Profession";
  let index = 0;
  typingElement.textContent = "";

  function typeChar() {
    if (index < text.length) {
      typingElement.textContent = text.substring(0, index + 1);
      index++;
      setTimeout(typeChar, 80);
    } else {
      setTimeout(() => {
        typingElement.parentElement.classList.add("typing-complete");
      }, 1500);
    }
  }
  setTimeout(typeChar, 1000);
}

function initCardAnimations() {
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const delay = card.dataset.delay || 0;
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, delay);
        observer.unobserve(card);
      }
    });
  }, observerOptions);

  const cards = document.querySelectorAll(
    ".mission-card, .feature-card, .content-card"
  );
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    if (!card.dataset.delay) card.dataset.delay = index * 100;
    observer.observe(card);
  });
}

export default About;