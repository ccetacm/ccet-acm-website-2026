"use client";

import { useState, useEffect } from "react";
import "./MagazineScroller.css"; // Scoped CSS

export default function CircleCards() {
  const trendingTopics = [
    {
      title: "Transportation Revolution",
      images: [
        { img: "/magzine1.jpg" }, // Updated to use magazine naming convention
        { img: "/magzine2.jpg" },
        { img: "/magzine3.jpg" },
        { img: "/magzine4.jpg" },
        { img: "/magzine5.jpg" },
      ],
    },
    {
      title: "Tech Innovation Hub",
      images: [
        { img: "/magzine1.jpg" }, // Updated to use magazine naming convention
        { img: "/magzine2.jpg" },
        { img: "/magzine3.jpg" },
        { img: "/magzine4.jpg" },
        { img: "/magzine5.jpg" },
      ],
    },
    {
      title: "Sustainable Living",
      images: [
        { img: "/magzine1.jpg" }, // Updated to use magazine naming convention
        { img: "/magzine2.jpg" },
        { img: "/magzine3.jpg" },
        { img: "/magzine4.jpg" },
        { img: "/magzine5.jpg" },
      ],
    },
  ];

  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [visibleCircles, setVisibleCircles] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = trendingTopics[currentTopicIndex].title;
    let timeoutId;

    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 100); // 100ms per character
      } else {
        // Finished typing, wait 3 seconds then start erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      }
    } else {
      // Erasing effect
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // 50ms per character (faster erasing)
      } else {
        // Finished erasing, move to next topic
        setCurrentTopicIndex((prev) => (prev + 1) % trendingTopics.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTopicIndex]);

  useEffect(() => {
    const animateCircles = () => {
      setIsAnimating(true);
      setVisibleCircles([]);

      // Animate circles one by one
      trendingTopics[currentTopicIndex].images.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCircles((prev) => [...prev, index]);
        }, index * 200); // 200ms delay between each circle
      });

      setTimeout(() => {
        setIsAnimating(false);
      }, trendingTopics[currentTopicIndex].images.length * 200);
    };

    // Start animation when topic changes
    animateCircles();
  }, [currentTopicIndex]);

  const handleMoreClick = () => {
    alert(`View more from ${trendingTopics[currentTopicIndex].title}!`);
  };

  const currentTopic = trendingTopics[currentTopicIndex];

  return (
      <div className="magazine-scroller-wrapper">
      <h1 className="sections">DIGITAL OUTLET</h1>
      <div className="trending-subtitle">
        <div className="trending-box">
          <div className="trending-text">
            <span className="trending-label">TRENDING:</span>
            <span className="typewriter-text">{displayedText}</span>
          </div>
        </div>
      </div>
      <div className="circle-cards-container">
        <ol>
          {currentTopic.images.map((step, index) => (
            <li
              key={`${currentTopicIndex}-${index}`}
              className={`circle-item ${
                visibleCircles.includes(index) ? "visible" : "hidden"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="circle-img">
                <img
                  src={step.img || "/placeholder.jpg"}
                  alt={`${currentTopic.title} ${index + 1}`}
                />
              </div>
            </li>
          ))}
        </ol>
        <button
          className="more-button"
          onClick={handleMoreClick}
          aria-label="View more content"
        >
          More
        </button>
      </div>
    </div>
  );
}
