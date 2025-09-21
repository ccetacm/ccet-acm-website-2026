import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div className={styles.footerSection}>
            <div className={styles.brandSection}>
              <img
                  src="/acm-logo/ccet-logo-white.png"
                  alt="CCET Logo"
                  className={styles.logo}
              />
              <div className={styles.institutionInfo}>
                <h3>Association for Computing Machinery</h3>
                <p>Chandigarh College of Engineering and Technology</p>
                <p className={styles.address}>Sector 26, Chandigarh, India 160019</p>
              </div>
            </div>
          </div>

          <div className={styles.footerSection}>
            <div className={styles.linksGrid}>
              <div className={styles.linkColumn}>
                <h4>CCET ACM</h4>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/research">Research</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/events">Events</Link></li>
                </ul>
              </div>

              <div className={styles.linkColumn}>
                <h4>Explore</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/teams">Team</Link></li>
                  <li><Link to="/icrg">Achievements</Link></li>
                  <li><Link to="/acmw">ACM-W</Link></li>
                </ul>
              </div>

              <div className={styles.linkColumn}>
                <h4>Contact Us</h4>
                <ul>
                  <li><Link to="/teams">Webmasters</Link></li>
                  <li><Link to="/magazine">Magazine</Link></li>
                  <li><Link to="/contact-section">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.footerSection}>
            <div className={styles.acmBrand}>
              <img
                  src="/acm-logo/acmlogo.png"
                  alt="ACM Logo"
                  className={styles.logo}
              />
              <div className={styles.developerInfo}>
                <h4>Developed By</h4>
                <p>Web Development Team</p>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>© {new Date().getFullYear()} CCET ACM Student Chapter. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <Link to="/privacy">Privacy Policy</Link>
              <span className={styles.divider}>|</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;