import { useEffect, useState } from "react";
import "./Header.css";
import logoImg from "../assets/Header_Main/logo.png";
import nepImg from "../assets/Header_Main/NEP_2020.png";
import ccetImg from "../assets/Header_Main/ccetLogo.png";
import sdgImg from "../assets/Header_Main/SDG.png";
import puImg from "../assets/Header_Main/pu-logo.png";
import acmImg from "../assets/Header_Main/acmlogo.png";
import acmw from "../assets/Header_Main/acmw.png";

const Header = ({ startAnimation }) => {
    const [navbarAnimated, setNavbarAnimated] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const [logoFading, setLogoFading] = useState(false);

    const logos = [
        { src: logoImg || "/placeholder.svg", alt: "CCET ACM" },
        { src: nepImg || "/placeholder.svg", alt: "NEP" },
        { src: ccetImg || "/placeholder.svg", alt: "CCET" },
        { src: sdgImg || "/placeholder.svg", alt: "CCET" },
        { src: puImg || "/placeholder.svg", alt: "CCET" },
        { src: acmImg || "/placeholder.svg", alt: "CCET" },
        { src: acmw || "/placeholder.svg", alt: "CCET" },
    ];

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
            <nav className={`acm-navbar ${navbarAnimated ? "animate" : ""}`}>
                <div className="acm-navbar-left">
                    <div className="acm-logo-switcher">
                        <img
                            src={logos[currentLogoIndex].src || "/placeholder.svg"}
                            alt={logos[currentLogoIndex].alt}
                            className={`acm-switching-logo ${logoFading ? "fading" : ""}`}
                        />
                    </div>
                </div>

                <div className="acm-nav-links">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CORE ACTS</a>
                    <a href="#">EVENTS</a>
                    <a href="#">RESEARCH LAB</a>
                    <a href="#">PROJECTS</a>
                    <a href="#">DIGITAL OUTLET</a>
                    <a href="#">TEAM</a>
                    <a href="#">GALLERY</a>
                </div>

                <button
                    className={`acm-hamburger-menu ${mobileMenuOpen ? "active" : ""}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <div className="acm-hamburger-line"></div>
                    <div className="acm-hamburger-line"></div>
                    <div className="acm-hamburger-line"></div>
                </button>
            </nav>

            <div className={`acm-mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}>
                <div className="acm-mobile-menu">
                    <a href="#" onClick={toggleMobileMenu}>HOME</a>
                    <a href="#" onClick={toggleMobileMenu}>ABOUT</a>
                    <a href="#" onClick={toggleMobileMenu}>ACTIVITIES</a>
                    <a href="#" onClick={toggleMobileMenu}>EVENTS</a>
                    <a href="#" onClick={toggleMobileMenu}>RESEARCH LAB</a>
                    <a href="#" onClick={toggleMobileMenu}>PROJECTS</a>
                    <a href="#" onClick={toggleMobileMenu}>DIGITAL OUTLET</a>
                    <a href="#" onClick={toggleMobileMenu}>TEAM</a>
                    <a href="#" onClick={toggleMobileMenu}>GALLERY</a>
                </div>
            </div>
        </>
    );
};

export default Header;
