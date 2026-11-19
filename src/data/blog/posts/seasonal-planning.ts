import type { Post } from '../types';

export const seasonalPlanning: Post = {
  slug: 'freight-planning-for-festive-season-monsoon-and-year-end',
  title: 'Freight Planning for Festive Season, Monsoon and Year-End',
  description:
    'Truck availability and transit times shift through the year in India. A season-by-season plan for B2B shippers to avoid shortages, delays and weather damage.',
  category: 'Planning',
  date: '2026-11-18',
  takeaways: [
    'Demand for trucks rises before major festivals and at the March financial year-end. Book earlier in those windows.',
    'During the monsoon, plan for slower transit, covered vehicles or tarpaulins, and moisture-proof packaging.',
    'Around festival holidays, many drivers go home, so capacity can tighten for a period afterwards as well.',
    'A simple rolling dispatch plan, shared with your transporter, is the most effective tool all year round.',
  ],
  body: [
    { t: 'p', text: 'Road freight in India follows the calendar. The truck that was easy to book in February can be hard to find in October, and a five-day transit in December can take longer in July. Planning around these patterns saves money and missed deadlines.' },

    { t: 'h2', text: 'The freight calendar at a glance' },
    {
      t: 'table',
      head: ['Period', 'What happens', 'What to do'],
      rows: [
        ['Pre-festive (approx. Sep–Nov)', 'Retail, FMCG and consumer goods stock up ahead of Diwali; demand for trucks rises', 'Book earlier; lock in capacity for known dispatches'],
        ['Festival week and after', 'Many drivers take leave; capacity can stay tight for a while', 'Avoid scheduling critical loads right after major festivals'],
        ['Monsoon (approx. Jun–Sep)', 'Slower transit, route disruptions, risk of water damage', 'Add buffer days; ask for closed bodies or proper tarpaulins'],
        ['Harvest seasons', 'Agricultural produce takes up trucks in producing regions', 'Expect tighter capacity on rural and agri corridors'],
        ['Financial year-end (March)', 'Businesses rush dispatches and billing before closing books', 'Plan March dispatches in February'],
      ],
      caption: 'Timings are approximate and vary by region, festival dates and the year.',
    },

    { t: 'h2', text: 'Festive season: book before everyone else does' },
    { t: 'p', text: 'In the run-up to Diwali and other major festivals, consumer goods move in volume. Trucks on popular corridors get booked faster, and freight rates often firm up. To stay ahead:' },
    {
      t: 'ul',
      items: [
        'Share your expected festive dispatches with your transporter a few weeks in advance.',
        'Move non-urgent stock earlier, before the peak.',
        'Avoid planning critical deliveries for the days just after the festival, when driver availability is often low.',
        'If you have recurring volume, agree on a schedule rather than booking each load at the last minute.',
      ],
    },

    { t: 'h2', text: 'Monsoon: protect the goods and the timeline' },
    { t: 'p', text: 'Rain affects freight in two ways: transit takes longer, and water can damage goods. Plan for both.' },
    { t: 'h3', text: 'Protecting goods' },
    {
      t: 'ul',
      items: [
        'Prefer **closed-body containers** for cement, packaged goods, electronics and paper.',
        'On open bodies, insist on a **good tarpaulin that is properly tied**, with no gaps at the corners.',
        'Use stretch-wrap, plastic liners or moisture-resistant packaging for sensitive cargo.',
        'Keep goods off the truck floor using pallets or dunnage.',
      ],
    },
    { t: 'h3', text: 'Protecting the timeline' },
    {
      t: 'ul',
      items: [
        'Add buffer days for routes through ghats, coastal belts and flood-prone areas.',
        'Remember e-way bill validity is tied to distance. If a route is disrupted, extend it within the permitted window. See our [e-way bill guide](/blog/e-way-bill-guide-for-truck-shipments).',
        'Confirm the receiver can unload under cover.',
      ],
    },

    { t: 'cta', title: 'Have a busy season ahead?', text: 'Share your upcoming loads and dates. The team can plan the movements with you before capacity tightens.' },

    { t: 'h2', text: 'March year-end: the rush nobody plans for' },
    { t: 'p', text: 'As the financial year closes, many businesses try to dispatch and invoice before 31 March. That pushes up demand for trucks in the last weeks of the month. If you know you will have year-end dispatches, plan them in February and spread them out across March rather than cramming them into the final days.' },

    { t: 'h2', text: 'A simple rolling dispatch plan' },
    { t: 'p', text: 'You do not need software to plan freight. A shared sheet with these columns, updated weekly, makes a big difference:' },
    {
      t: 'table',
      head: ['Column', 'Example'],
      rows: [
        ['Dispatch week', 'Week of 1 December'],
        ['Lane', 'Pickup city → Drop city'],
        ['Material', 'Packaged goods'],
        ['Approx. weight / volume', '6 t / 20 pallets'],
        ['Required delivery date', 'Hard deadline or flexible'],
        ['Status', 'Planned / quoted / confirmed / delivered'],
      ],
    },
    { t: 'p', text: 'Sharing even a rough version of this with your transport partner gives them time to line up the right trucks, which is usually reflected in better availability and pricing. For what drives the price itself, see [how truck freight rates are calculated](/blog/how-truck-freight-rates-are-calculated-in-india).' },
  ],
  faqs: [
    { q: 'Why are trucks harder to book before Diwali?', a: 'Large volumes of consumer goods move ahead of the festive season, so demand for trucks on busy corridors rises. Many drivers also take leave around the festival, which tightens capacity further.' },
    { q: 'How do I protect cargo from rain during transport?', a: 'Use a closed-body vehicle where possible. On open trucks, use a properly tied tarpaulin, and use moisture-resistant packaging and pallets to keep goods off the floor.' },
    { q: 'When should I book trucks for March year-end dispatches?', a: 'Plan in February and spread dispatches across March. The final weeks of the financial year are among the busiest for B2B freight.' },
  ],
};
