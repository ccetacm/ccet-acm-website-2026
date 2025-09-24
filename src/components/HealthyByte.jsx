import React, { useState, useEffect, useRef, memo } from 'react';
import styles from './HealthyByte.module.css';

// --- DATA --- //
const STATS_DATA = [
    { target: 1500, suffix: "+", label: "Students Empowered" },
    { target: 100, suffix: "+", label: "Skill-Building Sessions" },
    { target: 20, suffix: "+", label: "Experts & Mentors" },
];


  const FEATURES_DATA = [
     {
         title: "Coding for Growth",
         description: "Sharpen your programming skills with hands-on projects and challenges.",
         icon: <span style={{ fontSize: '2.5rem' }}>💻</span>
     },
        {
        title: "Future-Ready Skills",
        description: "Prepare for tomorrow with trending tech skills and lifelong learning habits.",
        icon: <span style={{ fontSize: '2.5rem' }}>🚀</span>
    },

    {
         title: "Skill & Wellness Mix",
         description: "Sessions that combine tech learning with personal well-being practices.",
         icon: <span style={{ fontSize: '2.5rem' }}>⚡</span>
     },
     {
         title: "Community Learning",
         description: "Collaborate, code, and grow together while promoting a balanced lifestyle.",
         icon: <span style={{ fontSize: '2.5rem' }}>🤝</span>
     },
 ];


const SESSIONS_DATA = [
    {
        id: 1,
        speaker: "Clean Code Habits",
        title: "Session",
        topic: "A focused session by CCET ACM on developing maintainable and efficient coding habits, teaching students how to write clean, readable, and high-quality code.",
        tags: ["CleanCode","Quality", "Maintainability"],
        date: "18 July, 2024",
        attendees: 70,
        imgSrc: "/HealthyByte/clean.png",
        learnMore: {
            type: "content",
            content: "",
            details: "Students learned coding best practices, improving readability, maintainability, and overall development skills."
        }
    },
    {
        id: 2,
        speaker: "Code & Conquer",
        title: "Workshop",
        topic: "An engaging CCET ACM workshop where students honed their problem-solving and coding skills through practical challenges and algorithmic exercises.",
        date: "12 March, 2024",
        attendees: 90,
        imgSrc: "/HealthyByte/connr.png",
        tags: ["Algorithms", "Challenges", "Problem-Solving"],
        learnMore: {
            type: "content",
            content: "",
            details: "Interactive coding workshop focusing on enhancing students' problem-solving abilities and programming efficiency."
        }
    },
    {
        id: 3,
        speaker: "Mastering Git & GitHub",
        title: "Workshop",
        topic: " ACM organized an interactive session on Git & GitHub, guiding students on version control, collaboration, and managing real-world software projects effectively.",
        tags: ["GitHub", "Versioning", "Collaboration"],
        date: "05 May, 2024",
        attendees: 120,
        imgSrc: "/HealthyByte/git.png",
        learnMore: {
            type: "content",
            content: "",
            details: "Students learned how to collaborate on projects using GitHub and apply version control best practices."
        }
    },
    
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
    const phrases = ["Fuel Your Body, Empower Your Mind",
                     "Wellness for a Better Tomorrow"];

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
    {/* Image section */}
    <div className={styles.sessionImageSection}>
      <div className={styles.sessionPoster}>
        <img
          src={session.imgSrc}
          alt={session.speaker}
          className={styles.sessionPosterImg}
        />
      </div>

      <div className={styles.sessionLabel}>{session.title}</div>

      <div className={styles.sessionMeta}>
        <div className={styles.sessionDate}>📅 {session.date}</div>
        <div className={styles.sessionAttendees}>
          👥 {session.attendees} attendees
        </div>
      </div>
    </div>

    {/* Content */}
    <div className={styles.sessionContent}>
      <h3 className={styles.sessionSpeaker}>{session.speaker}</h3>
      <p className={styles.sessionTopic}>{session.topic}</p>
      <div className={styles.tagsContainer}>
        {session.tags?.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <button className={styles.sessionBtn}>Learn More →</button>
    </div>
  </div>
);



// --- PAGE SECTIONS --- //

const HeroSection = () => (
    <section className={styles.heroBg}>
        <div className={styles.heroWrapper}>
            <AnimatedHeading text="Healthy Byte" />
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
                <h2 className={styles.sectionHeading}>Why Healthy byte?</h2>
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
                <h2 className={styles.sectionHeading}>Past Healthy Byte Sessions</h2>
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