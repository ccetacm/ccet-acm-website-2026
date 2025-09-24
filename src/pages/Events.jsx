import React, { useState } from 'react';
import { events, competitions } from '../data/Events';
import styles from './Events.module.scss';

const Events = () => {
    const [activeTab, setActiveTab] = useState('events');
    const [selectedEvent, setSelectedEvent] = useState(null);

    if (selectedEvent) {
        return (
            <div className={styles.container}>
                <main className={styles.responsiveWrapper}>
                    <button
                        className={styles.backButton}
                        onClick={() => setSelectedEvent(null)}
                    >
                        ← Back to {activeTab === 'events' ? 'Events' : 'Competitions'}
                    </button>

                    <article className={styles.eventDetail}>
                        <header className={styles.articleHeader}>
                            <h1 className={styles.detailTitle}>{selectedEvent.title}</h1>
                            <div className={styles.byline}>
                                <time className={styles.publishDate}>Published Today</time>
                                <span className={styles.category}>
                                    {activeTab === 'events' ? 'Events' : 'Competitions'}
                                </span>
                            </div>
                        </header>

                        <div className={styles.detailMeta}>
                            <span className={styles.metaItem}>
                                <strong>Location:</strong> {selectedEvent.location}
                            </span>
                            <span className={styles.metaItem}>
                                <strong>Duration:</strong> {selectedEvent.duration}
                            </span>
                            <span className={styles.metaItem}>
                                <strong>Difficulty:</strong> {selectedEvent.difficulty}
                            </span>
                            <span className={styles.metaItem}>
                                <strong>Group Size:</strong> {selectedEvent.groupSize}
                            </span>
                        </div>

                        <div className={styles.detailGallery}>
                            {selectedEvent.images.map((image, index) => (
                                <figure key={index} className={styles.imageContainer}>
                                    <img
                                        src={image}
                                        alt={`${selectedEvent.title} ${index + 1}`}
                                        className={styles.detailImage}
                                    />
                                    <figcaption className={styles.imageCaption}>
                                        Photo {index + 1} - {selectedEvent.title}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className={styles.detailDescription}>
                            <p className={styles.leadParagraph}>{selectedEvent.description}</p>
                        </div>

                        <aside className={styles.detailReactions}>
                            <h3>Reader Reactions</h3>
                            <div className={styles.reactionGrid}>
                                {Object.entries(selectedEvent.reactions).map(([emoji, data]) => (
                                    <div key={emoji} className={styles.reactionCard}>
                                        <span className={styles.reactionEmoji}>{emoji}</span>
                                        <div className={styles.reactionData}>
                                            <span className={styles.reactionCount}>{data.count}</span>
                                            <span className={styles.reactionText}>{data.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </article>
                </main>
            </div>
        );
    }

    const currentData = activeTab === 'events' ? events : competitions;

    return (
        <div className={styles.container}>
            <main className={styles.responsiveWrapper}>
                <header className={styles.newspaperHeader}>
                    <div className={styles.masthead}>
                        <h1 className={styles.newspaperTitle}>CCET ACM EVENTS & COMPETITIONS</h1>
                        <div className={styles.tagline}>Your Daily Dose of Coding Adventure</div>
                        <div className={styles.headerLine}></div>
                    </div>
                </header>

                {/* Tab Navigation */}
                <nav className={styles.tabNavigation}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'events' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('events')}
                    >
                        Events
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'competitions' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('competitions')}
                    >
                        Competitions
                    </button>
                </nav>

                {/* Main Content */}
                <div className={styles.newspaperContent}>
                    <h2 className={styles.sectionHeader}>
                        {activeTab === 'events' ? 'Latest Events' : 'Competitions'}
                    </h2>

                    <div className={styles.newspaperGrid}>
                        {currentData.map((item, index) => {
                            const isFeature = index === 0;
                            const isLarge = index === 1 || index === 2;

                            return (
                                <article
                                    key={index}
                                    className={`${styles.newsCard} ${
                                        isFeature ? styles.featureCard :
                                            isLarge ? styles.largeCard : styles.regularCard
                                    }`}
                                    onClick={() => setSelectedEvent(item)}
                                >
                                    <div className={styles.cardImageContainer}>
                                        <img
                                            src={item.cardImage}
                                            alt={item.title}
                                            className={styles.cardImage}
                                        />
                                        <div className={styles.imageOverlay}>
                                            <span className={styles.categoryTag}>
                                                {activeTab === 'events' ? 'Event' : 'Competition'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.cardContent}>
                                        <h3 className={`${styles.cardTitle} ${isFeature ? styles.featureTitle : ''}`}>
                                            {item.title}
                                        </h3>

                                        <div className={styles.cardMeta}>
                                            <span className={styles.location}>{item.location}</span>
                                            <span className={styles.dot}>•</span>
                                            <span className={styles.duration}>{item.duration}</span>
                                        </div>

                                        <p className={styles.cardExcerpt}>
                                            {item.description}
                                        </p>

                                        <div className={styles.cardFooter}>
                                            <div className={styles.tags}>
                                                <span className={styles.difficultyTag}>{item.difficulty}</span>
                                                <span className={styles.groupTag}>{item.groupSize}</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Events;
