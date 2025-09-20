"use client";
import { useState, useEffect } from "react";
import styles from "./SocialMedia.module.css";

const SocialMedia = ({ startAnimation }) => {
    const [sidebarAnimated, setSidebarAnimated] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            setTimeout(() => setSidebarAnimated(true), 1000);
        }
    }, [startAnimation]);

    return (
        <div className={`${styles.social} ${sidebarAnimated ? styles.animate : ""}`}>
            <a
                href="https://www.facebook.com/acmccet/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.facebook}`}
                aria-label="Facebook"
            >
                <div className={styles.inner}>
                    <i className="fab fa-facebook-f"></i>
                </div>
            </a>
            <a
                href="https://x.com/acmccet"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.twitter}`}
                aria-label="Twitter"
            >
                <div className={styles.inner}>
                    <i className="fab fa-twitter"></i>
                </div>
            </a>
            <a
                href="https://in.linkedin.com/company/ccet-acm-student-chapter"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.linkedin}`}
                aria-label="LinkedIn"
            >
                <div className={styles.inner}>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </a>
            <a
                href="https://www.instagram.com/acmccet/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.instagram}`}
                aria-label="Instagram"
            >
                <div className={styles.inner}>
                    <i className="fab fa-instagram"></i>
                </div>
            </a>
            <a
                href="https://www.youtube.com/@ccetacmstudentchapter3122"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.youtube}`}
                aria-label="YouTube"
            >
                <div className={styles.inner}>
                    <i className="fab fa-youtube"></i>
                </div>
            </a>
        </div>
    );
};

export default SocialMedia;