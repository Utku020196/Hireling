import { blogMeta, postPath, posts, readMinutes } from '@/data/blog';
import { ArrowRightIcon } from '@/components/icons/Icons';

export function BlogIndex() {
  return (
    <div className="wrap">
      <header className="blog-hero">
        <p className="eyebrow">Blog</p>
        <h1>{blogMeta.heading}</h1>
        <p className="sub">{blogMeta.description}</p>
      </header>
      <ul className="post-grid">
        {posts.map((p) => (
          <li key={p.slug}>
            <a className="post-card" href={postPath(p)}>
              <p className="eyebrow">{p.category}</p>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <span className="post-meta">
                {readMinutes(p)} min read <ArrowRightIcon size={14} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
