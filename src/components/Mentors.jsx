import React from 'react';
import { mentorsData } from '../data/Mentors/index';
import styles from './Mentors.module.css';
import { Link } from 'react-router-dom';

const Mentors = () => {
    return (
        <div className={styles.mentorsContainer}>
            <h1 className={styles.title}>Our Mentors</h1>
            <div className={styles.mentorsGrid}>
                {mentorsData.map((mentor, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`${styles.mentorRow} ${isEven ? styles.imageLeft : styles.imageRight}`}
                        >
                            <div className={styles.imageContainer}>
                                <img
                                    src={mentor.imgSrc}
                                    alt={mentor.name}
                                    className={styles.mentorImage}
                                />
                            </div>
                            <div className={styles.descriptionContainer}>
                                <h3 className={styles.mentorName}>{mentor.name}</h3>
                                <p className={styles.mentorTitle}>{mentor.title}</p>
                                <p className={styles.mentorDescription}>{mentor.description}</p>
                                {index >= mentorsData.length - 2 && (
                                    <Link
                                        to={`/${mentor.route.toLowerCase().replace(/ /g, '-')}`}
                                        className={styles.cardLink}
                                    >
                                        Learn More →
                                    </Link>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Mentors;