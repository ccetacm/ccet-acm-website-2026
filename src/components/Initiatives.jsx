
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Initiatives.css";

const Gallery = () => {
  const cards = [
    {
      anim: "/animations/career.json",
      title: "International Research & Sponsored Projects",
      link: "#research",
    },
    {
      anim: "/animations/Code typing concept.json",
      title: "Code For Cause",
      link: "#code-for-cause",
    },
    {
      anim: "/animations/Coding.json",
      title: "Talk with Techies",
      link: "#talk-with-techies",
    },
    {
      anim: "/animations/Man and robot with computers sitting together in workplace.json",
      title: "Code for Technology",
      link: "#code-for-technology",
    },
    {
      anim: "/animations/coding for cause.json",
      title: "Career Pathways",
      link: "#career-pathways",
    },
    {
      anim: "/animations/Online Teaching.json",
      title: "Healthy Byte",
      link: "#healthy-byte",
    },
  ];

  return (
    <div className="ouracts-container">
      <h2 className="ouracts-heading">CORE ACTS</h2>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-animation">
              <Player autoplay loop src={card.anim} />
            </div>
            <div className="card-title">
              <a href={card.link} className="card-link">
                {card.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
