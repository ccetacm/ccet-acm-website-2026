"use client";
import { useState, useEffect } from 'react';
import styles from './NewsTicker.module.css';

const NewsTicker = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayIndex, setDisplayIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const news = [
        {
            date: "Dec 15, 2024",
            prefix: "CS Dept",
            heading: "New AI Research Lab inaugurated with state-of-the-art quantum computing facilities.",
            url: "https://"
        },
        {
            date: "Dec 10, 2024",
            prefix: "Tech News",
            heading: "Students win International Hackathon with innovative blockchain solution.",
            url: "https://"
        },
        {
            date: "Dec 8, 2024",
            prefix: "Research",
            heading: "Faculty publishes breakthrough paper on machine learning optimization.",
            url: "https://"
        },
        {
            date: "Dec 5, 2024",
            prefix: "Achievement",
            heading: "Computer Science program ranked #1 in regional university rankings.",
            url: "https://"
        },
        {
            date: "Dec 1, 2024",
            prefix: "Innovation",
            heading: "New partnership with leading tech companies for internship programs.",
            url: "https://"
        }
    ];

    const transitionToNext = (nextIndex) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setDisplayIndex(nextIndex);
            setCurrentIndex(nextIndex);
            setIsTransitioning(false);
        }, 600);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % news.length;
            transitionToNext(nextIndex);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, news.length]);

    const handlePrev = () => {
        const prevIndex = currentIndex === 0 ? news.length - 1 : currentIndex - 1;
        transitionToNext(prevIndex);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % news.length;
        transitionToNext(nextIndex);
    };

    const currentNews = news[displayIndex];

    return (
        <div className={styles.newsTickerWrapper}>
            <div className={styles.newsTicker}>
                <div className={styles.newsLabel}>
                    NEWS
                </div>

                <div className={styles.newsContent}>
                    <div className={styles.newsContainer}>
                        <div className={`${styles.newsItem} ${isTransitioning ? styles.transitioning : ''}`}>
                            <span className={styles.newsSource}>{currentNews.prefix}</span>
                            <span className={styles.newsDate}>{currentNews.date}</span>
                            <span className={styles.newsText}>{currentNews.heading}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.newsControls}>
                    <button className={`${styles.controlBtn} ${styles.prev}`} onClick={handlePrev}>
                        ‹
                    </button>
                    <button className={`${styles.controlBtn} ${styles.next}`} onClick={handleNext}>
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;