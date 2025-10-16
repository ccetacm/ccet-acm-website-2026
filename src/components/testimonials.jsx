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

const Team = () => {
  const defaultYear = "2025-26";
  const [currentACMIndex, setCurrentACMIndex] = useState(0);
  const [currentACMWIndex, setCurrentACMWIndex] = useState(0);
  const [isACMAutoPlaying, setIsACMAutoPlaying] = useState(true);
  const [isACMWAutoPlaying, setIsACMWAutoPlaying] = useState(true);
  const [isACMAnimating, setIsACMAnimating] = useState(false);
  const [isACMWAnimating, setIsACMWAnimating] = useState(false);

  const currentTeamData = teamMembers[defaultYear] || [];

  const acmMembers = currentTeamData.filter(
      (member) => member.category === "ACM"
  );
  const acmwMembers = currentTeamData.filter(
      (member) => member.category === "ACM W"
  );

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

  const handleACMNext = () => {
    setIsACMAutoPlaying(false);
    setIsACMAnimating(true);
    setTimeout(() => setIsACMAnimating(false), 300);
    setCurrentACMIndex((prevIndex) =>
        prevIndex === acmMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleACMPrev = () => {
    setIsACMAutoPlaying(false);
    setIsACMAnimating(true);
    setTimeout(() => setIsACMAnimating(false), 300);
    setCurrentACMIndex((prevIndex) =>
        prevIndex === 0 ? acmMembers.length - 1 : prevIndex - 1
    );
  };

  const handleACMWNext = () => {
    setIsACMWAutoPlaying(false);
    setIsACMWAnimating(true);
    setTimeout(() => setIsACMWAnimating(false), 300);
    setCurrentACMWIndex((prevIndex) =>
        prevIndex === acmwMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleACMWPrev = () => {
    setIsACMWAutoPlaying(false);
    setIsACMWAnimating(true);
    setTimeout(() => setIsACMWAnimating(false), 300);
    setCurrentACMWIndex((prevIndex) =>
        prevIndex === 0 ? acmwMembers.length - 1 : prevIndex - 1
    );
  };

  // Simplified MemberCard component - only shows image
  const MemberCard = ({ member, isAnimating, onNext, onPrev }) => (
      <div className="team-card-carousel">
        <div
            className={`team-card-member ${
                isAnimating ? "team-card-animating" : ""
            }`}
            key={member.id}
        >
          <div className="team-card-avatar-container">
            <button
                onClick={onPrev}
                className="team-card-btn team-card-btn-left"
                aria-label="Previous team member"
            >
              <ArrowLeft />
            </button>
            <div className="team-card-avatar">
              <div className="team-card-avatar-ring"></div>
              <img
                  src={
                      member.image ||
                      "/placeholder.svg?height=200&width=200&query=team member headshot"
                  }
                  alt={member.name}
                  className="team-card-avatar-image"
              />
            </div>
            <button
                onClick={onNext}
                className="team-card-btn team-card-btn-right"
                aria-label="Next team member"
            >
              <ArrowRight />
            </button>
          </div>
          {/* Removed all member info - name, role, category, social links */}
        </div>
      </div>
  );

  return (
      <div className="team-cards-container">
        <h1 className="team-main-heading">ACM-Team</h1>

        <div className="team-cards-wrapper">
          <div className="team-cards-row">
            {/* ACM Section - Left */}
            <div className="team-cards-section team-cards-section-left">
              <div className="team-cards-heading">
                <h2 className="team-cards-title team-cards-title-acm">ACM</h2>
              </div>
              {acmMembers.length > 0 ? (
                  <MemberCard
                      member={acmMembers[currentACMIndex]}
                      isAnimating={isACMAnimating}
                      onNext={handleACMNext}
                      onPrev={handleACMPrev}
                  />
              ) : (
                  <div className="team-cards-no-members">No ACM members found</div>
              )}
            </div>

            {/* Team Group Image - Center */}
            <div className="team-cards-section team-cards-section-center">
              <div className="team-cards-heading">
                <h2 className="team-cards-title" style={{ color: '#ffffff' }}>TEAM</h2>
              </div>
              <div className="team-group-image-container">
                <img
                    src="/testimonials/acm-team.jpg"
                    alt="ACM Team Group"
                    className="team-group-image"
                />
              </div>
            </div>

            {/* ACM-W Section - Right */}
            <div className="team-cards-section team-cards-section-right">
              <div className="team-cards-heading">
                <h2 className="team-cards-title team-cards-title-acmw">ACM-W</h2>
              </div>
              {acmwMembers.length > 0 ? (
                  <MemberCard
                      member={acmwMembers[currentACMWIndex]}
                      isAnimating={isACMWAnimating}
                      onNext={handleACMWNext}
                      onPrev={handleACMWPrev}
                  />
              ) : (
                  <div className="team-cards-no-members">
                    No ACM-W members found
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Team;
