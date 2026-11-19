/**
 * Build-time static HTML for blog pages. Injected into #root so crawlers and
 * no-JS visitors get the full article; React replaces it on load.
 * Markup mirrors the React components (same class names) to avoid layout shift.
 */
import type { Block, Post } from './types';
import { isExternal, tokenize } from './inline';
import { blogMeta, formatDate, headingIds, postPath, posts, readMinutes } from './index';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inlineHtml(text: string): string {
  return text
    .split('\n')
    .map((line) =>
      tokenize(line)
        .map((s) => {
          if (s.kind === 'bold') return `<strong>${esc(s.value)}</strong>`;
          if (s.kind === 'link') {
            const ext = isExternal(s.href) ? ' target="_blank" rel="noopener noreferrer"' : '';
            return `<a href="${esc(s.href)}"${ext}>${esc(s.value)}</a>`;
          }
          return esc(s.value);
        })
        .join(''),
    )
    .join('<br>');
}

function blockHtml(b: Block, ids: Map<Block, string>): string {
  switch (b.t) {
    case 'p':
      return `<p>${inlineHtml(b.text)}</p>`;
    case 'h2':
      return `<h2 id="${ids.get(b) ?? ''}">${inlineHtml(b.text)}</h2>`;
    case 'h3':
      return `<h3>${inlineHtml(b.text)}</h3>`;
    case 'ul':
      return `<ul>${b.items.map((i) => `<li>${inlineHtml(i)}</li>`).join('')}</ul>`;
    case 'ol':
      return `<ol${b.start ? ` start="${b.start}"` : ''}>${b.items.map((i) => `<li>${inlineHtml(i)}</li>`).join('')}</ol>`;
    case 'table':
      return `<div class="post-table"><table>${b.caption ? `<caption>${inlineHtml(b.caption)}</caption>` : ''}<thead><tr>${b.head
        .map((h) => `<th scope="col">${inlineHtml(h)}</th>`)
        .join('')}</tr></thead><tbody>${b.rows
        .map((r) => `<tr>${r.map((c) => `<td>${inlineHtml(c)}</td>`).join('')}</tr>`)
        .join('')}</tbody></table></div>`;
    case 'note':
      return `<aside class="post-note">${b.title ? `<p class="post-note-title">${inlineHtml(b.title)}</p>` : ''}<p>${inlineHtml(b.text)}</p></aside>`;
    case 'cta':
      return `<aside class="post-cta"><div><p class="post-cta-title">${inlineHtml(b.title)}</p><p>${inlineHtml(b.text)}</p></div><a class="btn" href="/#quote">Request a quote</a></aside>`;
  }
}

export function renderPostHtml(p: Post): string {
  const ids = headingIds(p);
  return `<main id="main" class="blog-main"><article class="wrap post">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/blog">Blog</a></nav>
<header class="post-head"><p class="eyebrow">${esc(p.category)}</p><h1>${esc(p.title)}</h1><p class="post-dek">${esc(p.description)}</p>
<p class="post-meta">${formatDate(p.updated ?? p.date)} · ${readMinutes(p)} min read</p></header>
<aside class="post-takeaways"><p class="post-note-title">Key takeaways</p><ul>${p.takeaways.map((t) => `<li>${inlineHtml(t)}</li>`).join('')}</ul></aside>
<div class="post-body">${p.body.map((b) => blockHtml(b, ids)).join('\n')}
<h2 id="faq">Frequently asked questions</h2>${p.faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}</div>
</article></main>`;
}

export function renderBlogIndexHtml(): string {
  return `<main id="main" class="blog-main"><div class="wrap">
<header class="blog-hero"><p class="eyebrow">Blog</p><h1>${esc(blogMeta.heading)}</h1><p class="sub">${esc(blogMeta.description)}</p></header>
<ul class="post-grid">${posts
    .map(
      (p) =>
        `<li><a class="post-card" href="${postPath(p)}"><p class="eyebrow">${esc(p.category)}</p><h2>${esc(p.title)}</h2><p>${esc(p.description)}</p><span class="post-meta">${readMinutes(p)} min read</span></a></li>`,
    )
    .join('')}</ul></div></main>`;
}
