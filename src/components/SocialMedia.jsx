import React from 'react';
import styles from './SocialMedia.module.scss';

const SocialMedia = () => {
    return (
        <>
            {/* SVG Filters for the gooey effect */}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={styles.svgFilters}>
                <defs>
                    <filter id="shadowed-goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                        <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                        <feBlend in2="shadow" in="goo" result="goo" />
                        <feBlend in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feBlend in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                </defs>
            </svg>

            <nav className={styles.socialMenu}>
                <input
                    type="checkbox"
                    className={styles.menuOpen}
                    name="social-menu-open"
                    id="social-menu-open"
                />

                <label className={styles.menuOpenButton} htmlFor="social-menu-open">
                    <div className={styles.arrowIcon}>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </label>

                <a
                    href="https://www.facebook.com/acmccet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.menuItem} ${styles.facebook}`}
                    aria-label="Facebook"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>

                <a
                    href="https://x.com/acmccet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.menuItem} ${styles.twitter}`}
                    aria-label="Twitter"
                >
                    <i className="fab fa-twitter"></i>
                </a>

                <a
                    href="https://in.linkedin.com/company/ccet-acm-student-chapter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.menuItem} ${styles.linkedin}`}
                    aria-label="LinkedIn"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                    href="https://www.instagram.com/acmccet/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.menuItem} ${styles.instagram}`}
                    aria-label="Instagram"
                >
                    <i className="fab fa-instagram"></i>
                </a>

                <a
                    href="https://www.youtube.com/@ccetacmstudentchapter3122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.menuItem} ${styles.youtube}`}
                    aria-label="YouTube"
                >
                    <i className="fab fa-youtube"></i>
                </a>
            </nav>
        </>
    );
};

export default SocialMedia;
