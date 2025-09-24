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
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }
  
  return (
    <button type="button" className={`${baseClasses} ${className}`}>
      {children}
    </button>
    );
  };

const Section = ({ children }) => (
  <section className="section-gradient">{children}</section>
);

const BottomLine = () => <div className="bottom-line" />;

const Team = () => {
  const defaultYear = "2025-26";
  const [currentACMIndex, setCurrentACMIndex] = useState(0);
  const [currentACMWIndex, setCurrentACMWIndex] = useState(0);
  const [isACMAutoPlaying, setIsACMAutoPlaying] = useState(true);
  const [isACMWAutoPlaying, setIsACMWAutoPlaying] = useState(true);
  const [isACMAnimating, setIsACMAnimating] = useState(false);
  const [isACMWAnimating, setIsACMWAnimating] = useState(false);
  const [ACMAnimationDirection, setACMAnimationDirection] = useState("right");
  const [ACMWAnimationDirection, setACMWAnimationDirection] = useState("right");

  const currentTeamData = teamMembers[defaultYear] || [];

  const acmMembers = currentTeamData.filter(
    (member) => member.category === "ACM"
  );
  const acmwMembers = currentTeamData.filter(
    (member) => member.category === "ACM W"
  );

  console.log("[v0] ACM Members:", acmMembers.length, acmMembers);
  console.log("[v0] ACM-W Members:", acmwMembers.length, acmwMembers);
  console.log("[v0] Current Team Data:", currentTeamData);

  useEffect(() => {
    let interval;
    if (isACMAutoPlaying && acmMembers.length > 0) {
      interval = setInterval(() => {
        setCurrentACMIndex((prevIndex) =>
          prevIndex === acmMembers.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isACMAutoPlaying, acmMembers.length]);

  useEffect(() => {
    let interval;
    if (isACMWAutoPlaying && acmwMembers.length > 0) {
      interval = setInterval(() => {
        setCurrentACMWIndex((prevIndex) =>
          prevIndex === acmwMembers.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isACMWAutoPlaying, acmwMembers.length]);

  // Pause and resume autoplay for ACM
const pauseACMAutoplay = () => setIsACMAutoPlaying(false);
const resumeACMAutoplay = () => {
  setIsACMAutoPlaying(true);
};

// Pause and resume autoplay for ACM-W
const pauseACMWAutoplay = () => setIsACMWAutoPlaying(false);
const resumeACMWAutoplay = () => {
  setIsACMWAutoPlaying(true);
};


  const handleACMNext = () => {
    setIsACMAutoPlaying(false);
    setACMAnimationDirection("right"); 
    setIsACMAnimating(true);
    setTimeout(() => setIsACMAnimating(false), 300);
    setCurrentACMIndex((prevIndex) =>
      prevIndex === acmMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleACMPrev = () => {
    setIsACMAutoPlaying(false);
    setACMAnimationDirection("left");
    setIsACMAnimating(true);
    setTimeout(() => setIsACMAnimating(false), 300);
    setCurrentACMIndex((prevIndex) =>
      prevIndex === 0 ? acmMembers.length - 1 : prevIndex - 1
    );
  };

  const handleACMWNext = () => {
    setIsACMWAutoPlaying(false);
    setACMWAnimationDirection("right");
    setIsACMWAnimating(true);
    setTimeout(() => setIsACMWAnimating(false), 300);
    setCurrentACMWIndex((prevIndex) =>
      prevIndex === acmwMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleACMWPrev = () => {
    setIsACMWAutoPlaying(false);
    setACMWAnimationDirection("left"); 
    setIsACMWAnimating(true);
    setTimeout(() => setIsACMWAnimating(false), 300);
    setCurrentACMWIndex((prevIndex) =>
      prevIndex === 0 ? acmwMembers.length - 1 : prevIndex - 1
    );
  };

  const MemberCard = ({ member, isAnimating, onNext, onPrev, animationDirection }) => (
    <div className="team-card-carousel"
    onMouseEnter={member.category === "ACM" ? pauseACMAutoplay : pauseACMWAutoplay}
    onMouseLeave={member.category === "ACM" ? resumeACMAutoplay : resumeACMWAutoplay}
    >
      {" "}
      {/* Changed from team-carousel to unique class */}
      {/* <div
        className={`team-card-member ${
          isAnimating ? "team-card-animating" : ""
        }`}
        key={member.id}
      > */}
      <div
      className={`team-card-member ${isAnimating ? `team-card-animating-${animationDirection}` : ""}`}
      key={member.id}
      >
        {" "}
        <div className="team-card-member-inner">
        {/* Changed to unique class names */}
        <div className="team-card-background"></div>{" "}
        {/* Changed to unique class name */}
        <div className="team-card-avatar-container">
          {" "}
          {/* Changed to unique class name */}
          <button
            onClick={onPrev}
            className="team-card-btn team-card-btn-left"
            aria-label="Previous team member"
          >
            {" "}
            {/* Changed to unique class names */}
            <ArrowLeft />
          </button>
          <div className="team-card-avatar">
            {" "}
            {/* Changed to unique class name */}
            <div className="team-card-avatar-ring"></div>{" "}
            {/* Changed to unique class name */}
            <img
              src={
                member.image ||
                "/placeholder.svg?height=192&width=192&query=team member headshot"
              }
              alt={member.name}
              className="team-card-avatar-image" // Changed to unique class name
            />
          </div>
          <button
            onClick={onNext}
            className="team-card-btn team-card-btn-right"
            aria-label="Next team member"
          >
            {" "}
            {/* Changed to unique class names */}
            <ArrowRight />
          </button>
        </div>
        <div className="team-card-member-info">
          {" "}
          {/* Changed to unique class name */}
          <div className="team-card-member-details">
            {" "}
            {/* Changed to unique class name */}
            <h3 className="team-card-member-name">{member.name}</h3>{" "}
            {/* Changed to unique class name */}
            <p className="team-card-member-role">{member.role}</p>{" "}
            {/* Changed to unique class name */}
            <div className="team-card-member-category-badge">
              {" "}
              {/* Changed to unique class name */}
              <span className="team-card-member-category">
                {member.category}
              </span>{" "}
              {/* Changed to unique class name */}
            </div>
          </div>
          <div className="team-card-social-icons-container">
            {" "}
            {/* Changed to unique class name */}
            {member.github ? (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="team-card-social-icon-link"
                aria-label="GitHub profile"
              >
                <GitHubIcon />
              </a>
            ) : (
              <div
                className="team-card-social-icon-link team-card-social-icon-disabled"
                aria-label="GitHub profile not available"
              >
                <GitHubIcon />
              </div>
            )}
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-card-social-icon-link"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
              </a>
            ) : (
              <div
                className="team-card-social-icon-link team-card-social-icon-disabled"
                aria-label="LinkedIn profile not available"
              >
                <LinkedInIcon />
              </div>
            )}
            {member.orcid && (
              <a
                href={member.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="team-card-social-icon-link team-card-orcid-link"
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
  );

  return (
    <div className="team-cards-container">
      {/* NEW MAIN HEADING */}
      <h1 className="team-main-heading">ACM-Team</h1>

      {/* NEW GROUP IMAGE */}
      <div className="team-group-image-container">
        <img
          src="/testimonials/acm-team.jpg"
          alt="ACM Team Group"
          className="team-group-image"
        />
      </div>
      {" "}
      {/* Changed to unique container class */}
      <div className="team-cards-wrapper">
        {" "}
        {/* Changed to unique wrapper class */}
        <div className="team-cards-row">
          {" "}
          {/* Changed to unique row class */}
          {/* ACM Section */}
          <div className="team-cards-section team-cards-section-left">
            {" "}
            {/* Changed to unique section classes */}
            <div className="team-cards-heading">
              <h2 className="team-cards-title team-cards-title-acm">ACM</h2>{" "}
              {/* Changed to unique title classes */}
            </div>
            {acmMembers.length > 0 ? (
              <MemberCard
                member={acmMembers[currentACMIndex]}
                isAnimating={isACMAnimating}
                animationDirection={ACMAnimationDirection}
                onNext={handleACMNext}
                onPrev={handleACMPrev}
              />
            ) : (
              <div className="team-cards-no-members">No ACM members found</div> // Changed to unique class
            )}
          </div>
          {/* ACM-W Section */}
          <div className="team-cards-section team-cards-section-right">
            {" "}
            {/* Changed to unique section classes */}
            <div className="team-cards-heading">
              <h2 className="team-cards-title team-cards-title-acmw">ACM-W</h2>{" "}
              {/* Changed to unique title classes */}
            </div>
            {acmwMembers.length > 0 ? (
              <MemberCard
                member={acmwMembers[currentACMWIndex]}
                isAnimating={isACMWAnimating}
                animationDirection={ACMWAnimationDirection}  
                onNext={handleACMWNext}
                onPrev={handleACMWPrev}
              />
            ) : (
              <div className="team-cards-no-members">
                No ACM-W members found
              </div> // Changed to unique class
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;