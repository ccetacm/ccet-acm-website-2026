import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

import styles from "./timeline.module.css";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay },
  }),
};

const timelineData = [
  {
    year: "2024",
    amount: 15000,
    description:
      "Strategic investments fueling our AI innovation pipeline and community growth initiatives.",
    tags: ["AI Workshop Series", "Annual Hackathon", "Research Grants"],
    side: "left",
  },
  {
    year: "2023",
    amount: 12000,
    description:
      "Year of expansion with technical workshops and mentorship programs that shaped careers.",
    tags: ["Technical Workshops", "Mentorship Program"],
    side: "right",
  },
  {
    year: "2022",
    amount: 8000,
    description:
      "Our foundation year that established the core programs and community engagement.",
    tags: ["Community Events", "Learning Resources"],
    side: "left",
  },
];

function MotionCard({ children, className }) {
  const ref = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // add smoothing
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [0, 1], [15, -15]);
  const rotateY = useTransform(xSpring, [0, 1], [-15, 15]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}



export default function TimelineSection() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [sortedData, setSortedData] = useState(timelineData);
  const timelineRefs = useRef([]);

 

  useEffect(() => {
    // sort when sortConfig changes (or on mount)
    let sorted = [...timelineData];
    if (sortConfig.key) {
      sorted.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    setSortedData(sorted);
  }, [sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <section className={styles.timelineSection}>
     

      <div className={styles.timelineContent}>
        <motion.header
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className={styles.title} variants={zoomIn} custom={0}>
            Funding Evolution
          </motion.h2>
          <motion.p className={styles.subtitle} variants={fadeUp} custom={0.1}>
            A visual journey through our growth milestones and financial achievements
          </motion.p>
        </motion.header>

        <div className={styles.controls}>
          <button className={styles.sortBtn} onClick={() => handleSort("year")}>
            Sort by Year
          </button>
          <button className={styles.sortBtn} onClick={() => handleSort("amount")}>
            Sort by Amount
          </button>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine} />

          {sortedData.map((item, idx) => (
            <motion.article
              key={item.year}
              ref={(el) => (timelineRefs.current[idx] = el)}
              className={`${styles.timelineItem} ${item.side === "left" ? styles.left : styles.right}`}
              variants={fadeUp}
              custom={0.15 + idx * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.dot} />
              <MotionCard className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.yearBadge}>{item.year}</span>
                  <span className={styles.amountBadge}>₹{item.amount.toLocaleString()}</span>
                </div>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.tags}>
                  {item.tags.map((t, i) => (
                    <span key={i} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </MotionCard>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
