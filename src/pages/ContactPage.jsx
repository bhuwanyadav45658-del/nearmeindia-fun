import { Phone, Mail, MapPin, Send, Clock, MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page-wrapper">
      <section className="page-hero contact-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Contact Us</p>
          <h1>Get in touch with NearMe India.</h1>
          <p className="page-hero-subtitle">
            Have a question, suggestion, or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="wide-inner">
          <div className="contact-grid">
            <div className="contact-info-column">
              <h2>Reach us directly</h2>
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <Mail size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>hello@nearmeindia.fun</p>
                    <small>We reply within 24 hours</small>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <Phone size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>+91 90575 83676</p>
                    <small>Mon–Sat, 10 AM – 6 PM IST</small>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <MapPin size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p>Hyderabad, Telangana</p>
                    <small>India</small>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <Clock size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>Support Hours</h3>
                    <p>Mon – Sat, 10 AM – 6 PM</p>
                    <small>IST (UTC+5:30)</small>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h3>Connect with us</h3>
                <div className="social-links">
                  <a href="https://twitter.com/nearmeindia" target="_blank" rel="noreferrer" className="social-btn">
                    𝕏 Twitter
                  </a>
                  <a href="https://instagram.com/nearmeindia" target="_blank" rel="noreferrer" className="social-btn">
                    📸 Instagram
                  </a>
                  <a href="https://github.com/nearmeindia" target="_blank" rel="noreferrer" className="social-btn">
                    🐙 GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-column">
              <div className="contact-form-card">
                <div className="contact-form-header">
                  <MessageCircle size={24} aria-hidden="true" />
                  <h2>Send us a message</h2>
                </div>

                {submitted ? (
                  <div className="success-box" role="status">
                    <Sparkles size={22} aria-hidden="true" />
                    Thank you! Your message has been received. We'll get back to you within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <label>
                        Full Name
                        <input type="text" name="name" placeholder="Your full name" required />
                      </label>
                      <label>
                        Email
                        <input type="email" name="email" placeholder="you@example.com" required />
                      </label>
                    </div>
                    <label>
                      Subject
                      <select name="subject" defaultValue="general">
                        <option value="general">General Inquiry</option>
                        <option value="correction">Data Correction</option>
                        <option value="partnership">Partnership</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="bug">Bug Report</option>
                        <option value="media">Media & Press</option>
                      </select>
                    </label>
                    <label>
                      Phone (optional)
                      <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" />
                    </label>
                    <label>
                      Message
                      <textarea name="message" rows="5" placeholder="Tell us how we can help..." required />
                    </label>
                    <button className="btn-primary" type="submit">
                      <Send size={18} aria-hidden="true" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padded section-alt">
        <div className="wide-inner">
          <div className="map-placeholder">
            <MapPin size={48} aria-hidden="true" />
            <h3>Visit us in Hyderabad</h3>
            <p>Hyderabad, Telangana, India 500001</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hyderabad+Telangana"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
