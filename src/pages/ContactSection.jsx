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

        <div className="contact-content">
          <ContactInfo />
          <div className="contact-form slide-in-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
