import type { CSSProperties } from 'react';
import type { MaterialId } from '@/data/site';

const f = (v: string): CSSProperties => ({ fill: `var(--${v})` });
const s = (v: string): CSSProperties => ({ stroke: `var(--${v})` });

const Industrial = () => (
  <svg viewBox="0 0 100 75">
    <rect x="8" y="58" width="84" height="8" rx="2" style={f('ink')} />
    <g style={{ ...f('surface'), ...s('ink') }} strokeWidth="3">
      <circle cx="28" cy="46" r="11" /><circle cx="50" cy="46" r="11" /><circle cx="72" cy="46" r="11" />
      <circle cx="39" cy="27" r="11" /><circle cx="61" cy="27" r="11" />
    </g>
    <g style={f('accent')}>
      <circle cx="28" cy="46" r="4" /><circle cx="50" cy="46" r="4" /><circle cx="72" cy="46" r="4" />
      <circle cx="39" cy="27" r="4" /><circle cx="61" cy="27" r="4" />
    </g>
  </svg>
);

const Machinery = () => (
  <svg viewBox="0 0 100 75">
    <rect x="14" y="30" width="52" height="34" rx="4" style={f('ink')} />
    <rect x="22" y="38" width="20" height="12" rx="2" style={f('accent')} />
    <g transform="translate(72 30)">
      <path d="M0-17 l4 6 7-2 1 7 7 2-4 6 4 6-7 2-1 7-7-2-4 6-4-6-7 2-1-7-7-2 4-6-4-6 7-2 1-7 7 2z" style={f('hill-3')} />
      <circle r="6" style={f('mist')} />
    </g>
    <rect x="8" y="64" width="84" height="5" rx="2" style={f('line')} />
  </svg>
);

const Construction = () => (
  <svg viewBox="0 0 100 75">
    <g style={{ ...f('accent'), ...s('mist') }} strokeWidth="2">
      <rect x="10" y="50" width="20" height="12" /><rect x="30" y="50" width="20" height="12" /><rect x="20" y="38" width="20" height="12" />
    </g>
    <path d="M58 62 v-30 q0-6 6-6 h18 q6 0 6 6 v30z" style={{ ...f('surface'), ...s('ink') }} strokeWidth="3" />
    <rect x="62" y="40" width="22" height="8" rx="2" style={f('hill-3')} />
    <rect x="6" y="62" width="88" height="5" rx="2" style={f('line')} />
  </svg>
);

const Packaged = () => (
  <svg viewBox="0 0 100 75">
    <rect x="14" y="34" width="34" height="28" rx="2" style={f('hill-2')} />
    <rect x="52" y="34" width="34" height="28" rx="2" style={f('accent')} />
    <rect x="32" y="8" width="34" height="26" rx="2" style={{ ...f('surface'), ...s('ink') }} strokeWidth="3" />
    <g style={{ stroke: 'color-mix(in srgb, var(--ink) 35%, transparent)' }} strokeWidth="3">
      <line x1="31" y1="34" x2="31" y2="46" /><line x1="69" y1="34" x2="69" y2="46" /><line x1="49" y1="8" x2="49" y2="18" />
    </g>
    <rect x="8" y="62" width="84" height="5" rx="2" style={f('line')} />
  </svg>
);

const Retail = () => (
  <svg viewBox="0 0 100 75">
    <path d="M14 30 L50 12 L86 30 V64 H14Z" style={{ ...f('surface'), ...s('ink') }} strokeWidth="3" strokeLinejoin="round" />
    <rect x="32" y="38" width="36" height="26" style={f('ink')} />
    <g style={s('mist')} strokeWidth="2">
      <line x1="32" y1="45" x2="68" y2="45" /><line x1="32" y1="52" x2="68" y2="52" />
    </g>
    <rect x="40" y="56" width="10" height="8" style={f('accent')} />
    <rect x="52" y="58" width="8" height="6" style={f('hill-2')} />
    <rect x="8" y="64" width="84" height="5" rx="2" style={f('line')} />
  </svg>
);

const Other = () => (
  <svg viewBox="0 0 100 75">
    <rect x="28" y="14" width="44" height="44" rx="10" style={{ fill: 'none', ...s('mute') }} strokeWidth="3" strokeDasharray="6 5" />
    <path d="M50 26 v20 M40 36 h20" style={s('accent-ink')} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const pics = {
  industrial: Industrial,
  machinery: Machinery,
  construction: Construction,
  packaged: Packaged,
  retail: Retail,
  other: Other,
} satisfies Record<MaterialId, () => JSX.Element>;

export function MaterialPic({ id }: { id: MaterialId }) {
  const Pic = pics[id];
  return <Pic />;
}
