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
        setTimeout(() => {
          contactForm.style.transform = "scale(1)";
        }, 200);
      }, 2000);
    });

    const formControls = contactForm.querySelectorAll(".form-control");
    formControls.forEach((control) => {
      control.addEventListener("focus", () => control.parentElement.classList.add("focused"));
      control.addEventListener("blur", () => {
        if (!control.value) control.parentElement.classList.remove("focused");
      });
    });
  }, []);

  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${
          type === "success"
            ? "check-circle"
            : type === "error"
            ? "exclamation-circle"
            : "info-circle"
        }"></i>
        <span>${message}</span>
      </div>
      <button class="notification-close"><i class="fas fa-times"></i></button>
    `;

    if (!document.getElementById("notification-styles")) {
      const style = document.createElement("style");
      style.id = "notification-styles";
      style.textContent = `
        .notification {
          position: fixed;
          top: 20px;
          right: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          z-index: 10000;
          min-width: 300px;
          opacity: 0;
          transform: translateX(400px);
          transition: all 0.3s ease;
        }
        .notification.show {
          opacity: 1;
          transform: translateX(0);
        }
        .notification-success { border-left: 4px solid #27ae60; }
        .notification-error { border-left: 4px solid #e74c3c; }
        .notification-info { border-left: 4px solid #3498db; }
        .notification-content {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 20px;
        }
        .notification-content i { color: var(--primary-color); }
        .notification-close {
          position: absolute;
          top: 5px;
          right: 5px;
          background: none;
          border: none;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .notification-close:hover { opacity: 1; }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add("show"), 100);
    setTimeout(() => hideNotification(notification), 5000);

    const closeButton = notification.querySelector(".notification-close");
    closeButton.addEventListener("click", () => hideNotification(notification));

    function hideNotification(notif) {
      notif.classList.remove("show");
      setTimeout(() => {
        if (notif.parentNode) notif.parentNode.removeChild(notif);
      }, 300);
    }
  }

  return (
    <form className="form fade-in-up" id="contactForm">
      <h3>Send us a Message</h3>

      {/* Name */}
      <div className="form-group" style={{ position: "relative" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          required
          style={{ paddingLeft: "35px" }}
        />
        <FaUser
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#1e88e5",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Email */}
      <div className="form-group" style={{ position: "relative" }}>
        <input
          type="email"
          className="form-control"
          placeholder="Your Email"
          required
          style={{ paddingLeft: "35px" }}
        />
        <FaEnvelope
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#1e88e5",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Subject */}
      <div className="form-group" style={{ position: "relative" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Subject"
          required
          style={{ paddingLeft: "35px" }}
        />
        <FaTag
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#1e88e5",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Message */}
      <div className="form-group" style={{ position: "relative" }}>
        <textarea
          className="form-control"
          rows="5"
          placeholder="Your Message"
          required
          style={{ paddingLeft: "35px" }}
        ></textarea>
      </div>

      {/* Submit */}
      <div className="form-btn-wrapper" style={{ textAlign: "center" }}>
        <button type="submit" className="btn btn-primary btn-full">
          Send Message <FaPaperPlane />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
