export function NotFound() {
  return (
    <div className="wrap blog-hero">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="sub">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="cta-row" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
        <a className="btn btn-ink" href="/">Go to homepage</a>
        <a className="btn btn-line" href="/blog">Browse the blog</a>
      </div>
    </div>
  );
}
