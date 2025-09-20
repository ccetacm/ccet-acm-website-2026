import React, { useState, useEffect, useRef, memo } from 'react';
import styles from './CodeforCause.module.css';

// Import images
import hourofcodeImg from '/CodeforCause/hourofcode.jpg';
import azadikerangImg from '/CodeforCause/azadikerang.jpg';
import hackoberfestImg from '/CodeforCause/hackoberfest.jpg';

// --- DATA --- //
const STATS_DATA = [
    { target: 1000, suffix: "+", label: "Students Impacted" },
    { target: 50, suffix: "+", label: "Projects Completed" },
    { target: 30, suffix: "+", label: "Partner Organizations" },
];

const FEATURES_DATA = [
    {
        title: "Social Impact",
        description: "Creating technology solutions for social causes",
        icon: <span style={{ fontSize: '2.5rem' }}>💙</span>
    },
    {
        title: "Global Community",
        description: "Connect with developers worldwide",
        icon: <span style={{ fontSize: '2.5rem' }}>🌐</span>
    },
    {
        title: "Learning Resources",
        description: "Access to workshops and mentorship",
        icon: <span style={{ fontSize: '2.5rem' }}>📚</span>
    },
    {
        title: "Recognition",
        description: "Awards and certificates for contributions",
        icon: <span style={{ fontSize: '2.5rem' }}>🏆</span>
    },
];

const SESSIONS_DATA = [
    {
        id: 1,
        speaker: "Hour of Code",
        title: "Workshop",
        topic: "On December 9th, 2023, CCET ACM and ACM-W orchestrated an Hour of Code event, a compelling initiative coinciding with Computer Science Education Week.",
        tags: ["Workshop"],
        date: "Dec. 09, 2023",
        attendees: 80,
        imgSrc: hourofcodeImg,
        learnMore: {
            type: "pdf",
            content: "/pdfs/hour-of-code-details.pdf",
            details: "This comprehensive workshop covered fundamental programming concepts."
        }
    },
    {
        id: 2,
        speaker: "Azadi Ke Rang",
        title: "Competition",
        topic: "CCET ACM & ACM-W student chapter on occasion of Azadi ka amrit mahotsav is conducting a poster design contest Azadi Ke Rang to gear up the students.",
        tags: ["Competition"],
        date: "Aug. 15, 2023",
        attendees: 150,
        imgSrc: azadikerangImg,
        learnMore: {
            type: "content",
            content: "",
            details: "A creative poster design competition celebrating India's independence."
        }
    },
    {
        id: 3,
        speaker: "Hackoberfest",
        title: "Workshop",
        topic: "On October 6, 2023, the CCET ACM and ACM-W student chapters hosted a highly informative event titled - Introduction to Hacktoberfest 2023.",
        tags: ["Workshop"],
        date: "Oct. 06, 2023",
        attendees: 120,
        imgSrc: hackoberfestImg,
        learnMore: {
            type: "link",
            content: "https://hacktoberfest.com",
            details: "An introduction to the global Hacktoberfest initiative."
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
    const phrases = ["Empowering Change Through Code", "Making a Difference", "Join the Movement"];

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

// Updated SessionCard component with uniform Learn More button
const SessionCard = ({ session }) => {
    const handleLearnMoreClick = () => {
        if (session.learnMore.type === 'pdf') {
            window.open(session.learnMore.content, '_blank');
        } else if (session.learnMore.type === 'link') {
            window.open(session.learnMore.content, '_blank');
        } else if (session.learnMore.type === 'content') {
            console.log('Learn more clicked for:', session.speaker);
            // You can add custom logic here - maybe open a modal or navigate to details page
        }
    };

    return (
        <div className={styles.eventCard}>
            <div className={styles.eventImageSection}>
                {/* Poster/Image Container */}
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
                    {/* Fallback gradient */}
                    <div className={styles.eventPosterFallback}>
                        <h4>{session.speaker}</h4>
                        <p>{session.title}</p>
                    </div>
                </div>

                {/* Event Tag */}
                <span className={styles.eventTag}>{session.title}</span>

                {/* Date and Audience */}
                <div className={styles.eventMeta}>
                    <div className={styles.eventDate}>
                        <span>📅</span>
                        <span>{session.date}</span>
                    </div>
                    <div className={styles.eventAudience}>
                        <span>👥</span>
                        <span>{session.attendees}</span>
                    </div>
                </div>
            </div>

            <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{session.speaker}</h3>
                <p className={styles.eventTopic}>{session.topic}</p>

                {/* Uniform Learn More Button */}
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
            <AnimatedHeading text="Code for Cause" />
            <ScrollAnimated delay={0.1}>
                <h2 className={styles.subHeading}>
                    <TypingEffect /><span className={styles.typingCursor}></span>
                </h2>
            </ScrollAnimated>
            <ScrollAnimated delay={0.2}>
                <p className={styles.heroDescription}>
                    Empowering students through coding education and social impact projects.
                    Join us in making a difference through technology.
                </p>
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
                <h2 className={styles.sectionHeading}>Why Code for Cause?</h2>
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

const PastEventsSection = () => (
    <section className={styles.sectionGray}>
        <div className={styles.container}>
            <ScrollAnimated>
                <h2 className={styles.sectionHeading}>Past Events</h2>
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

// --- MAIN APP COMPONENT --- //
export default function App() {
    return (
        <main className={styles.pageWrapper}>
            <HeroSection />
            <WhySection />
            <PastEventsSection />
        </main>
    );
}
