/**
 * Blog content model. Posts are plain data (no React) so they can be read
 * by the browser bundle AND by vite.config.ts at build time, which pre-renders
 * each post into static HTML for crawlers.
 *
 * Inline text supports **bold** and [link text](/href) — nothing else.
 */

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[]; start?: number }
  | { t: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { t: 'note'; title?: string; text: string }
  /** Mid-article "request a quote" call-out. */
  | { t: 'cta'; title: string; text: string };

export interface Post {
  slug: string;
  title: string;
  /** ~150 chars; used for meta description and the blog index card. */
  description: string;
  category: 'Pricing' | 'Compliance' | 'Planning' | 'Materials';
  /** ISO date (YYYY-MM-DD). */
  date: string;
  updated?: string;
  takeaways: string[];
  body: Block[];
  faqs: { q: string; a: string }[];
}
