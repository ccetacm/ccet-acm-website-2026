import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./CoreActs.module.css";

const CoreActs = () => {
  const coreActivities = [
    {
      id: 1,
      animation: "/animations/career.json",
      title: "International Research & Sponsored Projects",
      description:
          "Cross-border collaboration and funding in fostering innovation and research excellence.",
      link: "#/icrg",
      category: "Research",
    },
    {
      id: 2,
      animation: "/animations/Code typing concept.json",
      title: "Code For Cause",
      description:
          "Code for Cause unites technology and NGOs to tackle pressing social issues.",
      link: "#/code-for-cause",
      category: "Social Impact",
    },
    {
      id: 3,
      animation: "/animations/Coding.json",
      title: "Talk with Techies",
      description:
          "Engaging conversations with tech experts to inspire and inform the community.",
      link: "#/TalkWithTechies",
      category: "Community",
    },
    {
      id: 4,
      animation: "/animations/Man and robot with computers sitting together in workplace.json",
      title: "Code for Technology",
      description:
          "Empowering developers with coding skills for leading technology companies.",
      link: "#/code-for-technology",
      category: "Professional Development",
    },
    {
      id: 5,
      animation: "/animations/coding for cause.json",
      title: "Career Pathways",
      description:
          "Exploring strategic pathways to internships and meaningful career opportunities.",
      link: "#/career-pathways",
      category: "Career Growth",
    },
    {
      id: 6,
      animation: "/animations/Online Teaching.json",
      title: "Healthy Byte",
      description:
          "Empowering you with essential digital wellness skills for a healthier tomorrow.",
      link: "#healthy-byte",
      category: "Wellness",
    },
  ];

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
      <section className={styles.coreActsSection}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.title}>Core Activities</h2>
            <p className={styles.subtitle}>
              Discover our comprehensive range of programs designed to empower,
              educate, and inspire
            </p>
          </header>

          <div className={styles.grid}>
            {coreActivities.map((activity) => (
                <article key={activity.id} className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={styles.animationContainer}>
                      <Player
                          autoplay
                          loop
                          src={activity.animation}
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

                    <div className={styles.cardFooter}>
                      <button
                          className={styles.learnMoreButton}
                          onClick={() => handleCardClick(activity.link)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              handleCardClick(activity.link);
                            }
                          }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>
  );
};

export default CoreActs;
