import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ResourcesPage.module.css";

// Sample Data
const RESOURCES = [
  {
    title: "Brain Computer Interaction (BCI): A Way to Interact with Brain Waves",
    authors: "Sudhakar Kumar, Sunil K. Singh",
    image: "/resourcesimages/bci.webp",
    topics: ["AI", "Deep Learning", "Healthcare"],
    shortDescription:
        "Explores how brain waves can be used as input signals for human-computer interaction.",
    description:
        "This paper explores the concept of Brain-Computer Interfaces (BCIs), which enable direct communication between the human brain and external devices. By interpreting brain waves, BCIs facilitate applications such as thought-based control systems, real-time authentication, and assistive technologies for individuals with disabilities.",
  },
  {
    title: "Distributed Ledger Technology",
    authors: "Manraj Singh, Sudhakar Kumar",
    image: "/resourcesimages/ddl.png",
    topics: ["Blockchain"],
    shortDescription:
        "A study of decentralized ledgers that ensure security and transparency.",
    description:
        "The paper delves into Distributed Ledger Technology (DLT), emphasizing its role in decentralized data management. It discusses the evolution of DLT, its applications in various sectors, and its potential to revolutionize industries by enhancing transparency, security, and efficiency.",
  },
  {
    title: "Digital Twins",
    authors: "Tarun Vats, Sudhakar Kumar",
    image: "/resourcesimages/digital-twin.webp",
    topics: ["AI", "Data Science"],
    shortDescription: "Creating virtual replicas of physical systems for simulation and analysis.",
    description:
        "This research focuses on Digital Twins—virtual replicas of physical entities or systems. It examines how integrating real-time data with digital models can optimize operations, predict failures, and enhance decision-making processes across industries like manufacturing, healthcare, and urban planning.",
  },
  {
    title: "MLOps: A New Era Of DevOps, Powered By Machine Learning",
    authors: "Muskaan Chopra, Sunik K Singh",
    image: "/resourcesimages/post2.webp",
    topics: ["Machine Learning", "DevOps"],
    shortDescription: "Integration of ML workflows into DevOps practices for better deployment.",
    description:
        "The paper introduces MLOps, a practice that combines Machine Learning and DevOps principles to streamline the deployment and monitoring of ML models. It highlights the importance of automation, collaboration, and continuous integration in managing the lifecycle of ML applications.",
  },
  {
    title: "Metaverse Technology And Its Applications",
    authors: "Mavneet Kaur, B. Gupta",
    image: "/resourcesimages/metaverse-technology.webp",
    topics: ["Blockchain", "Metaverse"],
    shortDescription: "Insights into metaverse applications in gaming, education, and commerce.",
    description:
        "This article provides an overview of Metaverse technology, a collective virtual shared space created by the convergence of virtually enhanced physical reality and persistent virtual reality. It explores its applications in gaming, education, social interaction, and commerce, discussing the technological advancements driving its development.",
  },
  {
    title: "Edge Intelligence: A New Emerging Era",
    authors: "A Dahiya, B. Gupta",
    image: "/resourcesimages/edge_intelligence.jpg",
    topics: ["AI", "Data Science", "Machine Learning"],
    shortDescription: "Artificial intelligence at the edge for real-time decision-making.",
    description:
        "The paper examines Edge Intelligence, which integrates artificial intelligence with edge computing. It discusses how processing data closer to the source (at the edge) reduces latency, enhances privacy, and enables real-time decision-making in applications like IoT, autonomous vehicles, and smart cities.",
  },
  {
    title: "Blockchain For Data Science",
    authors: "Dipesh Singla, Sudhakar Kumar",
    image: "/resourcesimages/blockchain.webp",
    topics: ["Blockchain", "Data Science"],
    shortDescription: "Exploring blockchain applications in data security and analytics.",
    description:
        "This research explores the intersection of Blockchain and Data Science, focusing on how blockchain's decentralized and immutable nature can address challenges in data integrity, provenance, and security. It discusses potential use cases in data sharing, collaborative analytics, and ensuring trustworthiness in data-driven models.",
  },
];

