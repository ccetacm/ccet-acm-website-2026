import React, { useState, useEffect } from "react";
import Initiatives from "./components/Initiatives";
import Event from "./components/Event";
import Vision from "./components/Vision";
import MagazineScroller from "./components/MagazineScroller";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Teams from "./components/testimonials.jsx";
import ResearchLabIsolated from "./components/research.jsx";
import Mentors from "./components/Mentors.jsx";

const App = () => {
    const [startHeroAnimation, setStartHeroAnimation] = useState(false);

    useEffect(() => {
        // Since we have a global loader in main.jsx, we can start animations immediately
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
        <div>
            {/* REMOVED THE LOADER FROM HERE */}

            {/* Main content */}
            <Hero startAnimation={startHeroAnimation} cards={cards} />
            <SocialMedia startAnimation={startHeroAnimation} />
            <Initiatives />
            <Vision />
            <Event />
            <ResearchLabIsolated />
            <MagazineScroller />
            <Mentors />
            <Teams />
        </div>
    );
};

export default App;