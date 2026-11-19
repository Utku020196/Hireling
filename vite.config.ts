import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { buildStructuredData, company } from './src/data/site';
import {
  BLOG_PATH,
  blogMeta,
  buildBlogIndexStructuredData,
  buildPostStructuredData,
  postPath,
  posts,
} from './src/data/blog';
import { renderBlogIndexHtml, renderPostHtml } from './src/data/blog/html';

/**
 * Public origin, e.g. SITE_URL=https://www.example.com npm run build.
 * Enables canonical URLs, absolute JSON-LD URLs and sitemap.xml.
 */
const SITE_URL = (process.env.SITE_URL ?? '').replace(/\/+$/, '');

const escapeJson = (obj: unknown) => JSON.stringify(obj).replace(/</g, '\\u003c');
const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const jsonLdTags = (blocks: unknown[]) =>
  blocks.map((b) => `<script type="application/ld+json">${escapeJson(b)}</script>`).join('\n    ');

/**
 * Injects SEO metadata + JSON-LD into index.html at build/dev time from
 * src/data/site.ts. Crawlers get static structured data without running JS,
 * and content lives in exactly one place.
 */
function seoPlugin(): Plugin {
  return {
    name: 'hireling-seo',
    transformIndexHtml(html) {
      const canonical = SITE_URL ? `<link rel="canonical" href="${SITE_URL}/" />\n    ` : '';
      return html
        .replace(/%SITE_TITLE%/g, `${company.name} — B2B Freight &amp; Material Movement`)
        .replace(/%SITE_DESCRIPTION%/g, company.description)
        .replace('<!--JSON_LD-->', `${canonical}<!--JSON_LD_START-->${jsonLdTags(buildStructuredData())}<!--JSON_LD_END-->`);
    },
  };
}

interface PageSpec {
  path: string;
  title: string;
  description: string;
  ogType: 'website' | 'article';
  jsonLd: unknown[];
  body: string;
}

/** Derives a page from the built homepage HTML (same hashed assets), swapping head tags and #root content. */
function renderPage(base: string, page: PageSpec) {
  const t = escapeAttr(page.title);
  const d = escapeAttr(page.description);
  const canonical = SITE_URL ? `<link rel="canonical" href="${SITE_URL}${page.path}" />\n    ` : '';
  return base
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
    .replace(/(<meta property="og:type" content=")[^"]*/, `$1${page.ogType}`)
    .replace(/<link rel="canonical"[^>]*>\s*/, '')
    .replace(/<!--JSON_LD_START-->[\s\S]*?<!--JSON_LD_END-->/, `${canonical}${jsonLdTags(page.jsonLd)}`)
    .replace('<div id="root"></div>', `<div id="root">${page.body}</div>`);
}

/** After the build, writes dist/blog/index.html, dist/blog/<slug>/index.html and (with SITE_URL) sitemap.xml. */
function blogPagesPlugin(): Plugin {
  return {
    name: 'hireling-blog-pages',
    apply: 'build',
    writeBundle(options) {
      const outDir = options.dir ?? 'dist';
      const base = readFileSync(join(outDir, 'index.html'), 'utf8');
      const pages: PageSpec[] = [
        {
          path: BLOG_PATH,
          title: blogMeta.title,
          description: blogMeta.description,
          ogType: 'website',
          jsonLd: buildBlogIndexStructuredData(SITE_URL),
          body: renderBlogIndexHtml(),
        },
        ...posts.map((p) => ({
          path: postPath(p),
          title: `${p.title} | ${company.shortName}`,
          description: p.description,
          ogType: 'article' as const,
          jsonLd: buildPostStructuredData(p, SITE_URL),
          body: renderPostHtml(p),
        })),
      ];
      for (const page of pages) {
        const dir = join(outDir, page.path);
        mkdirSync(dir, { recursive: true });
        writeFileSync(join(dir, 'index.html'), renderPage(base, page));
      }
      // Strip build markers from the homepage.
      writeFileSync(join(outDir, 'index.html'), base.replace(/<!--JSON_LD_(START|END)-->/g, ''));

      if (SITE_URL) {
        const urls = [
          { loc: '/', lastmod: undefined as string | undefined },
          { loc: BLOG_PATH, lastmod: posts[0]?.date },
          ...posts.map((p) => ({ loc: postPath(p), lastmod: p.updated ?? p.date })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
          .map((u) => `  <url><loc>${SITE_URL}${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
          .join('\n')}\n</urlset>\n`;
        writeFileSync(join(outDir, 'sitemap.xml'), xml);
        writeFileSync(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
      } else {
        this.warn('SITE_URL not set — skipped sitemap.xml and canonical URLs. Run: SITE_URL=https://your-domain npm run build');
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), seoPlugin(), blogPagesPlugin()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
  },
});
