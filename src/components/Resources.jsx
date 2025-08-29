// src/pages/ResourcesPage.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ResourcesPage.module.css"; // Import module CSS
import bciImg from "../assets/resourcesimages/bci.webp";
import ddlImg from "../assets/resourcesimages/ddl.png";
import digitalTwinImg from "../assets/resourcesimages/digital-twin.webp";
import post2Img from "../assets/resourcesimages/post2.webp";
import metaverseImg from "../assets/resourcesimages/metaverse-technology.webp";
import edgeIntelligenceImg from "../assets/resourcesimages/edge_intelligence.jpg";
import blockchainImg from "../assets/resourcesimages/blockchain.webp";


// Sample Data
const RESOURCES = [
  {
    title: "Brain Computer Interaction (BCI): A Way to Interact with Brain Waves",
    authors: "Sudhakar Kumar, Sunil K. Singh",
   image: bciImg,
    topics: ["AI", "Deep Learning", "Healthcare"],
    shortDescription:
      "Explores how brain waves can be used as input signals for human-computer interaction.",
    description:
      "This paper explores the concept of Brain-Computer Interfaces (BCIs), which enable direct communication between the human brain and external devices. By interpreting brain waves, BCIs facilitate applications such as thought-based control systems, real-time authentication, and assistive technologies for individuals with disabilities.",
  },
  {
    title: "Distributed Ledger Technology",
    authors: "Manraj Singh, Sudhakar Kumar",
    image: ddlImg,
    topics: ["Blockchain"],
    shortDescription:
      "A study of decentralized ledgers that ensure security and transparency.",
    description:
      "The paper delves into Distributed Ledger Technology (DLT), emphasizing its role in decentralized data management. It discusses the evolution of DLT, its applications in various sectors, and its potential to revolutionize industries by enhancing transparency, security, and efficiency.",
  },
  {
    title: "Digital Twins",
    authors: "Tarun Vats, Sudhakar Kumar",
   image: digitalTwinImg,
    topics: ["AI", "Data Science"],
    shortDescription: "Creating virtual replicas of physical systems for simulation and analysis.",
    description:
      "This research focuses on Digital Twins—virtual replicas of physical entities or systems. It examines how integrating real-time data with digital models can optimize operations, predict failures, and enhance decision-making processes across industries like manufacturing, healthcare, and urban planning.",
  },
  {
    title: "MLOps: A New Era Of DevOps, Powered By Machine Learning",
    authors: "Muskaan Chopra, Sunik K Singh",
    image: post2Img,
    topics: ["Machine Learning", "DevOps"],
    shortDescription: "Integration of ML workflows into DevOps practices for better deployment.",
    description:
      "The paper introduces MLOps, a practice that combines Machine Learning and DevOps principles to streamline the deployment and monitoring of ML models. It highlights the importance of automation, collaboration, and continuous integration in managing the lifecycle of ML applications.",
  },
  {
    title: "Metaverse Technology And Its Applications",
    authors: "Mavneet Kaur, B. Gupta",
  image: metaverseImg,
    topics: ["Blockchain", "Metaverse"],
    shortDescription: "Insights into metaverse applications in gaming, education, and commerce.",
    description:
      "This article provides an overview of Metaverse technology, a collective virtual shared space created by the convergence of virtually enhanced physical reality and persistent virtual reality. It explores its applications in gaming, education, social interaction, and commerce, discussing the technological advancements driving its development.",
  },
  {
    title: "Edge Intelligence: A New Emerging Era",
    authors: "A Dahiya, B. Gupta",
    image: edgeIntelligenceImg,
    topics: ["AI", "Data Science", "Machine Learning"],
    shortDescription: "Artificial intelligence at the edge for real-time decision-making.",
    description:
      "The paper examines Edge Intelligence, which integrates artificial intelligence with edge computing. It discusses how processing data closer to the source (at the edge) reduces latency, enhances privacy, and enables real-time decision-making in applications like IoT, autonomous vehicles, and smart cities.",
  },
  {
    title: "Blockchain For Data Science",
    authors: "Dipesh Singla, Sudhakar Kumar",
      image: blockchainImg,
    topics: ["Blockchain", "Data Science"],
    shortDescription: "Exploring blockchain applications in data security and analytics.",
    description:
      "This research explores the intersection of Blockchain and Data Science, focusing on how blockchain's decentralized and immutable nature can address challenges in data integrity, provenance, and security. It discusses potential use cases in data sharing, collaborative analytics, and ensuring trustworthiness in data-driven models.",
  },
];

