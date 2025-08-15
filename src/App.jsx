import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Initiatives from "./components/Initiatives";
import Event from "./components/Event";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import MagazineScroller from "./components/MagazineScroller";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import TestimonialsCarousel from "./components/Testimonials";
import Mentors from "./components/Mentors";

const App = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const [hideLoader, setHideLoader] = useState(false);
    const [startHeroAnimation, setStartHeroAnimation] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const timer1 = setTimeout(() => {
            setFadeOut(true);
        }, 2500);

        const timer2 = setTimeout(() => {
            setHideLoader(true);
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "auto";
            setStartHeroAnimation(true);
        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div>
            {/* Loader */}
            {!hideLoader && (
                <div
                    className={`loader-overlay-wrapper ${fadeOut ? "fade-out" : ""}`}
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "#CAF0F8",
                        zIndex: 9999,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: fadeOut ? 0 : 1,
                        pointerEvents: fadeOut ? "none" : "auto",
                        transition: "opacity 0.5s ease-out",
                    }}
                >
                    <Loader />
                </div>
            )}

            {/* Main container */}
            <div className="acm-main-container" style={{ background: "white", color: "var(--oxford-blue)" , paddingTop: '80px' }}>
                <Header startAnimation={startHeroAnimation} />
                <Hero startAnimation={startHeroAnimation} />
                <SocialMedia startAnimation={startHeroAnimation} />
            </div>

            {/* Other sections */}
            <Initiatives />
            <Event />
            <MagazineScroller />
            <Vision />
            <Mentors />
            <TestimonialsCarousel />
            <Footer />
        </div>
    );
};

export default App;