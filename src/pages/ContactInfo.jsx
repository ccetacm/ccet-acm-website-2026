// ContactInfo.jsx
import { FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="contact-info slide-in-left">
      <div className="info-card fade-in-up">
        <h3>Contact Information</h3>

        <div className="contact-item">
          <FaMapMarkerAlt style={{ color: "#1e88e5" }} />
          <div>
            <strong>Address</strong>
            <p>
              Chandigarh College of Engineering and Technology
              <br />
              Sector 26, Chandigarh
            </p>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope style={{ color: "#1e88e5" }} />
          <div>
            <strong>Email</strong>
            <p>ccet.acm@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <FaGlobe style={{ color: "#1e88e5" }} />
          <div>
            <strong>Website</strong>
            <p>ccet.acm.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
