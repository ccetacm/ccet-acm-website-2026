import { useEffect, useState } from "react";
import "./SocialMedia.css";

const SocialMedia = ({ startAnimation }) => {
    const [sidebarAnimated, setSidebarAnimated] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            setTimeout(() => setSidebarAnimated(true), 1000);
        }
    }, [startAnimation]);

    return (
        <div
            className={`acm-social-sidebar ${sidebarAnimated ? "animate" : ""}`}
        >
            <a
                href="https://www.facebook.com/acmccet/"
                target="_blank"
                rel="noopener noreferrer"
                className="acm-social-icon acm-facebook"
                aria-label="Facebook"
            >
                <i className="fab fa-facebook-f"></i>
            </a>
            <a
                href="https://www.instagram.com/acmccet/?hl=en"
                className="acm-social-icon acm-instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <i className="fab fa-instagram"></i>
            </a>
            <a
                href="https://in.linkedin.com/company/ccet-acm-student-chapter"
                className="acm-social-icon acm-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a
                href="https://x.com/acmccet"
                className="acm-social-icon acm-twitter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
            >
                <i className="fab fa-twitter"></i>
            </a>
        </div>
    );
};

export default SocialMedia;