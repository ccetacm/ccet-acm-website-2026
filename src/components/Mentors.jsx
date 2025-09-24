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
                    return (
                        <figure key={index} className={styles.mentorCard}>
                            <img
                                src={mentor.imgSrc}
                                alt={mentor.name}
                            />
                            <figcaption className={styles.mentorCaption}>
                                <h3 className={styles.mentorName}>
                                    <span>{mentor.name}</span>
                                </h3>
                                <p className={styles.mentorTitle}>{mentor.title}</p>
                            </figcaption>
                            <Link
                                to={`/mentors/${mentor.name.toLowerCase().replace(/ /g, '-')}`}
                                className={styles.cardLink}
                            />
                        </figure>
                    );
                })}
            </div>
        </div>
    );
};

export default Mentors;