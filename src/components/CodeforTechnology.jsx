import React, { useState, useEffect, useRef, memo } from 'react';
import styles from './CodeforTechnology.module.css';

// --- DATA --- //
const STATS_DATA = [
    { target: 500, suffix: "+", label: "Tech Placements" },
    { target: 20, suffix: "+", label: "Partner Companies" },
    { target: 95, suffix: "%", label: "Success Rate" },
];

const TECH_FOCUS_AREAS = [
    {
        title: "Cloud Computing",
        description: "Master cloud technologies and distributed systems",
        link: "#cloud"
    },
    {
        title: "Backend Systems", 
        description: "Build scalable server-side applications",
        link: "#backend"
    },
    {
        title: "Infrastructure",
        description: "Learn DevOps and system administration",
        link: "#infrastructure"
    }
];

const OPEN_SOURCE_RESOURCES = [
    {
        category: "Web Technologies",
        icon: "💻",
        resources: [
            { name: "Firefox", description: "Firefox Source Code Documentation", link: "https://ccet.acm.org/codefortech#" },
            { name: "Chromium", description: "Chromium Projects", link: "https://ccet.acm.org/codefortech#" },
            { name: "VS Code", description: "Visual Studio Code", link: "https://ccet.acm.org/codefortech#" }
        ]
    },
    {
        category: "Software Engineering",
        icon: "</> ",
        resources: [
            { name: "Git", description: "Git Source Code - Version control system", link: "https://ccet.acm.org/codefortech#" },
            { name: "Eclipse IDE", description: "Eclipse Foundation - Open-source IDE for software development", link: "https://ccet.acm.org/codefortech#" },
            { name: "Draw.io", description: "Diagramming tool for UML and flowcharts", link: "https://ccet.acm.org/codefortech#" }
        ]
    },
    {
        category: "Natural Language Processing (NLP)",
        icon: "📄",
        resources: [
            { name: "NLTK", description: "Natural Language Toolkit - A suite of libraries for NLP", link: "https://ccet.acm.org/codefortech#" },
            { name: "SpaCy", description: "Industrial-strength NLP library", link: "https://ccet.acm.org/codefortech#" },
            { name: "Hugging Face Transformers", description: "Pre-trained models for NLP tasks", link: "https://ccet.acm.org/codefortech#" },
            { name: "Google Colab", description: "Free cloud service for ML/NLP tasks", link: "https://ccet.acm.org/codefortech#" }
        ]
    },
    {
        category: "Operating Systems",
        icon: "> ",
        resources: [
            { name: "Linux Kernel", description: "The core of the Linux operating system", link: "https://ccet.acm.org/codefortech#" }
        ]
    },
    {
        category: "Database Systems",
        icon: "🗄️",
        resources: [
            { name: "PostgreSQL", description: "Advanced object-relational database", link: "https://ccet.acm.org/codefortech#" },
            { name: "SQLite", description: "Lightweight database library", link: "https://ccet.acm.org/codefortech#" },
            { name: "MySQL", description: "Popular relational database management system", link: "https://ccet.acm.org/codefortech#" }
        ]
    },
    {
        category: "Computer Networks",
        icon: "🌐",
        resources: [
            { name: "Nmap", description: "Network scanning tool", link: "https://ccet.acm.org/codefortech#" },
            { name: "OpenVPN", description: "Virtual private network software", link: "https://ccet.acm.org/codefortech#" },
            { name: "ns-3", description: "Network Simulator", link: "https://ccet.acm.org/codefortech#" }
        ]
    },
    {
        category: "Artificial Intelligence (AI) and Machine Learning",
        icon: "🤖",
        resources: [
            { name: "TensorFlow", description: "ML framework by Google", link: "https://ccet.acm.org/codefortech#" },
            { name: "PyTorch", description: "ML framework by Meta", link: "https://ccet.acm.org/codefortech#" },
            { name: "Keras", description: "High-level neural networks API", link: "https://ccet.acm.org/codefortech#" }
        ]
    },
    {
        category: "Compilers",
        icon: "⚙️",
        resources: [
            { name: "GCC", description: "GNU Compiler Collection - Compiler for C, C++, and other languages", link: "https://ccet.acm.org/codefortech#" },
            { name: "LLVM", description: "LLVM Project - Compiler infrastructure", link: "https://ccet.acm.org/codefortech#" },
            { name: "8085 Simulator", description: "Microprocessor simulation tool", link: "https://ccet.acm.org/codefortech#" }
        ]
    }
];

