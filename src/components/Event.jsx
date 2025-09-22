import React, { useEffect, useRef } from "react";
import "./Event.css";

// import img1 from "../assets/1 (1).jpg";
// import img2 from "../assets/1 (2).jpg";
// import img3 from "../assets/1 (3).jpg";
// import img4 from "../assets/1 (4).jpg";
// import img5 from "../assets/1 (5).jpg";
// import img6 from "../assets/1 (6).jpg";
// import img7 from "../assets/1 (7).jpg";
// import img8 from "../assets/1 (8).jpg";
// import img9 from "../assets/1 (9).JPG";

const imageFiles = [  "/1 (1).jpg",
  "/1 (2).jpg",
  "/1 (3).jpg",
  "/1 (4).jpg",
  "/1 (5).jpg",
  "/1 (6).jpg",
  "/1 (7).jpg",
  "/1 (8).jpg",
  "/1 (9).JPG",];

export default function Event() {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const carousel = carouselRef.current;
    if (!container || !carousel) return;

    let items = Array.from(carousel.querySelectorAll("li"));
    const origCount = items.length;
    let gap = parseFloat(getComputedStyle(carousel).gap) || 20;
    let visibleCount = window.innerWidth < 768 ? 1 : 3;
    const cloneCount = visibleCount;

    // Clone items at start and end
    for (let i = 0; i < cloneCount; i++) {
      carousel.appendChild(items[i].cloneNode(true));
      carousel.insertBefore(
        items[origCount - 1 - i].cloneNode(true),
        carousel.firstChild
      );
    }

    items = Array.from(carousel.querySelectorAll("li"));
    let itemWidth = 0;
    let intervalId = null;

    function calculateWidth() {
      gap = parseFloat(getComputedStyle(carousel).gap) || 20;
      visibleCount = window.innerWidth < 768 ? 1 : 3;
      const rect = items[0]?.getBoundingClientRect();
      itemWidth = (rect ? rect.width : 300) + gap;
    }

    function setInitialScroll() {
      carousel.scrollLeft = itemWidth * cloneCount;
    }

    function setActive() {
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      let closestIndex = 0;
      let closestDist = Infinity;
      items.forEach((it, idx) => {
        const rect = it.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const dist = Math.abs(centerX - itemCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = idx;
        }
      });

      items.forEach((it) => it.classList.remove("active", "left", "right"));
      const leftIndex = closestIndex - 1;
      const rightIndex = closestIndex + 1;

      if (items[closestIndex]) items[closestIndex].classList.add("active");
      if (items[leftIndex]) items[leftIndex].classList.add("left");
      if (items[rightIndex]) items[rightIndex].classList.add("right");
    }

    function loopScroll() {
      // Forward reset
      if (carousel.scrollLeft >= itemWidth * (origCount + cloneCount)) {
        carousel.scrollLeft -= itemWidth * origCount;
      }
      // Backward reset
      else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft += itemWidth * origCount;
      }
      setActive();
    }

    Promise.all(
      Array.from(carousel.querySelectorAll("img")).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve();
            else img.onload = resolve;
          })
      )
    ).then(() => {
      calculateWidth();
      setInitialScroll();
      setActive();

      intervalId = setInterval(() => {
        carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
        setTimeout(loopScroll, 400); 
      }, 3000);

      window.addEventListener("resize", () => {
        calculateWidth();
        setInitialScroll();
        setActive();
      });
    });

    return () => {
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  return (
    <div >
      <h2 className="event-heading">Events</h2>
      <div className="carousel-viewport" ref={containerRef}>
        <ul className="carousel" ref={carouselRef}>
          {imageFiles.map((file, i) => (
            <li key={i}>
              <img src={file} alt={`Cover ${i + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
