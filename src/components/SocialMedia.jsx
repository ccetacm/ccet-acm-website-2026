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
        <div className={`${styles.socialSidebar} ${sidebarAnimated ? styles.animate : ""}`}>
            <a
                href="https://www.facebook.com/acmccet/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.facebook}`}
                aria-label="Facebook"
            >
                <i className="fab fa-facebook-f"></i>
            </a>
            <a
                href="https://www.instagram.com/acmccet/?hl=en"
                className={`${styles.socialIcon} ${styles.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <i className="fab fa-instagram"></i>
            </a>
            <a
                href="https://in.linkedin.com/company/ccet-acm-student-chapter"
                className={`${styles.socialIcon} ${styles.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a
                href="https://x.com/acmccet"
                className={`${styles.socialIcon} ${styles.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
            >
                <i className="fab fa-twitter"></i>
            </a>
            <a
                href="https://www.youtube.com/@ccetacmstudentchapter3122"
                className={`${styles.socialIcon} ${styles.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
            >
                <i className="fab fa-youtube"></i>
            </a>
        </div>
    );
};

export default SocialMedia;