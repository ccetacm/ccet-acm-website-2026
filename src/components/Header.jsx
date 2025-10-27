"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ startAnimation, logos }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navbarAnimated, setNavbarAnimated] = useState(false);
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const [logoFading, setLogoFading] = useState(false);
    const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

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

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (moreDropdownOpen && !event.target.closest(`.${styles.moreDropdown}`)) {
                setMoreDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [moreDropdownOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleMoreDropdown = () => {
        setMoreDropdownOpen(!moreDropdownOpen);
    };

    const closeDropdowns = () => {
        setMoreDropdownOpen(false);
        setMobileMenuOpen(false);
    };

    const navigationItems = [
        { label: 'HOME', to: '/' },
        { label: 'ABOUT', to: '/about' },
        { label: 'CORE ACTS', to: '/initiatives' },
        { label: 'EVENTS', to: '/events' },
        { label: 'ACM-W', to: '/acmw' },
        { label: 'DIGITAL OUTLET', to: '/magazine' },
        { label: 'TEAM', to: '/teams' },
        { label: 'GALLERY', to: '/gallery' },
        { label: 'ICRL', to: '/icrl' }
    ];

    return (
        <>
            <nav className={`${styles.navbar} ${navbarAnimated ? styles.animate : ""}`}>
                {/* Mobile Hamburger Menu - Outside of leftSection for better mobile control */}
                <button
                    className={`${styles.hamburgerMenu} ${styles.mobileHamburger} ${mobileMenuOpen ? styles.active : ""}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>
                </button>

                {/* Left Section - Logo and Home Button */}
                <div className={styles.leftSection}>
                    {/* Desktop Hamburger Menu */}
                    <button
                        className={`${styles.hamburgerMenu} ${styles.desktopHamburger} ${mobileMenuOpen ? styles.active : ""}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <div className={styles.hamburgerLine}></div>
                        <div className={styles.hamburgerLine}></div>
                        <div className={styles.hamburgerLine}></div>
                    </button>

                    {/* Logo with Home Button */}
                    <div className={styles.logoContainer}>
                        <div className={styles.staticLogo}>
                            <img
                                src="/acm-logo/ccet-acm-logo-website.svg"
                                alt="CCET ACM Logo"
                            />
                        </div>
                        <span className={styles.logoText}>CCET ACM</span>
                        <Link to="/" className={styles.homeBtn}>
                            HOME
                        </Link>
                    </div>
                </div>

                {/* Center Section - Navigation Links */}
                <div className={styles.centerSection}>
                    <div className={styles.navLinks}>
                        <Link to="/about" onClick={closeDropdowns}>About</Link>
                        <Link to="/initiatives" onClick={closeDropdowns}>Core Acts</Link>
                        <Link to="/events" onClick={closeDropdowns}>Events</Link>
                        <Link to="/magazine" onClick={closeDropdowns}>Digital Outlet</Link>
                        <Link to="/acmw" onClick={closeDropdowns}>ACM-W</Link>
                        <Link to="/icrl" onClick={closeDropdowns}>ICRL</Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className={styles.rightSection}>
                    <div className={`${styles.moreDropdown} ${moreDropdownOpen ? styles.active : ""}`}>
                        <button
                            className={styles.moreBtn}
                            onClick={toggleMoreDropdown}
                            aria-label="More navigation options"
                        >
                            <div className={styles.dotsIcon}>
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className={styles.dot}></div>
                                ))}
                            </div>
                            More
                        </button>
                        <div className={styles.moreDropdownContent}>
                            <Link to="/about" className={styles.moreItem} onClick={closeDropdowns}>About</Link>
                            <Link to="/initiatives" className={styles.moreItem} onClick={closeDropdowns}>Core Acts</Link>
                            <Link to="/events" className={styles.moreItem} onClick={closeDropdowns}>Events</Link>
                            <Link to="/research" className={styles.moreItem} onClick={closeDropdowns}>Research Lab</Link>
                            <Link to="/magazine" className={styles.moreItem} onClick={closeDropdowns}>Digital Outlet</Link>
                            <Link to="/acmw" className={styles.moreItem} onClick={closeDropdowns}>ACM-W</Link>
                        </div>
                    </div>

                    <Link to="/teams" className={styles.teamBtn}>
                        👥 Team
                    </Link>

                    <Link to="/gallery" className={styles.galleryBtn}>
                        VIEW GALLERY
                    </Link>

                    {/* Switching Logo */}
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

                {/* Mobile Center Text */}
                <div className={styles.mobileCenterText}>
                    <h1 className={styles.mobileTitle}>CCET ACM</h1>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Blue Transparent Style */}
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
                                    <div className={styles.menuItemArrow}>→</div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Menu Footer */}
                    <div className={styles.mobileMenuFooter}>
                        <div className={styles.menuFooterContent}>
                            <div className={styles.switchingLogoMobile}>
                                <img
                                    src={logos[currentLogoIndex].src || "/placeholder.svg"}
                                    alt={logos[currentLogoIndex].alt}
                                />
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
