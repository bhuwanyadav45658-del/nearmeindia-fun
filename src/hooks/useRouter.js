import { useEffect, useState, useCallback } from 'react';

export function useRouter() {
  const getRoute = () => {
    const hash = window.location.hash.slice(1);
    if (hash) return hash;
    return window.location.pathname;
  };

  const [path, setPath] = useState(getRoute());

  useEffect(() => {
    function handleNavigation() {
      setPath(getRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const navigate = useCallback((to) => {
    window.location.hash = to;
  }, []);

  return { path, navigate };
}

export function matchRoute(path, pattern) {
  const pathParts = path.split('/').filter(Boolean);
  const patternParts = pattern.split('/').filter(Boolean);

  if (pathParts.length !== patternParts.length) return null;

  const params = {};
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
    } else if (patternParts[i] !== pathParts[i]) {
      return null;
    }
  }
  return params;
}
