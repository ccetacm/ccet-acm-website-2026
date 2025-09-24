"use client";
import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faUserGraduate, faCalendarDays, faRocket, faCompass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Vision.module.css";

function Vision() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
      <div className={styles.app}>

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
            className={styles.statsSection}
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
          <div className={styles.statBox}>
            <div className={styles.iconGradient}>
              <FontAwesomeIcon icon={faLandmark} size="1.8x" />
            </div>
            <div className={styles.statNumber}>
              {inView && <CountUp end={2015} duration={2} separator="" />}
            </div>
            <div className={styles.statLabel}>Year of Establishment</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.iconGradient}><FontAwesomeIcon icon={faUserGraduate} size="1.8x" /></div>
            <div className={styles.statNumber}>
              {inView && <CountUp end={300} duration={2} />}+
            </div>
            <div className={styles.statLabel}>Number of ACM Students</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.iconGradient}>
              <FontAwesomeIcon icon={faCalendarDays} size="1.8x" />
            </div>
            <div className={styles.statNumber}>
              {inView && <CountUp end={150} duration={2} />}+
            </div>
            <div className={styles.statLabel}>ACM Events</div>
          </div>
        </motion.section>

        {/* === Vision Section === */}
        <motion.section
            className={styles.visionCard}
            id="vision"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
          {/* === Vision Heading with Icon === */}
          <div className={styles.headingWithIcon}>
            <FontAwesomeIcon icon={faRocket} className={`${styles.headingIcon} ${styles.visionAnim}`} />
            <motion.h2 className={styles.visionHeading}>Our Vision</motion.h2>
          </div>

          <motion.p className={styles.visionText}>
            To be at the forefront of shaping the future of computing, fostering a
            dynamic global community where interdisciplinary collaboration
            thrives.
          </motion.p>

          {/* === Mission Heading with Icon === */}
          <div className={styles.headingWithIcon}>
            <FontAwesomeIcon icon={faCompass} className={`${styles.headingIcon} ${styles.missionAnim}`}  />
            <motion.h2 className={styles.visionHeading}>Our Mission</motion.h2>
          </div>

          <motion.p className={styles.visionText}>
            To advance the field of computing and empower individuals within it,
            promoting innovation and excellence in computing education, research,
            and practice.
          </motion.p>

          {/* === Buttons === */}
          <motion.div className={styles.buttonGroup}>
            <Link to="/contact-section">
              <motion.button className={styles.joinButton} whileHover={{ scale: 1.1 }}>
                Join Our Community
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button className={styles.learnButton} whileHover={{ scale: 1.1 }}>
                Learn More →
              </motion.button>
            </Link>
          </motion.div>
        </motion.section>
      </div>
  );
}

export default Vision;
