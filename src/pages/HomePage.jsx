import { useEffect, useMemo, useState } from 'react';
import {
  Accessibility, BadgeCheck, BatteryCharging, BriefcaseBusiness, CarFront,
  ChevronRight, ClipboardCheck, Droplets, ExternalLink, Flame, GlassWater,
  HeartHandshake, Hospital, LocateFixed, MapPin, Navigation, PawPrint,
  Phone, Search, Shield, Siren, SlidersHorizontal, Sparkles, ScrollText,
  Send, Star, Wind, X
} from 'lucide-react';
import { categories, cityOptions, directory, officialSources, popularQueries, routeSeeds } from '../data/directory';
import { updatePageMetadata } from '../utils/seo';

const iconMap = {
  Accessibility, BadgeCheck, BatteryCharging, BriefcaseBusiness, CarFront,
  Droplets, Flame, GlassWater, HeartHandshake, Hospital, PawPrint,
  ScrollText, Shield, Siren, Wind,
};

const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

function normalize(v) { return v.toLowerCase().trim(); }

function buildSearchText(item) {
  return [item.title, item.type, item.locality, item.city, item.state, item.status, item.address, item.note, item.tags.join(' ')]
    .filter(Boolean).join(' ').toLowerCase();
}

const cityState = {
  Hyderabad: 'Telangana', Secunderabad: 'Telangana', Bengaluru: 'Karnataka',
  Chennai: 'Tamil Nadu', Delhi: 'Delhi', Mumbai: 'Maharashtra', Pune: 'Maharashtra',
  Ujjain: 'Madhya Pradesh',
};

function scoreItem(item) {
  if (item.priority === 'critical') return 0;
  if (item.priority === 'high') return 1;
  if (item.priority === 'medium') return 2;
  return 3;
}

function formatPhone(phone) {
  if (!phone) return '';
  if (phone.length <= 4) return phone;
  if (phone.startsWith('1800')) return `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`;
  if (phone.startsWith('040')) return `${phone.slice(0, 3)} ${phone.slice(3, 7)} ${phone.slice(7)}`;
  return phone;
}

function ResultCard({ item, selected, onSelect }) {
  const category = categoryBySlug[item.category];
  const Icon = iconMap[category?.icon] ?? MapPin;
  return (
    <article className={`result-card tone-${category?.tone ?? 'ink'} ${selected ? 'is-selected' : ''}`}>
      <div className="result-topline">
        <span className="category-chip"><Icon size={16} aria-hidden="true" />{category?.shortLabel ?? category?.label}</span>
        <span className={`status-pill priority-${item.priority}`}>{item.status}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.type}</p>
      <div className="meta-grid">
        <span><MapPin size={15} aria-hidden="true" />{item.locality}, {item.city}</span>
        <span><Navigation size={15} aria-hidden="true" />{item.distance}</span>
      </div>
      <div className="card-actions">
        {item.call ? (
          <a className="action-button primary" href={`tel:${item.call}`} title={`Call ${item.title}`}>
            <Phone size={17} aria-hidden="true" />{formatPhone(item.call)}
          </a>
        ) : (
          <a className="action-button primary" href={item.mapUrl} target="_blank" rel="noreferrer">
            <LocateFixed size={17} aria-hidden="true" />Map
          </a>
        )}
        <button className="action-button ghost" type="button" onClick={() => onSelect(item)}>
          View details<ChevronRight size={17} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function DetailPanel({ item, onReport }) {
  const category = categoryBySlug[item.category];
  const Icon = iconMap[category?.icon] ?? MapPin;
  return (
    <aside className="detail-panel" aria-label="Selected service details">
      <div className="detail-header">
        <span className={`detail-mark tone-${category?.tone ?? 'ink'}`}><Icon size={22} aria-hidden="true" /></span>
        <div>
          <p className="eyebrow">{category?.label}</p>
          <h2>{item.title}</h2>
        </div>
      </div>
      <div className="detail-actions">
        {item.call ? (<a className="big-call" href={`tel:${item.call}`} title={`Call ${item.title}`}><Phone size={19} aria-hidden="true" />Call {formatPhone(item.call)}</a>) : null}
        <a className="icon-link" href={item.mapUrl} target="_blank" rel="noreferrer" title="Open map or official locator"><ExternalLink size={18} aria-hidden="true" />Open</a>
      </div>
      <dl className="detail-list">
        <div><dt>Area</dt><dd>{item.locality}, {item.city}</dd></div>
        <div><dt>Hours</dt><dd>{item.hours}</dd></div>
        <div><dt>Verified</dt><dd>{item.verified}</dd></div>
        <div><dt>Source</dt><dd><a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.source}</a></dd></div>
      </dl>
      {item.altCalls?.length ? (
        <div className="alt-strip" aria-label="Alternative phone numbers">
          {item.altCalls.map((phone) => (<a href={`tel:${phone}`} key={phone}>{formatPhone(phone)}</a>))}
        </div>
      ) : null}
      <p className="note-panel">{item.note}</p>
      <section className="checklist" aria-labelledby="checklist-title">
        <h3 id="checklist-title"><ClipboardCheck size={18} aria-hidden="true" />Before you go</h3>
        <ul>{item.checklist.map((step) => (<li key={step}>{step}</li>))}</ul>
      </section>
      <button className="report-button" type="button" onClick={() => onReport(item)}>
        <Send size={17} aria-hidden="true" />Report correction
      </button>
    </aside>
  );
}

