
import { motion } from "framer-motion";

import "@lottiefiles/lottie-player";
import styles from "./icrg.module.css";

import { Player } from "@lottiefiles/react-lottie-player";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import React, { useEffect, useState } from "react";



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

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => setEngineReady(true));
    }, []);


    return (
        <>

            <div className={styles.fullSite}>

            <section className={styles.hero}>
                <div className={styles["hero-shape"]}></div>
                <div className={styles["hero-shape"]}></div>

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
                        <h1>International Research &amp; Sponsored Projects</h1>
                        <p>
                            Fostering Global Innovation and Collaboration through groundbreaking
                            research initiatives
                        </p>
                        <div>
                            <a href="#" className={`${styles.btn} ${styles["btn-primary"]}`}>
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
                            style={{ height: "600px", width: "600px" }}
                        />
                    </motion.div>
                </div>

               
                <motion.div
                    className={styles["scroll-down"]}
                    
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <i className="fa-solid fa-chevron-down"></i>
                </motion.div>
            </section>





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
                    Intelligent Computing and Research Group (ICRG)
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

            {/* Faculty Section */}
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
                    Our Faculty
                </motion.h2>

                <section className={styles["faculty-section"]}>
                    <div className={styles["bg-effects"]}>
                        <div className={`${styles["bg-circle"]} ${styles["top-circle"]}`}></div>
                        <div className={`${styles["bg-circle"]} ${styles["bottom-circle"]}`}></div>
                    </div>

                    <div className={styles.container}>
                        {/* Section Header */}
                        <motion.div
                            className={styles["section-header"]}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.tag}>Our Leadership</div>
                            <h2>Faculty Mentor | Faculty Sponsor</h2>
                            <div className={styles.divider}></div>
                        </motion.div>

                        {/* Faculty Cards */}
                        <div className={styles["faculty-grid"]}>
                            {/* Card 1 */}
                            <motion.div
                                className={styles["faculty-card"]}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles["hover-bg"]}></div>
                                <div className={styles["card-content"]}>
                                    <div className={styles["profile-img"]}>
                                        <div className={styles["img-glow"]}></div>
                                        <img src="/icrg-imgs/mentor-2.png" alt="Dr. Sunil K. Singh" />
                                    </div>
                                    <div className={styles["text-center"]}>
                                        <h3>Dr. Sunil K. Singh</h3>
                                        <p className={styles.role}>Faculty Mentor</p>
                                        <p className={styles.position}>Professor &amp; Head of Dept.</p>
                                        <p className={styles.institution}>CCET, Chandigarh</p>
                                        <p className={styles.department}>COMPUTER SCI. &amp; ENG. DEPT.</p>
                                        <p className={styles.orcid}>ORCID ID: 0000-0003-4876-7190</p>
                                        <div className={styles["social-links"]}>
                                            <a href="#">
                                                <img src="/icrg-imgs/mail.png" alt="Mail" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/sudhakarkumar5/">
                                                <img src="/icrg-imgs/linkedin.png" alt="LinkedIn" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                className={styles["faculty-card"]}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles["hover-bg"]}></div>
                                <div className={styles["card-content"]}>
                                    <div className={styles["profile-img"]}>
                                        <div className={styles["img-glow"]}></div>
                                        <img src="/icrg-imgs/mentor3.png" alt="Dr. Sudhakar Kumar" />
                                    </div>
                                    <div className={styles["text-center"]}>
                                        <h3>Dr. Sudhakar Kumar</h3>
                                        <p className={styles.role}>Faculty Sponsor</p>
                                        <p className={styles.position}>Assistant Professor</p>
                                        <p className={styles.institution}>CCET, Chandigarh</p>
                                        <p className={styles.department}>COMPUTER SCI. &amp; ENG. DEPT.</p>
                                        <p className={styles.orcid}>ORCID ID: 0000-0001-7928-4234</p>
                                        <div className={styles["social-links"]}>
                                            <a href="#">
                                                <img src="/icrg-imgs/linkedin.png" alt="Mail" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/drsks/">
                                                <img src="/icrg-imgs/mail.png" alt="LinkedIn" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </section>






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
                                staggerChildren: 0.2, // ⏱️ stagger each child by 0.2s
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
                </motion.div>
            </section>




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
                        Explore our latest research contributions and academic publications
                    </motion.p>

                    {/* Search Box */}
                    <motion.div
                        className={styles["search-box"]}
                        variants={fadeUp}
                        custom={0.3}
                    >
                        <i data-feather="search" className={styles["search-icon"]}></i>
                        <input
                            id="searchInput"
                            type="text"
                            placeholder="Search publications..."
                            className={styles["search-input"]}
                        />
                    </motion.div>

                    {/* Tabs */}
                    <motion.div className={styles.tabs} variants={fadeUp} custom={0.4}>
                        <button
                            className={`${styles.tab} ${styles["tab-active"]}`}
                            data-tab="journals"
                        >
                            Journal Papers
                        </button>
                        <button
                            className={`${styles.tab} ${styles["tab-inactive"]}`}
                            data-tab="books"
                        >
                            Books/Book Chapters
                        </button>
                        <button
                            className={`${styles.tab} ${styles["tab-inactive"]}`}
                            data-tab="conferences"
                        >
                            Conference Papers
                        </button>
                    </motion.div>

                    {/* Table */}
                    <motion.div
                        className={styles["table-wrapper"]}
                        variants={fadeUp}
                        custom={0.5}
                    >
                        <div className={styles["table-container"]}>
                            <table id="pubTable">
                                <thead>
                                    <tr>
                                        <th className={styles.sortable} data-key="year">
                                            <div className={styles["sort-header"]}>
                                                <span>Year</span>
                                                <i data-feather="arrow-up-down"></i>
                                            </div>
                                        </th>
                                        <th className={styles.sortable} data-key="title">
                                            <div className={styles["sort-header"]}>
                                                <span>Title</span>
                                                <i data-feather="arrow-up-down"></i>
                                            </div>
                                        </th>
                                        <th className={styles.sortable} data-key="authors">
                                            <div className={styles["sort-header"]}>
                                                <span>Authors</span>
                                                <i data-feather="arrow-up-down"></i>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="pubBody"></tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

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
                        href="#"
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




        </>

    );
}



export default App;



