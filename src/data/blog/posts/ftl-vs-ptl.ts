import type { Post } from '../types';

export const ftlVsPtl: Post = {
  slug: 'ftl-vs-ptl-which-truck-booking-fits-your-load',
  title: 'FTL vs PTL: Which Truck Booking Fits Your Business Load?',
  description:
    'Full truck load or part truck load? A plain-language guide to how each works, what you pay for, and a simple test to decide for your next B2B shipment.',
  category: 'Planning',
  date: '2026-11-18',
  takeaways: [
    '**FTL** = one truck, one shipper. You pay for the whole vehicle, whether you fill it or not.',
    '**PTL** = you share the truck and pay for the space or weight you use, but accept extra handling and a less fixed timeline.',
    'Compare the PTL price for your actual weight with the FTL price for the smallest truck that fits. The lower number usually wins, unless timing or fragility overrides it.',
    'Time-critical, fragile, high-value or awkward-to-handle loads usually belong in FTL even when PTL looks cheaper on paper.',
  ],
  body: [
    { t: 'p', text: 'Every business that ships by road eventually asks the same question: do we book a full truck, or share one? The answer changes your cost, transit time and how many times your goods get handled. Here is how to decide quickly and with confidence.' },

    { t: 'h2', text: 'What FTL and PTL actually mean' },
    { t: 'p', text: '**Full truck load (FTL)** means the vehicle is booked for your consignment alone. It is loaded at your pickup point, sealed or covered, and driven to your drop point. Nobody else’s cargo goes on board.' },
    { t: 'p', text: '**Part truck load (PTL)** means your consignment shares the vehicle with other shippers’ goods moving on the same corridor. The operator consolidates several loads to fill the truck, and each shipper pays for their share. Some providers call this LTL (less than truck load). In India the two terms are often used loosely, so always ask how the provider prices it and how many stops the truck makes.' },

    { t: 'h2', text: 'Side-by-side comparison' },
    {
      t: 'table',
      head: ['', 'Full truck load (FTL)', 'Part truck load (PTL)'],
      rows: [
        ['What you pay for', 'The whole vehicle for the trip', 'Your share — usually by weight, volume or space'],
        ['Transit', 'Direct, pickup to drop', 'May wait for consolidation; extra stops en route'],
        ['Handling', 'Loaded once, unloaded once', 'Can be loaded, transferred and unloaded more than once'],
        ['Schedule control', 'High — the truck moves when you are ready', 'Lower — depends on when the truck is full'],
        ['Best for', 'Large, urgent, fragile or high-value loads', 'Smaller, regular, non-urgent consignments'],
        ['Main risk', 'Paying for empty space', 'Delays and handling damage'],
      ],
    },

    { t: 'h2', text: 'A simple test to decide' },
    { t: 'p', text: 'Run through these four questions in order. The first one that gives a clear answer usually settles it.' },
    {
      t: 'ol',
      items: [
        '**Is there a hard deadline?** If the goods must arrive on a specific day, for example for a production line or a site handover, FTL removes consolidation waits. Choose FTL.',
        '**Is the load fragile, high-value or awkward?** Every extra handling step adds risk. Machinery, glass, long steel and unpalletised goods are safer moving once. Lean FTL.',
        '**How much of the truck will you fill?** If your load takes up most of the smallest suitable truck, by weight or volume, FTL is often comparable in price and far simpler.',
        '**What do the two quotes say?** For everything else, compare the PTL price for your actual weight against the FTL price for the right-size truck.',
      ],
    },

    { t: 'h3', text: 'Worked example (illustrative numbers)' },
    { t: 'p', text: 'Say you need to move 2.5 tonnes of packaged goods between two cities. The numbers below are made up to show the method. Real rates depend on your lane, date and material.' },
    {
      t: 'table',
      head: ['Option', 'How it is priced', 'Example total'],
      rows: [
        ['PTL', '2,500 kg × ₹6 per kg', '₹15,000'],
        ['FTL — 14 ft truck (fits ~3–4 t)', 'Fixed trip price', '₹18,000'],
      ],
      caption: 'Illustrative only — not a Hireling rate card.',
    },
    { t: 'p', text: 'On paper PTL saves ₹3,000. But if the PTL truck needs two extra days to consolidate, or your cartons get re-handled at a transfer point, that saving can disappear quickly. If the goods are needed on site by a fixed date, the FTL quote is the better buy.' },
    { t: 'note', title: 'Weight is not the only limit', text: 'Light but bulky goods, such as foam, empty containers or packaged furniture, fill a truck’s space long before its weight limit. Always share dimensions or a pallet/carton count along with the weight, or the quote will be built on the wrong assumption.' },

    { t: 'cta', title: 'Not sure which one your load needs?', text: 'Share the material, weight and route. The team will tell you which option makes sense and quote it.' },

    { t: 'h2', text: 'When PTL is the smart choice' },
    {
      t: 'ul',
      items: [
        'Regular small consignments, for example replenishing a distributor every week.',
        'Robust, well-packed goods on pallets or in cartons that tolerate handling.',
        'Flexible delivery windows, where a day either way does not matter.',
        'Busy corridors where consolidation happens fast.',
      ],
    },

    { t: 'h2', text: 'When FTL pays for itself' },
    {
      t: 'ul',
      items: [
        'Loads that fill most of a truck by weight or volume.',
        'Machinery, equipment and anything that needs a crane or forklift at both ends.',
        'Construction material moving straight to a site.',
        'Goods that must stay together under one document set, for example a single invoice and a single e-way bill.',
      ],
    },

    { t: 'h2', text: 'Questions to ask before you book either' },
    {
      t: 'ul',
      items: [
        'Is the price per trip, per tonne or per kg, and what is the minimum chargeable weight?',
        'Are loading, unloading and tolls included?',
        'For PTL: how many stops or transfers will the truck make?',
        'What is the expected transit time, and what happens if it slips?',
        'Who issues the lorry receipt (LR), and how will you get proof of delivery?',
      ],
    },
    { t: 'p', text: 'For a full list of line items that can change your final bill, see [hidden costs in a freight quote](/blog/hidden-costs-in-a-freight-quote).' },
  ],
  faqs: [
    { q: 'Is FTL always more expensive than PTL?', a: 'No. Per kilogram, FTL is usually cheaper once your load fills a large share of the truck. PTL wins mainly for small consignments where paying for a whole vehicle would mean paying for empty space.' },
    { q: 'Is PTL the same as LTL?', a: 'They are closely related, and many Indian providers use the terms interchangeably for shared-truck shipping. Ask how the service is priced and how many handling points are involved rather than relying on the label.' },
    { q: 'Can I book FTL for a load that does not fill the truck?', a: 'Yes. Many businesses do this when they need speed, security or a fixed delivery date. You pay for the full vehicle, so it helps to choose the smallest truck that safely fits the load.' },
  ],
};
