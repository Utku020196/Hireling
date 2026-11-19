import type { CSSProperties } from 'react';

const f = (v: string): CSSProperties => ({ fill: `var(--${v})` });
const s = (v: string): CSSProperties => ({ stroke: `var(--${v})` });
const label = (size: number, color: string, weight = 700, spacing = '.06em'): CSSProperties => ({
  fill: `var(--${color})`, fontFamily: 'var(--font)', fontWeight: weight, fontSize: size, letterSpacing: spacing,
});

export function FreightArt() {
  return (
    <svg viewBox="0 0 320 200">
      <circle cx="262" cy="52" r="26" style={f('accent-soft')} />
      <path d="M22 74 L78 50 L134 74 V150 H22Z" style={{ ...f('surface'), ...s('line') }} strokeWidth="2" />
      <rect x="44" y="96" width="68" height="54" style={f('line')} />
      <g style={s('surface')} strokeWidth="2">
        {[106, 116, 126, 136].map((y) => <line key={y} x1="44" y1={y} x2="112" y2={y} />)}
      </g>
      <rect x="0" y="150" width="320" height="50" style={f('line')} />
      <rect x="118" y="84" width="132" height="68" rx="6" style={f('ink')} />
      <rect x="126" y="92" width="116" height="6" rx="3" style={f('accent')} />
      <text x="184" y="124" textLength="106" lengthAdjust="spacingAndGlyphs" textAnchor="middle" style={label(22, 'bg')}>HIRELING</text>
      <text x="184" y="137" textLength="106" lengthAdjust="spacingAndGlyphs" textAnchor="middle" style={label(8.5, 'accent', 600, '.22em')}>TRANSPORT SOLUTIONS</text>
      <path d="M252 104 h30 l22 22 v26 h-52z" style={f('ink')} />
      <path d="M260 111 h19 l15 15 h-34z" style={f('mist')} />
      <g style={{ ...f('ink-2'), ...s('mist') }} strokeWidth="5">
        <circle cx="146" cy="156" r="12" /><circle cx="222" cy="156" r="12" /><circle cx="282" cy="156" r="12" />
      </g>
      <rect x="30" y="128" width="22" height="22" rx="2" style={f('accent')} />
      <rect x="56" y="134" width="16" height="16" rx="2" style={f('hill-2')} />
      <line x1="0" y1="184" x2="320" y2="184" style={s('surface')} strokeWidth="4" strokeDasharray="18 14" />
    </svg>
  );
}

export function MaterialArt() {
  return (
    <svg viewBox="0 0 320 200">
      <rect x="0" y="156" width="320" height="44" style={f('line')} />
      <g style={f('hill-3')}>
        <rect x="20" y="146" width="96" height="6" /><rect x="20" y="156" width="96" height="4" />
        <rect x="24" y="150" width="10" height="6" /><rect x="63" y="150" width="10" height="6" /><rect x="102" y="150" width="10" height="6" />
      </g>
      <rect x="22" y="106" width="44" height="40" rx="3" style={f('accent')} />
      <rect x="70" y="106" width="44" height="40" rx="3" style={f('hill-2')} />
      <rect x="44" y="66" width="44" height="40" rx="3" style={{ ...f('surface'), ...s('line') }} strokeWidth="2" />
      <g style={{ stroke: 'color-mix(in srgb, var(--ink) 25%, transparent)' }} strokeWidth="2">
        <line x1="44" y1="126" x2="66" y2="126" /><line x1="92" y1="126" x2="114" y2="126" /><line x1="66" y1="86" x2="88" y2="86" />
      </g>
      <rect x="140" y="102" width="110" height="44" style={f('hill-2')} />
      <rect x="144" y="82" width="32" height="24" rx="2" style={f('accent')} />
      <rect x="180" y="76" width="30" height="30" rx="2" style={{ ...f('surface'), ...s('line') }} strokeWidth="2" />
      <rect x="214" y="86" width="32" height="20" rx="2" style={f('hill-3')} />
      <path d="M136 100 h118 v48 h-118z" style={{ fill: 'none', ...s('ink') }} strokeWidth="6" strokeLinejoin="round" />
      <text x="195" y="134" textLength="94" lengthAdjust="spacingAndGlyphs" textAnchor="middle" style={label(20, 'ink')}>HIRELING</text>
      <path d="M254 108 h28 l22 22 v20 h-50z" style={f('ink')} />
      <path d="M262 115 h17 l15 15 h-32z" style={f('mist')} />
      <g style={{ ...f('ink-2'), ...s('mist') }} strokeWidth="5">
        <circle cx="160" cy="156" r="12" /><circle cx="230" cy="156" r="12" /><circle cx="284" cy="156" r="12" />
      </g>
      <path d="M122 60 q20 -22 44 -6" style={{ fill: 'none', ...s('accent-ink') }} strokeWidth="3" strokeDasharray="5 6" strokeLinecap="round" />
      <path d="M160 46 l8 9 -11 3" style={{ fill: 'none', ...s('accent-ink') }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CustomLoadArt() {
  return (
    <svg viewBox="0 0 320 200">
      <rect x="96" y="26" width="128" height="160" rx="12" style={f('bg')} />
      <rect x="132" y="18" width="56" height="18" rx="6" style={f('accent')} />
      <circle cx="124" cy="68" r="8" style={{ fill: 'none', ...s('ink') }} strokeWidth="4" />
      <path d="M124 76 C124 104 196 92 196 124" style={{ fill: 'none', ...s('accent-ink') }} strokeWidth="3.5" strokeDasharray="6 7" strokeLinecap="round" />
      <path d="M196 116 c-10 0 -16 8 -16 15 0 11 16 25 16 25 s16 -14 16 -25 c0 -7 -6 -15 -16 -15z" style={f('ink')} />
      <circle cx="196" cy="131" r="5" style={f('bg')} />
      <g style={f('line')}>
        <rect x="142" y="62" width="62" height="7" rx="3.5" /><rect x="142" y="76" width="42" height="7" rx="3.5" /><rect x="112" y="166" width="60" height="7" rx="3.5" />
      </g>
      <rect x="32" y="122" width="40" height="34" rx="3" style={f('accent')} opacity=".85" />
      <rect x="40" y="92" width="28" height="30" rx="3" style={f('hill-2')} opacity=".85" />
      <rect x="246" y="130" width="44" height="26" rx="3" style={f('hill-3')} opacity=".85" />
    </svg>
  );
}
