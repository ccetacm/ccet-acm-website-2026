import React, { useState, useEffect } from "react";
import Initiatives from "../components/CoreActs.jsx";
import Event from "../components/Event";
import Vision from "../components/Vision";
import MagazineScroller from "../components/MagazineScroller";
import Hero from "../components/Hero";
import SocialMedia from "../components/SocialMedia";
import Teams from "../components/testimonials.jsx";
import ResearchLabIsolated from "../components/research.jsx";
import Mentors from "../components/Mentors.jsx";
import styles from "./Home.module.css";

const Home = () => {
    const [startHeroAnimation, setStartHeroAnimation] = useState(false);

    useEffect(() => {
        setStartHeroAnimation(true);
    }, []);

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

    return (
        <div className={styles.homeContainer}>
            <Hero startAnimation={startHeroAnimation} cards={cards} />
            <div className="social-media-wrapper">
                <SocialMedia startAnimation={startHeroAnimation} />
            </div>
            <Initiatives />
            <Vision />
            <ResearchLabIsolated />
            <MagazineScroller />
            <Mentors />
            <Teams />
        </div>
    );
};

export default Home;