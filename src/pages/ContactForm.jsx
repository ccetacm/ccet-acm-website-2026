// src/components/ContactForm.jsx
import React, { useEffect } from "react";
import { FaUser, FaEnvelope, FaTag, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  useEffect(() => {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitButton = contactForm.querySelector('button[type="submit"]');
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitButton.disabled = true;

      setTimeout(() => {
        showNotification("Message sent successfully! We'll get back to you soon.", "success");
        contactForm.reset();
        submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        submitButton.disabled = false;
        contactForm.style.transform = "scale(0.98)";
        setTimeout(() => (contactForm.style.transform = "scale(1)"), 200);
      }, 2000);
    });
  }, []);

  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${
          type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"
        }"></i><span>${message}</span>
      </div>
      <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    document.body.appendChild(notification);
  }

  return (
    <div
      className="contact-card slide-in-right"
      style={{
        flex: "1",
        background: "#fff",
        borderRadius: "12px",
        padding: "25px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "93%",
      }}
    >
      <form id="contactForm" className="fade-in-up" style={{ width: "100%" }}>
        <h3 style={{ marginBottom: "15px", fontWeight: "600" }}>Send us a Message</h3>

        <div className="form-group" style={{ position: "relative", marginBottom: "12px" }}>
          <input type="text" className="form-control" placeholder="Your Name" required style={{ paddingLeft: "35px" }} />
          <FaUser style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#1e88e5" }} />
        </div>

        <div className="form-group" style={{ position: "relative", marginBottom: "12px" }}>
          <input type="email" className="form-control" placeholder="Your Email" required style={{ paddingLeft: "35px" }} />
          <FaEnvelope style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#1e88e5" }} />
        </div>

        <div className="form-group" style={{ position: "relative", marginBottom: "12px" }}>
          <input type="text" className="form-control" placeholder="Subject" required style={{ paddingLeft: "35px" }} />
          <FaTag style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#1e88e5" }} />
        </div>

        <div className="form-group" style={{ marginBottom: "12px" }}>
          <textarea className="form-control" rows="4" placeholder="Your Message" required style={{ paddingLeft: "10px" }}></textarea>
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary btn-full" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            Send Message <FaPaperPlane />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
