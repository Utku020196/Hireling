import type { Post } from '../types';

export const ewayBill: Post = {
  slug: 'e-way-bill-guide-for-truck-shipments',
  title: 'E-Way Bill for Truck Shipments: A Practical Guide for Shippers',
  description:
    'When you need an e-way bill, what goes in Part A and Part B, how long it stays valid, and the mistakes that get trucks stopped — explained for B2B shippers.',
  category: 'Compliance',
  date: '2026-11-18',
  takeaways: [
    'An e-way bill is generally required when goods worth **more than ₹50,000** per consignment move by road. States can set different thresholds for movement within the state.',
    '**Part A** holds the invoice and consignment details. **Part B** holds the vehicle number. The bill is not usable until Part B is filled.',
    'For regular cargo, validity is **1 day per 200 km** (or part of it). Over-dimensional cargo gets 1 day per 20 km.',
    'If the vehicle changes mid-route, Part B must be updated **before** the goods move on the new vehicle.',
  ],
  body: [
    { t: 'p', text: 'Under GST, the e-way bill is the electronic document that travels with your goods. Get it right and your truck moves without trouble. Get it wrong and the vehicle can be detained at a checkpoint while a delivery deadline slips past. Here is what shippers need to know.' },

    { t: 'h2', text: 'When is an e-way bill required?' },
    { t: 'p', text: 'An e-way bill is generally required when goods are moved by a motor vehicle and the **consignment value exceeds ₹50,000**. The value is taken from the invoice, bill of supply or delivery challan, including tax. This applies to:' },
    {
      t: 'ul',
      items: [
        'Sales to customers (B2B supply).',
        'Stock transfers between your own branches or warehouses.',
        'Goods sent for job work, and returns from it.',
        'Purchase returns and other non-sale movements.',
      ],
    },
    { t: 'note', title: 'Intra-state thresholds vary', text: 'For movement within a single state, some states have notified a different threshold or exemptions. Check your state’s current rule on the official portal before relying on the ₹50,000 figure for local moves.' },

    { t: 'h2', text: 'Who generates it?' },
    { t: 'p', text: 'The registered supplier, the registered recipient or the transporter can generate the e-way bill on the official portal (ewaybillgst.gov.in), through the API, or through e-invoicing. In practice the **consignor usually fills Part A**, and either the consignor or the transporter fills Part B once the vehicle is known. Agree upfront who is responsible, because a truck that shows up without a valid bill cannot leave.' },

    { t: 'h2', text: 'Part A vs Part B' },
    {
      t: 'table',
      head: ['Part', 'What it contains', 'Typically filled by'],
      rows: [
        ['Part A', 'Recipient GSTIN, delivery PIN code, invoice/challan number and date, value of goods, HSN code, reason for transport, transport document (LR) number', 'Consignor (supplier)'],
        ['Part B', 'Vehicle number (or transport document details for rail/air/ship)', 'Consignor or transporter'],
      ],
    },
    { t: 'p', text: 'If your business is covered by e-invoicing, Part A details can be taken from the e-invoice, so you mainly need to add the vehicle details.' },

    { t: 'h2', text: 'How long is an e-way bill valid?' },
    {
      t: 'table',
      head: ['Type of cargo', 'Validity'],
      rows: [
        ['Regular cargo', '1 day for every 200 km or part of it'],
        ['Over-dimensional cargo (ODC)', '1 day for every 20 km or part of it'],
      ],
    },
    { t: 'p', text: 'A "day" runs until midnight of the following day after generation. So a 650 km regular-cargo trip gets 4 days: 200 + 200 + 200 + the remaining 50 km.' },
    { t: 'p', text: 'If the goods cannot reach in time, for example because of a breakdown or a blocked route, the validity can be **extended within a window of 8 hours before or after expiry**, with a reason. Do not let it lapse silently.' },

    { t: 'cta', title: 'Planning an inter-state move?', text: 'Tell us your route and dates. We’ll plan transit time so your paperwork and the truck stay in sync.' },

    { t: 'h2', text: 'Common mistakes that get trucks stopped' },
    {
      t: 'ol',
      items: [
        '**Vehicle number mismatch.** One wrong character in Part B is enough. Check it against the actual truck at loading.',
        '**Changing trucks without updating Part B.** During transshipment or a breakdown swap, update the vehicle on the portal first.',
        '**Expired validity.** Long-haul loads that leave late, or wait at a dock, can run out of time. Extend before or soon after expiry.',
        '**Invoice and e-way bill details don’t match.** Value, quantity or GSTIN differences invite questions at inspection.',
        '**Wrong distance entered.** The portal checks distance against PIN codes, and distance drives validity.',
        '**Splitting to avoid the threshold.** Breaking one consignment into several sub-₹50,000 invoices to avoid an e-way bill is not a safe practice.',
      ],
    },

    { t: 'h2', text: 'Cancelling an e-way bill' },
    { t: 'p', text: 'If goods are not dispatched, or a bill was generated with wrong details, it can be cancelled **within 24 hours** of generation, as long as it has not been verified in transit. After that, a fresh bill is needed for the actual movement.' },

    { t: 'h2', text: 'Shipper checklist before the truck leaves' },
    {
      t: 'ul',
      items: [
        'Invoice or delivery challan printed and matching the e-way bill.',
        'E-way bill number shared with the driver (printout or digital copy).',
        'Vehicle number in Part B checked against the truck.',
        'Validity checked against expected transit time.',
        'Lorry receipt (LR) issued and its number recorded.',
      ],
    },
    { t: 'p', text: 'The e-way bill is one of several documents your load needs. See the full list in [documents required for goods transport in India](/blog/documents-required-for-goods-transport-in-india).' },
    { t: 'note', title: 'Rules change', text: 'GST procedures are updated through notifications and portal advisories. This guide reflects the general rules at the time of writing. Always confirm current requirements on the official e-way bill portal or with your tax advisor.' },
  ],
  faqs: [
    { q: 'Is an e-way bill needed for goods under ₹50,000?', a: 'Generally not for inter-state movement, though some state-specific rules and exceptions apply to intra-state movement. Many businesses generate one anyway for high-value or regularly inspected goods. Check your state’s current rules.' },
    { q: 'Can a transporter generate the e-way bill?', a: 'Yes. A transporter registered on the portal can generate it, typically when the consignor has not. Agree upfront who will generate it so the truck is not held up at loading.' },
    { q: 'What happens if the e-way bill expires during transit?', a: 'Goods moving on an expired e-way bill can be detained, and penalties can apply. If you foresee a delay, extend the validity within the permitted window, which runs from 8 hours before to 8 hours after expiry.' },
    { q: 'Do I need a new e-way bill if the truck breaks down?', a: 'No new bill is needed. Update Part B with the replacement vehicle number before the goods move on that vehicle.' },
  ],
};
