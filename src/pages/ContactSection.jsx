// ContactSection.jsx
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section id="contact" className="contact section section-alt">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Connect with us and be part of the computing revolution
          </p>
        </div>

        {/* Flex container to align and equalize cards */}
        <div style={{ display: "flex", gap: "20px", alignItems: "stretch" }}>
          <div className="contact-card" style={{ flex: 1 }}>
            <ContactInfo />
          </div>
          <div className="contact-card" style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
