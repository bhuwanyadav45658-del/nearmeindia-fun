import { useRouter, matchRoute } from './hooks/useRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BlogPage from './pages/BlogPage';
import EmergencyGuidePage from './pages/EmergencyGuidePage';
import ContributePage from './pages/ContributePage';
import CityPage from './pages/CityPage';
import CategoryPage from './pages/CategoryPage';
import NotFoundPage from './pages/NotFoundPage';

function Router({ path }) {
  if (path === '/' || path === '') return <HomePage key={path} />;
  if (path === '/about') return <AboutPage />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/faq') return <FAQPage />;
  if (path === '/privacy') return <PrivacyPage />;
  if (path === '/terms') return <TermsPage />;
  if (path === '/blog') return <BlogPage />;
  if (path === '/emergency-guide') return <EmergencyGuidePage />;
  if (path === '/contribute') return <ContributePage />;

  const cityMatch = matchRoute(path, '/city/:slug');
  if (cityMatch) return <CityPage citySlug={cityMatch.slug} />;

  const categoryMatch = matchRoute(path, '/category/:slug');
  if (categoryMatch) return <CategoryPage categorySlug={categoryMatch.slug} />;

  // Handle /category-slug/city-slug (e.g. /blood-banks/hyderabad)
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 2) {
    return <HomePage key={path} initialCategory={parts[0]} initialCity={parts[1]} />;
  }

  return <NotFoundPage />;
}

export default function App() {
  const { path } = useRouter();

  return (
    <>
      <Header />
      <Router path={path} />
      <Footer />
    </>
  );
}
