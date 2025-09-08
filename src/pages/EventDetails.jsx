import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './EventDetails.module.css';

const EventDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { event, mode } = location.state || {};
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [reactionStates, setReactionStates] = useState({});

    if (!event) {
        return <div>Event not found</div>;
    }

    const navigateGallery = (direction) => {
        if (!event.images || event.images.length <= 1) return;

        if (direction === 'next') {
            setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
        } else {
            setCurrentImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
        }
    };

    const handleReactionClick = (emoji) => {
        const key = `${event.title}-${emoji}`;
        setReactionStates(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const goBackToEvents = () => {
        navigate('/events');
    };

    return (
        <div className={styles.container}>

            <div className={styles.content}>
                {/* Image Gallery */}
                <div className={styles.imageSection}>
                    {event.images && event.images.length > 0 ? (
                        <>
                            <div className={styles.mainImage}
                                 style={{ backgroundImage: `url(${event.images[currentImageIndex]})` }}>
                            </div>

                            {event.images.length > 1 && (
                                <div className={styles.galleryNav}>
                                    <button
                                        className={styles.galleryNavBtn}
                                        onClick={() => navigateGallery('prev')}
                                    >
                                        &lt;
                                    </button>
                                    <div className={styles.imageCounter}>
                                        {currentImageIndex + 1} / {event.images.length}
                                    </div>
                                    <button
                                        className={styles.galleryNavBtn}
                                        onClick={() => navigateGallery('next')}
                                    >
                                        &gt;
                                    </button>
                                </div>
                            )}

                            {/* Thumbnails */}
                            {event.images.length > 1 && (
                                <div className={styles.thumbnails}>
                                    {event.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.thumbnail} ${index === currentImageIndex ? styles.active : ''}`}
                                            style={{ backgroundImage: `url(${image})` }}
                                            onClick={() => setCurrentImageIndex(index)}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className={styles.mainImage}
                             style={{ backgroundImage: `url(${event.background || event.cardImage})` }}>
                        </div>
                    )}
                </div>

                {/* Event Details */}
                <div className={styles.detailsSection}>
                    <h1 className={styles.title}>{event.title}</h1>
                    <div className={styles.location}>{event.location}</div>
                    <p className={styles.description}>{event.description}</p>

                    {/* Event Meta */}
                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <div className={styles.metaLabel}>Duration</div>
                            <div className={styles.metaValue}>{event.duration}</div>
                        </div>
                        <div className={styles.metaItem}>
                            <div className={styles.metaLabel}>Difficulty</div>
                            <div className={styles.metaValue}>{event.difficulty}</div>
                        </div>
                        <div className={styles.metaItem}>
                            <div className={styles.metaLabel}>Group Size</div>
                            <div className={styles.metaValue}>{event.groupSize}</div>
                        </div>
                    </div>

                    {/* Reaction Section */}
                    {event.reactions && (
                        <div className={styles.reactionSection}>
                            <div className={styles.reactionTitle}>What did you think about this event?</div>
                            <div className={styles.emojiReactions}>
                                {Object.entries(event.reactions).map(([emoji, data]) => {
                                    const key = `${event.title}-${emoji}`;
                                    const isActive = reactionStates[key];
                                    const displayCount = isActive ? data.count + 1 : data.count;

                                    return (
                                        <div
                                            key={emoji}
                                            className={`${styles.emojiReaction} ${isActive ? styles.active : ''}`}
                                            onClick={() => handleReactionClick(emoji)}
                                        >
                                            <div className={styles.reactionEmoji}>{emoji}</div>
                                            <div className={styles.reactionCount}>{displayCount}</div>
                                            <div className={styles.tooltip}>
                                                {displayCount} {data.text}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <button className={styles.exploreButton} onClick={goBackToEvents}>
                        Explore More {mode === 'events' ? 'Events' : 'Competitions'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;