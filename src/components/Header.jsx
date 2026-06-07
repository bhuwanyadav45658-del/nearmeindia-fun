import { useState } from 'react';
import { Menu, Siren, X, Home, Info, Phone, HelpCircle, BookOpen, Heart, ShieldAlert } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#/', icon: Home },
  { label: 'About', href: '#/about', icon: Info },
  { label: 'Emergency Guide', href: '#/emergency-guide', icon: ShieldAlert },
  { label: 'Blog', href: '#/blog', icon: BookOpen },
  { label: 'FAQ', href: '#/faq', icon: HelpCircle },
  { label: 'Contribute', href: '#/contribute', icon: Heart },
  { label: 'Contact', href: '#/contact', icon: Phone },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a className="brand-lockup" href="#/" aria-label="NearMe India home">
          <span className="brand-pin">N</span>
          <span>
            <strong>NearMe India</strong>
            <small>Public utilities near you</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          <a href="#/about">About</a>
          <a href="#/emergency-guide">Emergency Guide</a>
          <a href="#/blog">Blog</a>
          <a href="#/faq">FAQ</a>
          <a href="#/contribute">Contribute</a>
          <a href="#/contact">Contact</a>
          <a className="nav-call" href="tel:112">
            <Siren size={17} aria-hidden="true" />
            112
          </a>
        </nav>

        <div className="mobile-nav-controls">
          <a className="nav-call" href="tel:112">
            <Siren size={17} aria-hidden="true" />
            112
          </a>
          <button
            className="hamburger-btn"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-overlay" role="presentation" onClick={() => setMenuOpen(false)}>
          <nav
            className="mobile-drawer"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-header">
              <span className="brand-pin">N</span>
              <strong>NearMe India</strong>
              <button
                className="close-button"
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <ul className="drawer-links">
              {navLinks.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <a href={href} onClick={() => setMenuOpen(false)}>
                    <Icon size={20} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="drawer-emergency">
              <a href="tel:112" className="big-call">
                <Siren size={18} aria-hidden="true" />
                Call 112 — National Emergency
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
