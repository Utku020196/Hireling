import type { Post } from '../types';

export const hiddenCosts: Post = {
  slug: 'hidden-costs-in-a-freight-quote',
  title: 'Hidden Costs in a Freight Quote — and How to Compare Quotes Fairly',
  description:
    'Detention, loading labour, tolls, extra drops, GST and more: the charges that turn a cheap freight quote into an expensive bill, and a checklist to compare quotes like for like.',
  category: 'Pricing',
  date: '2026-11-18',
  takeaways: [
    'The headline rate rarely covers everything. Ask what is **included** and what is **extra**.',
    'The usual add-ons are detention, loading and unloading labour, tolls, extra pickup or drop points, and GST.',
    'Compare quotes only after converting them to the same truck, inclusions and transit time.',
    'Get inclusions in writing, on the quote or the LR, before the truck is dispatched.',
  ],
  body: [
    { t: 'p', text: 'A freight quote that looks ₹2,000 cheaper can easily end up ₹5,000 dearer by the time the final bill arrives. The difference is almost always in what the quote leaves out. Here are the charges to ask about, and a way to compare quotes fairly.' },

    { t: 'h2', text: 'The charges to ask about' },
    {
      t: 'table',
      head: ['Charge', 'When it appears', 'What to ask'],
      rows: [
        ['Detention / halting', 'Truck waits beyond the free time at loading or unloading', 'How many free hours? What is the per-day charge after that?'],
        ['Loading / unloading labour', 'Transporter provides labour or equipment', 'Is labour included at both ends?'],
        ['Tolls', 'Highway toll plazas on the route', 'Are tolls included in the rate?'],
        ['Extra pickup / drop points', 'Multi-stop routes', 'What is the charge per extra stop?'],
        ['GST', 'Applies to GTA freight', 'Is the quote inclusive or exclusive of GST, and at what rate?'],
        ['Insurance', 'Transit cover for goods', 'Is the cargo insured, and up to what value?'],
        ['Documentation / LR charges', 'Some transporters bill separately', 'Any separate docket or LR fee?'],
        ['Escort / permits', 'Over-dimensional or special cargo', 'Are permissions and escorts included?'],
        ['Cancellation', 'Booking cancelled after the truck is assigned or placed', 'What is the cancellation policy?'],
        ['Night or restricted-hour delivery', 'City no-entry windows', 'Any extra charge for delivery timing?'],
      ],
    },

    { t: 'h2', text: 'Detention: the biggest surprise' },
    { t: 'p', text: 'Trucks earn by moving. When a truck is held at your dock, or the consignee’s, beyond the agreed free time, the transporter charges **detention**. Common causes include cargo not being ready, paperwork not being ready, consignee offices being closed, and gate queues at large facilities. You can avoid most of it with good planning:' },
    {
      t: 'ul',
      items: [
        'Have cargo packed and staged before the truck arrives.',
        'Generate the invoice and e-way bill in advance, then add the vehicle number when it is confirmed.',
        'Confirm receiving hours and a contact person at the drop point.',
        'For large facilities, ask about appointment slots.',
      ],
    },

    { t: 'cta', title: 'Want a quote with the inclusions spelled out?', text: 'Share your requirement and you’ll get a quotation for your specific movement.' },

    { t: 'h2', text: 'How to compare quotes like for like' },
    { t: 'p', text: 'Before choosing on price, convert every quote to the same basis:' },
    {
      t: 'ol',
      items: [
        '**Same truck:** check the size and body type are identical, or both fit your load.',
        '**Same inclusions:** add the cost of anything excluded, such as tolls, labour or insurance, to the cheaper quote.',
        '**Same tax treatment:** compare either all-inclusive or all-exclusive of GST.',
        '**Same transit time:** a slower option may cost you more in delays.',
        '**Same payment terms:** 100% advance is not the same as a balance paid on POD.',
      ],
    },

    { t: 'h3', text: 'Worked comparison (illustrative numbers)' },
    {
      t: 'table',
      head: ['', 'Quote A', 'Quote B'],
      rows: [
        ['Headline rate', '₹22,000', '₹20,000'],
        ['Tolls', 'Included', '+₹1,800'],
        ['Unloading labour', 'Included', '+₹1,200'],
        ['Free waiting time', '24 hours', '6 hours'],
        ['Comparable total', '**₹22,000**', '**₹23,000** + detention risk'],
      ],
      caption: 'Illustrative only — the cheaper headline rate turns out to be the more expensive option.',
    },

    { t: 'h2', text: 'One cost no one should offer you: overloading' },
    { t: 'p', text: 'If a quote looks cheap because the transporter plans to put more on the truck than its registered capacity, walk away. Overloading is unsafe and illegal. Under the Motor Vehicles Act it can lead to heavy fines and the excess being offloaded, which means delays and damaged goods. The "savings" are not real.' },

    { t: 'h2', text: 'Get it in writing' },
    { t: 'p', text: 'Once you agree a rate, make sure the inclusions, free time, detention rate and payment terms are written down on the quotation, a confirmation email or the LR. It takes two minutes and prevents most disputes at billing time.' },
    { t: 'p', text: 'Want fewer surprises from the start? Send a complete request using our [freight quote checklist](/blog/how-to-request-an-accurate-freight-quote).' },
  ],
  faqs: [
    { q: 'What are detention charges in trucking?', a: 'Detention charges are fees a transporter bills when a truck is held at loading or unloading beyond the agreed free time. They are usually charged per day or part of a day.' },
    { q: 'Are tolls included in truck freight rates?', a: 'Sometimes. Practice varies between transporters. Always ask whether the quote includes tolls, and add them in when comparing quotes that exclude them.' },
    { q: 'Should freight quotes include GST?', a: 'Quotes can be shown inclusive or exclusive of GST, and the applicable rate depends on the transporter’s GST option. Ask which applies and compare all quotes on the same basis.' },
  ],
};
