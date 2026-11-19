import type { Post } from '../types';

export const freightQuote: Post = {
  slug: 'how-to-request-an-accurate-freight-quote',
  title: 'How to Request a Freight Quote That’s Accurate the First Time',
  description:
    'The 10 details transporters need to quote your load correctly — plus a copy-paste template — so you stop getting re-quotes, surprise charges and the wrong truck.',
  category: 'Pricing',
  date: '2026-11-18',
  takeaways: [
    'Most re-quotes and surprise charges trace back to missing details in the original request.',
    'The essentials: exact pickup and drop (with PIN codes), material, weight **and** size, date window, and who handles loading.',
    'Mention access restrictions, such as narrow roads, no-entry hours or no loading dock, upfront.',
    'Use the template below so every request is complete and quotes are comparable.',
  ],
  body: [
    { t: 'p', text: '"How much to send a truck from A to B?" is the quickest way to get a quote, and the quickest way to get the wrong one. A freight quote is only as good as the information behind it. Here is exactly what to share so the price you are quoted is the price you pay.' },

    { t: 'h2', text: 'The 10 details that make a quote accurate' },
    {
      t: 'ol',
      items: [
        '**Pickup location with PIN code:** an exact address, not just the city. Industrial areas, ports and city centres price differently.',
        '**Drop location with PIN code:** the same applies. Note if there are multiple drop points.',
        '**Material description:** what it is (steel pipes, cement bags, cartons of FMCG, a CNC machine), not just "goods".',
        '**Approximate weight:** total, in kg or tonnes.',
        '**Size or count:** number of pieces, cartons or pallets, and the dimensions of the largest item.',
        '**Packaging:** palletised, boxed, bundled, loose or crated. It decides how the load is handled and secured.',
        '**Date and flexibility:** the required date, and whether a day either side works.',
        '**Loading and unloading:** who provides labour or equipment such as a forklift, crane or dock, at both ends.',
        '**Access constraints:** narrow lanes, low gates, city no-entry hours, site rules or society restrictions.',
        '**One-time or recurring:** whether this is a single move or a regular lane.',
      ],
    },

    { t: 'h2', text: 'Nice-to-haves that sharpen the price' },
    {
      t: 'ul',
      items: [
        '**Goods value:** for insurance and e-way bill planning.',
        '**Vehicle preference:** open or closed body, if you have one.',
        '**Special handling:** fragile, keep upright, no stacking, weather-sensitive.',
        '**Billing details:** GSTIN and preferred payment terms.',
      ],
    },

    { t: 'h2', text: 'Copy-paste quote request template' },
    { t: 'note', title: 'Template', text: '**Company:** ___ · **Contact:** ___ (phone / email)\n**Pickup:** full address + PIN · **Drop:** full address + PIN\n**Material:** ___ · **Packaging:** ___\n**Weight:** ___ kg/t · **Pieces / pallets:** ___ · **Largest item (L×W×H):** ___\n**Date:** ___ (flexible ± ___ days?) · **One-time / recurring**\n**Loading by:** us / transporter · **Unloading by:** consignee / transporter\n**Access notes:** ___ · **Goods value (approx.):** ₹___' },

    { t: 'cta', title: 'Skip the template — use our form', text: 'The Hireling quote form asks for exactly these details in one go. Fill it in once and the team responds with a quotation.' },

    { t: 'h2', text: 'Why missing details cost you money' },
    {
      t: 'table',
      head: ['Missing detail', 'What happens on the day'],
      rows: [
        ['Weight underestimated', 'Truck too small; re-booking or overloading risk'],
        ['Dimensions not shared', 'Long or tall item does not fit the body'],
        ['No mention of manual unloading', 'Labour charges added at delivery'],
        ['Access not mentioned', 'Truck cannot reach the site; transshipment to a smaller vehicle'],
        ['Rigid date not stated', 'Quote assumes flexibility; delivery lands later than you need'],
        ['Multiple drops not mentioned', 'Extra stop charges added after the fact'],
      ],
    },

    { t: 'h2', text: 'How to compare the quotes you get back' },
    { t: 'p', text: 'Put quotes side by side on the same basis: the same truck size, the same inclusions (loading, tolls, GST) and the same transit time. A quote that looks cheaper but excludes loading and tolls may cost more by the end. Our guide to [hidden costs in a freight quote](/blog/hidden-costs-in-a-freight-quote) lists every line item to check.' },
  ],
  faqs: [
    { q: 'What information do I need to get a truck freight quote?', a: 'At minimum: pickup and drop addresses with PIN codes, a description of the material, approximate weight, size or piece count, the required date, and who will handle loading and unloading.' },
    { q: 'Why did my final freight bill differ from the quote?', a: 'Usually because something was not in the original request, such as extra waiting time, unplanned unloading labour, an extra drop point, or a load heavier or larger than described. A complete request avoids most of these.' },
    { q: 'How quickly can I get a freight quote?', a: 'Once the transporter has complete details, a standard road freight quote is usually quick. Unusual loads such as machinery or over-dimensional cargo take longer because the route and vehicle need checking.' },
  ],
};
