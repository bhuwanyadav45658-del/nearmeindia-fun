import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const dist = 'dist';
const routes = [
  'blood-banks/hyderabad',
  'government-hospitals/hyderabad',
  'aadhaar-centers/hyderabad',
  'meeseva-centers/hyderabad',
  'rto-offices/telangana',
  'passport-offices/hyderabad',
  'police-stations/hyderabad',
  'fire-stations/hyderabad',
  'public-toilets/hyderabad',
  'air-quality/hyderabad',
  'about',
  'contact',
  'faq',
  'privacy',
  'terms',
  'blog',
  'emergency-guide',
  'contribute'
];

const source = join(dist, 'index.html');

if (!existsSync(source)) {
  throw new Error('dist/index.html does not exist. Run vite build first.');
}

for (const route of routes) {
  const target = join(dist, route, 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
}

copyFileSync(source, join(dist, '404.html'));