const uniqueTopics = ["All", ...Array.from(new Set(RESOURCES.flatMap(r => r.topics)))];

const Sidebar = ({ topics, active, onTopicChange, isOpen, toggleSidebar }) => (
  <>
    <button className={styles.mobileToggle} onClick={toggleSidebar}>
      {isOpen ? "✕ Close" : "☰ Topics"}
    </button>

    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{
        x: window.innerWidth >= 1024 ? 0 : isOpen ? 0 : -300,
        opacity: window.innerWidth >= 1024 || isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={styles.sidebar}
    >
      <h2 className={styles.sidebarTitle}>Topics</h2>
      <ul className={styles.sidebarList}>
        {topics.map((topic, idx) => (
          <li key={idx}>
            <motion.button
              onClick={() => {
                onTopicChange(topic);
                if (isOpen && window.innerWidth < 1024) toggleSidebar();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.sidebarBtn} ${active === topic ? styles.sidebarBtnActive : ''}`}
            >
              {topic}
            </motion.button>
          </li>
        ))}
      </ul>
    </motion.div>

    {isOpen && window.innerWidth < 1024 && (
      <div className={styles.overlay} onClick={toggleSidebar} />
    )}
  </>
);

const SearchBar = ({ value, onChange }) => (
  <motion.input
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="🔍 Search resources..."
    className={styles.searchBar}
  />
);

const ResourcesPage = () => {
  const [current, setCurrent] = useState(0);
  const [activeTopic, setActiveTopic] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % RESOURCES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + RESOURCES.length) % RESOURCES.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % RESOURCES.length);

  const filtered = RESOURCES.filter((res) => {
    const matchesTopic = activeTopic === "All" || res.topics.includes(activeTopic);
    const matchesSearch =
      res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.authors.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  return (
    <div className={styles.resourcesContainer}>
      <Sidebar
        topics={uniqueTopics}
        active={activeTopic}
        onTopicChange={setActiveTopic}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <main className={styles.resourcesMain}>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        {/* Carousel */}
        <div className={styles.carousel}>
          {RESOURCES.map((res, i) => (
            <div
              key={i}
              className={`${styles.carouselSlide} ${i === current ? styles.carouselSlideActive : ''}`}
              style={{ backgroundImage: `url(${res.image})` }}
            >
              <div className={styles.carouselOverlay}>
                <span className={styles.carouselBadge}>Featured Research</span>
                <h2 className={styles.carouselTitle}>{res.title}</h2>
                <p className={styles.carouselAuthors}>{res.authors}</p>
                <p className={styles.carouselDesc}>{res.shortDescription}</p>
                <div className={styles.carouselTags}>
                  {res.topics.map((topic, idx) => (
                    <span key={idx} className={styles.carouselTag}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <button onClick={prevSlide} className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}>‹</button>
          <button onClick={nextSlide} className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}>›</button>
        </div>

        {/* Resources List */}
        {filtered.map((res, idx) => (
          <motion.section
            key={idx}
            className={styles.resourceSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className={styles.resourceText}>
              <h2 className={styles.resourceTitle}>{res.title}</h2>
              <p className={styles.resourceDesc}>{res.description}</p>
              <p className={styles.resourceMeta}><strong>Categories:</strong> {res.topics.join(" · ")}</p>
              <p className={styles.resourceMeta}><strong>Authors:</strong> {res.authors}</p>
            </div>
            <div className={styles.resourceImg}>
              <motion.img
                src={res.image}
                alt={res.title}
                className={styles.resourceImgImg}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.section>
        ))}

      </main>
    </div>
  );
};

export default ResourcesPage;
