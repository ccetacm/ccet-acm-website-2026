"use client";

import { useEffect, useState } from "react";
import backgroundVideo from "../assets/Header_Main/background_video.mp4";
import "./Hero.css";

const Hero = ({ startAnimation }) => {
    const [animate, setAnimate] = useState(false);
    const [heroAnimated, setHeroAnimated] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);

    const cards = [
        {
            title: "Innovation Hub",
            description: "Fostering creativity and technological advancement",
            icon: "💡",
            color: "var(--hollywood-cerise)",
        },
        {
            title: "Research Excellence",
            description: "Cutting-edge research in computer science",
            icon: "🔬",
            color: "var(--zaffre)",
        },
        {
            title: "Student Development",
            description: "Empowering the next generation of tech leaders",
            icon: "🎓",
            color: "var(--dark-violet)",
        },
        {
            title: "Industry Connect",
            description: "Bridging academia and industry partnerships",
            icon: "🤝",
            color: "var(--fluorescent-cyan)",
        },
    ];

    useEffect(() => {
        if (startAnimation) {
            setAnimate(true);
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
            {/* Hero Section with Video Background and Animated Text */}
            <div className={`acm-hero-container ${heroAnimated ? "animate" : ""}`}>
                {/* Background Video */}
                <video className="acm-background-video" autoPlay muted loop>
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="acm-hero">
                    <div className="acm-text-container">
                        <div className="acm-main-title">
                            <div className="acm-ccet-text">CCET</div>
                            <div className="acm-acm-text">ACM</div>
                            <div className="acm-student-chapter-text">Student Chapter</div>
                        </div>
                        <p>Innovation • Technology • Excellence</p>
                        <div className="acm-subtitle">
                            Empowering the next generation of computer scientists and
                            technologists
                        </div>
                    </div>
                </div>

                <div className="acm-card-section">
                    <div className="acm-card-container">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`acm-card ${
                                    index === currentCard
                                        ? "active"
                                        : index ===
                                        (currentCard - 1 + cards.length) % cards.length
                                            ? "exit"
                                            : ""
                                }`}
                                style={{
                                    backgroundImage: `url(/${index + 1}.jpg)`,
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Breaking Bar */}
            <div className={`acm-breaking-bar ${animate ? "animate" : ""}`}>
                <div className="acm-scrolling-text">
                    <span className="acm-bar-text">Innovation in Computing</span>
                    <span className="acm-bar-separator">•</span>
                    <span className="acm-bar-text">Research Excellence</span>
                    <span className="acm-bar-separator">•</span>
                    <span className="acm-bar-text">Student Development</span>
                    <span className="acm-bar-separator">•</span>
                    <span className="acm-bar-text">Technology Leadership</span>
                    <span className="acm-bar-separator">•</span>
                    <span className="acm-bar-text">Professional Growth</span>
                    <span className="acm-bar-separator">•</span>
                    <span className="acm-bar-text">Industry Collaboration</span>
                    <span className="acm-bar-separator">•</span>
                </div>
            </div>
        </>
    );
};

export default Hero;