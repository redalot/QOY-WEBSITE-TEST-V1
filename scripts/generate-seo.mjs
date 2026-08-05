// Writes sitemap.xml and robots.txt into dist/ after a build.
//
// The site URL depends on which repo it is deployed to, so it is derived from
// the same VITE_BASE the build uses. Override the host with SITE_ORIGIN.

import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const ORIGIN = (process.env.SITE_ORIGIN || 'https://redalot.github.io').replace(/\/$/, '');
const BASE = process.env.VITE_BASE || '/qoy-website/';
const OUT_DIR = path.resolve('dist');

// Keep in step with the routes in src/App.jsx.
const ROUTES = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'structure', priority: '0.8', changefreq: 'weekly' },
  { path: 'training', priority: '0.7', changefreq: 'monthly' },
  { path: 'manual', priority: '0.7', changefreq: 'monthly' },
  { path: 'gallery', priority: '0.6', changefreq: 'monthly' },
  { path: 'start-guide', priority: '0.9', changefreq: 'monthly' },
];

const today = new Date().toISOString().slice(0, 10);
const urlFor = (route) => `${ORIGIN}${BASE}${route}`.replace(/([^:]\/)\/+/g, '$1');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${urlFor(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${urlFor('sitemap.xml')}
`;

await writeFile(path.join(OUT_DIR, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(path.join(OUT_DIR, 'robots.txt'), robots, 'utf8');

console.log(`SEO files written for ${urlFor('')}`);
