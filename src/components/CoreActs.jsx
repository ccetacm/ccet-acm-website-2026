

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./CoreActs.module.css";
 
// size: "wide" spans 2 columns, "small" spans 1 column (bento layout)
// tone: pastel background colour of the card
const coreActivities = [
  {
    id: 1,
    animation: "/animations/career.json",
    title: "Responsible AI & Sustainable Computing",
    description:
      "Cross-border collaboration and funding in fostering innovation and research excellence.",
    link: "/icrl",
    category: "Research",
    size: "wide",
    tone: "blue",
    featured: true,
  },
  {
    id: 2,
    animation: "/animations/Code typing concept.json",
    title: "Code For Cause",
    description: "Technology and NGOs tackling pressing social issues.",
    link: "/code-for-cause",
    category: "Social Impact",
    size: "small",
    tone: "peach",
  },
  {
    id: 3,
    animation: "/animations/Coding.json",
    title: "Talk with Techies",
    description: "Conversations with tech experts to inspire the community.",
    link: "/TalkWithTechies",
    category: "Community",
    size: "small",
    tone: "mint",
  },
  {
    id: 4,
    animation:
      "/animations/Man and robot with computers sitting together in workplace.json",
    title: "Code for Technology",
    description:
      "Empowering developers with coding skills for leading technology companies.",
    link: "/code-for-technology",
    category: "Professional Development",
    size: "wide",
    tone: "lavender",
  },
  {
    id: 5,
    animation: "/animations/coding for cause.json",
    title: "Career Pathways",
    description: "Strategic pathways to internships and careers.",
    link: "/career-pathways",
    category: "Career Growth",
    size: "small",
    tone: "pink",
  },
  {
    id: 6,
    animation: "/animations/Online Teaching.json",
    title: "Healthy Byte",
    description: "Essential digital wellness skills for a healthier tomorrow.",
    link: "/healthy-byte",
    category: "Wellness",
    size: "wide",
    tone: "sky",
  },
];
 
const CoreActs = () => {
  const handleCardClick = (link) => {
    window.location.href = link;
  };
 
  return (
    <section className={styles.coreActsSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Core Activities</h2>
          <p className={styles.subtitle}>
            Programs designed to empower, educate and inspire.
          </p>
        </header>
 
        <div className={styles.grid}>
          {coreActivities.map((activity, index) => (
            <article
              key={activity.id}
              className={`${styles.card} ${styles[activity.size]} ${
                styles[activity.tone]
              } ${activity.featured ? styles.featured : ""}`}
              style={{ "--i": index }}
              onClick={() => handleCardClick(activity.link)}
            >
              {/* Animation kept inside each box */}
              <div className={styles.animationContainer} aria-hidden="true">
                <Player
                  autoplay
                  loop
                  speed={0.6}
                  src={encodeURI(activity.animation)}
                  className={styles.lottiePlayer}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
 
              <div className={styles.textContent}>
                <span className={styles.category}>{activity.category}</span>
                <h3 className={styles.cardTitle}>{activity.title}</h3>
                <p className={styles.cardDescription}>
                  {activity.description}
                </p>
              </div>
 
              <button
                type="button"
                className={styles.arrowButton}
                aria-label={`Learn more about ${activity.title}`}
                onClick={(e) => {
                  e.stopPropagation(); // card click would fire it twice
                  handleCardClick(activity.link);
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default CoreActs;
 