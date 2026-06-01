# NearMe India

NearMe India is a frontend-first public utility directory for `nearmeindia.fun`. It focuses on urgent and practical civic searches in India: emergency helplines, blood banks, government hospitals, Aadhaar centers, MeeSeva, RTO, passport support, police, fire, public toilets, EV charging, drinking water and air quality resources.

## Direction

The interface uses a civic signal-board aesthetic: high-contrast public-signage colors, dense but scannable information, emergency-first call actions and practical visit checklists. The first screen is the working finder, not a marketing landing page.

## Run Locally

```bash
npm install
npm run dev
```

## Build And Test

```bash
npm run build
npm run test:e2e
```

## Deployment

The repo includes:

- `public/CNAME` for `nearmeindia.fun`
- `public/robots.txt`
- `public/sitemap.xml`
- `.github/workflows/deploy.yml` for GitHub Pages deployment from the Vite build

## Official Reference Sources

Emergency and helpline content is seeded from official sources checked on June 1, 2026:

- Government of Telangana emergency contacts: https://www.telangana.gov.in/contacts/emergency-contacts/
- Government of India National Portal helpline directory: https://www.india.gov.in/directory/helpline
- Emergency Response Support System 112: https://112.gov.in/about
- Ministry of Home Affairs ERSS overview: https://www.mha.gov.in/en/commoncontent/emergency-response-support-system-erss
- UIDAI Aadhaar services: https://uidai.gov.in/my-aadhaar/get-aadhaar.html
- Telangana Transport citizen services: https://www.transport.telangana.gov.in/html/cfs-online-services-fully-functional.html
