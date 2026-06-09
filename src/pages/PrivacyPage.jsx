import { useEffect } from 'react';
import { updatePageMetadata } from '../utils/seo';

export default function PrivacyPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'Privacy Policy | NearMe India',
      description: 'Learn how NearMe India handles user privacy, data corrections, cookies, location, and contact information in this privacy policy.',
      keywords: 'privacy policy, NearMe India, data privacy, cookies, personal information, user rights',
      url: 'https://nearmeindia.fun/privacy',
    });
  }, []);

  return (
    <div className="page-wrapper">
      <section className="page-hero legal-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="page-hero-subtitle">Last updated: June 1, 2026</p>
        </div>
      </section>

      <section className="section-padded">
        <div className="wide-inner legal-content">
          <h2>1. Introduction</h2>
          <p>
            NearMe India ("we", "us", "our") operates the website nearmeindia.fun. This Privacy Policy explains
            how we collect, use, and protect your information when you use our Service.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>When you submit a correction report or contact form, we may collect:</p>
          <ul>
            <li>Name and email address (if provided)</li>
            <li>The correction details you submit</li>
            <li>Any feedback or messages you send</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>We collect minimal technical data:</p>
          <ul>
            <li>Basic server logs (IP address, browser type, access time)</li>
            <li>We do NOT use analytics trackers, advertising pixels, or third-party cookies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To process and verify data corrections</li>
            <li>To respond to your inquiries and feedback</li>
            <li>To maintain and improve the directory</li>
            <li>To ensure the security of the service</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell, trade, or share your personal information with third parties. We may share
            anonymized correction data with government departments for verification purposes.
          </p>

          <h2>5. Location Data</h2>
          <p>
            NearMe India does not request, track, or store your geographical location. All "near me"
            functionality uses the city you manually select from the dropdown menu.
          </p>

          <h2>6. Cookies</h2>
          <p>
            We use no tracking cookies. If we implement preferences storage in the future, it will use
            local browser storage only, with no data sent to external servers.
          </p>

          <h2>7. Phone Calls</h2>
          <p>
            All call buttons on NearMe India use standard telephone links (tel:) that connect you directly
            to the listed number through your device's phone application. We never intercept, route through,
            or record any phone calls.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            NearMe India does not knowingly collect personal information from children under 13. The
            emergency helplines listed (like 1098 Child Helpline) are direct government lines.
          </p>

          <h2>9. Data Security</h2>
          <p>
            We implement appropriate security measures to protect against unauthorized access, alteration,
            disclosure, or destruction of your information.
          </p>

          <h2>10. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated revision date.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            For any privacy-related questions, contact us at{' '}
            <a href="mailto:hello@nearmeindia.fun">hello@nearmeindia.fun</a> or visit our{' '}
            <a href="#/contact">Contact page</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