const SESSIONS_DATA = [
    {
        id: 1,
        speaker: "Covid Codathon",
        title: "Codathon",
        topic: "ACM Student Chapter CCET alongside the Hackerrank platform, conducted an online codathon 'Covid-Codathon' on 19th April, 2020, to brush the coding skills, algorithmic knowledge, and problem-solving ability.",
        tags: ["Codathon"],
        date: "19 April, 2020",
        attendees: 80,
        imgSrc: "/CodeforTechnology/Codathon.jpg",
        learnMore: {
            type: "content",
            content: "",
            details: "Online coding competition to enhance programming skills during COVID-19 pandemic."
        }
    },
    {
        id: 2,
        speaker: "International Video Contest",
        title: "Contest",
        topic: "Insights2techinfo is organizing an International Video Contest. If you are a researcher, innovator, or ideator and don't wish to jump into long written articles, using video can enable you to share your ideas, innovation, technology, or any other perspective",
        tags: ["Contest"],
        date: "10 December, 2021",
        attendees: 50,
        imgSrc: "/CodeforTechnology/videocontest.jpg",
        learnMore: {
            type: "content",
            content: "",
            details: "International platform for sharing innovative ideas through video presentations."
        }
    },
    {
        id: 3,
        speaker: "Code Crusade",
        title: "Hackathon",
        topic: "The Code Crusade, a 12-hour hackathon hosted by CCET ACM & ACM-W Student Chapter as part of APRATIM 2023, immersed participants in a realm of coding excellence.",
        tags: ["Hackathon"],
        date: "Nov. 22, 2023",
        attendees: 50,
        imgSrc: "/CodeforTechnology/codecrusade.png",
        learnMore: {
            type: "content",
            content: "",
            details: "12-hour intensive hackathon focusing on innovative coding solutions and collaborative development."
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
    const phrases = ["Leading Tech Giants", "Advanced Coding", "Industry Expertise"];

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

const TechFocusCard = ({ title, description, link }) => (
    <div className={styles.techFocusCard}>
        <h3 className={styles.techFocusTitle}>{title}</h3>
        <p className={styles.techFocusDescription}>{description}</p>
        <a href={link} className={styles.techFocusLink}>
            Learn More →
        </a>
    </div>
);

const OpenSourceCategory = ({ category, resources, icon, isExpanded, onToggle }) => (
    <div className={styles.openSourceCategory}>
        <button 
            className={styles.categoryHeader}
            onClick={onToggle}
        >
            <div className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>{icon}</span>
                <span>{category}</span>
            </div>
            <span className={`${styles.categoryArrow} ${isExpanded ? styles.expanded : ''}`}>
                {isExpanded ? '▲' : '▼'}
            </span>
        </button>
        
        {isExpanded && (
            <div className={styles.categoryContent}>
                {resources.map((resource, index) => (
                    <div key={index} className={styles.resourceItem}>
                        <div className={styles.resourceContent}>
                            <h4 className={styles.resourceName}>{resource.name}</h4>
                            <p className={styles.resourceDescription}>{resource.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
);


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
                
                {/* Date and Audience - Both Back */}
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
                
                <button
                    className={styles.learnMoreBtn}
                    onClick={handleLearnMoreClick}
                >
                    See More →
                </button>
            </div>
        </div>
    );
};

// --- PAGE SECTIONS --- //

const HeroSection = () => (
    <section className={styles.heroBg}>
        <div className={styles.heroWrapper}>
            <AnimatedHeading text="Code for Technology" />
            <ScrollAnimated delay={0.1}>
                <h2 className={styles.subHeading}>
                    <TypingEffect /><span className={styles.typingCursor}></span>
                </h2>
            </ScrollAnimated>
            <ScrollAnimated delay={0.2}>
                <p className={styles.heroDescription}>
                    Empowering developers to excel in leading tech giants through advanced coding practices and industry expertise.
                </p>
            </ScrollAnimated>
            
            {/* Stats in Hero Section */}
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

const TechFocusSection = () => (
    <section className={styles.section}>
        <div className={styles.container}>
            <ScrollAnimated>
                <h2 className={styles.sectionHeading}>Technology Focus Areas</h2>
            </ScrollAnimated>
            <div className={styles.techFocusGrid}>
                {TECH_FOCUS_AREAS.map((area, index) => (
                    <ScrollAnimated key={area.title} delay={index * 0.1}>
                        <TechFocusCard {...area} />
                    </ScrollAnimated>
                ))}
            </div>
        </div>
    </section>
);

const OpenSourceSection = () => {
    const [expandedCategories, setExpandedCategories] = useState({});

    const toggleCategory = (category) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    return (
        <section className={styles.sectionGray}>
            <div className={styles.container}>
                <ScrollAnimated>
                    <h2 className={styles.sectionHeading}>Open Source Resources</h2>
                </ScrollAnimated>
                <div className={styles.openSourceContainer}>
                    {OPEN_SOURCE_RESOURCES.map((categoryData, index) => (
                        <ScrollAnimated key={categoryData.category} delay={index * 0.1}>
                            <OpenSourceCategory
                                category={categoryData.category}
                                resources={categoryData.resources}
                                icon={categoryData.icon}
                                isExpanded={expandedCategories[categoryData.category]}
                                onToggle={() => toggleCategory(categoryData.category)}
                            />
                        </ScrollAnimated>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PastEventsSection = () => (
    <section className={styles.section}>
        <div className={styles.container}>
            <ScrollAnimated>
                <h2 className={styles.sectionHeading}>Our Past Events</h2>
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
            <TechFocusSection />
            <OpenSourceSection />
            <PastEventsSection />
        </main>
    );
}
