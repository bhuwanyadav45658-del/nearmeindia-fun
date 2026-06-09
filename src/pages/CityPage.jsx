import { useEffect } from 'react';
import { MapPin, Phone, Siren, ChevronRight } from 'lucide-react';
import { categories, directory } from '../data/directory';
import { updatePageMetadata } from '../utils/seo';

const cityData = {
  hyderabad: { name: 'Hyderabad', state: 'Telangana', population: '1.0 Cr+', emergency: '112', police: '100', ambulance: '108', fire: '101' },
  secunderabad: { name: 'Secunderabad', state: 'Telangana', population: '35 Lakh+', emergency: '112', police: '100', ambulance: '108', fire: '101' },
  bengaluru: { name: 'Bengaluru', state: 'Karnataka', population: '1.2 Cr+', emergency: '112', police: '100', ambulance: '108', fire: '101' },
  chennai: { name: 'Chennai', state: 'Tamil Nadu', population: '87 Lakh+', emergency: '112', police: '100', ambulance: '108', fire: '101' },
  delhi: { name: 'Delhi', state: 'Delhi', population: '2.0 Cr+', emergency: '112', police: '100', ambulance: '102', fire: '101' },
  mumbai: { name: 'Mumbai', state: 'Maharashtra', population: '2.1 Cr+', emergency: '112', police: '100', ambulance: '108', fire: '101' },
  pune: { name: 'Pune', state: 'Maharashtra', population: '72 Lakh+', emergency: '112', police: '100', ambulance: '108', fire: '101' },
  ujjain: { name: 'Ujjain', state: 'Madhya Pradesh', population: '60 Lakh+', emergency: '112', police: '100', ambulance: '108', fire: '101' },
};

const citySearchTopics = {
  ujjain: [
    'Mahakaleshwar Temple emergency helpline',
    'Nearest police station to Mahakaleshwar Temple',
    'Ujjain government hospital address',
    'Ujjain Aadhaar center timing',
    'Public toilet near Ujjain railway station',
    'Ujjain EV charger near bus stand',
    'Drinking water point near Mahakaleshwar Temple',
    'Ujjain air quality today',
    'Ujjain women helpline number',
    'Ujjain child helpline 1098',
    'Ujjain ambulance 108 call',
    'Mahakaleshwar Temple lost and found',
    'Ujjain RTO office location',
    'Ujjain passport office nearest Indore',
    'Ujjain district hospital emergency',
    'Ujjain fire station contact',
    'Temple guide for Mahakaleshwar',
    'Ujjain public bus stop toilets',
    'Ujjain medical clinic near temple',
    'Ujjain police station phone number',
    'Ujjain civic utility services',
    'Ujjain public service directory',
    'How to reach Mahakaleshwar Temple from Ujjain station',
    'Ujjain urgent care clinic',
    'Ujjain pilgrimage safety tips',
    'Nearest blood bank Ujjain',
    'Ujjain temple security help',
    'Ujjain baby care center',
    'Ujjain senior citizen helpline',
    'Ujjain health center on Tinwari Road',
    'Ujjain temple crowd control number',
    'Ujjain local service helpline',
    'Ujjain open public toilets at night',
    'Ujjain verified emergency numbers',
    'Ujjain government office phone list',
    'Ujjain Mahakaleshwar temple nearby services',
    'Ujjain official public utility search',
    'Ujjain hospital nearest Mahakaleshwar',
    'Ujjain train station water facility',
    'Ujjain women safety support',
    'Ujjain child protection services',
    'Ujjain temple counter services',
    'Ujjain public transport emergency',
    'Ujjain help for foreign pilgrims',
    'Ujjain medical aid near temple',
    'Ujjain police help for tourists',
    'Ujjain city emergency support',
    'Ujjain local government helpline'
  ]
};

