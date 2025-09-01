"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// import ccetacmlogo from "../assets/acm-logo/ccet-acm-logo-website.svg";

const Header = ({ startAnimation, logos }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navbarAnimated, setNavbarAnimated] = useState(false);
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const [logoFading, setLogoFading] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            setTimeout(() => setNavbarAnimated(true), 200);
        }
    }, [startAnimation]);

    useEffect(() => {
        const logoInterval = setInterval(() => {
            setLogoFading(true);
            setTimeout(() => {
                setCurrentLogoIndex((prev) => (prev + 1) % logos.length);
                setLogoFading(false);
            }, 300);
        }, 2000);

        return () => clearInterval(logoInterval);
    }, [logos.length]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <nav className={`${styles.navbar} ${navbarAnimated ? styles.animate : ""}`}>
                {/* Left: Static Logo */}
                <div className={styles.navbarLeft}>
                    <div className={styles.staticLogo}>
                        <img
                            src="/acm-logo/ccet-acm-logo-website.svg"
                            alt="CCET ACM Logo"
                        />
                    </div>
                </div>

                {/* Center: Navigation Links */}
                <div className={styles.navLinks}>
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                    <Link to="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
                    <Link to="/initiatives" onClick={() => setMobileMenuOpen(false)}>CORE ACTS</Link>
                    <Link to="/events" onClick={() => setMobileMenuOpen(false)}>EVENTS</Link>
                    <Link to="/research" onClick={() => setMobileMenuOpen(false)}>RESEARCH LAB</Link>
                    <Link to="/magazine" onClick={() => setMobileMenuOpen(false)}>DIGITAL OUTLET</Link>
                    <Link to="/teams" onClick={() => setMobileMenuOpen(false)}>TEAM</Link>
                    <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>GALLERY</Link>
                    <Link to="/acmw" onClick={() => setMobileMenuOpen(false)}>ACM-W</Link>
                </div>

                {/* Right: Switching Logo */}
                <div className={styles.navbarRight}>
                    <div className={styles.logoSwitcher}>
                        <a
                            href={logos[currentLogoIndex].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${logos[currentLogoIndex].alt} website`}
                        >
                            <img
                                src={logos[currentLogoIndex].src || "/placeholder.svg"}
                                alt={logos[currentLogoIndex].alt}
                                className={`${styles.switchingLogo} ${logoFading ? styles.fading : ""}`}
                            />
                        </a>
                    </div>
                </div>

                {/* Hamburger Menu */}
                <button
                    className={`${styles.hamburgerMenu} ${mobileMenuOpen ? styles.active : ""}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.active : ""}`}
                onClick={toggleMobileMenu}
            >
                <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
                    <Link to="/" onClick={toggleMobileMenu}>HOME</Link>
                    <Link to="/about" onClick={toggleMobileMenu}>ABOUT</Link>
                    <Link to="/initiatives" onClick={toggleMobileMenu}>CORE ACTS</Link>
                    <Link to="/events" onClick={toggleMobileMenu}>EVENTS</Link>
                    <Link to="/research" onClick={toggleMobileMenu}>RESEARCH LAB</Link>
                    <Link to="/magazine" onClick={toggleMobileMenu}>DIGITAL OUTLET</Link>
                    <Link to="/teams" onClick={toggleMobileMenu}>TEAM</Link>
                    <Link to="/gallery" onClick={toggleMobileMenu}>GALLERY</Link>
                    <Link to="/acmw" onClick={toggleMobileMenu}>ACM-W</Link>
                </div>
            </div>
        </>
    );
};

export default Header;
