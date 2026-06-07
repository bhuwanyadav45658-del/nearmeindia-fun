import { Siren, Phone, Flame, Shield, HeartHandshake, Hospital, AlertTriangle, Zap } from 'lucide-react';

const emergencyNumbers = [
  { number: '112', label: 'National Emergency', desc: 'Police, Fire, Medical — unified emergency response', icon: Siren, tone: 'red' },
  { number: '100', label: 'Police', desc: 'Crime, accidents, law and order emergencies', icon: Shield, tone: 'blue' },
  { number: '101', label: 'Fire & Rescue', desc: 'Fire, gas leaks, building collapses, rescues', icon: Flame, tone: 'red' },
  { number: '108', label: 'Ambulance', desc: 'Emergency medical transport — most states', icon: Hospital, tone: 'green' },
  { number: '102', label: 'Pregnancy Ambulance', desc: 'Maternal and childbirth emergency transport', icon: Hospital, tone: 'green' },
  { number: '181', label: 'Women Helpline', desc: 'Domestic abuse, harassment, safety support', icon: HeartHandshake, tone: 'violet' },
  { number: '1098', label: 'Child Helpline', desc: 'Children in distress, abuse, or danger', icon: HeartHandshake, tone: 'violet' },
  { number: '1800 180 1551', label: 'Cyber Crime', desc: 'Online fraud, hacking, digital threats', icon: AlertTriangle, tone: 'amber' },
  { number: '1073', label: 'National Disaster', desc: 'Flood, earthquake, cyclone — NDMA helpline', icon: Zap, tone: 'amber' },
  { number: '14461', label: 'Senior Citizen', desc: 'Elder abuse, helpline for senior citizens', icon: Phone, tone: 'aqua' },
  { number: '1947', label: 'Aadhaar', desc: 'Aadhaar card issues, UIDAI support', icon: Phone, tone: 'blue' },
  { number: '139', label: 'Railway Enquiry', desc: 'Train status, PNR, railway information', icon: Phone, tone: 'aqua' },
];

const emergencyGuides = [
  {
    title: 'Road Accident',
    steps: ['Ensure your own safety first', 'Call 112 or 108 for ambulance', 'Do not move the injured unless there is immediate danger', 'Note vehicle numbers and take photos if safe', 'Provide first aid only if trained', 'Wait for emergency services to arrive'],
  },
  {
    title: 'Fire Emergency',
    steps: ['Evacuate everyone immediately — do NOT use lifts', 'Call 101 or 112', 'Close doors behind you to slow fire spread', 'Stay low if there is smoke — crawl if necessary', 'Assemble at a safe distance from the building', 'Do not re-enter until cleared by fire services'],
  },
  {
    title: 'Medical Emergency',
    steps: ['Call 108 or 112 immediately', 'Describe patient condition: conscious? breathing?', 'Keep the patient still and comfortable', 'Have someone wait at the pickup point for the ambulance', 'Gather ID, medical history, and medicines list', 'Do not give food or water to unconscious patients'],
  },
  {
    title: 'Natural Disaster',
    steps: ['Move to higher ground for floods', 'Take cover under sturdy furniture during earthquakes', 'Stay away from windows and glass', 'Call 1073 (NDMA) or 112', 'Keep emergency kit ready: water, torch, documents', 'Follow official advisories from local authorities'],
  },
  {
    title: 'Women / Child in Danger',
    steps: ['Call 112 for immediate physical danger', 'Call 181 for women helpline support', 'Call 1098 for children in distress', 'Share a safe callback number if possible', 'Preserve messages, photos, or evidence when safe', 'Reach out to nearest police station for FIR'],
  },
  {
    title: 'Cyber Crime',
    steps: ['Do not click any further links or share OTPs', 'Call 1800 180 1551 immediately', 'File a complaint at cybercrime.gov.in', 'Take screenshots of fraudulent messages or websites', 'Block the scammer\'s number/email', 'Report to your bank immediately if money was involved'],
  },
];

export default function EmergencyGuidePage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero emergency-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Emergency Guide</p>
          <h1>India emergency numbers & guides.</h1>
          <p className="page-hero-subtitle">
            Every number, every step — prepared for any emergency across India.
          </p>
        </div>
      </section>

      <section className="section-padded" aria-labelledby="numbers-title">
        <div className="wide-inner">
          <p className="eyebrow">Quick Reference</p>
          <h2 id="numbers-title">Essential emergency numbers</h2>
          <div className="emergency-grid">
            {emergencyNumbers.map(({ number, label, desc, icon: Icon, tone }) => (
              <a href={`tel:${number.replace(/\s/g, '')}`} className={`emergency-number-card tone-${tone}`} key={number}>
                <div className="en-icon"><Icon size={24} /></div>
                <div className="en-info">
                  <span className="en-number">{number}</span>
                  <strong>{label}</strong>
                  <span className="en-desc">{desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded section-alt" aria-labelledby="guides-title">
        <div className="wide-inner">
          <p className="eyebrow">Step-by-Step</p>
          <h2 id="guides-title">What to do in an emergency</h2>
          <div className="guide-grid">
            {emergencyGuides.map(({ title, steps }) => (
              <div className="guide-card" key={title}>
                <h3>{title}</h3>
                <ol>
                  {steps.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded section-cta">
        <div className="wide-inner cta-box">
          <h2>Save these numbers — they save lives</h2>
          <p>Share this page with family and friends. In emergencies, always call 112 first.</p>
          <div className="cta-actions">
            <a href="tel:112" className="btn-primary"><Siren size={18} /> Call 112 Now</a>
            <a href="#/" className="btn-secondary">Find services near you</a>
          </div>
        </div>
      </section>
    </div>
  );
}
