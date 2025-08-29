import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About.jsx";
import Initiatives from "./components/Initiatives.jsx";
import Event from "./components/Event.jsx";
import Vision from "./components/Vision.jsx";
import MagazineScroller from "./components/MagazineScroller.jsx";
import Header_Hero_SocialMedia from "./components/Header_Hero_SocialMedia.jsx";
import Teams from "./components/testimonials.jsx";
import ResearchLabIsolated from "./components/research.jsx";
import Mentors from "./components/Mentors.jsx";
import Footer from "./components/Footer.jsx";
import Resources from "./components/Resources.jsx";  


import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
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
        


        <Route path="/hero" element={<Header_Hero_SocialMedia />} />

        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>

      <Footer />
    </Router>
  </StrictMode>
);
