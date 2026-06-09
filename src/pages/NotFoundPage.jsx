import { useEffect } from 'react';
import { Home, Search, AlertTriangle } from 'lucide-react';
import { updatePageMetadata } from '../utils/seo';

export default function NotFoundPage() {
  useEffect(() => {
    updatePageMetadata({
      title: '404 Page Not Found | NearMe India',
      description: 'The page you are looking for was not found. Return to NearMe India to search emergency numbers and public services across India.',
      keywords: '404, page not found, NearMe India, emergency services, public utilities',
      url: 'https://nearmeindia.fun/404',
    });
  }, []);
  return (
    <div className="page-wrapper">
      <section className="page-hero notfound-hero">
        <div className="page-hero-inner notfound-content">
          <div className="notfound-code">404</div>
          <h1>Page not found</h1>
          <p className="page-hero-subtitle">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="cta-actions">
            <a href="#/" className="btn-primary">
              <Home size={18} /> Go Home
            </a>
            <a href="#/emergency-guide" className="btn-secondary">
              <AlertTriangle size={18} /> Emergency Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
