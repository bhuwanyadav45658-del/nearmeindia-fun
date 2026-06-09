import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { updatePageMetadata } from '../utils/seo';

const faqData = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is NearMe India?',
        a: 'NearMe India is a mobile-first directory that helps people find emergency numbers, government offices, and civic utilities near them. All data is verified against official government sources.',
      },
      {
        q: 'Is NearMe India free to use?',
        a: 'Yes! NearMe India is completely free. No login, no subscription, no hidden costs. We believe access to public service information should be free for everyone.',
      },
      {
        q: 'Which cities are currently covered?',
        a: 'We currently cover Hyderabad, Secunderabad, Bengaluru, Chennai, Delhi, Mumbai, and Pune. We are expanding coverage city by city with community help.',
      },
      {
        q: 'Is NearMe India a government website?',
        a: 'No. NearMe India is an independent community project. However, all our data links back to official government sources like UIDAI, Passport Seva, ERSS, CPCB, and state government portals.',
      },
    ],
  },
  {
    category: 'Emergency Services',
    questions: [
      {
        q: 'What should I do in an emergency?',
        a: 'Call 112 immediately. This is India\'s unified emergency number for police, fire, and medical emergencies. Share your location, keep the line open, and move to a safe visible place.',
      },
      {
        q: 'Can NearMe India dispatch emergency services?',
        a: 'No. NearMe India is only a directory. We provide verified numbers and information, but we cannot dispatch any emergency services. Always call 112 for active emergencies.',
      },
      {
        q: 'What are the key emergency numbers in India?',
        a: '112 — National Emergency, 100 — Police, 101 — Fire, 108 — Ambulance, 181 — Women Helpline, 1098 — Child Helpline, 1800 180 1551 — Cyber Crime.',
      },
    ],
  },
  {
    category: 'Data & Accuracy',
    questions: [
      {
        q: 'How accurate is the data?',
        a: 'All listings are verified against official government sources. However, public service details (hours, phone numbers, locations) can change. We display the verification date on each listing.',
      },
      {
        q: 'How can I report wrong information?',
        a: 'Click "Report correction" on any listing detail panel. You can report wrong phone numbers, closed facilities, incorrect timing, or suggest new services.',
      },
      {
        q: 'How often is data updated?',
        a: 'We review data regularly and accept community corrections continuously. Each listing shows its last verification date so you can assess freshness.',
      },
      {
        q: 'What sources do you use?',
        a: 'We use official sources including ERSS (112.gov.in), UIDAI, Passport Seva, state government portals, CPCB, and verified government department directories.',
      },
    ],
  },
  {
    category: 'Contributing',
    questions: [
      {
        q: 'How can I contribute?',
        a: 'Visit our Contribute page to learn about data contribution, city coordination, and volunteering opportunities. You can also report corrections directly on any listing.',
      },
      {
        q: 'Can I add a new city?',
        a: 'Yes! If you can provide verified data for a new city, we\'d love to add it. Contact us through the Contribute page or email us directly.',
      },
      {
        q: 'Is the code open source?',
        a: 'We plan to open source the codebase. Follow our GitHub for updates on the repository release and contribution guidelines.',
      },
    ],
  },
  {
    category: 'Privacy & Security',
    questions: [
      {
        q: 'Does NearMe India track my location?',
        a: 'No. NearMe India does not request, track, or store your location. All "near me" searches use your selected city from the dropdown.',
      },
      {
        q: 'Do you collect personal data?',
        a: 'We collect minimal data only when you voluntarily submit a correction or contact form. We don\'t use analytics trackers, advertising pixels, or cookie consent walls.',
      },
      {
        q: 'Are phone calls routed through NearMe India?',
        a: 'No. All call buttons use standard tel: links that connect you directly to the listed number. NearMe India never intercepts or records calls.',
      },
    ],
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    updatePageMetadata({
      title: 'FAQ | NearMe India public service directory questions',
      description: 'Read frequently asked questions about NearMe India, data accuracy, emergency numbers, city coverage and how to contribute data.',
      keywords: 'FAQ, NearMe India, questions, emergency directory, public service, coverage, data accuracy',
      url: 'https://nearmeindia.fun/faq',
    });
  }, []);

  const filteredFaqs = faqData.map((section) => ({
    ...section,
    questions: section.questions.filter(
      ({ q, a }) =>
        q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((section) => section.questions.length > 0);

  return (
    <div className="page-wrapper">
      <section className="page-hero faq-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">FAQ</p>
          <h1>Frequently asked questions.</h1>
          <p className="page-hero-subtitle">
            Find answers to common questions about NearMe India, our data, and how you can contribute.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="wide-inner faq-container">
          <div className="faq-search">
            <Search size={20} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="faq-empty">
              <HelpCircle size={32} aria-hidden="true" />
              <p>No matching questions found. Try a different search term or <a href="#/contact">contact us</a> directly.</p>
            </div>
          ) : (
            filteredFaqs.map(({ category, questions }) => (
              <div className="faq-section" key={category}>
                <h2 className="faq-category-title">{category}</h2>
                <div className="faq-list">
                  {questions.map(({ q, a }) => (
                    <FAQItem key={q} question={q} answer={a} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="section-padded section-cta">
        <div className="wide-inner cta-box">
          <h2>Still have questions?</h2>
          <p>Can't find what you're looking for? Our team is here to help.</p>
          <div className="cta-actions">
            <a href="#/contact" className="btn-primary">Contact Us</a>
            <a href="#/contribute" className="btn-secondary">Contribute</a>
          </div>
        </div>
      </section>
    </div>
  );
}
