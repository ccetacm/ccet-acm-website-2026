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
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Loader from "./components/loader.jsx";

// Import images for logos
import nepImg from "./assets/Header_Main/NEP_2020.png";
import ccetImg from "./assets/Header_Main/ccetLogo.png";
import sdgImg from "./assets/Header_Main/SDG.png";
import puImg from "./assets/Header_Main/pu-logo.png";
import acmImg from "./assets/Header_Main/acmlogo.png";
import acmw from "./assets/Header_Main/acmw.png";
import logoImg from "./assets/Header_Main/logo.png";

import "./index.css";

// Define logos array
const logos = [
  {
    src: logoImg || "/placeholder.svg",
    alt: "CCET ACM",
    link: "https://ccet.acm.org/",
  },
  {
    src: nepImg || "/placeholder.svg",
    alt: "NEP",
    className: "NEP1",
    link: "https://www.education.gov.in/en/national-education-policy",
  },
  {
    src: ccetImg || "/placeholder.svg",
    alt: "CCET",
    link: "https://www.ccet.ac.in/",
  },
  {
    src: sdgImg || "/placeholder.svg",
    alt: "SDG",
    link: "https://sdgs.un.org/",
  },
  {
    src: puImg || "/placeholder.svg",
    alt: "PU",
    link: "https://puchd.ac.in/",
  },
  {
    src: acmImg || "/placeholder.svg",
    alt: "ACM",
    link: "https://www.acm.org",
  },
  {
    src: acmw || "/placeholder.svg",
    alt: "ACM-W",
    link: "#"
  },
];

// Main App wrapper component that handles global loader
const AppWrapper = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    // Only show loader on first visit
    if (!hasLoadedOnce) {
      document.body.style.overflow = "hidden";

      const timer1 = setTimeout(() => {
        setFadeOut(true);
      }, 2500);

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
      // If already loaded once, ensure proper body styles
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }
  }, [hasLoadedOnce]);

  return (
      <>
        {/* Loader - only shows on first visit */}
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
          {/* Header appears on all pages */}
          <Header startAnimation={true} logos={logos} />

          {/* Main content wrapper with top padding for fixed header */}
          <main style={{ paddingTop: '95px' }}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              <Route path="/initiatives" element={<Initiatives />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/events" element={<Event />} />
              <Route path="/research" element={<ResearchLabIsolated />} />
              <Route path="/magazine" element={<MagazineScroller />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/gallery" element={<Gallery />} />
               <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
          </main>

          {/* Footer appears on all pages */}
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