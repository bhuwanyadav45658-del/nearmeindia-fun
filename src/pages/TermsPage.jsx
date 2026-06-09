import { useEffect } from 'react';
import { updatePageMetadata } from '../utils/seo';

export default function TermsPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'Terms of Service | NearMe India',
      description: 'Read the terms of service for NearMe India, including accuracy disclaimers, acceptable use, and liability limits for public service information.',
      keywords: 'terms of service, NearMe India, legal, acceptable use, disclaimer, liability',
      url: 'https://nearmeindia.fun/terms',
    });
  }, []);

  return (
    <div className="page-wrapper">
      <section className="page-hero legal-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p className="page-hero-subtitle">Last updated: June 1, 2026</p>
        </div>
      </section>

      <section className="section-padded">
        <div className="wide-inner legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using NearMe India (nearmeindia.fun), you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            NearMe India is a free, public utility directory that aggregates and displays verified public
            service information including emergency numbers, government office locations, and civic utilities
            across India. The Service is provided "as is" for informational purposes.
          </p>

          <h2>3. Not an Emergency Service</h2>
          <p>
            <strong>IMPORTANT:</strong> NearMe India is NOT an emergency service and cannot dispatch police,
            fire, medical, or any other emergency response. In any emergency, always call 112 (India's
            unified emergency number) or the appropriate local emergency number directly.
          </p>

          <h2>4. Accuracy of Information</h2>
          <p>
            While we strive to maintain accurate and up-to-date information by verifying against official
            government sources, we cannot guarantee the accuracy, completeness, or timeliness of all listings.
            Public service details such as phone numbers, addresses, operating hours, and services may change
            without notice.
          </p>
          <ul>
            <li>Always verify critical information by calling the listed number before visiting</li>
            <li>Each listing displays a verification date for reference</li>
            <li>We are not responsible for actions taken based on information found on this site</li>
          </ul>

          <h2>5. User Contributions</h2>
          <p>
            When you submit a correction or report through NearMe India:
          </p>
          <ul>
            <li>You grant us a non-exclusive right to use, review, and publish the correction</li>
            <li>You confirm the information is accurate to the best of your knowledge</li>
            <li>You will not submit false, misleading, or malicious information</li>
            <li>We reserve the right to accept, modify, or reject any submission</li>
          </ul>

          <h2>6. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Submit false emergency information or corrections</li>
            <li>Attempt to disrupt or overload the Service</li>
            <li>Scrape, copy, or redistribute content without permission</li>
            <li>Impersonate a government official or entity</li>
          </ul>

          <h2>7. Third-Party Links</h2>
          <p>
            NearMe India contains links to external government websites and services. We are not responsible
            for the content, accuracy, or practices of these third-party sites. Using external links is at
            your own risk.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            The NearMe India brand, design, and original content are protected. Government data aggregated
            on this platform remains the property of the respective government bodies.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, NearMe India and its operators shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages arising from your use of
            the Service, including but not limited to:
          </p>
          <ul>
            <li>Inaccurate phone numbers or addresses</li>
            <li>Delayed or failed emergency response</li>
            <li>Closed or relocated services</li>
            <li>Any damages resulting from reliance on the information provided</li>
          </ul>

          <h2>10. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Service after
            modifications constitutes acceptance of the updated Terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of India. Any disputes arising from the use of the
            Service shall be subject to the jurisdiction of courts in Hyderabad, Telangana, India.
          </p>

          <h2>12. Contact</h2>
          <p>
            For any questions about these Terms, contact us at{' '}
            <a href="mailto:hello@nearmeindia.fun">hello@nearmeindia.fun</a> or visit our{' '}
            <a href="#/contact">Contact page</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
