import { useCallback, useEffect, useRef, useState } from 'react';
import { company, navLinks, primaryPhone } from '@/data/site';
import { telHref } from '@/lib/contact';
import { useScrolled } from '@/hooks/useScrolled';
import { ArrowUpRightIcon, CloseIcon, MenuIcon, PhoneIcon } from '@/components/icons/Icons';
import { Logo } from './Logo';

export function Header({ current = 'home' }: { current?: 'home' | 'blog' }) {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);

  // Close on Escape (returning focus to the toggle) and when resizing to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    const mq = window.matchMedia('(min-width: 980px)');
    const onMq = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  const cls = ['hdr', scrolled && 'is-scrolled', open && 'is-open'].filter(Boolean).join(' ');

  return (
    <header className={cls}>
      <div className="wrap nav">
        <a href="/#top" className="brand" aria-label={`${company.name} home`}>
          <Logo />
          <span>
            <b>{company.shortName}</b>
            <small>{company.tagline}</small>
          </span>
        </a>

        <nav className="links" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} aria-current={current === 'blog' && l.href === '/blog' ? 'page' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="actions">
          <a className="nav-call" href={telHref(primaryPhone)}>
            <PhoneIcon size={15} />
            <span>Call us</span>
          </a>
          <a className="nav-cta" href="/#quote">
            <span>Request a quote</span>
            <ArrowUpRightIcon size={15} />
          </a>
        </div>

        <button
          ref={menuBtn}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <nav id="mobile-menu" className="mobile" aria-label="Mobile" hidden={!open}>
        {navLinks.map((l) => (
          <a
            key={l.href}
            className="row"
            href={l.href}
            onClick={close}
            aria-current={current === 'blog' && l.href === '/blog' ? 'page' : undefined}
          >
            {l.label}
          </a>
        ))}
        <a className="btn btn-ink" href="/#quote" onClick={close}>Request a quote</a>
      </nav>
    </header>
  );
}
