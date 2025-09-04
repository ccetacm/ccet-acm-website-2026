"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

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

    const navigationItems = [
        { label: 'HOME', to: '/' },
        { label: 'ABOUT', to: '/about' },
        { label: 'CORE ACTS', to: '/initiatives' },
        { label: 'EVENTS', to: '/events' },
        { label: 'RESEARCH LAB', to: '/research' },
        { label: 'DIGITAL OUTLET', to: '/magazine' },
        { label: 'TEAM', to: '/teams' },
        { label: 'GALLERY', to: '/gallery' },
        { label: 'ACM-W', to: '/acmw' }
    ];

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
                    {/* Mobile Left Logo */}
                    <div className={styles.mobileLeftLogo}>
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

                {/* Mobile Center Text - only visible on mobile */}
                <div className={styles.mobileCenterText}>
                    <h1 className={styles.mobileTitle}>CCET ACM</h1>
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

            {/* Mobile Menu Overlay - Arena Style */}
            <div className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.active : ""}`}>
                <div className={styles.mobileMenuContent}>

                    {/* Menu Header */}
                    <div className={styles.mobileMenuHeader}>
                        <div className={styles.menuTitle}>MENU</div>
                        <button
                            onClick={toggleMobileMenu}
                            className={styles.closeButton}
                        >
                            CLOSE
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <div className={styles.mobileMenuNav}>
                        {navigationItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                onClick={toggleMobileMenu}
                                className={styles.mobileMenuItem}
                            >
                                <div className={styles.menuItemContent}>
                                    <span className={styles.menuItemText}>{item.label}</span>
                                    <div className={styles.menuItemIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Menu Footer */}
                    <div className={styles.mobileMenuFooter}>
                        <div className={styles.menuFooterContent}>
                            <div className={styles.menuFooterIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.372 2.094a10.003 10.003 0 0 0-6.744 0C4.716 2.64 3.5 4.342 3.5 6.288v11.424c0 1.946 1.216 3.648 3.128 4.194a10.003 10.003 0 0 0 6.744 0c1.912-.546 3.128-2.248 3.128-4.194V6.288c0-1.946-1.216-3.648-3.128-4.194z"/>
                                </svg>
                            </div>
                            <span className={styles.menuFooterText}>CCET ACM Chapter</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;