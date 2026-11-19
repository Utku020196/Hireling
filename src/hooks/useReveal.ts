import { useEffect } from 'react';

const TARGETS = [
  '.sec .head',
  '.answer-box',
  '.facts',
  '.svc .card',
  '.cat',
  '.steps li',
  '.qa details',
  '.quote-side', '.form',
  '.band',
  '.bigmark span',
].join(',');

/**
 * Fades/slides content in as it scrolls into view. Classes are added from JS, so
 * content stays fully visible without JS or when the user prefers reduced motion.
 */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    for (const el of els) {
      // Stagger siblings that reveal together (cards in a grid, list items).
      const idx = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--rd', `${Math.min(idx, 6) * 70}ms`);
      el.classList.add('reveal');
      io.observe(el);
    }

    return () => {
      io.disconnect();
      for (const el of els) el.classList.remove('reveal', 'is-in');
    };
  }, []);
}
