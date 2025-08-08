import React, { useState, useEffect, useRef } from "react";
import "./testimonials.css";

// Import all testimonial images
import jaiveerImage from "../assets/testimonials/jaiveer.jpg";
import ritikaImage from "../assets/testimonials/ritika.jpg";
import satvikImage from "../assets/testimonials/satvik.jpg";
import samritiImage from "../assets/testimonials/samriti.jpg";
import sanatanImage from "../assets/testimonials/sanatan.jpg";
import simarImage from "../assets/testimonials/simar.jpg";
import dhruvImage from "../assets/testimonials/dhruv.jpg";
import khushiImage from "../assets/testimonials/khushi.jpg";
import rohanImage from "../assets/testimonials/rohan.jpg";
import bhavyaImage from "../assets/testimonials/bhavya.jpg";
import sakshamImage from "../assets/testimonials/saksham.jpg";
import eshmeetImage from "../assets/testimonials/eshmeet.jpg";
import kritinImage from "../assets/testimonials/kritin.jpg";
import ravinaImage from "../assets/testimonials/ravina.jpg";
import vanshikaImage from "../assets/testimonials/vanshika.jpg";
import aanshiImage from "../assets/testimonials/aanshi.jpg";
import sahilImage from "../assets/testimonials/sahil.jpg";
import bhumikaImage from "../assets/testimonials/bhumika.jpg";
import maanitImage from "../assets/testimonials/maanit.jpg";
import harshitaImage from "../assets/testimonials/harshita.jpg";
import shivamImage from "../assets/testimonials/shivam.jpg";
import mehakImage from "../assets/testimonials/mehak.jpg";
import aadityaImage from "../assets/testimonials/aditya.jpg";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  const testimonials = [
    {
      role: "Chairperson",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Jaiveer Singh",
      position: "Chairperson, CCET ACM",
      image: jaiveerImage,
    },
    {
      role: "Chairperson",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Ritika Kalia",
      position: "Chairperson, CCET ACM",
      image: ritikaImage,
    },
    {
      role: "Vice Chairperson",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Satvik Pathak",
      position: "Vice Chairperson, CCET ACM",
      image: satvikImage,
    },
    {
      role: "Vice Chairperson",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Samriti Sharma",
      position: "Vice Chairperson, CCET ACM",
      image: samritiImage,
    },
    {
      role: "Secretary",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Sanatan Sharma",
      position: "Secretary, CCET ACM",
      image: sanatanImage,
    },
    {
      role: "Secretary",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Simar Atwal",
      position: "Secretary, CCET ACM",
      image: simarImage,
    },
    {
      role: "Treasurer",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Dhruv Bali",
      position: "Treasurer, CCET ACM",
      image: dhruvImage,
    },
    {
      role: "Treasurer",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Khushi Mittal",
      position: "Treasurer, CCET ACM",
      image: khushiImage,
    },
    {
      role: "Web Master",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Rohan",
      position: "Web Master, CCET ACM",
      image: rohanImage,
    },
    {
      role: "Web Master",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Bhavya",
      position: "Web Master",
      image: bhavyaImage,
    },
    {
      role: "Design Head",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Saksham",
      position: "Design Head, CCET ACM",
      image: sakshamImage,
    },
    {
      role: "Design Head",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Eshmeet Singh Bachu",
      position: "Design Head, CCET ACM",
      image: eshmeetImage,
    },
    {
      role: "Executive Member Head",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Kritin",
      position: "Executive Member Head, CCET ACM",
      image: kritinImage,
    },
    {
      role: "Executive Member Head",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Ravina Mittal",
      position: "Executive Member Head, CCET ACM",
      image: ravinaImage,
    },
    {
      role: "Editorial Head",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Vanshika Singla",
      position: "Editorial Head, CCET ACM",
      image: vanshikaImage,
    },
    {
      role: "Editorial Head",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Aanshi Bansal",
      position: "Editorial Head, CCET ACM",
      image: aanshiImage,
    },
    {
      role: "Social Media Manager",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Sahil Kumar",
      position: "Social Media Manager, CCET ACM",
      image: sahilImage,
    },
    {
      role: "Social Media Manager",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Bhumika Bijlwan",
      position: "Social Media Manager, CCET ACM",
      image: bhumikaImage,
    },
    {
      role: "External PR Head",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Maanit",
      position: "External PR Head, CCET ACM",
      image: maanitImage,
    },
    {
      role: "External PR Head",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Harshita Sharma",
      position: "External PR Head, CCET ACM",
      image: harshitaImage,
    },
    {
      role: "Membership Chair",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Shivam Vats",
      position: "Membership Chair, CCET ACM",
      image: shivamImage,
    },
    {
      role: "Membership Chair",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Mehak Negi",
      position: "Membership Chair, CCET ACM",
      image: mehakImage,
    },
    {
      role: "Event Manager",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Aaditya",
      position: "Event Manager, CCET ACM",
      image: aadityaImage,
    },
    {
      role: "Event Manager",
      text: "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      name: "Simar Atwal",
      position: "Event Manager, CCET ACM",
      image: simarImage,
    },
  ];

  const totalSlides = testimonials.length;

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const translateX = -newIndex * 100;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${translateX}%)`;
    }

    setCurrentIndex(newIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    const newIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(newIndex);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel(newIndex);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    updateCarousel(index);
  };

  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 7000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    document.addEventListener("keydown", handleKeyDown);
    startAutoPlay();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      stopAutoPlay();
    };
  }, [currentIndex, isAnimating]);

  // Touch/Swipe support
  useEffect(() => {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      if (!isDragging || isAnimating) return;

      const diffX = startX - currentX;
      const threshold = 80;

      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }

      isDragging = false;
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener("touchstart", handleTouchStart);
      track.addEventListener("touchmove", handleTouchMove);
      track.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (track) {
        track.removeEventListener("touchstart", handleTouchStart);
        track.removeEventListener("touchmove", handleTouchMove);
        track.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentIndex, isAnimating]);

  return (
    <div className="testimonials-container">
      <div className="header">
        <h1 className="title">Our Testimonials</h1>
        <p className="subtitle">
          Discover how ACM has transformed careers and fostered innovation
          through the voices of our community members.
        </p>
      </div>

      <div
        className="carousel-container"
        ref={containerRef}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div className="carousel-wrapper">
          <button
            className="nav-button prev"
            aria-label="Previous testimonial"
            onClick={prevSlide}
          >
            ‹
          </button>

          <div className="carousel-track" ref={trackRef}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`carousel-slide ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <div className="role-badge">{testimonial.role}</div>
                <div className="quote-mark">"</div>

                <div className="comment-box">
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>

                <div className="author">
                  <div className="author-avatar">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="student-image"
                    />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="nav-button next"
            aria-label="Next testimonial"
            onClick={nextSlide}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
