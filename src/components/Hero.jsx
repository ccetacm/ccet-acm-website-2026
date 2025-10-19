"use client";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import HeroText from "./HeroText";
import NewsTicker from "./NewsTicker";

const Hero = ({ startAnimation, cards }) => {
    const [heroAnimated, setHeroAnimated] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [stats, setStats] = useState({
        members: 0,
        events: 0,
        projects: 0
    });

    // Enhanced carousel data with tech themes
    const carouselData = [
        {
            image: "/1 (1).jpg",
            title: "Innovation",
            description: "Leading technological advancement",
            techCode: "INNV_001",
            status: "ACTIVE"
        },
        {
            image: "/1 (3).jpg",
            title: "Research",
            description: "Cutting-edge research projects",
            techCode: "RSRCH_002",
            status: "PROCESSING"
        },
        {
            image: "/1 (7).jpg",
            title: "Community",
            description: "Building future leaders",
            techCode: "COMM_003",
            status: "ONLINE"
        },
        {
            image: "/1 (10).jpg",
            title: "Excellence",
            description: "Academic and professional growth",
            techCode: "EXCL_004",
            status: "OPTIMIZED"
        },
    ];

    // Animated counter effect for stats
    useEffect(() => {
        if (heroAnimated) {
            const animateValue = (key, end, duration) => {
                let start = 0;
                const increment = end / (duration / 16);
                const timer = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        setStats(prev => ({ ...prev, [key]: end }));
                        clearInterval(timer);
                    } else {
                        setStats(prev => ({ ...prev, [key]: Math.floor(start) }));
                    }
                }, 16);
            };

            setTimeout(() => {
                animateValue('members', 300, 2000);
                animateValue('events', 50, 2000);
                animateValue('projects', 100, 2000);
            }, 500);
        }
    }, [heroAnimated]);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [carouselData.length]);

    useEffect(() => {
        if (startAnimation) {
            setTimeout(() => setHeroAnimated(true), 600);
        }
    }, [startAnimation]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    return (
        <>
            <div className={`${styles.heroContainer} ${heroAnimated ? styles.animate : ""}`}>
                {/* Background Video */}
                <video className={styles.backgroundVideo} autoPlay muted loop>
                    <source src="/Header_Main/Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className={styles.hero}>
                    <div className={styles.textContainer}>
                        <HeroText />
                        {/* Added subtitle under hero text */}
                        <p className={styles.heroSubtitle}>
                            Empowering next generation of computer scientists and technologists
                        </p>
                    </div>
                </div>

                {/* Stats Counter */}
                <div className={styles.statsContainer}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{stats.members}+</span>
                        <span className={styles.statLabel}>Members</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{stats.events}+</span>
                        <span className={styles.statLabel}>Events</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{stats.projects}+</span>
                        <span className={styles.statLabel}>Projects</span>
                    </div>
                </div>

                {/* ENHANCED TECH CAROUSEL */}
                <div className={styles.techCarousel}>
                    <div className={styles.carouselFrame}>
                        {/* Tech Border Effect */}
                        <div className={styles.techBorder}>
                            <div className={styles.cornerTL}></div>
                            <div className={styles.cornerTR}></div>
                            <div className={styles.cornerBL}></div>
                            <div className={styles.cornerBR}></div>
                        </div>

                        {/* Holographic Overlay */}
                        <div className={styles.holoOverlay}></div>

                        {/* Main Image */}
                        <img
                            src={carouselData[currentSlide].image}
                            alt={carouselData[currentSlide].title}
                            className={styles.carouselImage}
                        />

                        {/* Navigation Buttons */}
                        <button
                            className={`${styles.techBtn} ${styles.prevBtn}`}
                            onClick={prevSlide}
                        >
                            <div className={styles.btnInner}>
                                <span>◀</span>
                            </div>
                        </button>
                        <button
                            className={`${styles.techBtn} ${styles.nextBtn}`}
                            onClick={nextSlide}
                        >
                            <div className={styles.btnInner}>
                                <span>▶</span>
                            </div>
                        </button>

                        {/* Enhanced Dots Indicator */}
                        <div className={styles.techDots}>
                            {carouselData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.techDot} ${index === currentSlide ? styles.activeTechDot : ''}`}
                                    onClick={() => goToSlide(index)}
                                >
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* News Ticker positioned below hero */}
            <div className={styles.newsTickerContainer}>
                <NewsTicker />
            </div>
        </>
    );
};

export default Hero;