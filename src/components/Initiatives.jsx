import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Initiatives.css";

// import careerAnim from "../assets/animations/career.json";
// import codeTypingAnim from "../assets/animations/Code typing concept.json";
// import codingAnim from "../assets/animations/Coding.json";
// import manRobotAnim from "../assets/animations/Man and robot with computers sitting together in workplace.json";
// import codingForCauseAnim from "../assets/animations/coding for cause.json";
// import onlineTeachingAnim from "../assets/animations/Online Teaching.json";

const Gallery = () => {
  const cards = [
    {
      anim: "/animations/career.json",
      title: "International Research & Sponsored Projects",
      desc: "Cross-border collaboration and funding in fostering innovation and Research.",
      link: "#research",
    },
    {
      anim: "/animations/Code typing concept.json",
      title: "Code For Cause",
      desc: "Code for Cause unites tech and NGOs to tackle social issues.",
      link: "#code-for-cause",
    },
    {
      anim: "/animations/Coding.json",
      title: "Talk with Techies",
      desc: "Engaging conversations with tech experts to inspire and inform.",
      link: "TalkWithTechies",
    },
    {
      anim: "/animations/Man and robot with computers sitting together in workplace.json",
      title: "Code for Technology",
      desc: "Code for Technology empowers coding for leading tech giants.",
      link: "#code-for-technology",
    },
    {
      anim: "/animations/coding for cause.json",
      title: "Career Pathways",
      desc: "Exploring pathways to internships and career opportunities.",
      link: "#career-pathways",
    },
    {
      anim: "/animations/Online Teaching.json",
      title: "Healthy Byte",
      desc: "Empowering you with essential skills for a healthier tomorrow.",
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
                <div className="card-title">{card.title}</div>
                <p className="card-desc">{card.desc}</p>
                <a href={card.link} className="learn-more-btn">
                  Learn More
                </a>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Gallery;
