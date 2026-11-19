import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, props: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
  ...props,
});

export const PhoneIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)} strokeWidth={2}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const MailIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)} strokeWidth={2}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const ArrowRightIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)} strokeWidth={2.2}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRightIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)} strokeWidth={2}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const CheckIcon = ({ size = 16, strokeWidth = 3, ...p }: IconProps) => (
  <svg {...base(size, p)} strokeWidth={strokeWidth}>
    <path d="M5 12l5 5 9-10" />
  </svg>
);

export const PlusIcon = ({ size = 14, ...p }: IconProps) => (
  <svg {...base(size, p)} strokeWidth={2.4}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MenuIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size, p)} strokeWidth={2}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size, p)} strokeWidth={2}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const PinIcon = ({ size = 14, ...p }: IconProps) => (
  <svg {...base(size, p)} fill="currentColor" stroke="none">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);
