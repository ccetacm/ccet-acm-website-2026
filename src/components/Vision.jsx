import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import Footer from './Footer'; 
import './Vision.css';

function App() {
  return (
    <div className="App">
  
      {/* === Stats Section === */}
      <motion.section
        className="stats-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="stat-box">
          <div className="icon">📝</div>
          <div className="stat-number">
            <CountUp end={2015} duration={2} separator="" />
          </div>
          <div className="stat-label">Year of Establishment</div>
        </div>
        <div className="stat-box">
          <div className="icon">🧑‍🎓</div>
          <div className="stat-number">
            <CountUp end={113} duration={2} />
          </div>
          <div className="stat-label">Number of Students</div>
        </div>
        <div className="stat-box">
          <div className="icon">📰</div>
          <div className="stat-number">
            <CountUp end={97} duration={2} />
          </div>
          <div className="stat-label">Events</div>
        </div>
      </motion.section>

      {/* === Vision Section === */}
      <motion.section
        className="vision-card"
        id="vision"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h2 className="vision-heading">Our Vision</motion.h2>

        <motion.p className="vision-text">
          To produce self-motivated and globally competent technocrats equipped with computing, innovation, and human values for ever changing world and shape them towards serving the society.
        </motion.p>

        <motion.div className="button-group">
          <motion.button className="join-button" whileHover={{ scale: 1.1 }}>
            Join Our Community
          </motion.button>
          <motion.button className="learn-button" whileHover={{ scale: 1.1 }}>
            Learn More →
          </motion.button>
        </motion.div>
      </motion.section>

    <Footer />
    </div>
  );
}

export default App;
