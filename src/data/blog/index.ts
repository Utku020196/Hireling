/**
 * Blog registry. Node-safe (no React / DOM / path aliases) — imported by
 * vite.config.ts to emit per-post HTML, JSON-LD and the sitemap.
 */
import type { Block, Post } from './types';
import { plain, slugify } from './inline';
import { company } from '../site';
import { ftlVsPtl } from './posts/ftl-vs-ptl';
import { freightRates } from './posts/freight-rates';
import { ewayBill } from './posts/eway-bill';
import { truckTypes } from './posts/truck-types';
import { documents } from './posts/documents';
import { freightQuote } from './posts/freight-quote';
import { hiddenCosts } from './posts/hidden-costs';
import { machinery } from './posts/machinery';
import { construction } from './posts/construction';
import { choosingPartner } from './posts/choosing-partner';
import { seasonalPlanning } from './posts/seasonal-planning';

export type { Block, Post } from './types';

/** Display order on /blog (newest first; ties keep this order). */
const ordered: Post[] = [
  freightRates,
  ftlVsPtl,
  ewayBill,
  freightQuote,
  truckTypes,
  hiddenCosts,
  documents,
  machinery,
  construction,
  choosingPartner,
  seasonalPlanning,
];

export const posts: readonly Post[] = [...ordered].sort((a, b) => b.date.localeCompare(a.date));

export const BLOG_PATH = '/blog';
export const postPath = (p: Pick<Post, 'slug'>) => `${BLOG_PATH}/${p.slug}`;
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const blogMeta = {
  title: `Freight & Logistics Guides | ${company.shortName} Blog`,
  heading: 'Freight guides for businesses that ship by road',
  description:
    'Practical guides on truck freight in India — rates, FTL vs PTL, e-way bills, documents, truck sizes and planning — from the Hireling Transport Solutions team.',
};

export const author = `${company.name} team`;

function blockText(b: Block): string {
  switch (b.t) {
    case 'ul':
    case 'ol':
      return b.items.join(' ');
    case 'table':
      return [...b.head, ...b.rows.flat()].join(' ');
    case 'note':
    case 'cta':
      return `${'title' in b && b.title ? b.title : ''} ${b.text}`;
    default:
      return b.text;
  }
}

export function readMinutes(p: Post) {
  const text = [p.takeaways.join(' '), ...p.body.map(blockText), ...p.faqs.map((f) => `${f.q} ${f.a}`)].join(' ');
  const words = plain(text).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Stable, de-duplicated ids for every h2 (used by the table of contents). */
export function headingIds(p: Post): Map<Block, string> {
  const seen = new Map<string, number>();
  const ids = new Map<Block, string>();
  for (const b of p.body) {
    if (b.t !== 'h2') continue;
    const base = slugify(b.text);
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    ids.set(b, n ? `${base}-${n + 1}` : base);
  }
  return ids;
}

/** Same-category posts first, then the rest, excluding the current post. */
export function relatedPosts(p: Post, count = 3): Post[] {
  const others = posts.filter((x) => x.slug !== p.slug);
  return [...others.filter((x) => x.category === p.category), ...others.filter((x) => x.category !== p.category)].slice(0, count);
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

/** JSON-LD for a post page: Article + FAQPage + breadcrumbs. `origin` may be '' (relative URLs). */
export function buildPostStructuredData(p: Post, origin = '') {
  const url = `${origin}${postPath(p)}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      dateModified: p.updated ?? p.date,
      articleSection: p.category,
      author: { '@type': 'Organization', name: company.name },
      publisher: { '@type': 'Organization', name: company.name },
      mainEntityOfPage: url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${origin}${BLOG_PATH}` },
        { '@type': 'ListItem', position: 3, name: p.title, item: url },
      ],
    },
  ];
}

export function buildBlogIndexStructuredData(origin = '') {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: `${company.shortName} Blog`,
      description: blogMeta.description,
      url: `${origin}${BLOG_PATH}`,
      blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${origin}${postPath(p)}`, datePublished: p.date })),
    },
  ];
}
