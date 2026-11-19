import { company, footerLinks } from '@/data/site';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bigmark" aria-hidden="true">
        <span>{company.shortName}</span>
      </div>
      <footer className="site-footer">
        <div className="wrap foot">
          <span>© {year} {company.name} · {company.category}</span>
          <nav aria-label="Footer">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
