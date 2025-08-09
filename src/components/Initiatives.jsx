
import React, { useEffect, useRef } from 'react';
import './Initiatives.css';

const initiativesData = [
  {
    id: 'card_1',
    title: 'International Research & Sponsored Projects',
    description:
      'Cross-border collaboration and funding in fostering innovation and Research',
    lottieSrc: '/animations/Man and robot with computers sitting together in workplace.json',
  },
  {
    id: 'card_2',
    title: 'Code For Cause',
    description: 'Code for Cause unites tech and NGOs to tackle social issues.',
    lottieSrc: '/animations/coding for cause.json',
  },
  {
    id: 'card_3',
    title: 'Code for Technology',
    description: 'Code for Technology empowers coding for leading tech giants.',
    lottieSrc: '/animations/Coding.json',
  },
  {
    id: 'card_4',
    title: 'Talk with Techies',
    description:
      'Engaging conversations with tech experts to inspire and inform.',
    lottieSrc: '/animations/Online Teaching.json',
  },
  {
    id: 'card_5',
    title: 'Career Pathways',
    description: 'Exploring pathways to internships and career opportunities.',
    lottieSrc: '/animations/career.json',
  },
  {
    id: 'card_6',
    title: 'Healthy Byte',
    description: 'Empowering you with essential skills for a healthier tomorrow.',
    lottieSrc: '/animations/Code typing concept.json',
  },
];

export default function Initiatives() {
  const containerRefs = useRef([]);

  useEffect(() => {
    // For each animation container, add event listeners to play/pause Lottie animation
    containerRefs.current.forEach((container) => {
      if (!container) return;
      const lottiePlayer = container.querySelector('lottie-player');
      if (!lottiePlayer) return;

      const handleMouseEnter = () => {
        lottiePlayer.play();
      };
      const handleMouseLeave = () => {
        lottiePlayer.stop();
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup function
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <>
      <header>
        <div>
          <h1>Our Initiatives</h1>
        </div>
      </header>
      <main>
        <ul
  id="cards"
  style={{ '--numcards': initiativesData.length }}
>

          {initiativesData.map(({ id, title, description, lottieSrc }, index) => (
            <li
              className="card"
              id={id}
              style={{ '--index': index + 1 }}
              key={id}
            >
              <div className="card__content">
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <p>
                    <a href="#top" className="btn btn--accent">
                      Learn More
                    </a>
                  </p>
                </div>
                <figure>
                  <div
                    className="animation-container"
                    ref={(el) => (containerRefs.current[index] = el)}
                  >
                    {/* Using the lottie-player web component */}
                    <lottie-player
                      src={lottieSrc}
                      background="transparent"
                      speed="1"
                      loop
                      autoplay
                    />
                  </div>
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
