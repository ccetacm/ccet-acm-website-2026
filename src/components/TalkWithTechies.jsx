import React, { useState, useEffect, useRef, memo } from 'react';
import styles from './TalkWithTechies.module.css';

// --- Note: Ensure these image paths are correct for your project structure ---
// For example, if App.jsx is in 'src/components' and images are in 'src/images',
// the path would be '../images/...'
// import ev1 from '../images/event4.jpg';
// import ev2 from '../images/event5.jpg';


// --- DATA --- //
const STATS_DATA = [
    { target: 500, suffix: "+", label: "Tech Experts" },
    { target: 1000, suffix: "+", label: "Sessions Conducted" },
    { target: 25, suffix: "K+", label: "Students Mentored" },
];

const FEATURES_DATA = [
    { 
        title: "1:1 Mentorship", 
        description: "Personal guidance from industry veterans",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={styles.featureIconSvg} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    { 
        title: "Expert Network", 
        description: "Connect with leaders from top tech companies",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={styles.featureIconSvg} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    },
    { 
        title: "Career Insights", 
        description: "Get insider knowledge about tech careers",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={styles.featureIconSvg} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    { 
        title: "Skill Growth", 
        description: "Accelerate your learning journey",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={styles.featureIconSvg} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    },
];

const SESSIONS_DATA = [
    {
        speaker: "Dr. Suresh Kumar",
        title: "Professor and Head, Department of Ophthalmology",
        topic: "Computer Vision Syndrome (COVID Era Perspectives)",
        tags: ["AI", "Machine Learning", "Career"],
        date: "May 27, 2022",
        attendees: 75,
        imgSrc: "/TalkWithTechies/UpcomingSessions1.jpg"
    },
    {
        speaker: "Mr Saurabh Pratap Singh",
        title: "Assistant Commissioner, Income Tax, New Delhi",
        topic: "CCET ACM Student Chapter presents Invited Talk 2021",
        tags: ["Architecture", "System Design", "Backend"],
        date: "Aug. 31, 2021",
        attendees: 30,
        imgSrc: "/TalkWithTechies/UpcomingSessions2.jpg"
    }
];

// --- HOOKS & UTILITY COMPONENTS --- //

const useScrollAnimation = (options = { threshold: 0.15, root: null, rootMargin: "0px" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
};

const ScrollAnimated = memo(({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${styles.scrollAnimate} ${isVisible ? styles.isVisible : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
});
ScrollAnimated.displayName = 'ScrollAnimated';


const progressDone = (c, t) => c >= t;

const AnimatedCounter = memo(({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollAnimation();
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    let startTs = null;
    const duration = 1200;

    const step = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const value = Math.round(progress * target);
      setCount(value);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }
    };
  }, [isVisible, target]);

  return (
    <p ref={ref} className={styles.statNumber}>
      {count}{progressDone(count, target) ? suffix : ""}
    </p>
  );
});
AnimatedCounter.displayName = 'AnimatedCounter';


const TypingEffect = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const phrases = ["Shape Your Tech Future", "Learn from the Best", "Connect with Tech Leaders"];
    
    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];
            const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
            setText(updatedText);
            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };
        const typingSpeed = isDeleting ? 100 : 150;
        const ticker = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(ticker);
    }, [text, isDeleting, loopNum, phrases]);

    return <span>{text}</span>;
};

// --- REUSABLE UI COMPONENTS --- //

const AnimatedHeading = ({ text }) => (
    <h1 className={styles.mainHeading}>
        {text.split('').map((char, index) => (
            <span key={index} className={styles.letterAnimate} style={{ animationDelay: `${index * 0.05}s` }}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))}
    </h1>
);

const StatCard = ({ target, suffix, label }) => (
    <div className={styles.statCard}>
        <AnimatedCounter target={target} suffix={suffix} />
        <p className={styles.statLabel}>{label}</p>
    </div>
);

const FeatureCard = ({ icon, title, description }) => (
    <div className={styles.featureCard}>
        <div className={styles.featureIconWrapper}>{icon}</div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
    </div>
);

const SessionCard = ({ session }) => (
    <div className={styles.sessionCard}>
        <img src={session.imgSrc} alt={session.speaker} className={styles.sessionImage} />
        <div className={styles.sessionContent}>
            <h3 className={styles.sessionSpeaker}>{session.speaker}</h3>
            <p className={styles.sessionTitle}>{session.title}</p>
            <p className={styles.sessionTopic}>{session.topic}</p>
            <div className={styles.tagsContainer}>
                {session.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
            </div>
            <div className={styles.sessionMeta}>
                <p>📅 {session.date}</p>
                <p>👥 {session.attendees} attendees</p>
            </div>
            <a href="#" className={styles.seeMoreLink}>See More →</a>
        </div>
    </div>
);

// --- PAGE SECTIONS --- //

const HeroSection = () => (
    <section className={styles.heroBg}>
        <div className={styles.heroWrapper}>
            <AnimatedHeading text="Talk with Techies" />
            <ScrollAnimated delay={0.1}>
                <h2 className={styles.subHeading}>
                    <TypingEffect /><span className={styles.typingCursor}></span>
                </h2>
            </ScrollAnimated>
            <div className={styles.statsGrid}>
                {STATS_DATA.map((stat, index) => (
                    <div key={stat.label} className={styles.staggeredLoadIn} style={{ animationDelay: `${0.4 + index * 0.15}s` }}>
                        <StatCard {...stat} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const WhySection = () => (
    <section className={styles.section}>
        <div className={styles.container}>
            <ScrollAnimated>
                <h2 className={styles.sectionHeading}>Why Talk with Techies?</h2>
            </ScrollAnimated>
            <div className={styles.featuresGrid}>
                {FEATURES_DATA.map((feature, index) => (
                    <ScrollAnimated key={feature.title} delay={index * 0.1}>
                        <FeatureCard {...feature} />
                    </ScrollAnimated>
                ))}
            </div>
        </div>
    </section>
);

const UpcomingSessionsSection = () => (
    <section className={styles.sectionGray}>
        <div className={styles.container}>
            <ScrollAnimated>
                <h2 className={styles.sectionHeading}>Upcoming Sessions</h2>
            </ScrollAnimated>
            <div className={styles.sessionsGrid}>
                {SESSIONS_DATA.map((session, index) => (
                    <ScrollAnimated key={session.topic} delay={index * 0.1}>
                        <SessionCard session={session} />
                    </ScrollAnimated>
                ))}
            </div>
        </div>
    </section>
);

// --- MAIN APP COMPONENT --- //
export default function App() {
  return (
    <main className={styles.pageWrapper}>
      <HeroSection />
      <WhySection />
      <UpcomingSessionsSection />
    </main>
  );
}

