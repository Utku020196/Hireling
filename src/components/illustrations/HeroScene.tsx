import { memo, type CSSProperties } from 'react';

const f = (v: string): CSSProperties => ({ fill: `var(--${v})` });
const truckText: CSSProperties = { fontFamily: 'var(--font)' };

/** Layered hills + road with the branded truck driving across. Purely decorative. */
export const HeroScene = memo(function HeroScene() {
  return (
    <div className="scene" aria-hidden="true">
      <svg viewBox="0 380 1600 440" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="hs-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" style={{ stopColor: 'var(--sky-2)' }} />
            <stop offset=".55" style={{ stopColor: 'var(--sky-2)' }} />
            <stop offset="1" style={{ stopColor: 'var(--sky-1)' }} />
          </linearGradient>
          <linearGradient id="hs-fade" x1="0" x2="0" y1="0" y2="1">
            <stop offset=".55" style={{ stopColor: 'var(--bg)', stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: 'var(--bg)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect y="380" width="1600" height="440" fill="url(#hs-sky)" />
        <circle cx="1180" cy="430" r="64" style={f('sky-2')} opacity=".9" />
        <path d="M0 470 C200 420 380 455 560 430 S900 400 1080 440 1400 410 1600 440 V820 H0Z" style={f('hill-1')} />
        <g style={f('hill-3')} opacity=".6">
          <path d="M130 526 V486 L200 462 L270 486 V526Z" />
          <rect x="290" y="500" width="46" height="26" />
          <path d="M900 520 V488 L955 470 L1010 488 V520Z" />
          <rect x="1220" y="500" width="44" height="16" />
          <rect x="1266" y="500" width="44" height="16" />
          <rect x="1312" y="500" width="44" height="16" />
          <rect x="1243" y="482" width="44" height="16" />
          <rect x="1289" y="482" width="44" height="16" />
          <rect x="1266" y="464" width="44" height="16" />
          <rect x="1416" y="430" width="8" height="96" />
          <rect x="1360" y="426" width="150" height="7" />
          <path d="M1420 430 L1440 404 L1452 430Z" />
          <rect x="1484" y="433" width="2" height="40" />
          <rect x="1474" y="473" width="22" height="10" />
        </g>
        <path d="M0 520 C240 480 420 520 640 495 S980 470 1200 505 1480 480 1600 500 V820 H0Z" style={f('hill-2')} />
        <path d="M0 575 C260 545 520 585 760 560 S1160 540 1380 570 1560 560 1600 565 V820 H0Z" style={f('hill-3')} />
        <rect y="612" width="1600" height="54" style={f('road')} />
        <line x1="0" y1="639" x2="1600" y2="639" style={{ stroke: 'var(--road-line)' }} strokeWidth="3" strokeDasharray="36 30" />
        <g className="truck">
          <rect x="0" y="560" width="150" height="64" rx="6" style={f('ink')} />
          <rect x="8" y="568" width="134" height="6" rx="3" style={f('accent')} />
          <text x="75" y="596" textLength="118" lengthAdjust="spacingAndGlyphs" textAnchor="middle"
            style={{ ...truckText, ...f('bg'), fontWeight: 700, fontSize: 21, letterSpacing: '.06em' }}>HIRELING</text>
          <text x="75" y="608" textLength="118" lengthAdjust="spacingAndGlyphs" textAnchor="middle"
            style={{ ...truckText, ...f('accent'), fontWeight: 600, fontSize: 8.5, letterSpacing: '.22em' }}>TRANSPORT SOLUTIONS</text>
          <path d="M152 578 h42 l26 24 v22 h-68z" style={f('ink')} />
          <path d="M162 584 h28 l18 18 h-46z" style={f('sky-2')} />
          {[36, 120, 190].map((cx) => (
            <circle key={cx} cx={cx} cy="628" r="12" style={{ fill: 'var(--road)', stroke: 'var(--sky-2)' }} strokeWidth="4" />
          ))}
        </g>
        <path d="M0 666 C300 650 600 690 900 672 S1400 660 1600 676 V820 H0Z" style={f('hill-4')} />
        <path d="M0 720 C320 700 640 740 960 724 S1440 710 1600 726 V820 H0Z" style={f('hill-5')} />
        <rect y="380" width="1600" height="440" fill="url(#hs-fade)" />
      </svg>
    </div>
  );
});