export default function CityPage({ citySlug }) {
  const city = cityData[citySlug];
  if (!city) {
    return (
      <div className="page-wrapper">
        <section className="page-hero"><div className="page-hero-inner">
          <h1>City not found</h1>
          <p className="page-hero-subtitle">We don't have coverage for this city yet. <a href="#/contribute">Help us add it!</a></p>
        </div></section>
      </div>
    );
  }

  useEffect(() => {
    const title = `${city.name} public services, emergency numbers & Mahakaleshwar temple help | NearMe India`;
    const description = `Find verified emergency numbers, police support, government hospitals, Aadhaar centers, public toilets and Mahakaleshwar temple assistance in ${city.name}, ${city.state}.`;
    const keywords = `Ujjain, Mahakaleshwar Temple, Ujjain emergency numbers, Ujjain police, Ujjain hospitals, Ujjain Aadhaar, Ujjain public toilets, Ujjain EV charging, Ujjain air quality`;
    updatePageMetadata({
      title,
      description,
      keywords,
      url: `https://nearmeindia.fun/city/${citySlug}`,
      image: 'https://nearmeindia.fun/visuals/civic-signal-map.svg',
    });
  }, [city, citySlug]);

  const cityListings = directory.filter(
    (item) => item.city.toLowerCase() === city.name.toLowerCase() || item.state === city.state || item.city === 'India-wide'
  );
  const searchTopics = citySearchTopics[citySlug] || [];

  const coveredCategories = [...new Set(cityListings.map((i) => i.category))];

  return (
    <div className="page-wrapper">
      <section className="page-hero city-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">{city.state}</p>
          <h1>{city.name}</h1>
          <p className="page-hero-subtitle">
            Find emergency numbers, government offices, and civic utilities in {city.name}, {city.state}.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="wide-inner">
          <div className="city-stats-grid">
            <div className="city-stat-card">
              <span className="stat-value">{city.population}</span>
              <span className="stat-label">Population</span>
            </div>
            <div className="city-stat-card">
              <span className="stat-value">{cityListings.length}</span>
              <span className="stat-label">Services Listed</span>
            </div>
            <div className="city-stat-card">
              <span className="stat-value">{coveredCategories.length}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="city-stat-card">
              <span className="stat-value">{city.state}</span>
              <span className="stat-label">State</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padded section-alt">
        <div className="wide-inner">
          <p className="eyebrow">Emergency</p>
          <h2>Emergency numbers for {city.name}</h2>
          <div className="city-emergency-strip">
            <a href={`tel:${city.emergency}`} className="big-call"><Siren size={18} />{city.emergency} Emergency</a>
            <a href={`tel:${city.police}`} className="big-call"><Phone size={18} />{city.police} Police</a>
            <a href={`tel:${city.ambulance}`} className="big-call"><Phone size={18} />{city.ambulance} Ambulance</a>
            <a href={`tel:${city.fire}`} className="big-call"><Phone size={18} />{city.fire} Fire</a>
          </div>
        </div>
      </section>

      <section className="section-padded">
        <div className="wide-inner">
          <p className="eyebrow">Browse</p>
          <h2>Service categories in {city.name}</h2>
          <div className="city-category-grid">
            {categories.filter((c) => coveredCategories.includes(c.slug)).map((cat) => (
              <a href={`#/category/${cat.slug}`} className={`city-category-card tone-${cat.tone}`} key={cat.slug}>
                <strong>{cat.label}</strong>
                <span>{cityListings.filter((i) => i.category === cat.slug).length} listings</span>
                <ChevronRight size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded section-alt">
        <div className="wide-inner">
          <p className="eyebrow">All Services</p>
          <h2>{cityListings.length} services in {city.name}</h2>
          <div className="city-listings-list">
            {cityListings.map((item) => (
              <div className="city-listing-card" key={item.id}>
                <div>
                  <strong>{item.title}</strong>
                  <span className="city-listing-type">{item.type}</span>
                </div>
                <div className="city-listing-actions">
                  {item.call && <a href={`tel:${item.call}`} className="action-button primary"><Phone size={15} />Call</a>}
                  <a href={item.mapUrl} target="_blank" rel="noreferrer" className="action-button ghost"><MapPin size={15} />Map</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded section-alt">
        <div className="wide-inner">
          <p className="eyebrow">Most searched</p>
          <h2>Popular Ujjain search topics</h2>
          <p className="body-text">
            These are the most searched phrases related to Ujjain public services, Mahakaleshwar Temple help, emergency support, and city utilities.
          </p>
          <div className="query-row">
            {searchTopics.map((topic) => (
              <button key={topic} type="button" aria-label={topic}>
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded section-cta">
        <div className="wide-inner cta-box">
          <h2>Help us improve {city.name} coverage</h2>
          <p>Know a public service that's missing? Report corrections or add new listings.</p>
          <div className="cta-actions">
            <a href="#/contribute" className="btn-primary">Contribute</a>
            <a href="#/" className="btn-secondary">Search Directory</a>
          </div>
        </div>
      </section>
    </div>
  );
}
