import React, { useState, useEffect } from "react";
import Loader from "./components/loader";
import Initiatives from "./components/Initiatives";
import Event from "./components/Event";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import MagazineScroller from "./components/MagazineScroller";
import Header_Hero_SocialMedia from "./components/Header_Hero_SocialMedia.jsx";
import Teams from "./components/testimonials.jsx";
import ResearchLabIsolated from "./components/research.jsx";
import Mentors from "./components/Mentors.jsx";

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

      {/* Main content */}
      <Header_Hero_SocialMedia startAnimation={startHeroAnimation} />
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


