/** Animated truck mark. Pure SVG + CSS (see header.css) — no animation runtime needed. */
export function Logo() {
  return (
    <span className="mark" aria-hidden="true">
      <svg className="logo-anim" width="26" height="26" viewBox="-5 2 28 20" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line className="speed" x1="-4.2" y1="9" x2="-1" y2="9" strokeWidth="1.6" />
        <line className="speed" x1="-5.2" y1="12" x2="-1" y2="12" strokeWidth="1.6" />
        <line className="speed" x1="-4.2" y1="15" x2="-1" y2="15" strokeWidth="1.6" />
        <g className="body" stroke="currentColor" strokeWidth="2">
          <path d="M3 7h11v9H3z" />
          <path d="M14 10h4l3 3v3h-7" />
          <path className="h" d="M6.7 9.4v4.2M10.3 9.4v4.2M6.7 11.5h3.6" strokeWidth="1.5" />
        </g>
        <circle className="wheel" cx="7" cy="17.5" r="1.8" stroke="currentColor" strokeWidth="2" />
        <circle className="wheel" cx="17" cy="17.5" r="1.8" stroke="currentColor" strokeWidth="2" />
      </svg>
    </span>
  );
}
