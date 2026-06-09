import { Heart, GitBranch, MapPin, FileText, Send, CheckCircle, Users, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { updatePageMetadata } from '../utils/seo';

const contributionWays = [
  {
    icon: MapPin,
    title: 'City Coordinator',
    desc: 'Own the coverage for your city. Verify listings, add new services, and keep data fresh for your area.',
    commitment: '2-4 hours/week',
  },
  {
    icon: FileText,
    title: 'Data Contributor',
    desc: 'Help us verify phone numbers, addresses, and operating hours against official government sources.',
    commitment: '1-2 hours/week',
  },
  {
    icon: GitBranch,
    title: 'Developer',
    desc: 'Contribute code, fix bugs, or build new features. Our codebase is built with React and Vite.',
    commitment: 'Flexible',
  },
  {
    icon: Globe,
    title: 'Translator',
    desc: 'Help translate the interface and listings into regional languages — Hindi, Telugu, Tamil, and more.',
    commitment: 'Project-based',
  },
];

const impactStats = [
  { value: '750M+', label: 'Smartphone users in India' },
  { value: '112', label: 'National emergency number' },
  { value: '28+', label: 'States to cover' },
  { value: '∞', label: 'Lives to impact' },
];

export default function ContributePage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageMetadata({
      title: 'Contribute to NearMe India | Add city coverage and corrections',
      description: 'Become a volunteer, city coordinator, data contributor, or translator for NearMe India. Help us grow verified public service coverage across India.',
      keywords: 'contribute, volunteer, city coordinator, data contributor, NearMe India, public service data',
      url: 'https://nearmeindia.fun/contribute',
    });
  }, []);

  return (
    <div className="page-wrapper">
      <section className="page-hero contribute-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Contribute</p>
          <h1>Help India find help faster.</h1>
          <p className="page-hero-subtitle">
            NearMe India is a community project. Every contribution — a verified phone number, a corrected address, a new city — makes public services more accessible.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="wide-inner">
          <div className="impact-bar">
            {impactStats.map(({ value, label }) => (
              <div className="impact-stat" key={label}>
                <span className="impact-value">{value}</span>
                <span className="impact-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded section-alt" aria-labelledby="ways-title">
        <div className="wide-inner">
          <p className="eyebrow">Ways to Help</p>
          <h2 id="ways-title">Choose how you'd like to contribute</h2>
          <div className="contribute-grid">
            {contributionWays.map(({ icon: Icon, title, desc, commitment }) => (
              <div className="contribute-card" key={title}>
                <div className="contribute-icon"><Icon size={32} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="contribute-commitment">⏱ {commitment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded" aria-labelledby="volunteer-title">
        <div className="wide-inner">
          <div className="contact-grid">
            <div className="contact-info-column">
              <p className="eyebrow">Get Started</p>
              <h2 id="volunteer-title">Volunteer with us</h2>
              <p className="body-text">Fill out this form and we'll connect you with the right team. Whether you want to verify data for your city, contribute code, or help with translations — there's a place for you.</p>
              <div className="checklist">
                <h3><CheckCircle size={18} /> What we provide</h3>
                <ul>
                  <li>Verification guides and templates</li>
                  <li>Access to our data management tools</li>
                  <li>Community support via group chats</li>
                  <li>Public recognition on our Contributors page</li>
                  <li>Certificate of contribution</li>
                </ul>
              </div>
            </div>
            <div className="contact-form-column">
              <div className="contact-form-card">
                <div className="contact-form-header">
                  <Users size={24} />
                  <h2>Join the team</h2>
                </div>
                {submitted ? (
                  <div className="success-box" role="status">
                    <Heart size={22} />
                    Thank you for volunteering! We'll reach out within 48 hours to get you started.
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="contact-form">
                    <div className="form-row">
                      <label>Name <input type="text" name="name" placeholder="Your name" required /></label>
                      <label>City <input type="text" name="city" placeholder="Your city" required /></label>
                    </div>
                    <label>Email <input type="email" name="email" placeholder="you@example.com" required /></label>
                    <label>
                      How would you like to help?
                      <select name="role" defaultValue="coordinator">
                        <option value="coordinator">City Coordinator</option>
                        <option value="data">Data Contributor</option>
                        <option value="developer">Developer</option>
                        <option value="translator">Translator</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                    <label>Tell us about yourself <textarea name="about" rows="4" placeholder="Your experience, availability, and what excites you about NearMe India..." required /></label>
                    <button className="btn-primary" type="submit"><Send size={18} /> Submit Application</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
