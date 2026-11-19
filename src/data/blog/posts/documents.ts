import type { Post } from '../types';

export const documents: Post = {
  slug: 'documents-required-for-goods-transport-in-india',
  title: 'Documents Required for Goods Transport in India: Shipper’s Checklist',
  description:
    'Invoice, e-way bill, lorry receipt, proof of delivery and more — which documents a B2B road shipment needs, who provides each, and why each one matters.',
  category: 'Compliance',
  date: '2026-11-18',
  takeaways: [
    'Every B2B truck shipment needs a **tax invoice or delivery challan** and, above the threshold, an **e-way bill**.',
    'The **lorry receipt (LR)** is the transporter’s acknowledgement of your goods and the basis for any claim.',
    'Collect a signed **proof of delivery (POD)** every time. It closes the job and protects you in disputes.',
    'Vehicle papers (RC, permit, insurance, fitness, PUC) and the driver’s licence are the transporter’s job, but you are entitled to ask for them.',
  ],
  body: [
    { t: 'p', text: 'A truck can be in perfect order and still be held up because a single document is missing. This checklist covers what a typical B2B road shipment in India needs, split into what you, the shipper, provide and what the transporter provides.' },

    { t: 'h2', text: 'The complete checklist' },
    {
      t: 'table',
      head: ['Document', 'Provided by', 'Why it matters'],
      rows: [
        ['Tax invoice', 'Shipper (supplier)', 'Proves the sale and value; needed for GST and the e-way bill'],
        ['Delivery challan', 'Shipper', 'Used instead of an invoice for non-sale moves such as job work or some stock transfers'],
        ['E-way bill', 'Shipper or transporter', 'Required under GST when consignment value exceeds the threshold'],
        ['Packing list', 'Shipper', 'Itemises what is in each package; speeds up checks and claims'],
        ['Lorry receipt (LR) / consignment note', 'Transporter', 'Acknowledges receipt of goods and terms of carriage'],
        ['Transit insurance certificate', 'Shipper or transporter', 'Covers loss or damage in transit'],
        ['Proof of delivery (POD)', 'Consignee signs; transporter returns it', 'Confirms delivery in good condition'],
        ['Weighbridge slip', 'Either', 'Records actual weight; useful for per-tonne billing and overload checks'],
      ],
    },

    { t: 'h2', text: 'Shipper documents in detail' },
    { t: 'h3', text: 'Tax invoice or delivery challan' },
    { t: 'p', text: 'For a sale, the goods travel with a tax invoice. For movements that are not sales, such as sending goods for job work, moving goods for exhibition, or certain transfers, a **delivery challan** is used instead. Make sure quantities, values and GSTINs match what goes on the e-way bill.' },
    { t: 'h3', text: 'E-way bill' },
    { t: 'p', text: 'Required for most consignments worth more than ₹50,000 moving by road. Part A covers the invoice details and Part B the vehicle. Read the full walkthrough: [e-way bill guide for truck shipments](/blog/e-way-bill-guide-for-truck-shipments).' },
    { t: 'h3', text: 'Packing list' },
    { t: 'p', text: 'Not legally required in every case, but cheap insurance. If something goes missing or arrives damaged, a packing list that matches the LR makes the claim straightforward.' },

    { t: 'h2', text: 'Transporter documents in detail' },
    { t: 'h3', text: 'Lorry receipt (LR)' },
    { t: 'p', text: 'Also called a consignment note or bilty. It records the consignor, consignee, pickup and drop points, number of packages, description, weight and freight terms (paid, to-pay or billed). It also has GST significance: a business issuing an LR for road transport is generally treated as a goods transport agency (GTA). **Always get an LR, and keep its number.**' },
    { t: 'h3', text: 'Vehicle and driver papers' },
    {
      t: 'ul',
      items: [
        'Registration certificate (RC)',
        'Goods carriage permit (national or state, as applicable)',
        'Vehicle insurance',
        'Fitness certificate',
        'Pollution under control (PUC) certificate',
        'Valid driving licence for the vehicle class',
      ],
    },
    { t: 'p', text: 'These are the transporter’s responsibility. Even so, it is reasonable to ask for copies, especially for high-value or recurring loads.' },

    { t: 'cta', title: 'Moving a load soon?', text: 'Share the details and the team will walk you through what paperwork your route and material need.' },

    { t: 'h2', text: 'Proof of delivery: the document people forget' },
    { t: 'p', text: 'The POD is the consignee’s signed and stamped copy of the LR or delivery note, often with the date, time and remarks. Insist that the receiver notes any visible damage or shortage **on the POD itself**. A clean POD signed without remarks is hard to dispute later.' },

    { t: 'h2', text: 'Material-specific documents' },
    { t: 'p', text: 'Some goods need extra paperwork depending on the state and the material. Examples include transit passes for sand and minerals, permits for over-dimensional cargo, or licences for regulated goods. If your material is unusual, mention it when you request a quote so it can be planned for.' },

    { t: 'h2', text: 'Before-dispatch checklist' },
    {
      t: 'ol',
      items: [
        'Invoice or challan printed, with values matching the e-way bill.',
        'E-way bill generated, Part B updated with the correct vehicle number.',
        'Packing list attached or shared.',
        'LR issued by the transporter, with the LR number noted on your records.',
        'Insurance arranged for the transit value.',
        'Consignee informed of the expected arrival and POD process.',
      ],
    },
  ],
  faqs: [
    { q: 'What is a lorry receipt (LR)?', a: 'A lorry receipt, also called a consignment note or bilty, is the document a transporter issues when it receives goods. It records the parties, route, packages, weight and freight terms, and it is the key document for any claim.' },
    { q: 'Who is responsible for the e-way bill — shipper or transporter?', a: 'Either can generate it. Usually the consignor fills Part A from the invoice, and the consignor or transporter adds the vehicle number in Part B. Agree on this before the truck arrives.' },
    { q: 'Is transit insurance mandatory?', a: 'It is not always legally required, but it is strongly advisable. A carrier’s liability can be limited, so insurance for the full value of the goods protects you against loss or damage.' },
  ],
};
