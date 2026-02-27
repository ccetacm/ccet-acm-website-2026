import React, { useState, useEffect, useCallback } from 'react';
import { events, competitions } from '../data/Events';
import styles from './Events.module.scss';

const STORAGE_KEY = 'ccet_acm_reactions';

const loadStorage = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
};

const saveStorage = (data) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
};

const initEventReactions = (item) => {
    const counts = {};
    Object.entries(item.reactions).forEach(([emoji, data]) => {
        counts[emoji] = data.count;
    });
    return { counts, userPick: null };
};

const Events = () => {
    const [activeTab, setActiveTab] = useState('events');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const [reactionStore, setReactionStore] = useState(() => loadStorage());

    useEffect(() => {
        saveStorage(reactionStore);
    }, [reactionStore]);

    const ensureEntry = useCallback((item) => {
        const id = item.id ?? item.title;
        setReactionStore(prev => {
            if (prev[id]) return prev;
            return { ...prev, [id]: initEventReactions(item) };
        });
    }, []);

    const allItems = [...events, ...competitions];
    useEffect(() => {
        allItems.forEach(ensureEntry);
    }, []); // eslint-disable-line

    const handleReact = useCallback((e, item, emoji) => {
        e.stopPropagation();
        const id = item.id ?? item.title;

        setReactionStore(prev => {
            const entry = prev[id] ?? initEventReactions(item);
            const prevPick = entry.userPick;

            if (prevPick === emoji) {
                return {
                    ...prev,
                    [id]: {
                        counts: { ...entry.counts, [emoji]: Math.max(0, entry.counts[emoji] - 1) },
                        userPick: null,
                    },
                };
            }

            const newCounts = { ...entry.counts, [emoji]: (entry.counts[emoji] ?? 0) + 1 };
            if (prevPick) {
                newCounts[prevPick] = Math.max(0, newCounts[prevPick] - 1);
            }

            return {
                ...prev,
                [id]: { counts: newCounts, userPick: emoji },
            };
        });
    }, []);

    if (selectedEvent) {
        const id = selectedEvent.id ?? selectedEvent.title;
        const entry = reactionStore[id] ?? initEventReactions(selectedEvent);

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
                                <strong>Location</strong> {selectedEvent.location}
                            </span>
                            <span className={styles.metaItem}>
                                <strong>Duration</strong> {selectedEvent.duration}
                            </span>
                            <span className={styles.metaItem}>
                                <strong>Difficulty</strong> {selectedEvent.difficulty}
                            </span>
                            <span className={styles.metaItem}>
                                <strong>Group Size</strong> {selectedEvent.groupSize}
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
                                        Photo {index + 1} — {selectedEvent.title}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className={styles.detailDescription}>
                            <p className={styles.leadParagraph}>{selectedEvent.description}</p>
                        </div>

                        <aside className={styles.detailReactions}>
                            <h3>Reactions</h3>
                            {entry.userPick
                                ? <p className={styles.reactionHint}>You reacted with {entry.userPick} — click again to remove</p>
                                : <p className={styles.reactionHint}>How did this make you feel?</p>
                            }
                            <div className={styles.reactionGrid}>
                                {Object.entries(selectedEvent.reactions).map(([emoji, data]) => {
                                    const count = entry.counts[emoji] ?? data.count;
                                    const picked = entry.userPick === emoji;
                                    return (
                                        <button
                                            key={emoji}
                                            className={`${styles.reactionCard} ${picked ? styles.reactionPicked : ''}`}
                                            onClick={(e) => handleReact(e, selectedEvent, emoji)}
                                            aria-pressed={picked}
                                            aria-label={`React with ${data.text}`}
                                        >
                                            <span className={styles.reactionEmoji}>{emoji}</span>
                                            <div className={styles.reactionData}>
                                                <span className={styles.reactionCount}>{count}</span>
                                                <span className={styles.reactionText}>{data.text}</span>
                                            </div>
                                        </button>
                                    );
                                })}
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
                        <span className={styles.eyebrow}>CCET ACM Student Chapter</span>
                        <h1 className={styles.newspaperTitle}>Events & Competitions</h1>
                        <p className={styles.tagline}>Where curiosity meets competition</p>
                    </div>
                    <div className={styles.headerLine} />
                </header>

                <nav className={styles.tabNavigation} aria-label="Content tabs">
                    <button
                        className={`${styles.tabButton} ${activeTab === 'events' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('events')}
                        aria-pressed={activeTab === 'events'}
                    >
                        Events
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'competitions' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('competitions')}
                        aria-pressed={activeTab === 'competitions'}
                    >
                        Competitions
                    </button>
                </nav>

                <div className={styles.newspaperContent}>
                    <h2 className={styles.sectionHeader}>
                        {activeTab === 'events' ? 'Latest Events' : 'Active Competitions'}
                    </h2>

                    <div className={styles.newspaperGrid}>
                        {currentData.map((item, index) => {
                            const id = item.id ?? item.title;
                            const entry = reactionStore[id] ?? initEventReactions(item);
                            const isFeature = index === 0;
                            const isLarge = index === 1 || index === 2;

                            const topEmoji = Object.entries(entry.counts)
                                .sort(([, a], [, b]) => b - a)[0]?.[0];
                            const totalReactions = Object.values(entry.counts)
                                .reduce((s, n) => s + n, 0);

                            return (
                                <article
                                    key={index}
                                    className={`${styles.newsCard} ${
                                        isFeature ? styles.featureCard :
                                            isLarge    ? styles.largeCard  : styles.regularCard
                                    }`}
                                    onClick={() => setSelectedEvent(item)}
                                >
                                    <div className={styles.cardImageContainer}>
                                        <img
                                            src={item.cardImage}
                                            alt={item.title}
                                            className={styles.cardImage}
                                            loading="lazy"
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
                                            <span className={styles.dot}>·</span>
                                            <span className={styles.duration}>{item.duration}</span>
                                        </div>

                                        <p className={styles.cardExcerpt}>{item.description}</p>

                                        <div className={styles.cardFooter}>
                                            <div className={styles.tags}>
                                                <span className={styles.difficultyTag}>{item.difficulty}</span>
                                                <span className={styles.groupTag}>{item.groupSize}</span>
                                            </div>

                                            <div
                                                className={styles.quickReact}
                                                onClick={e => e.stopPropagation()}
                                            >
                                                {Object.entries(item.reactions).map(([emoji, data]) => {
                                                    const count = entry.counts[emoji] ?? data.count;
                                                    const picked = entry.userPick === emoji;
                                                    return (
                                                        <button
                                                            key={emoji}
                                                            className={`${styles.quickBtn} ${picked ? styles.quickBtnPicked : ''}`}
                                                            onClick={(e) => handleReact(e, item, emoji)}
                                                            aria-pressed={picked}
                                                            aria-label={`${data.text}: ${count}`}
                                                            title={data.text}
                                                        >
                                                            <span className={styles.quickEmoji}>{emoji}</span>
                                                            <span className={styles.quickCount}>{count}</span>
                                                        </button>
                                                    );
                                                })}
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