/**
 * Single source of truth for all site content.
 * Used by React components AND by vite.config.ts to generate the
 * JSON-LD structured data injected into index.html at build time —
 * so the FAQ on the page and the FAQ schema can never drift apart.
 *
 * Keep this file free of React/DOM imports (it runs in Node at build time).
 */

export const company = {
  name: 'Hireling Transport Solutions',
  shortName: 'Hireling',
  tagline: 'Transport Solutions',
  category: 'B2B freight & material movement',
  description:
    'Hireling Transport Solutions provides B2B freight and material movement. Share your pickup, drop and material details and get a quotation from the team.',
  contactPerson: 'Utkarsh Verma',
  contactInitials: 'UV',
  email: 'hireling.info@gmail.com',
  phones: ['9457319967', '9220912930'] as const,
} as const;

export const primaryPhone = company.phones[0];

/**
 * Hrefs are root-relative ("/#services", not "#services") so they also work
 * from /blog pages. On the homepage they're same-document jumps.
 */
export const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'How it works' },
  { href: '/blog', label: 'Blog' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
] as const;

export const footerLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'How it works' },
  { href: '/#quote', label: 'Request a quote' },
  { href: '/blog', label: 'Blog' },
  { href: '/#faq', label: 'FAQ' },
] as const;

export const facts = [
  { term: 'Business', value: company.name },
  { term: 'Category', value: company.category },
  { term: 'Contact', value: company.contactPerson },
  { term: 'Customers', value: 'Businesses (B2B)' },
] as const;

export type MaterialId = 'industrial' | 'machinery' | 'construction' | 'packaged' | 'retail' | 'other';

export const materials: ReadonlyArray<{
  id: MaterialId;
  title: string;
  hint: string;
  /** Value pre-filled into the quote form's "Material" field. */
  value: string;
}> = [
  { id: 'industrial', title: 'Industrial materials', hint: 'Pipes, steel, raw inputs', value: 'Industrial materials' },
  { id: 'machinery', title: 'Machinery', hint: 'Equipment & parts', value: 'Machinery / equipment' },
  { id: 'construction', title: 'Construction material', hint: 'Bricks, cement, aggregates', value: 'Construction material' },
  { id: 'packaged', title: 'Packaged goods', hint: 'Cartons & palletised stock', value: 'Packaged goods' },
  { id: 'retail', title: 'Retail & warehouse stock', hint: 'Inventory between sites', value: 'Retail / warehouse stock' },
  { id: 'other', title: 'Something else', hint: 'Describe it in the form', value: '' },
];

export const processSteps = [
  { title: 'Share your requirement', body: 'Pickup, drop, material, quantity and date — online, by phone or by email.' },
  { title: 'Requirement review', body: 'The team checks the route, load and timing you’ve shared.' },
  { title: 'Quotation', body: 'You receive a quotation for the movement.' },
  { title: 'Confirmation', body: 'You confirm, and transport is assigned to your load.' },
  { title: 'Material movement', body: 'Your material is picked up and moved to the drop point.' },
  { title: 'Delivery & completion', body: 'Delivered at the destination and the job is closed.' },
] as const;

/** Status timeline shown in the hero preview card. */
export const statusTimeline = [
  { label: 'Requirement shared', state: 'done' },
  { label: 'Reviewed by the team', state: 'done' },
  { label: 'Quotation shared with you', state: 'now' },
  { label: 'Confirmed & transport assigned', state: 'todo' },
  { label: 'Material in movement', state: 'todo' },
  { label: 'Delivered & closed', state: 'todo' },
] as const;

export const quoteBenefits = [
  { title: 'Share once.', body: 'Route, material and date in one form.' },
  { title: 'Reviewed by people.', body: 'The team checks every requirement.' },
  { title: 'Quote by phone or email.', body: 'On the contact you share.' },
] as const;

const phoneList = company.phones.join(' or ');

export const faqs = [
  {
    q: 'What does Hireling Transport Solutions do?',
    a: 'Hireling Transport Solutions provides B2B freight and material movement. It arranges transport for businesses that need goods or materials moved from one location to another.',
  },
  {
    q: 'How do I get a freight quote from Hireling?',
    a: `Share your pickup location, drop location, material and required date through the request form, call ${phoneList}, or email ${company.email}. The team reviews the requirement and responds with a quotation.`,
  },
  {
    q: 'Who should I contact at Hireling Transport Solutions?',
    a: `${company.contactPerson}. Call ${phoneList}, or email ${company.email}.`,
  },
  {
    q: 'What information do I need to request transport?',
    a: 'Your company name and contact details, the pickup and drop locations, the material to be moved, an approximate weight or quantity, and the date you need it moved.',
  },
  {
    q: 'How is the price for a freight movement decided?',
    a: 'Each movement is quoted after the team reviews your requirement, so the quotation reflects your route, load and timing.',
  },
] as const;

/** JSON-LD blocks for SEO / answer engines. Consumed by vite.config.ts. */
export function buildStructuredData() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: company.name,
      description: 'B2B freight and material movement / transport solutions for businesses.',
      email: company.email,
      contactPoint: company.phones.map((telephone, i) => ({
        '@type': 'ContactPoint',
        telephone,
        contactType: 'sales',
        ...(i === 0 ? { name: company.contactPerson } : {}),
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ];
}