const uniqueTopics = ["All", ...Array.from(new Set(RESOURCES.flatMap(r => r.topics)))];

const Sidebar = ({ topics, active, onTopicChange, isOpen, toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <>
        {/* Mobile Arrow Toggle */}
        <motion.button
            className={styles.mobileArrowToggle}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              x: isOpen && isMobile ? 280 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ display: isMobile ? 'flex' : 'none' }}
        >
          <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
          >
            ▶
          </motion.div>
        </motion.button>

        <motion.div
            className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
            initial={false}
            animate={isMobile ? {
              x: isOpen ? 0 : -280,
              opacity: isOpen ? 1 : 1
            } : {
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
              type: "tween"
            }}
        >
          <h2 className={styles.sidebarTitle}>Topics</h2>
          <ul className={styles.sidebarList}>
            {topics.map((topic, idx) => (
                <li key={idx}>
                  <motion.button
                      onClick={() => {
                        onTopicChange(topic);
                        if (isMobile) toggleSidebar();
                      }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`${styles.sidebarBtn} ${active === topic ? styles.sidebarBtnActive : ''}`}
                  >
                    {topic}
                  </motion.button>
                </li>
            ))}
          </ul>
        </motion.div>

        {isOpen && isMobile && (
            <motion.div
                className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
                onClick={toggleSidebar}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            />
        )}
      </>
  );
};

const SearchBar = ({ value, onChange }) => (
    <div className={styles.searchWrapper}>
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
    </div>
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
                    <motion.span
                        className={styles.carouselBadge}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                      Featured Research
                    </motion.span>
                    <motion.h2
                        className={styles.carouselTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                      {res.title}
                    </motion.h2>
                    <motion.p
                        className={styles.carouselAuthors}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                      By: {res.authors}
                    </motion.p>
                    <motion.p
                        className={styles.carouselDesc}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                      {res.shortDescription}
                    </motion.p>
                    <motion.div
                        className={styles.carouselTags}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                      {res.topics.map((topic, idx) => (
                          <span key={idx} className={styles.carouselTag}>
                            {topic}
                          </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
            ))}
            <button
                onClick={prevSlide}
                className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}
                aria-label="Previous slide"
            >
              ‹
            </button>
            <button
                onClick={nextSlide}
                className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}
                aria-label="Next slide"
            >
              ›
            </button>
          </div>

          <div className={styles.resourcesList}>
            {filtered.map((res, idx) => (
                <motion.section
                    key={idx}
                    className={styles.resourceSection}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.3 }
                    }}
                >
                  <div className={styles.resourceText}>
                    <h2 className={styles.resourceTitle}>{res.title}</h2>
                    <p className={styles.resourceDesc}>{res.description}</p>
                    <p className={styles.resourceMeta}><strong>Categories:</strong> {res.topics.join(" • ")}</p>
                    <p className={styles.resourceMeta}><strong>Authors:</strong> {res.authors}</p>
                  </div>
                  <div className={styles.resourceImg}>
                    <motion.img
                        src={res.image}
                        alt={res.title}
                        className={styles.resourceImgImg}
                        whileHover={{
                          scale: 1.03,
                          rotate: 1,
                          transition: { duration: 0.3 }
                        }}
                        loading="lazy"
                    />
                  </div>
                </motion.section>
            ))}
          </div>

          {/* No results message */}
          {filtered.length === 0 && (
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.noResults}
                  style={{
                    textAlign: 'center',
                    padding: '3rem',
                    color: '#6b7280',
                    fontSize: '1.125rem'
                  }}
              >
                <p>No resources found matching your search criteria.</p>
                <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveTopic('All');
                    }}
                    style={{
                      marginTop: '1rem',
                      padding: '0.75rem 1.5rem',
                      background: '#0284c7',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}
                >
                  Clear Filters
                </button>
              </motion.div>
          )}
        </main>
      </div>
  );
};

export default ResourcesPage;