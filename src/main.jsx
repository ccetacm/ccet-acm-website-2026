import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About.jsx";
import Initiatives from "./components/Initiatives.jsx";
import Event from "./components/Event.jsx";
import Vision from "./components/Vision.jsx";
import MagazineScroller from "./components/MagazineScroller.jsx";
import Teams from "./components/testimonials.jsx";
import ResearchLabIsolated from "./components/research.jsx";
import Mentors from "./components/Mentors.jsx";
import Footer from "./components/Footer.jsx";
import Resources from "./components/Resources.jsx";  
import Header from "./components/Header.jsx";
import Loader from "./components/loader.jsx";
import ACMW from "./pages/acmw.jsx";

// Import images for logos
// import nepImg from "./assets/Header_Main/NEP_2020.png";
// import ccetImg from "./assets/Header_Main/ccetLogo.png";
// import sdgImg from "./assets/Header_Main/SDG.png";
// import puImg from "./assets/Header_Main/pu-logo.png";
// import acmImg from "./assets/Header_Main/acmlogo.png";
// import acmw from "./assets/Header_Main/acmw.png";
// import logoImg from "./assets/Header_Main/logo.png";

import "./index.css";

// Define logos array
const logos = [
  { src: "/Header_Main/logo.png", alt: "CCET ACM", link: "https://ccet.acm.org/" },
  { src: "/Header_Main/NEP_2020.png", alt: "NEP", className: "NEP1", link: "https://www.education.gov.in/en/national-education-policy" },
  { src: "/Header_Main/ccetLogo.png", alt: "CCET", link: "https://www.ccet.ac.in/" },
  { src: "/Header_Main/SDG.png", alt: "SDG", link: "https://sdgs.un.org/" },
  { src: "/Header_Main/pu-logo.png", alt: "PU", link: "https://puchd.ac.in/" },
  { src: "/Header_Main/acmlogo.png", alt: "ACM", link: "https://www.acm.org" },
  { src: "/Header_Main/acmw.png", alt: "ACM-W", link: "#" },
];

// Main App wrapper component that handles global loader
const AppWrapper = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    if (!hasLoadedOnce) {
      document.body.style.overflow = "hidden";
      const timer1 = setTimeout(() => setFadeOut(true), 2500);
      const timer2 = setTimeout(() => {
        setHideLoader(true);
        setHasLoadedOnce(true);
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";
      }, 3000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }
  }, [hasLoadedOnce]);

  return (
    <>
      {!hideLoader && !hasLoadedOnce && (
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

      <Router>
        <Header startAnimation={true} logos={logos} />

        <main style={{ paddingTop: "95px" }}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/events" element={<Event />} />
            <Route path="/research" element={<Resources />} />
            <Route path="/magazine" element={<MagazineScroller />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/acmw" element={<ACMW />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