function ReportPanel({ item, onClose }) {
  const [sent, setSent] = useState(false);
  return (
    <div className="modal-backdrop" role="presentation">
      <section className="report-modal" role="dialog" aria-modal="true" aria-labelledby="report-title">
        <button className="close-button" type="button" onClick={onClose} aria-label="Close report form"><X size={20} aria-hidden="true" /></button>
        <p className="eyebrow">Community correction</p>
        <h2 id="report-title">{item.title}</h2>
        {sent ? (
          <div className="success-box" role="status"><Sparkles size={22} aria-hidden="true" />Correction queued locally. Connect this form to a backend when the directory goes live.</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <label>What changed?<select name="issue" defaultValue="wrong-phone"><option value="wrong-phone">Wrong phone number</option><option value="closed">Closed or moved</option><option value="hours">Wrong timing</option><option value="new">Add nearby option</option></select></label>
            <label>Details<textarea name="details" rows="4" placeholder="Add the correction, landmark, proof link or phone you verified." required /></label>
            <button className="big-call" type="submit"><Send size={18} aria-hidden="true" />Submit correction</button>
          </form>
        )}
      </section>
    </div>
  );
}

function CategoryButton({ category, selected, onClick }) {
  const Icon = iconMap[category.icon] ?? MapPin;
  return (
    <button className={`category-button tone-${category.tone} ${selected ? 'is-active' : ''}`} type="button" onClick={onClick}>
      <Icon size={18} aria-hidden="true" /><span>{category.shortLabel}</span>
    </button>
  );
}

