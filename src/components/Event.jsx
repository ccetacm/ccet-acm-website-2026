import React, { useEffect, useRef } from 'react';
import './Event.css';

// Import images directly from src/assets
import img1 from '../assets/1 (1).jpg';
import img2 from '../assets/1 (2).jpg';
import img3 from '../assets/1 (3).jpg';
import img4 from '../assets/1 (4).jpg';
import img5 from '../assets/1 (5).jpg';
import img6 from '../assets/1 (6).jpg';
import img7 from '../assets/1 (7).jpg';
import img8 from '../assets/1 (8).jpg';
import img9 from '../assets/1 (9).JPG';

const imageFiles = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Event() {
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const container = containerRef.current;

    const items = Array.from(carousel.querySelectorAll('li'));
    const itemCount = items.length;
    const gap = 32;
    const itemWidth = items[0]?.offsetWidth + gap;
    const cloneCount = 2;

    // Clone for infinite effect
    for (let i = 0; i < cloneCount; i++) {
      carousel.appendChild(items[i].cloneNode(true));
      carousel.insertBefore(items[itemCount - 1 - i].cloneNode(true), carousel.firstChild);
    }

    const allItems = carousel.querySelectorAll('li');

    function setInitialScroll() {
      container.scrollLeft = itemWidth * cloneCount;
    }

    function setActive() {
      const containerRect = container.getBoundingClientRect();
      const center = containerRect.left + containerRect.width / 2;
      let closest = null;
      let closestDist = Infinity;

      allItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const dist = Math.abs(center - itemCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = item;
        }
      });

      allItems.forEach(item => item.classList.remove('active'));
      if (closest) closest.classList.add('active');
    }

    container.addEventListener('scroll', () => {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = itemWidth * itemCount;
      } else if (container.scrollLeft >= itemWidth * (itemCount + cloneCount)) {
        container.scrollLeft = itemWidth * cloneCount;
      }
      setActive();
    });

    setInitialScroll();
    setActive();
    setTimeout(setActive, 100);

    const interval = setInterval(() => {
      container.scrollLeft += itemWidth;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container" ref={containerRef}>
      <ul className="carousel" ref={carouselRef}>
        {imageFiles.map((file, index) => (
          <li key={index}>
            <img src={file} alt={`Cover ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Event;
