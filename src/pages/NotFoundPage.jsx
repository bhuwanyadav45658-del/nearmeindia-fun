import { Home, Search, AlertTriangle } from 'lucide-react';

export default function NotFoundPage() {
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
