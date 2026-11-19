import { memo, type CSSProperties } from 'react';
import { CheckIcon, PinIcon } from '@/components/icons/Icons';

const f = (v: string): CSSProperties => ({ fill: `var(--${v})` });
const s = (v: string): CSSProperties => ({ stroke: `var(--${v})` });

/** Dotted grid, animated route lines and floating "stickers". Desktop only (≥1180px). */
export const HeroDecor = memo(function HeroDecor() {
  return (
    <div className="hero-deco" aria-hidden="true">
      <svg className="routes" viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="hd-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" style={f('ink')} opacity=".09" />
          </pattern>
          <radialGradient id="hd-dotmask" cx="50%" cy="45%" r="60%">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset=".35" stopColor="#fff" stopOpacity=".2" />
            <stop offset="1" stopColor="#fff" stopOpacity="1" />
          </radialGradient>
          <mask id="hd-mask">
            <rect width="1440" height="640" fill="url(#hd-dotmask)" />
          </mask>
        </defs>
        <rect width="1440" height="640" fill="url(#hd-dots)" mask="url(#hd-mask)" />
        <path className="route" d="M150 250 C260 300 230 420 320 470" />
        <path className="route" d="M1290 260 C1180 320 1230 420 1130 480" style={{ animationDelay: '-3s' }} />
        <path className="route" d="M60 560 C300 520 520 600 720 590 S1150 520 1390 560" style={{ animationDuration: '12s' }} />
        <g style={f('accent')} opacity=".55">
          <circle cx="150" cy="250" r="5" />
          <circle cx="320" cy="470" r="5" />
          <circle cx="1290" cy="260" r="5" />
          <circle cx="1130" cy="480" r="5" />
        </g>
      </svg>

      <div className="stk" style={{ left: '7%', top: 150, rotate: '-7deg' }}>
        <svg width="84" height="66" viewBox="0 0 84 66">
          <path d="M10 20 L42 8 L74 20 V52 L42 62 L10 52Z" style={f('hill-2')} />
          <path d="M10 20 L42 32 L74 20" style={{ fill: 'none', ...s('hill-4') }} strokeWidth="2" />
          <path d="M42 32 V62" style={s('hill-4')} strokeWidth="2" />
          <path d="M26 14 L58 26 V36" style={{ fill: 'none', ...s('surface') }} strokeWidth="5" />
          <rect x="50" y="40" width="16" height="9" rx="1.5" style={f('surface')} transform="rotate(-18 58 44)" />
        </svg>
      </div>
      <div className="stk chip" style={{ left: '13%', top: 350, animationDelay: '-2s' }}>
        <i><PinIcon /></i>Pickup point
      </div>
      <div className="stk" style={{ left: '4%', top: 470, rotate: '5deg', animationDelay: '-4s' }}>
        <svg width="96" height="70" viewBox="0 0 96 70">
          <g style={f('hill-3')}>
            <rect x="6" y="56" width="84" height="5" />
            <rect x="6" y="64" width="84" height="4" />
            <rect x="10" y="60" width="9" height="5" />
            <rect x="44" y="60" width="9" height="5" />
            <rect x="77" y="60" width="9" height="5" />
          </g>
          <rect x="8" y="30" width="38" height="26" rx="2" style={f('accent')} />
          <rect x="50" y="30" width="38" height="26" rx="2" style={f('hill-2')} />
          <rect x="28" y="6" width="40" height="24" rx="2" style={{ ...f('mist'), ...s('line') }} strokeWidth="2" />
          <path d="M27 30v8M69 30v8M48 6v8" style={s('surface')} strokeWidth="3" />
        </svg>
      </div>

      <div className="stk" style={{ right: '6%', top: 150, rotate: '6deg', animationDelay: '-1s' }}>
        <svg width="110" height="58" viewBox="0 0 110 58">
          <rect x="4" y="8" width="68" height="36" rx="4" style={f('ink')} />
          <rect x="9" y="13" width="58" height="4" rx="2" style={f('accent')} />
          <text x="38" y="33" textLength="54" lengthAdjust="spacingAndGlyphs" textAnchor="middle"
            style={{ ...f('bg'), fontFamily: 'var(--font)', fontWeight: 700, fontSize: 12.5, letterSpacing: '.05em' }}>HIRELING</text>
          <path d="M74 18 h16 l14 14 v12 h-30z" style={f('ink')} />
          <path d="M79 22 h9 l9 10 h-18z" style={f('mist')} />
          <g style={{ ...f('ink-2'), ...s('surface') }} strokeWidth="3">
            <circle cx="20" cy="47" r="7" />
            <circle cx="56" cy="47" r="7" />
            <circle cx="90" cy="47" r="7" />
          </g>
        </svg>
      </div>
      <div className="stk mini" style={{ right: '11%', top: 330, animationDelay: '-3s' }}>
        <p>Your request</p>
        <b><CheckIcon style={{ color: 'var(--mint)' }} />Quotation shared</b>
        <div className="bar"><span /></div>
      </div>
      <div className="stk chip" style={{ right: '4%', top: 490, animationDelay: '-5s' }}>
        <i><PinIcon /></i>Drop point
      </div>
    </div>
  );
});
