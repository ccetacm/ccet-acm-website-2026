"use client";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import backgroundVideo from "../assets/Header_Main/background_video.mp4";

const Hero = ({ startAnimation, cards }) => {
    const [heroAnimated, setHeroAnimated] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        if (startAnimation) {
            setTimeout(() => setHeroAnimated(true), 600);
        }
    }, [startAnimation]);

    useEffect(() => {
        const cardInterval = setInterval(() => {
            setCurrentCard((prev) => (prev + 1) % cards.length);
        }, 3000);
        return () => clearInterval(cardInterval);
    }, [cards.length]);

    return (
        <>
            <div className={`${styles.heroContainer} ${heroAnimated ? styles.animate : ""}`}>
                {/* Background Video - using imported file */}
                <video className={styles.backgroundVideo} autoPlay muted loop>
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className={styles.hero}>
                    <div className={styles.textContainer}>
                        <div className={styles.mainTitle}>
                            <div className={styles.ccetText}>CCET</div>
                            <div className={styles.acmText}>ACM</div>
                            <div className={styles.studentChapterText}>Student Chapter</div>
                        </div>
                        <p>Innovation • Technology • Excellence</p>
                        <div className={styles.subtitle}>
                            Empowering the next generation of computer scientists and
                            technologists
                        </div>
                    </div>
                </div>

                <div className={styles.cardSection}>
                    <div className={styles.cardContainer}>
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`${styles.card} ${
                                    index === currentCard
                                        ? styles.active
                                        : index ===
                                        (currentCard - 1 + cards.length) % cards.length
                                            ? styles.exit
                                            : ""
                                }`}
                                style={{
                                    // Use either imported images or keep as is if images are in public folder
                                    backgroundImage: `url(/${index + 1}.jpg)`,
                                    // If you imported card images, use this instead:
                                    // backgroundImage: `url(${cardImages[index]})`,
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Breaking Bar */}
            <div className={`${styles.breakingBar} ${startAnimation ? styles.animate : ""}`}>
                <div className={styles.scrollingText}>
                    <span className={styles.barText}>Innovation in Computing</span>
                    <span className={styles.barSeparator}>•</span>
                    <span className={styles.barText}>Research Excellence</span>
                    <span className={styles.barSeparator}>•</span>
                    <span className={styles.barText}>Student Development</span>
                    <span className={styles.barSeparator}>•</span>
                    <span className={styles.barText}>Technology Leadership</span>
                    <span className={styles.barSeparator}>•</span>
                    <span className={styles.barText}>Professional Growth</span>
                    <span className={styles.barSeparator}>•</span>
                    <span className={styles.barText}>Industry Collaboration</span>
                    <span className={styles.barSeparator}>•</span>
                </div>
            </div>
        </>
    );
};

export default Hero;