import { author, formatDate, headingIds, postPath, readMinutes, relatedPosts, type Block, type Post } from '@/data/blog';
import { company, primaryPhone } from '@/data/site';
import { telHref } from '@/lib/contact';
import { ArrowRightIcon, PhoneIcon, PlusIcon } from '@/components/icons/Icons';
import { RichText } from './RichText';

function BlockView({ b, id }: { b: Block; id?: string }) {
  switch (b.t) {
    case 'p':
      return <p><RichText text={b.text} /></p>;
    case 'h2':
      return <h2 id={id}><RichText text={b.text} /></h2>;
    case 'h3':
      return <h3><RichText text={b.text} /></h3>;
    case 'ul':
      return <ul>{b.items.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>;
    case 'ol':
      return <ol start={b.start}>{b.items.map((item) => <li key={item}><RichText text={item} /></li>)}</ol>;
    case 'table':
      return (
        // Focusable so keyboard users can scroll wide tables on phones.
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        <div className="post-table" tabIndex={0} role="region" aria-label={b.caption ?? 'Table'}>
          <table>
            {b.caption && <caption><RichText text={b.caption} /></caption>}
            <thead>
              <tr>{b.head.map((h, i) => <th key={i} scope="col"><RichText text={h} /></th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, ri) => (
                <tr key={ri}>{r.map((c, ci) => <td key={ci}><RichText text={c} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'note':
      return (
        <aside className="post-note">
          {b.title && <p className="post-note-title">{b.title}</p>}
          <p><RichText text={b.text} /></p>
        </aside>
      );
    case 'cta':
      return (
        <aside className="post-cta">
          <div>
            <p className="post-cta-title">{b.title}</p>
            <p>{b.text}</p>
          </div>
          <a className="btn" href="/#quote">Request a quote <ArrowRightIcon /></a>
        </aside>
      );
  }
}

export function BlogPost({ post }: { post: Post }) {
  const ids = headingIds(post);
  const toc = post.body.filter((b): b is Extract<Block, { t: 'h2' }> => b.t === 'h2');
  const related = relatedPosts(post);

  return (
    <>
      <article className="wrap post">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a> <span aria-hidden="true">/</span> <a href="/blog">Blog</a>
        </nav>

        <header className="post-head">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="post-dek">{post.description}</p>
          <p className="post-meta">
            By {author} · <time dateTime={post.updated ?? post.date}>{formatDate(post.updated ?? post.date)}</time> ·{' '}
            {readMinutes(post)} min read
          </p>
        </header>

        <div className="post-layout">
          <aside className="post-toc" aria-label="On this page">
            <p className="post-note-title">On this page</p>
            <ol>
              {toc.map((h) => (
                <li key={ids.get(h)}><a href={`#${ids.get(h)}`}>{h.text}</a></li>
              ))}
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </aside>

          <div className="post-body">
            <aside className="post-takeaways">
              <p className="post-note-title">Key takeaways</p>
              <ul>{post.takeaways.map((t) => <li key={t}><RichText text={t} /></li>)}</ul>
            </aside>

            {post.body.map((b, i) => <BlockView key={i} b={b} id={ids.get(b)} />)}

            <h2 id="faq">Frequently asked questions</h2>
            <div className="qa">
              {post.faqs.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <span className="pm" aria-hidden="true"><PlusIcon /></span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>

            <aside className="post-cta post-cta--end">
              <div>
                <p className="post-cta-title">Have a load to move?</p>
                <p>
                  Share your pickup, drop, material and date. {company.contactPerson} and the team will review it and
                  come back with a quotation.
                </p>
              </div>
              <div className="post-cta-actions">
                <a className="btn" href="/#quote">Request a quote <ArrowRightIcon /></a>
                <a className="btn btn-line" href={telHref(primaryPhone)}><PhoneIcon /> {primaryPhone}</a>
              </div>
            </aside>

            <p className="post-disclaimer">
              This guide is general information for businesses shipping by road in India, not legal or tax advice. Rules
              and rates change, so confirm current requirements before you rely on them.
            </p>
          </div>
        </div>
      </article>

      <section className="wrap related" aria-labelledby="related-title">
        <h2 id="related-title" className="h2">Keep reading</h2>
        <ul className="post-grid">
          {related.map((p) => (
            <li key={p.slug}>
              <a className="post-card" href={postPath(p)}>
                <p className="eyebrow">{p.category}</p>
                <h3>{p.title}</h3>
                <span className="post-meta">{readMinutes(p)} min read</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
