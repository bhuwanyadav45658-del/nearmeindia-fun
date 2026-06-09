export function updatePageMetadata({ title, description, keywords, url, image }) {
  if (typeof document === 'undefined') return;

  document.title = title;

  function setMeta(selector, attr, value) {
    let element = document.head.querySelector(selector);
    if (element) {
      element.setAttribute(attr, value);
    } else if (value) {
      const tag = document.createElement('meta');
      if (selector.startsWith('meta[')) {
        const attrName = selector.match(/meta\[name=['"]?(.*?)['"]?\]/)?.[1] || selector.match(/meta\[property=['"]?(.*?)['"]?\]/)?.[1];
        if (attrName) tag.setAttribute(attr, attrName);
      }
      tag.setAttribute(attr, value);
      document.head.appendChild(tag);
    }
  }

  const canonical = document.head.querySelector('link[rel="canonical"]') || document.createElement('link');
  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', url || window.location.href);
  if (!document.head.contains(canonical)) document.head.appendChild(canonical);

  setMeta('meta[name="description"]', 'content', description || 'NearMe India helps you find verified public services and emergency contacts across India.');
  setMeta('meta[name="keywords"]', 'content', keywords || 'emergency numbers, public utilities, government services, near me');
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description || 'NearMe India helps you find verified public services and emergency contacts across India.');
  setMeta('meta[property="og:url"]', 'content', url || window.location.href);
  setMeta('meta[property="og:image"]', 'content', image || 'https://nearmeindia.fun/visuals/civic-signal-map.svg');
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', description || 'NearMe India helps you find verified public services and emergency contacts across India.');
  setMeta('meta[name="twitter:image"]', 'content', image || 'https://nearmeindia.fun/visuals/civic-signal-map.svg');
}
