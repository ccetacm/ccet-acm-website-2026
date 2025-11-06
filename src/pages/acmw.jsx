import React, { useEffect, useState } from "react";
// import globeImg from "../teams/acmw_pg/globe.png";
// import textImg from "../teams/acmw_pg/text.png";
// import badge1 from "../teams/acmw_pg/badge1.png";
// import badge2 from "../teams/acmw_pg/badge2.png";
// import badge3 from "../teams/acmw_pg/badge3.png";
// import webdevImg from "../teams/acmw_pg/webdev.jpg";
// import datascienceImg from "../teams/acmw_pg/datascience.jpg";
// import uiuxImg from "../teams/acmw_pg/uiux.jpg";
// import acmLogo from "../teams/acmw_pg/acm-logo.png";
// import acmwLogo from "../teams/acmw_pg/acmw-logo.png";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import styles from "./acmw.module.css";

const ACMW = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setEngineReady(true));
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(`.${styles.reveal}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealActive);
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
      <div className={styles.acmwbody}>
    <div className={styles.acmwPage}>
      {/* Particles */}
      {engineReady && (
        <Particles
          id="tsparticles"
          className={styles.tsparticles}
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
              modes: { repulse: { distance: 120 }, push: { quantity: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Hero Section */}
      <section className={styles.acmwHero}>
        <div className={styles.acmwHeroContainer}>
          <div className={styles.acmwHeroLeft}>
            <span className={styles.acmwTagline}>
              Empowering Women in Technology
            </span>
            <h1>
              CCET <span className={styles.gradientText}>ACM-W</span>
            </h1>
            <h2>STUDENT CHAPTER</h2>
            <p>
              ACM-W Team at CCET is a dynamic group of individuals passionate
              about advancing women in computing. Committed to creating an
              inclusive environment, the team organizes engaging events,
              workshops, and mentorship programs, providing valuable
              opportunities for skill enhancement and networking. With a
              dedication to empowering women in technology, the ACM-W team at
              CCET cultivates a supportive community, encouraging members to
              thrive and contribute to the ever-evolving landscape of computing.
            </p>
          </div>
          <div className={styles.acmwHeroRight}>
            <div className={styles.acmwLogoWrapper}>
              <img
                src="/acmw_pg/globe.png"
                alt="Rotating Globe"
                className={styles.acmwGlobe}
              />
              <img
                src="/acmw_pg/text.png"
                alt="ACM-W Text"
                className={styles.acmwLogoText}
              />
            </div>
          </div>
        </div>
      </section>

{/* Badges */}
<div className={`${styles.acmwBadgesContainer} ${styles.reveal}`}>
  {["/acmw_pg/badge1.png", "/acmw_pg/badge2.png", "/acmw_pg/badge3.png"].map(
    (badgeSrc, idx) => (
      <div key={idx} className={styles.acmwBadge}>
        <img src={badgeSrc} alt={`Badge ${idx + 1}`} className={styles.acmwBadgeImg} />
      </div>
    )
  )}
</div>


      {/* About Section */}
      <section className={styles.acmwAbout}>
        <div className={styles.acmwAboutContainer}>
          <h2>
            Our Purpose -{" "}
            <span className={styles.gradientText}>ACM-W CCET</span>
          </h2>
          <p className={styles.acmwAboutIntro}>
            Driving innovation and excellence in computing through education,
            research, and global collaboration.
          </p>

          <div className={styles.acmwAboutCards}>
            <div
              className={`${styles.acmwAboutCard} ${styles.acmwAboutCardMission} ${styles.reveal}`}
            >
              <i className="fas fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p>
                To advance the field of computing and empower individuals within
                it, promoting innovation and excellence in computing education,
                research, and practice.
              </p>
            </div>

            <div
              className={`${styles.acmwAboutCard} ${styles.acmwAboutCardInnovation} ${styles.reveal}`}
            >
              <i className="fas fa-lightbulb"></i>
              <h3>Our Vision</h3>
              <p>
                To be at the forefront of shaping the future of computing,
                fostering a dynamic global community where interdisciplinary
                collaboration thrives.
              </p>
            </div>

            <div
              className={`${styles.acmwAboutCard} ${styles.acmwAboutCardGlobal} ${styles.reveal}`}
            >
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
      <section className={styles.acmwWhatWeDo}>
        <div className={styles.acmwWhatContainer}>
          <h2>What We Do</h2>
          <div className={styles.acmwTimeline}>
            {[
              {
                icon: "fas fa-laptop-code",
                title: "Technical Workshops",
                text: "Regular hands-on sessions covering latest technologies, programming languages, and industry best practices.",
                color: styles.acmwTimelineIconPurple,
              },
              {
                icon: "fas fa-user-friends",
                title: "Mentorship Programs",
                text: "Connecting students with industry professionals and senior students for guidance and career development.",
                color: styles.acmwTimelineIconGreen,
              },
              {
                icon: "fas fa-briefcase",
                title: "Career Development",
                text: "Resume building workshops, interview preparation, and networking events with tech companies.",
                color: styles.acmwTimelineIconOrange,
              },
              {
                icon: "fas fa-hand-holding-heart",
                title: "Community Outreach",
                text: "Organizing events to inspire young girls to pursue careers in STEM fields.",
                color: styles.acmwTimelineIconRed,
              },
            ].map((item, idx) => (
              <div key={idx} className={styles.acmwTimelineItem}>
                <div className={`${styles.acmwTimelineIcon} ${item.color}`}>
                  <i className={`${item.icon} ${styles.reveal}`}></i>
                </div>
                <div className={styles.acmwTimelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
<section className={styles.acmwRecentActivities}>
  <div className={styles.acmwActivitiesContainer}>
    <h2>Recent Activities</h2>
    <div className={styles.acmwActivitiesGrid}>
      {[
        {
          img: "/acmw_pg/webdev.jpg",
          tag: styles.acmwTagBootcamp,
          title: "Web Development Bootcamp",
          date: "Feb 2025",
          participants: 60,
        },
        {
          img: "/acmw_pg/datascience.jpg",
          tag: styles.acmwTagWorkshop,
          title: "Data Science Workshop",
          date: "Jan 2025",
          participants: 55,
        },
        {
          img: "/acmw_pg/uiux.jpg",
          tag: styles.acmwTagSprint,
          title: "UI/UX Design Sprint",
          date: "Dec 2024",
          participants: 40,
        },
      ].map((act, idx) => (
        <div
          key={idx}
          className={`${styles.acmwActivityCard} ${styles.reveal}`}
        >
          <img
            src={act.img}
            alt={act.title}
            className={styles.acmwActivityImg}
          />
          <div className={styles.acmwActivityContent}>
            <span className={`${styles.acmwTag} ${act.tag}`}>
              {act.title.split(" ")[0]}
            </span>
            <h3>{act.title}</h3>
            <p>
              <i className="fas fa-calendar-alt"></i> {act.date}
            </p>
            <p>
              <i className="fas fa-users"></i> {act.participants} Participants
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Resources Section */}
      <section className={styles.acmwResources}>
        <div className={styles.acmwResourcesContainer}>
          <h2>Resources</h2>
          <div className={styles.acmwResourcesGrid}>
            {/* Learning Resources */}
            <div className={`${styles.acmwResourceCategory} ${styles.reveal}`}>
              <h3>Learning Resources</h3>
              <div className={styles.acmwResourceCards}>
                <div className={styles.acmwResourceCard}>
                  <span
                    className={`${styles.acmwTag} ${styles.acmwTagDatabase}`}
                  >
                    Database
                  </span>
                  <h4>ACM Digital Library Access</h4>
                  <p>
                    Full access to research papers, journals, and conference
                    proceedings.
                  </p>
                  <a href="#" className={styles.acmwResourceLink}>
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                <div className={styles.acmwResourceCard}>
                  <span className={`${styles.acmwTag} ${styles.acmwTagPdf}`}>
                    PDF Guide
                  </span>
                  <h4>Women in Tech Career Guide</h4>
                  <p>
                    Comprehensive guide for navigating tech careers as a woman.
                  </p>
                  <a href="#" className={styles.acmwResourceLink}>
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Career Development */}
            <div className={`${styles.acmwResourceCategory} ${styles.reveal}`}>
              <h3>Career Development</h3>
              <div className={styles.acmwResourceCards}>
                <div className={styles.acmwResourceCard}>
                  <span className={`${styles.acmwTag} ${styles.acmwTagStudy}`}>
                    Study Kit
                  </span>
                  <h4>Tech Interview Preparation Kit</h4>
                  <p>
                    Common coding questions, behavioral interview tips, and
                    more.
                  </p>
                  <a href="#" className={styles.acmwResourceLink}>
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                <div className={styles.acmwResourceCard}>
                  <span
                    className={`${styles.acmwTag} ${styles.acmwTagTemplate}`}
                  >
                    Templates
                  </span>
                  <h4>Resume Templates for Tech</h4>
                  <p>
                    Professional resume templates tailored for tech positions.
                  </p>
                  <a href="#" className={styles.acmwResourceLink}>
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Networking & Mentorship */}
            <div className={`${styles.acmwResourceCategory} ${styles.reveal}`}>
              <h3>Networking & Mentorship</h3>
              <div className={styles.acmwResourceCards}>
                <div className={styles.acmwResourceCard}>
                  <span
                    className={`${styles.acmwTag} ${styles.acmwTagPlatform}`}
                  >
                    Platform
                  </span>
                  <h4>Mentor Connect Platform</h4>
                  <p>
                    Connect with industry professionals for guidance and advice.
                  </p>
                  <a href="#" className={styles.acmwResourceLink}>
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                <div className={styles.acmwResourceCard}>
                  <span
                    className={`${styles.acmwTag} ${styles.acmwTagDirectory}`}
                  >
                    Directory
                  </span>
                  <h4>Women in Tech Communities</h4>
                  <p>
                    Curated list of online communities and networking groups.
                  </p>
                  <a href="#" className={styles.acmwResourceLink}>
                    Access Resource <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className={styles.acmwTeam}>
        <div className={styles.acmwTeamCardBig}>
          <h2>Our Teams</h2>
          <div className={`${styles.acmwTeamSplit} ${styles.reveal}`}>
            <div className={styles.acmwTeamSplitCard}>
              <img
                src="/acmw_pg/acm-logo.png"
                alt="CASC Logo"
                className={styles.acmwTeamImg1}
              />
              <h3>CASC</h3>
              <p>CCET ACM Student Chapter</p>
              <div className={styles.acmwSocialLinks}>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div className={styles.acmwTeamSplitCard}>
              <img
                src="/acmw_pg/acmw-logo.png"
                alt="CASC-W Logo"
                className={styles.acmwTeamImg}
              />
              <h3>CASC-W</h3>
              <p>CCET ACM Student Chapter - W</p>
              <div className={styles.acmwSocialLinks}>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      </div>
  );
};

export default ACMW;
