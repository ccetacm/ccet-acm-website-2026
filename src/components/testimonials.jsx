"use client";

import { useState, useEffect } from "react";
import { teamMembers } from "../data/teamMembers";
import "./testimonials.css";

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.85 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Button = ({ children, href, className = "" }) => {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  if (href) {
    return (
      <a href={href} className={`btn-primary ${className}`}>
        {children}
      </a>
    );
  }

  return <button className={`btn-primary ${className}`}>{children}</button>;
};

const Section = ({ children }) => (
  <section className="section-gradient">{children}</section>
);

const BottomLine = () => <div className="bottom-line" />;

const Team = () => {
  const defaultYear = "2025-26";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentTeamData = teamMembers[defaultYear] || [];
  const currentBatchMembers = currentTeamData;

  useEffect(() => {
    let interval;
    if (isAutoPlaying && currentBatchMembers.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === currentBatchMembers.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentBatchMembers.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    setCurrentIndex((prevIndex) =>
      prevIndex === currentBatchMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentBatchMembers.length - 1 : prevIndex - 1
    );
  };

  if (currentBatchMembers.length === 0) {
    return (
      <Section>
        <section className="team-section">
          <div className="team-grid">
            <div className="team-content">
              <h2 className="team-title">Our Team</h2>
              <p className="team-description">
                No team members found. Please check back later.
              </p>
            </div>
          </div>
        </section>
        <BottomLine />
      </Section>
    );
  }

  const currentMember = currentBatchMembers[currentIndex];

  return (
    <Section>
      <section className="team-section">
        <div className="team-grid">
          <div className="team-content">
            <div className="content-header">
              <h2 className="team-title">Our Team</h2>
              <div className="title-accent"></div>
            </div>
            <p className="team-description">
              Meet the amazing team behind the success of our club. Each member
              brings unique skills and dedication to ensure that we grow and
              make an impact.
            </p>

            <div className="cta-container">
              <Button href="/team">More About Us</Button>
            </div>
          </div>

          <div className="team-carousel">
            <div
              className={`team-member-card ${isAnimating ? "animating" : ""}`}
              key={currentMember.id}
            >
              <div className="card-background"></div>

              <div className="member-avatar-container">
                <button
                  onClick={handlePrev}
                  className="carousel-btn carousel-btn-left"
                  aria-label="Previous team member"
                >
                  <ArrowLeft />
                </button>

                <div className="member-avatar">
                  <div className="avatar-ring"></div>
                  <img
                    src={
                      currentMember.image ||
                      "/placeholder.svg?height=192&width=192&query=team member headshot" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt={currentMember.name}
                    className="avatar-image"
                  />
                </div>

                <button
                  onClick={handleNext}
                  className="carousel-btn carousel-btn-right"
                  aria-label="Next team member"
                >
                  <ArrowRight />
                </button>
              </div>

              <div className="member-info">
                <div className="member-details">
                  <h3 className="member-name">{currentMember.name}</h3>
                  <p className="member-role">{currentMember.role}</p>
                  <div className="member-category-badge">
                    <span className="member-category">
                      {currentMember.category}
                    </span>
                  </div>
                </div>

                <div className="social-icons-container">
                  {currentMember.github && (
                    <a
                      href={currentMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-link"
                      aria-label="GitHub profile"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {currentMember.linkedin && (
                    <a
                      href={currentMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-link"
                      aria-label="LinkedIn profile"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  {currentMember.orcid && (
                    <a
                      href={currentMember.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-link orcid-link"
                      aria-label="ORCID profile"
                    >
                      ORCID
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomLine />
    </Section>
  );
};

export default Team;
