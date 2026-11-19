export const movementTypes = ['One-time', 'Recurring', 'Not sure yet'] as const;
export type MovementType = (typeof movementTypes)[number];

export interface QuoteFields {
  company: string;
  person: string;
  email: string;
  phone: string;
  pickup: string;
  drop: string;
  date: string;
  type: MovementType;
  material: string;
  qty: string;
  notes: string;
}

export type FieldName = keyof QuoteFields;
export type QuoteErrors = Partial<Record<FieldName, string>>;

export const emptyQuote: QuoteFields = {
  company: '', person: '', email: '', phone: '', pickup: '', drop: '',
  date: '', type: 'One-time', material: '', qty: '', notes: '',
};

/** Human labels, in the order they appear in the summary/email. */
export const fieldLabels: Record<FieldName, string> = {
  company: 'Company',
  person: 'Contact person',
  email: 'Email',
  phone: 'Phone',
  pickup: 'Pickup',
  drop: 'Drop',
  date: 'Required date',
  type: 'Movement type',
  material: 'Material',
  qty: 'Weight / quantity',
  notes: 'Notes',
};

const required: FieldName[] = ['company', 'person', 'email', 'phone', 'pickup', 'drop', 'date', 'material'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/;

/** Local date as YYYY-MM-DD (avoids the UTC off-by-one of toISOString). */
export const todayISO = () => {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

export function validateQuote(v: QuoteFields): QuoteErrors {
  const errors: QuoteErrors = {};
  for (const key of required) {
    if (!v[key].trim()) errors[key] = `${fieldLabels[key]} is required.`;
  }
  if (!errors.email && !EMAIL_RE.test(v.email.trim())) errors.email = 'Enter a valid email address.';
  if (!errors.phone && !PHONE_RE.test(v.phone.trim())) errors.phone = 'Enter a valid phone number.';
  if (!errors.date && v.date < todayISO()) errors.date = 'Choose today or a future date.';
  return errors;
}

/** Filled fields as [label, value] pairs, in display order. */
export const summarize = (v: QuoteFields) =>
  (Object.keys(fieldLabels) as FieldName[])
    .map((k) => [fieldLabels[k], v[k].trim()] as const)
    .filter(([, value]) => value.length > 0);
