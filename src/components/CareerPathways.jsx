import React, { useState, useEffect, useRef, memo } from 'react';
import styles from './CareerPathways.module.css';

// --- DATA --- //
const STATS_DATA = [
    { target: 5000, suffix: "+", label: "Students Placed" },
    { target: 95, suffix: "%", label: "Placement Rate" },
    { target: 100, suffix: "+", label: "Partner Companies" },
];

const FEATURES_DATA = [
    {
        title: "Industry Internships",
        description: "Gain real-world experience with leading tech companies",
        icon: <span style={{ fontSize: '2.5rem' }}>💼</span>
    },
    {
        title: "Skill Development",
        description: "Master in-demand technical and soft skills",
        icon: <span style={{ fontSize: '2.5rem' }}>🎓</span>
    },
    {
        title: "Mentorship Program",
        description: "Learn from experienced industry professionals",
        icon: <span style={{ fontSize: '2.5rem' }}>⭐</span>
    },
    {
        title: "Technical Training",
        description: "Hands-on training in cutting-edge technologies",
        icon: <span style={{ fontSize: '2.5rem' }}>💻</span>
    },
    {
        title: "Networking Events",
        description: "Connect with industry leaders and peers",
        icon: <span style={{ fontSize: '2.5rem' }}>👥</span>
    },
    {
        title: "Career Guidance",
        description: "Personalized career planning and support",
        icon: <span style={{ fontSize: '2.5rem' }}>📚</span>
    },
];

const SESSIONS_DATA = [
    {
        id: 1,
        speaker: "Google Summer of Code",
        title: "Workshop",
        topic: "CCET- ACM and ACM-W student chapter is organizing an event Talk Regarding Google Summer of Code under AICTE SPICE Scheme.",
        tags: ["Workshop"],
        date: "Dec. 28, 2022",
        attendees: 120,
        imgSrc: "/CareerPathways/googlesoc.jpg",
        learnMore: {
            type: "content",
            content: "",
            details: "Comprehensive workshop on Google Summer of Code application process."
        }
    },
    {
        id: 2,
        speaker: "Technology Use and Integration",
        title: "Workshop",
        topic: "One Day Online Workshop on National Education Policy (NEP-2020) on the Topic - Technology Use and Integration",
        tags: ["Workshop"],
        date: "Dec. 27, 2022",
        attendees: 85,
        imgSrc: "/CareerPathways/Technology.jpg",
        learnMore: {
            type: "content",
            content: "",
            details: "Workshop focusing on integrating technology in education."
        }
    },
    {
        id: 3,
        speaker: "Meet the Mentor",
        title: "Talk",
        topic: "CASC have organized a meeting with mentors with CCET faculty in order to learn more about the curriculum and technology Why connect with a mentor.",
        tags: ["Talk"],
        date: "Feb. 12, 2022",
        attendees: 150,
        imgSrc: "/CareerPathways/meetthementor.jpg",
        learnMore: {
            type: "content",
            content: "",
            details: "Interactive session connecting students with industry mentors."
        }
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
    const phrases = ["Building Future Leaders", "Empowering Tech Careers", "Creating Success Stories"];

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

// Updated SessionCard with only date (no audience)
const SessionCard = ({ session }) => {
    const handleLearnMoreClick = () => {
        console.log('Learn more clicked for:', session.speaker);
    };

    return (
        <div className={styles.eventCard}>
            <div className={styles.eventImageSection}>
                <div className={styles.eventPoster}>
                    <img 
                        src={session.imgSrc} 
                        alt={session.speaker}
                        className={styles.eventPosterImg}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <div className={styles.eventPosterFallback}>
                        <h4>{session.speaker}</h4>
                        <p>{session.title}</p>
                    </div>
                </div>
                
                <span className={styles.eventTag}>{session.title}</span>
                
                {/* Only Date - No Audience */}
                <div className={styles.eventMeta}>
                    <div className={styles.eventDate}>
                        <span>📅</span>
                        <span>{session.date}</span>
                    </div>
                </div>
            </div>
            
            <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{session.speaker}</h3>
                <p className={styles.eventTopic}>{session.topic}</p>
                
                <button
                    className={styles.learnMoreBtn}
                    onClick={handleLearnMoreClick}
                >
                    Learn More →
                </button>
            </div>
        </div>
    );
};

// --- PAGE SECTIONS --- //

const HeroSection = () => (
    <section className={styles.heroBg}>
        <div className={styles.heroWrapper}>
            <AnimatedHeading text="Career Initiatives" />
            <ScrollAnimated delay={0.1}>
                <h2 className={styles.subHeading}>
                    <TypingEffect /><span className={styles.typingCursor}></span>
                </h2>
            </ScrollAnimated>
            <ScrollAnimated delay={0.2}>
                <p className={styles.heroDescription}>
                    Empowering students with the skills, knowledge, and connections for successful tech careers
                </p>
            </ScrollAnimated>
            
            {/* Stats in Hero Section - Like Code for Cause */}
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

const ProgramsSection = () => (
    <section className={styles.section}>
        <div className={styles.container}>
            <ScrollAnimated>
                <h2 className={styles.sectionHeading}>Our Programs</h2>
                <p className={styles.sectionDescription}>
                    Comprehensive initiatives designed to launch successful tech careers
                </p>
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

const UpcomingProgramsSection = () => (
    <section className={styles.sectionGray}>
        <div className={styles.container}>
            <ScrollAnimated>
                <h2 className={styles.sectionHeading}>Upcoming Programs</h2>
            </ScrollAnimated>
            <div className={styles.eventsGrid}>
                {SESSIONS_DATA.map((session, index) => (
                    <ScrollAnimated key={session.id} delay={index * 0.1}>
                        <SessionCard session={session} />
                    </ScrollAnimated>
                ))}
            </div>
        </div>
    </section>
);

const CTASection = () => (
    <section className={styles.ctaSection}>
        <div className={styles.container}>
            <div className={styles.ctaCard}>
                <ScrollAnimated>
                    <h2 className={styles.ctaHeading}>Ready to Start Your Journey?</h2>
                    <p className={styles.ctaDescription}>
                        Join our comprehensive career development program and take the first step towards your dream tech career.
                    </p>
                </ScrollAnimated>
                <ScrollAnimated delay={0.2}>
                    <button className={styles.ctaButton}>
                        Get Started →
                    </button>
                </ScrollAnimated>
            </div>
        </div>
    </section>
);

// --- MAIN APP COMPONENT --- //
export default function App() {
    return (
        <main className={styles.pageWrapper}>
            <HeroSection />
            <ProgramsSection />
            <UpcomingProgramsSection />
            <CTASection />
        </main>
    );
}
