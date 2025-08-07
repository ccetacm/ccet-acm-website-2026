import React, { useEffect, useRef, useState } from "react";
import "./MagazineScroller.css";

import magzine1 from "../assets/magzine1.jpg";
import magzine2 from "../assets/magzine2.jpg";
import magzine3 from "../assets/magzine3.jpg";
import magzine4 from "../assets/magzine4.jpg";
import magzine5 from "../assets/magzine5.jpg";
import magzine6 from "../assets/magzine6.jpg";

const magazineImages = [
  magzine1,
  magzine2,
  magzine3,
  magzine4,
  magzine5,
  magzine6,
];

const magazineData = [
  {
    text: "This issue explores Ethereum blockchain, smart contracts, and Solidity programming, highlighting their role in revolutionizing decentralized applications and promoting transparency in digital transactions This issue explores Ethereum blockchain, smart contracts, and Solidity programming, highlighting their role in revolutionizing decentralized applications and promoting transparency in digital transactions.",
  },
  {
    text: "Focusing on AI hallucination, this edition examines the risks of AI-generated misinformation in scientific writing and emphasizes the need for careful verification to maintain academic integrity This issue explores Ethereum blockchain, smart contracts, and Solidity programming, highlighting their role in revolutionizing decentralized applications and promoting transparency in digital transactions..",
  },
  {
    text: "Covering Explainable AI (XAI) techniques like LIME and SHAP, this issue discusses improving AI transparency across industries and introduces Mojo, a high-performance programming language for AI and HPCThis issue explores Ethereum blockchain, smart contracts, and Solidity programming, highlighting their role in revolutionizing decentralized applications and promoting transparency in digital transactions..",
  },
  {
    text: "This issue reviews Advanced Persistent Threats (APTs) in cybersecurity, detailing their tactics, motivations, and case studies, while advocating layered defense strategies enhanced by AI This issue explores Ethereum blockchain, smart contracts, and Solidity programming, highlighting their role in revolutionizing decentralized applications and promoting transparency in digital transactions.",
  },
  {
    text: "Examining AI’s dual role in cybersecurity, it highlights how AI improves defenses but also enables sophisticated cyberattacks like targeted phishing and synthetic media fraud This issue explores Ethereum blockchain, smart contracts, and Solidity programming, highlighting their role in revolutionizing decentralized applications and promoting transparency in digital transactions..",
  },
  {
    text: "Focused on AI innovations in gaming and smart homes, this edition discusses adaptive NPCs, dynamic narratives, and privacy/security challenges in AI-integrated living environments.",
  },
];

const colors = [
  "#070758",
  "#054097",
  "#0674ba",
  "#10a5d6",
  "#2ed6f3",
  "#69defa",
];

const OVERLAP_BUFFER = 100; // Smaller buffer for less overlap
const TRIGGER_RATIO = -1; // Trigger when 80% of text block passed

const MagazineScroller = () => {
  const stickyRef = useRef(null);
  const smallScreenRef = useRef(null);
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const [cardIdx, setCardIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = stickyRef.current;
      const container = containerRef.current;
      const smallScreen = smallScreenRef.current;
      if (!el || !container || !smallScreen) return;

      const stickyTop = el.getBoundingClientRect().top + window.scrollY;

      let currentIdx = 0;

      for (let i = 0; i < textRefs.current.length; i++) {
        const elText = textRefs.current[i];
        if (!elText) continue;

        const rect = elText.getBoundingClientRect();
        const textTop = rect.top + window.scrollY;
        const textHeight = rect.height;

        const triggerPoint = textTop + textHeight * TRIGGER_RATIO;

        if (stickyTop + OVERLAP_BUFFER >= triggerPoint) {
          currentIdx = i;
        }
      }

      setCardIdx(currentIdx);

      if (window.innerWidth <= 480) {
        el.style.transform = "none";
        el.style.marginLeft = "auto";
        smallScreen.style.backgroundColor = colors[currentIdx % colors.length];
        return;
      }

      if (currentIdx % 2 === 0) {
        el.style.transform = "skew(7deg, -5deg)";
        el.style.marginLeft = "30px";
      } else {
        el.style.transform = "skew(-7deg, 5deg)";
        el.style.marginLeft = "calc(60% + 50px)"; // pushed further right
      }

      smallScreen.style.backgroundColor = colors[currentIdx % colors.length];
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="container"
      ref={containerRef}
      style={{ paddingBottom: "400px" }}
    >
      <div className="rect" ref={stickyRef}>
        <div className="mag-browserbar">
          <div className="button dot1"></div>
          <div className="button dot2"></div>
          <div className="button dot3"></div>
        </div>
        <div
          className="small"
          ref={smallScreenRef}
          style={{
            backgroundImage: `url(${
              magazineImages[cardIdx % magazineImages.length]
            })`,
          }}
        ></div>
      </div>
      {magazineData.map((mag, idx) => (
        <div
          className={`text ${idx % 2 === 0 ? "right" : "left"}${
            idx === 0 ? " first" : ""
          }${idx === magazineData.length - 1 ? " last" : ""}`}
          key={idx}
          ref={(el) => (textRefs.current[idx] = el)}
        >
          <p>{mag.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MagazineScroller;
