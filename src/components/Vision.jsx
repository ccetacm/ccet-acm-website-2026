"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faUserGraduate, faCalendarDays, faRocket, faCompass } from "@fortawesome/free-solid-svg-icons";
import "./Vision.css";

// import establishmentIcon from "../assets/Vision/establishment.png";
// import eventIcon from "../assets/Vision/event-list.png";
// import visionIcon from "../assets/Vision/vision.png";
// import missionIcon from "../assets/Vision/mission.png";

function Vision() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
      <div className="App">

          <svg width="0" height="0">
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#003566" />
                <stop offset="50%" stopColor="#00B4D8" />
                <stop offset="100%" stopColor="#003566" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  from="-1 0"
                  to="1 0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
          </svg>

<svg width="0" height="0">
  <defs>
    <linearGradient id="blue-gradient-heading" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop stopColor="#001233" offset="0%" />   {/* Very Dark Navy */}
      <stop stopColor="#0077B6" offset="100%" /> {/* Teal-ish Blue */}
    </linearGradient>
  </defs>
</svg>




        {/* === Stats Section === */}
        <motion.section
            ref={ref}
            className="stats-section"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
          <div className="stat-box">
            <div className="icon gradient-icon">
              <FontAwesomeIcon icon={faLandmark} size="1.8x" />
            </div>
            <div className="stat-number">
              {inView && <CountUp end={2015} duration={2} separator="" />}
            </div>
            <div className="stat-label">Year of Establishment</div>
          </div>
          <div className="stat-box">
            <div className="icon gradient-icon"><FontAwesomeIcon icon={faUserGraduate} size="1.8x" /></div>
            <div className="stat-number">
              {inView && <CountUp end={300} duration={2} />}+
            </div>
            <div className="stat-label">Number of ACM Students</div>
          </div>
          <div className="stat-box">
            <div className="icon gradient-icon">
              <FontAwesomeIcon icon={faCalendarDays} size="1.8x" />
            </div>
            <div className="stat-number">
              {inView && <CountUp end={150} duration={2} />}+
            </div>
            <div className="stat-label">ACM Events</div>
          </div>
        </motion.section>

        {/* === Vision Section === */}
        <motion.section
            className="vision-card"
            id="vision"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
          {/* === Vision Heading with Icon === */}
          <div className="heading-with-icon">
             <FontAwesomeIcon icon={faRocket} className="heading-icon vision-anim" />
            <motion.h2 className="vision-heading">Our Vision</motion.h2>
          </div>

          <motion.p className="vision-text">
            To be at the forefront of shaping the future of computing, fostering a
            dynamic global community where interdisciplinary collaboration
            thrives.
          </motion.p>

          {/* === Mission Heading with Icon === */}
          <div className="heading-with-icon">
            <FontAwesomeIcon icon={faCompass} className="heading-icon mission-anim"  />
            <motion.h2 className="vision-heading">Our Mission</motion.h2>
          </div>

          <motion.p className="vision-text">
            To advance the field of computing and empower individuals within it,
            promoting innovation and excellence in computing education, research,
            and practice.
          </motion.p>

          {/* === Buttons === */}
          <motion.div className="button-group">
            <motion.button className="join-button" whileHover={{ scale: 1.1 }}>
              Join Our Community
            </motion.button>
            <motion.button className="learn-button" whileHover={{ scale: 1.1 }}>
              Learn More →
            </motion.button>
          </motion.div>
        </motion.section>
      </div>
  );
}

export default Vision;
