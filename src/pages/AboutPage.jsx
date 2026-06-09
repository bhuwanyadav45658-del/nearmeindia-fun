import { useEffect } from 'react';
import { Shield, Users, Globe, Target, CheckCircle, TrendingUp, Zap, MapPin, BarChart3, Award } from 'lucide-react';
import { updatePageMetadata } from '../utils/seo';

const stats = [
  { value: '15+', label: 'Service Categories', icon: BarChart3 },
  { value: '7', label: 'Cities Covered', icon: MapPin },
  { value: '20+', label: 'Verified Listings', icon: CheckCircle },
  { value: '6', label: 'Official Sources', icon: Award },
];

const values = [
  {
    icon: Shield,
    title: 'Trust First',
    description: 'Every listing links back to an official government source. We verify helplines, addresses and hours against state portals and UIDAI records.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Anyone can report a correction. Wrong phone numbers, closed offices, or moved locations — the community keeps data fresh.',
  },
  {
    icon: Globe,
    title: 'For All of India',
    description: 'Starting with Hyderabad and Telangana, expanding city by city. Our goal: every district, every block, every gram panchayat.',
  },
  {
    icon: Zap,
    title: 'Mobile-First Speed',
    description: 'Designed for 2G/3G networks and budget phones. No heavy images, no tracking scripts, no login walls. Just fast utility access.',
  },
  {
    icon: Target,
    title: 'Action-Oriented',
    description: 'Call buttons, map links, visit checklists and status badges — everything is designed to move you from search to action in seconds.',
  },
  {
    icon: TrendingUp,
    title: 'Open & Growing',
    description: 'NearMe India is built to scale. New cities, new categories, new data sources — contributed by government data, volunteers and automated scrapers.',
  },
];

const timeline = [
  { year: '2026', event: 'NearMe India launched with Hyderabad and Telangana coverage' },
  { year: '2026', event: 'Expanded to 7 cities: Bengaluru, Chennai, Delhi, Mumbai, Pune' },
  { year: '2026', event: '15 service categories covering emergency to civic utilities' },
  { year: 'Next', event: 'Community correction system, more cities, real-time data feeds' },
];

export default function AboutPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'About NearMe India | Mobile-first public service directory',
      description: 'Learn how NearMe India connects Indians to emergency numbers, government offices, Aadhaar centers and civic utilities with fast mobile-first search.',
      keywords: 'NearMe India, about, public services, emergency directory, mobile-first, Aadhaar, government services',
      url: 'https://nearmeindia.fun/about',
    });
  }, []);

  return (
    <div className="page-wrapper">
      <section className="page-hero about-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">About Us</p>
          <h1>Connecting India to its public services.</h1>
          <p className="page-hero-subtitle">
            NearMe India is a mobile-first, community-verified directory of emergency numbers, government offices,
            and civic utilities — built to help Indians find help fast, anywhere in the country.
          </p>
        </div>
      </section>

      <section className="section-padded" aria-labelledby="mission-title">
        <div className="wide-inner">
          <div className="split-grid">
            <div>
              <p className="eyebrow">Our Mission</p>
              <h2 id="mission-title">No one should struggle to find public help.</h2>
              <p className="body-text">
                In India, critical public service information is scattered across dozens of government websites,
                PDF documents, and outdated directories. During emergencies — or even routine civic tasks like
                updating your Aadhaar or getting a driving license — finding the right number, address, or
                process takes far too long.
              </p>
              <p className="body-text">
                NearMe India solves this by aggregating verified public service data into a single,
                mobile-first interface with call buttons, map links, visit checklists, and community corrections.
              </p>
            </div>
            <div className="stat-grid">
              {stats.map(({ value, label, icon: Icon }) => (
                <div className="stat-card" key={label}>
                  <Icon size={24} aria-hidden="true" />
                  <span className="stat-value">{value}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padded section-alt" aria-labelledby="values-title">
        <div className="wide-inner">
          <p className="eyebrow">Our Values</p>
          <h2 id="values-title">Built on principles that matter</h2>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, description }) => (
              <div className="value-card" key={title}>
                <div className="value-icon">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded" aria-labelledby="timeline-title">
        <div className="wide-inner">
          <p className="eyebrow">Journey</p>
          <h2 id="timeline-title">Our timeline</h2>
          <div className="timeline">
            {timeline.map(({ year, event }, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-marker">
                  <span className="timeline-dot" />
                  {i < timeline.length - 1 && <span className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{year}</span>
                  <p>{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded section-cta">
        <div className="wide-inner cta-box">
          <h2>Want to help expand coverage?</h2>
          <p>We're looking for volunteers, data contributors, and city coordinators across India.</p>
          <div className="cta-actions">
            <a href="#/contribute" className="btn-primary">Start Contributing</a>
            <a href="#/contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
