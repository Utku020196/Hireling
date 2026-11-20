import { useEffect, useRef } from 'react';

/**
 * Decorative background video for the quote panel. Muted + inline so it can
 * autoplay; only plays while on screen, and never under prefers-reduced-motion.
 */
export function QuoteVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;

    const sync = () => {
      if (visible && !reduce.matches) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      sync();
    }, { threshold: 0.15 });

    io.observe(video);
    reduce.addEventListener('change', sync);
    return () => {
      io.disconnect();
      reduce.removeEventListener('change', sync);
    };
  }, []);

  return (
    <div className="quote-media" aria-hidden="true">
      <video
        ref={ref}
        src="/videos/quote-highway.mp4"
        poster="/images/quote-highway-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
      />
    </div>
  );
}