export default function HomePage({ initialCategory, initialCity }) {
  const [query, setQuery] = useState('');
  
  const formattedCity = initialCity
    ? initialCity.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : 'Hyderabad';
  const defaultCity = cityOptions.find((c) => c.toLowerCase() === formattedCity.toLowerCase()) || formattedCity;

  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'emergency');
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [officialOnly, setOfficialOnly] = useState(false);
  const [openNowOnly, setOpenNowOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [reportItem, setReportItem] = useState(null);

  const filteredResults = useMemo(() => {
    const nq = normalize(query);
    const selectedState = cityState[selectedCity] ?? selectedCity;
    return directory
      .filter((item) => selectedCategory === 'emergency' ? item.category === 'emergency' || item.priority === 'critical' : item.category === selectedCategory)
      .filter((item) => !selectedCity || selectedCity === 'India-wide' ? true : item.city === selectedCity || item.city === 'India-wide' || item.city === selectedState || item.state === selectedState)
      .filter((item) => !openNowOnly ? true : /24|emergency|online|live/i.test(`${item.hours} ${item.status}`))
      .filter((item) => !officialOnly ? true : !item.source.toLowerCase().includes('nearme india'))
      .filter((item) => !nq ? true : buildSearchText(item).includes(nq))
      .sort((a, b) => scoreItem(a) - scoreItem(b) || a.title.localeCompare(b.title));
  }, [officialOnly, openNowOnly, query, selectedCategory, selectedCity]);

  const [selectedItemId, setSelectedItemId] = useState(null);
  const selectedItem = filteredResults.find((item) => item.id === selectedItemId) ?? filteredResults[0] ?? directory[0];
  const selectedCategoryData = categoryBySlug[selectedCategory];

  useEffect(() => {
    const label = selectedCategoryData?.label ?? 'Public utilities';
    const cityLabel = selectedCity || 'India';
    const title = `${label} near ${cityLabel} | NearMe India`;
    const description = `Find verified ${label.toLowerCase()} and public utility services near ${cityLabel}. NearMe India connects you to emergency numbers, hospitals, Aadhaar centers, police, fire, and civic utilities.`;
    const keywords = `${label}, ${cityLabel}, near me, emergency numbers, public services, government services, Ujjain, Hyderabad, Bengaluru`;
    updatePageMetadata({
      title,
      description,
      keywords,
      url: `https://nearmeindia.fun/${selectedCategory}/${cityLabel.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/gi, '')}`,
      image: 'https://nearmeindia.fun/visuals/civic-signal-map.svg',
    });
  }, [selectedCategoryData, selectedCity]);

  function selectCategory(slug) { setSelectedCategory(slug); setSelectedItemId(null); }
  function handlePopularQuery(value) {
    setQuery(value);
    const match = categories.find((c) => c.keywords.some((k) => value.toLowerCase().includes(k)));
    if (match) { setSelectedCategory(match.slug); setSelectedItemId(null); }
  }

  return (
    <>
      <main>
        <section className="finder-band" aria-labelledby="page-title">
          <div className="signal-map" aria-hidden="true"><img src="/visuals/civic-signal-map.svg" alt="" /></div>
          <div className="finder-shell">
            <div className="intro-column">
              <p className="eyebrow">NearMeIndia.fun</p>
              <h1 id="page-title">Find public help near you.</h1>
              <p className="intro-copy">Emergency numbers, official locators, government hospitals and civic utilities built for fast mobile action.</p>
              <div className="emergency-ledger" aria-label="Emergency call shortcuts">
                <a href="tel:112"><Siren size={18} aria-hidden="true" />112 National</a>
                <a href="tel:108"><Phone size={18} aria-hidden="true" />108 Ambulance</a>
                <a href="tel:181"><HeartHandshake size={18} aria-hidden="true" />181 Women</a>
              </div>
            </div>
            <section className="search-console" aria-label="Public utility finder">
              <div className="search-row">
                <label className="search-field" htmlFor="utility-search">
                  <Search size={20} aria-hidden="true" />
                  <input id="utility-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="blood bank, Aadhaar, police, public toilet..." type="search" />
                </label>
                <button className="filter-toggle" type="button" onClick={() => setMobileFiltersOpen((o) => !o)} aria-expanded={mobileFiltersOpen}>
                  <SlidersHorizontal size={19} aria-hidden="true" />Filters
                </button>
              </div>
              <div className={`filter-grid ${mobileFiltersOpen ? 'is-open' : ''}`}>
                <label>City<select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>{cityOptions.map((c) => (<option key={c} value={c}>{c}</option>))}</select></label>
                <label className="toggle-line"><input type="checkbox" checked={openNowOnly} onChange={(e) => setOpenNowOnly(e.target.checked)} /><span>Open now / emergency</span></label>
                <label className="toggle-line"><input type="checkbox" checked={officialOnly} onChange={(e) => setOfficialOnly(e.target.checked)} /><span>Official sources only</span></label>
              </div>
              <div className="category-scroll" aria-label="Service categories">
                {categories.map((c) => (<CategoryButton category={c} key={c.slug} selected={c.slug === selectedCategory} onClick={() => selectCategory(c.slug)} />))}
              </div>
            </section>
          </div>
        </section>

        <section className="results-band" aria-labelledby="results-title">
          <div className="content-grid">
            <section className="results-column">
              <div className="section-heading">
                <div><p className="eyebrow">{selectedCity}</p><h2 id="results-title">{selectedCategoryData?.label ?? 'Public utilities'}</h2></div>
                <span className="result-count">{filteredResults.length} matches</span>
              </div>
              <div className="query-row" aria-label="Popular searches">
                {popularQueries.map((v) => (<button type="button" key={v} onClick={() => handlePopularQuery(v)}>{v}</button>))}
              </div>
              <div className="results-list">
                {filteredResults.length ? filteredResults.map((item) => (
                  <ResultCard item={item} key={item.id} selected={item.id === selectedItem.id} onSelect={(next) => { setSelectedItemId(next.id); document.getElementById('detail-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} />
                )) : (
                  <div className="empty-state"><Search size={24} aria-hidden="true" />No matching service found. Try a nearby city, remove a filter, or report a missing utility.</div>
                )}
              </div>
            </section>
            <div id="detail-anchor"><DetailPanel item={selectedItem} onReport={setReportItem} /></div>
          </div>
        </section>

        <section className="source-band" id="sources" aria-labelledby="sources-title">
          <div className="wide-inner">
            <div className="section-heading"><div><p className="eyebrow">Trust layer</p><h2 id="sources-title">Official sources wired in</h2></div><Star size={24} aria-hidden="true" /></div>
            <div className="source-grid">
              {officialSources.map((s) => (<a className="source-card" href={s.url} target="_blank" rel="noreferrer" key={s.label}><strong>{s.label}</strong><span>{s.note}</span><ExternalLink size={16} aria-hidden="true" /></a>))}
            </div>
          </div>
        </section>

        <section className="coverage-band" id="coverage" aria-labelledby="coverage-title">
          <div className="wide-inner coverage-grid">
            <div><p className="eyebrow">SEO routes</p><h2 id="coverage-title">Built for long-tail public-service searches</h2></div>
            <div className="route-links">
              {Object.entries(routeSeeds).map(([slug, city]) => (<a href={`#/category/${slug}`} key={slug}>{categoryBySlug[slug]?.label} · {city}</a>))}
            </div>
          </div>
        </section>
      </main>
      {reportItem ? <ReportPanel item={reportItem} onClose={() => setReportItem(null)} /> : null}
    </>
  );
}
