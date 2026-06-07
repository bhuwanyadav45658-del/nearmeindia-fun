import { Heart, ExternalLink, Github } from 'lucide-react';

const footerLinks = [
  { section: 'Discover', links: [
    { label: 'Home', href: '#/' },
    { label: 'About', href: '#/about' },
    { label: 'Emergency Guide', href: '#/emergency-guide' },
    { label: 'Blog', href: '#/blog' },
  ]},
  { section: 'Community', links: [
    { label: 'Contribute', href: '#/contribute' },
    { label: 'Contact', href: '#/contact' },
    { label: 'FAQ', href: '#/faq' },
  ]},
  { section: 'Legal', links: [
    { label: 'Privacy Policy', href: '#/privacy' },
    { label: 'Terms of Service', href: '#/terms' },
  ]},
  { section: 'Cities', links: [
    { label: 'Hyderabad', href: '#/city/hyderabad' },
    { label: 'Bengaluru', href: '#/city/bengaluru' },
    { label: 'Delhi', href: '#/city/delhi' },
    { label: 'Mumbai', href: '#/city/mumbai' },
    { label: 'Chennai', href: '#/city/chennai' },
    { label: 'Pune', href: '#/city/pune' },
  ]},
];

export default function Footer() {
  return (
    <footer className="site-footer-expanded">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-lockup">
            <span className="brand-pin">N</span>
            <div>
              <strong>NearMe India</strong>
              <small>Public utilities near you</small>
            </div>
          </div>
          <p className="footer-tagline">
            Emergency numbers, official locators, government services and civic utilities — built for fast mobile action across India.
          </p>
          <div className="footer-emergency-strip">
            <a href="tel:112">🚨 112 National</a>
            <a href="tel:108">🏥 108 Ambulance</a>
            <a href="tel:181">💜 181 Women</a>
            <a href="tel:1098">👶 1098 Child</a>
          </div>
        </div>

        <div className="footer-columns">
          {footerLinks.map(({ section, links }) => (
            <div className="footer-col" key={section}>
              <h4>{section}</h4>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={href}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          Made with <Heart size={14} aria-hidden="true" className="footer-heart" /> for India
        </span>
        <span className="footer-disclaimer">
          Not a substitute for emergency services. In danger, call 112 immediately.
        </span>
        <span>© 2026 NearMe India</span>
      </div>
    </footer>
  );
}
