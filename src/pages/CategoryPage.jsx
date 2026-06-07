import { MapPin, Phone, ChevronRight, Search, ExternalLink } from 'lucide-react';
import { categories, directory } from '../data/directory';
import { useState, useMemo } from 'react';

const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

export default function CategoryPage({ categorySlug }) {
  const cat = categoryBySlug[categorySlug];
  const [searchTerm, setSearchTerm] = useState('');

  const listings = useMemo(() => {
    const base = directory.filter((item) => item.category === categorySlug);
    if (!searchTerm) return base;
    const term = searchTerm.toLowerCase();
    return base.filter((item) =>
      `${item.title} ${item.type} ${item.city} ${item.locality} ${item.tags.join(' ')}`.toLowerCase().includes(term)
    );
  }, [categorySlug, searchTerm]);

  if (!cat) {
    return (
      <div className="page-wrapper">
        <section className="page-hero"><div className="page-hero-inner">
          <h1>Category not found</h1>
          <p className="page-hero-subtitle"><a href="#/">Return to directory</a></p>
        </div></section>
      </div>
    );
  }

  const relatedCategories = categories.filter((c) => c.slug !== categorySlug).slice(0, 6);

  return (
    <div className="page-wrapper">
      <section className={`page-hero category-hero tone-bg-${cat.tone}`}>
        <div className="page-hero-inner">
          <p className="eyebrow">Category</p>
          <h1>{cat.label}</h1>
          <p className="page-hero-subtitle">
            Find verified {cat.label.toLowerCase()} near you across India with call buttons, map links, and visit checklists.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="wide-inner">
          <div className="category-page-search">
            <Search size={20} />
            <input
              type="search"
              placeholder={`Search ${cat.label.toLowerCase()}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="split-grid">
            <div>
              <p className="eyebrow">{listings.length} results</p>
              <h2>{cat.label} listings</h2>
              <div className="category-listings">
                {listings.length === 0 ? (
                  <div className="faq-empty">
                    <Search size={32} />
                    <p>No listings match your search. Try a different term or <a href="#/contribute">add a new listing</a>.</p>
                  </div>
                ) : (
                  listings.map((item) => (
                    <div className="category-listing-card" key={item.id}>
                      <div className="category-listing-top">
                        <div>
                          <h3>{item.title}</h3>
                          <span className="city-listing-type">{item.type}</span>
                        </div>
                        <span className={`status-pill priority-${item.priority}`}>{item.status}</span>
                      </div>
                      <div className="category-listing-meta">
                        <span><MapPin size={14} />{item.locality}, {item.city}</span>
                        <span>{item.hours}</span>
                      </div>
                      {item.note && <p className="category-listing-note">{item.note}</p>}
                      <div className="category-listing-actions">
                        {item.call && (
                          <a href={`tel:${item.call}`} className="action-button primary">
                            <Phone size={15} />Call {item.call}
                          </a>
                        )}
                        <a href={item.mapUrl} target="_blank" rel="noreferrer" className="action-button ghost">
                          <ExternalLink size={15} />Open
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <aside className="category-sidebar">
              <div className="sidebar-box">
                <h3>Related Categories</h3>
                <div className="sidebar-links">
                  {relatedCategories.map((rc) => (
                    <a href={`#/category/${rc.slug}`} key={rc.slug} className="sidebar-link">
                      {rc.label}
                      <ChevronRight size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="sidebar-box sidebar-cta">
                <h3>Missing a listing?</h3>
                <p>Help us improve {cat.label.toLowerCase()} coverage by contributing data.</p>
                <a href="#/contribute" className="btn-primary">Contribute</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
