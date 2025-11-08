import { motion } from "framer-motion";
import "@lottiefiles/lottie-player";
import styles from "./icrl.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import React, { useEffect, useState, useMemo } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay },
    }),
};

const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay },
    }),
};

const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay },
    }),
};

const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay },
    }),
};

function App() {
    const [engineReady, setEngineReady] = useState(false);
    const [activeTab, setActiveTab] = useState("journals");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: "year", direction: "desc" });
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_BASE_URL = "https://ccet.acm.org/APIs/publications.php";

    // Fetch publications from backend
    useEffect(() => {
        const fetchPublications = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`${API_BASE_URL}?limit=1000&sort_by=year&sort_order=desc`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                if (result.success) {
                    setPublications(result.data || []);
                } else {
                    throw new Error(result.error || "Failed to fetch publications");
                }
            } catch (err) {
                console.error("Error fetching publications:", err);
                setError(err.message);
                setPublications([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPublications();
    }, []);

    // Debug: Log publications data structure
    useEffect(() => {
        if (!loading && publications.length > 0) {
            console.log('Total publications:', publications.length);
            console.log('Sample publication:', publications[0]);
            console.log('All unique types:', [...new Set(publications.map(p => p.type))]);
            console.log('Types breakdown:', {
                journals: publications.filter(p => (p.type ?? "").toLowerCase().includes("journal")).length,
                books: publications.filter(p => (p.type ?? "").toLowerCase().includes("book")).length,
                conferences: publications.filter(p => (p.type ?? "").toLowerCase().includes("conference")).length,
            });
        }
    }, [loading, publications]);

    // Process all publications
    const allPublications = useMemo(() => {
        return publications.map(pub => ({
            ...pub,
            displayYear: pub.year?.toString() || "N/A"
        }));
    }, [publications]);

    // Filter publications based on active tab and search
    const filteredPublications = useMemo(() => {
        console.log('Filtering with activeTab:', activeTab, 'searchQuery:', searchQuery);

        let filtered = allPublications.filter(pub => {
            // Filter by type based on active tab
            let typeMatch = false;
            const pubType = (pub.type ?? "").toLowerCase();

            switch (activeTab) {
                case "journals":
                    typeMatch = pubType.includes("journal") || pubType.includes("article");
                    break;
                case "books":
                    typeMatch = pubType.includes("book") || pubType.includes("chapter");
                    break;
                case "conferences":
                    typeMatch = pubType.includes("conference") || pubType.includes("proceeding");
                    break;
                default:
                    typeMatch = true;
            }

            // Filter by search query
            const searchLower = searchQuery.toLowerCase();
            const searchMatch = searchQuery === "" ||
                (pub.title ?? "").toLowerCase().includes(searchLower) ||
                (pub.authors ?? "").toLowerCase().includes(searchLower) ||
                (pub.journal ?? "").toLowerCase().includes(searchLower) ||
                (pub.type ?? "").toLowerCase().includes(searchLower);

            return typeMatch && searchMatch;
        });

        // Sort publications
        if (sortConfig.key) {
            filtered.sort((a, b) => {
                if (sortConfig.key === "year") {
                    return sortConfig.direction === "asc" ? a.year - b.year : b.year - a.year;
                } else {
                    const aVal = a[sortConfig.key] || "";
                    const bVal = b[sortConfig.key] || "";
                    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
                    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
                    return 0;
                }
            });
        }

        console.log('Filtered results:', filtered.length);
        return filtered;
    }, [allPublications, activeTab, searchQuery, sortConfig]);

    const handleSort = (key) => {
        setSortConfig(prevConfig => ({
            key,
            direction: prevConfig.key === key && prevConfig.direction === "asc" ? "desc" : "asc"
        }));
    };

    const handleTabChange = (tab) => {
        console.log('Changing tab to:', tab);
        setActiveTab(tab);
    };

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => setEngineReady(true));
    }, []);

    return (
        <div className={styles.fullSite}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles["hero-shape"]}></div>
                <div className={styles["hero-shape"]}></div>

                {engineReady && (
                    <div id={styles["hero-particles"]}>
                        <Particles
                            id="tsparticles"
                            options={{
                                background: {
                                    color: { value: "transparent" },
                                },
                                fullScreen: {
                                    enable: false,
                                },
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
                            }}
                        />
                    </div>
                )}

                <div className={styles["hero-circle"] + " " + styles.left}></div>
                <div className={styles["hero-circle"] + " " + styles.right}></div>

                <div className={styles["hero-content"]}>
                    {/* LEFT TEXT */}
                    <motion.div
                        className={styles["hero-text"]}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.start}>
                            <i className="fa-solid fa-globe"></i>
                            <span>Global Research Initiative</span>
                        </div>
                        <h1>Intelligent Computing and Research Labs</h1>
                        <p>
                            Fostering Global Innovation and Collaboration through groundbreaking
                            research initiatives
                        </p>
                        <div className={styles["hero-buttons"]}>
                            <a href="#/events" className={`${styles.btn} ${styles["btn-primary"]}`}>
                                See Our Past Events{" "}
                                <i className="fa-solid fa-arrow-right arrow-icon"></i>
                            </a>
                            <a
                                href="#"
                                className={`${styles.btn} ${styles["btn-outline"]} ${styles["btn-join-us"]}`}
                            >
                                Join Us
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT ANIMATION */}
                    <motion.div
                        className={styles["hero-animation"]}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Player
                            autoplay
                            loop
                            src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
                            className={styles["hero-lottie"]}
                        />
                    </motion.div>
                </div>

                <motion.div
                    className={styles["scroll-down"]}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <i className="fa-solid fa-chevron-down"></i>
                </motion.div>
            </section>

            {/* About Section */}
            <section className={`${styles.container} ${styles["container-padding-vertical"]}`}>
                <div className={styles.bubble}>
                    <span>A CCET Initiative</span>
                </div>

                <motion.h2
                    className={styles["section-title"]}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Intelligent Computing and Research Labs (ICRL)
                </motion.h2>

                <div className={styles["research-card"]}>
                    {/* LEFT SIDE */}
                    <motion.div
                        className={styles.description}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={styles["gradient-title"]}>CCET ACM Student</h3>
                        <p>
                            There is a wide range of topics we investigate, including data mining,
                            neural networks, fuzzy systems, evolutionary optimization, machine
                            learning, pattern recognition, user-adaptive systems, computer graphics,
                            computer vision, and bioinformatics, all under the common denominator of
                            intelligent, nature-inspired methods and approaches to studying,
                            modeling, and simulating complex systems that improve learnability,
                            adaptability, and efficiency, these develop capabilities to study,
                            model, and simulate complex systems that enhance their efficiency,
                            adaptability, and learnability.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        className={styles.objectives}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h3
                            className={styles["gradient-title"]}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Objectives of Research
                        </motion.h3>

                        <div className={styles["objectives-list"]}>
                            {/* Objective 1 */}
                            <motion.div
                                className={styles["objective-card"]}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles["card-glow"]}></div>
                                <div className={styles["card-content"]}>
                                    <div className={styles.number}>1</div>
                                    <p>
                                        Conducting research of global acclaim and world-class quality in
                                        the analysis, design, and application of CI techniques.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Objective 2 */}
                            <motion.div
                                className={styles["objective-card"]}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles["card-glow"]}></div>
                                <div className={styles["card-content"]}>
                                    <div className={styles.number}>2</div>
                                    <p>To provide excellent instruction in CI disciplines.</p>
                                </div>
                            </motion.div>

                            {/* Objective 3 */}
                            <motion.div
                                className={styles["objective-card"]}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles["card-glow"]}></div>
                                <div className={styles["card-content"]}>
                                    <div className={styles.number}>3</div>
                                    <p>
                                        Bringing our knowledge and experience to the industry, and raising
                                        funds through research initiatives.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Global Network Section */}
            <section
                className={`${styles.container} ${styles["container-padding-vertical"]} ${styles["container-text-center"]}`}
            >
                <motion.h2
                    className={styles["section-title"]}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our Global Research Network
                </motion.h2>

                <motion.img
                    src="/icrg-imgs/map.png"
                    className={styles["map-image"]}
                    alt="Global research network map"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                />
            </section>

            <section className={styles["faculty-section-new"]}>
                <div className={styles["faculty-bg-gradient"]}></div>

                <div className={styles["faculty-full-container"]}>
                    <motion.div
                        className={styles["faculty-header"]}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className={styles["faculty-badge"]}>Meet Our Leaders</span>
                        <h2 className={styles["faculty-title"]}>Faculty Leadership</h2>
                        <p className={styles["faculty-subtitle"]}>
                            Guiding innovation and excellence in research
                        </p>
                    </motion.div>

                    <div className={styles["faculty-cards-container"]}>
                        {/* Faculty Card 1 */}
                        <motion.div
                            className={styles["faculty-card-new"]}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles["faculty-card-inner"]}>
                                <div className={styles["faculty-card-top"]}>
                                    <div className={styles["faculty-image-wrapper"]}>
                                        <div className={styles["faculty-image-border"]}></div>
                                        <img
                                            src="/icrg-imgs/mentor-2.png"
                                            alt="Dr. Sunil K. Singh"
                                            className={styles["faculty-image"]}
                                        />
                                    </div>
                                    <div className={styles["faculty-role-badge"]}>Faculty Mentor</div>
                                </div>

                                <div className={styles["faculty-card-content"]}>
                                    <h3 className={styles["faculty-name"]}>Dr. Sunil K. Singh</h3>
                                    <p className={styles["faculty-position"]}>Professor & Head of Department</p>
                                    <p className={styles["faculty-dept"]}>Computer Science & Engineering</p>
                                    <p className={styles["faculty-institution"]}>CCET, Chandigarh</p>

                                    <div className={styles["faculty-divider"]}></div>

                                    <div className={styles["faculty-orcid"]}>
                                        <i className="fa-solid fa-id-badge"></i>
                                        <span>ORCID: 0000-0003-4876-7190</span>
                                    </div>

                                    <div className={styles["faculty-actions"]}>
                                        <a href="#/sksingh" className={styles["faculty-btn"]}>
                                            Know More <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/drsks/" className={styles["faculty-social-link"]} target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Faculty Card 2 */}
                        <motion.div
                            className={styles["faculty-card-new"]}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles["faculty-card-inner"]}>
                                <div className={styles["faculty-card-top"]}>
                                    <div className={styles["faculty-image-wrapper"]}>
                                        <div className={styles["faculty-image-border"]}></div>
                                        <img
                                            src="/icrg-imgs/mentor3.png"
                                            alt="Dr. Sudhakar Kumar"
                                            className={styles["faculty-image"]}
                                        />
                                    </div>
                                    <div className={styles["faculty-role-badge"]}>Faculty Sponsor</div>
                                </div>

                                <div className={styles["faculty-card-content"]}>
                                    <h3 className={styles["faculty-name"]}>Dr. Sudhakar Kumar</h3>
                                    <p className={styles["faculty-position"]}>Assistant Professor</p>
                                    <p className={styles["faculty-dept"]}>Computer Science & Engineering</p>
                                    <p className={styles["faculty-institution"]}>CCET, Chandigarh</p>

                                    <div className={styles["faculty-divider"]}></div>

                                    <div className={styles["faculty-orcid"]}>
                                        <i className="fa-solid fa-id-badge"></i>
                                        <span>ORCID: 0000-0001-7928-4234</span>
                                    </div>

                                    <div className={styles["faculty-actions"]}>
                                        <a href="#/sudhakar" className={styles["faculty-btn"]}>
                                            Know More <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/sudhakarkumar5/" className={styles["faculty-social-link"]} target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                className={`${styles["container-stat"]} ${styles.container} ${styles["container-padding-vertical"]}`}
            >
                <motion.div
                    className={styles.stats}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {/* Card 1 */}
                    <motion.div
                        className={styles["stat-card"]}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <i className="fa-solid fa-bullseye"></i>
                        <h3>100+</h3>
                        <p>Active Projects</p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className={styles["stat-card"]}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <i className="fa-solid fa-globe"></i>
                        <h3>10+</h3>
                        <p>Partner Countries</p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className={styles["stat-card"]}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <i className="fa-solid fa-award"></i>
                        <h3>$25M+</h3>
                        <p>Research Funding</p>
                    </motion.div>

                    {/* Card 4 - Publications Count */}
                    <motion.div
                        className={styles["stat-card"]}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <i className="fa-solid fa-book"></i>
                        <h3>{loading ? "..." : `${allPublications.length}+`}</h3>
                        <p>Research Publications</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Publications Section */}
            <motion.section
                className={styles["publications-section"]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className={styles["publications-container"]}>
                    {/* Header */}
                    <motion.div
                        className={styles["section-header"]}
                        variants={fadeUp}
                        custom={0}
                    >
                        <h2 className={styles["section-title"]}>Research Publications</h2>
                    </motion.div>

                    <motion.p
                        className={styles["section-subtitle"]}
                        variants={fadeUp}
                        custom={0.2}
                    >
                        {loading
                            ? "Loading publications..."
                            : error
                                ? `Error: ${error}`
                                : `Explore our latest research contributions and academic publications (${allPublications.length} publications)`
                        }
                    </motion.p>

                    {/* Search Box */}
                    <motion.div
                        className={styles["search-box"]}
                        variants={fadeUp}
                        custom={0.3}
                    >
                        <i className="fa-solid fa-search"></i>
                        <input
                            type="text"
                            placeholder="Search publications..."
                            className={styles["search-input"]}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            disabled={loading}
                        />
                    </motion.div>

                    {/* Tabs */}
                    <motion.div className={styles.tabs} variants={fadeUp} custom={0.4}>
                        <button
                            className={`${styles.tab} ${activeTab === "journals" ? styles["tab-active"] : styles["tab-inactive"]}`}
                            onClick={() => handleTabChange("journals")}
                            disabled={loading}
                        >
                            Journal Papers
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === "books" ? styles["tab-active"] : styles["tab-inactive"]}`}
                            onClick={() => handleTabChange("books")}
                            disabled={loading}
                        >
                            Books/Book Chapters
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === "conferences" ? styles["tab-active"] : styles["tab-inactive"]}`}
                            onClick={() => handleTabChange("conferences")}
                            disabled={loading}
                        >
                            Conference Papers
                        </button>
                    </motion.div>

                    {/* Results Count */}
                    {!loading && !error && (
                        <motion.div
                            className={styles["results-count"]}
                            variants={fadeUp}
                            custom={0.45}
                        >
                            Showing {filteredPublications.length} of {allPublications.length} publications
                        </motion.div>
                    )}

                    {/* Loading State */}
                    {loading && (
                        <motion.div
                            className={styles["no-results"]}
                            variants={fadeUp}
                            custom={0.5}
                        >
                            <i className="fa-solid fa-spinner fa-spin"></i>
                            <p>Loading publications...</p>
                        </motion.div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <motion.div
                            className={styles["no-results"]}
                            variants={fadeUp}
                            custom={0.5}
                        >
                            <i className="fa-solid fa-exclamation-triangle"></i>
                            <p>Failed to load publications. Please try again later.</p>
                            <p style={{ fontSize: '0.9em', color: '#666' }}>{error}</p>
                        </motion.div>
                    )}

                    {/* Table */}
                    {!loading && !error && filteredPublications.length > 0 && (
                        <motion.div
                            className={styles["table-wrapper"]}
                            variants={fadeUp}
                            custom={0.5}
                        >
                            <div className={styles["table-container"]}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th
                                            className={styles.sortable}
                                            onClick={() => handleSort("year")}
                                        >
                                            <div className={styles["sort-header"]}>
                                                <span>Year</span>
                                                <i className={`fa-solid fa-arrow-${sortConfig.key === "year" ? (sortConfig.direction === "asc" ? "up" : "down") : "up-down"}`}></i>
                                            </div>
                                        </th>
                                        <th
                                            className={styles.sortable}
                                            onClick={() => handleSort("title")}
                                        >
                                            <div className={styles["sort-header"]}>
                                                <span>Title</span>
                                                <i className={`fa-solid fa-arrow-${sortConfig.key === "title" ? (sortConfig.direction === "asc" ? "up" : "down") : "up-down"}`}></i>
                                            </div>
                                        </th>
                                        <th
                                            className={styles.sortable}
                                            onClick={() => handleSort("authors")}
                                        >
                                            <div className={styles["sort-header"]}>
                                                <span>Authors</span>
                                                <i className={`fa-solid fa-arrow-${sortConfig.key === "authors" ? (sortConfig.direction === "asc" ? "up" : "down") : "up-down"}`}></i>
                                            </div>
                                        </th>
                                        <th>Journal/Conference</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {filteredPublications.map((pub, index) => (
                                        <tr key={`${pub.id || pub.year}-${index}`}>
                                            <td>{pub.displayYear}</td>
                                            <td>
                                                <div className={styles["publication-title"]}>
                                                    {pub.title}
                                                    {pub.url && (
                                                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className={styles["pub-link"]}>
                                                            <i className="fa-solid fa-external-link-alt"></i>
                                                        </a>
                                                    )}
                                                </div>
                                            </td>
                                            <td>{pub.authors}</td>
                                            <td>
                                                <div className={styles["publication-journal"]}>
                                                    {pub.journal}
                                                    {pub.type && <span className={styles["pub-type"]}>{pub.type}</span>}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}

                    {/* No Results Message */}
                    {!loading && !error && filteredPublications.length === 0 && allPublications.length > 0 && (
                        <motion.div
                            className={styles["no-results"]}
                            variants={fadeUp}
                            custom={0.6}
                        >
                            <i className="fa-solid fa-search"></i>
                            <p>No publications found matching your criteria.</p>
                        </motion.div>
                    )}
                </div>
            </motion.section>

            {/* Events Section */}
            <motion.section
                className={`${styles["container-stat"]} ${styles.container} ${styles["container-padding-vertical"]}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Title */}
                <motion.h2
                    className={styles["section-title"]}
                    variants={zoomIn}
                    custom={0}
                >
                    Events Organized By The Team
                </motion.h2>

                {/* Events */}
                <div className={styles.events}>
                    {/* Event 1 */}
                    <motion.div
                        className={styles["event-card"]}
                        variants={fadeRight}
                        custom={0.1}
                    >
                        <img src="/icrg-imgs/event1.jpg" alt="Blockchain Technology" />
                        <h4>Blockchain Technology</h4>
                        <p>
                            CASC Under AICTE SPICES is glad to announce a session on blockchain,
                            covering hashing, proof of work, and more.
                        </p>
                    </motion.div>

                    {/* Event 2 */}
                    <motion.div
                        className={styles["event-card"]}
                        variants={fadeUp}
                        custom={0.2}
                    >
                        <img src="/icrg-imgs/event2.jpg" alt="Computer Vision Syndrome" />
                        <h4>Computer Vision Syndrome</h4>
                        <p>
                            Insights about caring for your eyes from computers and measures to
                            improve health.
                        </p>
                    </motion.div>

                    {/* Event 3 */}
                    <motion.div
                        className={styles["event-card"]}
                        variants={fadeLeft}
                        custom={0.3}
                    >
                        <img src="/icrg-imgs/event3.jpg" alt="Robotics and Embedded Systems" />
                        <h4>Robotics and Embedded Systems</h4>
                        <p>
                            Workshop on Arduino and Embedded Systems with hands-on experience.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className={styles.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className={styles.cta} variants={fadeUp} custom={0}>
                    {/* Title */}
                    <motion.h2
                        className={styles["section-title"]}
                        variants={zoomIn}
                        custom={0.1}
                    >
                        Join Our Research Community
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        className={styles["section-subtitle"]}
                        variants={fadeUp}
                        custom={0.2}
                    >
                        Connect with researchers worldwide and contribute to groundbreaking
                        innovations.
                    </motion.p>

                    {/* Button */}
                    <motion.a
                        href="#/contact-section"
                        className={`${styles.btn} ${styles["btn-primary"]}`}
                        variants={fadeUp}
                        custom={0.3}
                    >
                        Join Us{" "}
                        <i
                            className="fa-solid fa-arrow-right"
                            style={{ marginLeft: "8px" }}
                        ></i>
                    </motion.a>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default App;
