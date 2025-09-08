import React, { useState, useEffect } from 'react';
import { events, achievements } from '../data/Events.js';
import styles from './Events.module.css';
import { useNavigate } from 'react-router-dom';

const Events = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [currentMode, setCurrentMode] = useState('events');
    const [currentData, setCurrentData] = useState(events);
    const navigate = useNavigate();

    // Auto scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEventIndex((prev) => (prev + 1) % currentData.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [currentData.length]);

    // Reset index when mode changes
    useEffect(() => {
        setCurrentEventIndex(0);
    }, [currentMode]);

    const switchToEvent = (index) => {
        setCurrentEventIndex(index);
    };

    const toggleMode = (mode) => {
        if (mode === currentMode) return;

        setCurrentMode(mode);
        setCurrentData(mode === 'events' ? events : achievements);
        setCurrentEventIndex(0);
    };

    const viewEventDetails = () => {
        const event = currentData[currentEventIndex];
        navigate('/event-details', {
            state: {
                event,
                mode: currentMode
            }
        });
    };

    const getCardPosition = (index) => {
        const diff = index - currentEventIndex;
        const totalEvents = currentData.length;

        if (diff === 0) return 'active';
        if (diff === 1 || diff === -(totalEvents - 1)) return 'next';
        if (diff === 2 || diff === -(totalEvents - 2)) return 'next2';
        if (diff === -1 || diff === totalEvents - 1) return 'prev';
        if (diff === -2 || diff === totalEvents - 2) return 'prev2';
        return 'hidden';
    };

    const currentEvent = currentData[currentEventIndex];

    return (
        <div className={styles.container}>
            {/* Background */}
            <div
                className={styles.background}
                style={{ backgroundImage: `url(${currentEvent.background})` }}
            />
            <div className={styles.overlay} />

            {/* Mode Switcher Buttons */}
            {currentMode === 'events' && (
                <button
                    className={`${styles.modeButton} ${styles.topRight}`}
                    onClick={() => toggleMode('achievements')}
                >
                    View Competitions
                </button>
            )}
            {currentMode === 'achievements' && (
                <button
                    className={`${styles.modeButton} ${styles.topLeft}`}
                    onClick={() => toggleMode('events')}
                >
                    View Events
                </button>
            )}

            {/* Main Content */}
            <main className={styles.mainContent}>
                <div className={`${styles.eventDetails} ${currentMode === 'achievements' ? styles.rightLayout : ''}`}>
                    <div className={styles.eventLocation}>{currentEvent.location}</div>
                    <h1 className={styles.eventTitle}>{currentEvent.title}</h1>
                    <p className={styles.eventDescription}>{currentEvent.description}</p>

                    <div className={styles.eventMeta}>
                        <div className={styles.metaItem}>
                            <div className={styles.metaLabel}>Duration</div>
                            <div className={styles.metaValue}>{currentEvent.duration}</div>
                        </div>
                        <div className={styles.metaItem}>
                            <div className={styles.metaLabel}>Difficulty</div>
                            <div className={styles.metaValue}>{currentEvent.difficulty}</div>
                        </div>
                        <div className={styles.metaItem}>
                            <div className={styles.metaLabel}>Group Size</div>
                            <div className={styles.metaValue}>{currentEvent.groupSize}</div>
                        </div>
                    </div>

                    <button className={styles.ctaButton} onClick={viewEventDetails}>
                        Details
                    </button>
                </div>
            </main>

            {/* Event Cards */}
            <div className={`${styles.eventCardsContainer} ${currentMode === 'achievements' ? styles.leftLayout : ''}`}>
                <div className={styles.eventCards}>
                    {currentData.map((event, index) => (
                        <div
                            key={index}
                            className={`${styles.eventCard} ${styles[getCardPosition(index)]}`}
                            onClick={() => switchToEvent(index)}
                        >
                            <div
                                className={styles.cardBackground}
                                style={{ backgroundImage: `url(${event.cardImage})` }}
                            />
                            <div className={styles.cardOverlay} />
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>{event.title}</div>
                                <div className={styles.cardLocation}>{event.location}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className={`${styles.navigationDots} ${currentMode === 'achievements' ? styles.leftLayout : ''}`}>
                {currentData.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${index === currentEventIndex ? styles.active : ''}`}
                        onClick={() => switchToEvent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Events;