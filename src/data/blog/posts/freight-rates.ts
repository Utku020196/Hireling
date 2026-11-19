import type { Post } from '../types';

export const freightRates: Post = {
  slug: 'how-truck-freight-rates-are-calculated-in-india',
  title: 'How Truck Freight Rates Are Calculated in India',
  description:
    'Distance is only the start. The factors that really move a truck freight quote in India — truck size, return loads, diesel, tolls, season and GST — and what you control.',
  category: 'Pricing',
  date: '2026-11-18',
  takeaways: [
    'A freight quote is mostly the operator’s trip cost: diesel, tolls, driver, vehicle cost and the risk of running back empty.',
    'The same distance can be priced very differently depending on the **direction of the lane** and how easy it is to find a return load.',
    'Demand peaks before festivals, at harvest time and near the financial year-end in March. Book earlier then.',
    'You control more than you think: accurate weight and dimensions, flexible dates, ready-to-load cargo and quick unloading all bring the price down.',
  ],
  body: [
    { t: 'p', text: 'Two transporters quote the same route and their prices are far apart. A month later, the same route costs more. This guide explains what sits behind a road freight quote in India, so you can read quotes properly and know which levers you control.' },

    { t: 'h2', text: 'The three ways freight is priced' },
    {
      t: 'table',
      head: ['Pricing basis', 'How it works', 'Common for'],
      rows: [
        ['Per trip', 'One fixed price for the vehicle, pickup to drop', 'Full truck loads'],
        ['Per tonne', 'Rate × chargeable weight, often with a minimum', 'Bulk materials, part loads'],
        ['Per km', 'Rate × trip distance (sometimes both ways)', 'Dedicated or contract vehicles'],
      ],
    },
    { t: 'p', text: 'Whichever basis you are quoted on, convert it to a total for your actual load so you can compare like with like.' },

    { t: 'h2', text: 'The seven factors that move the price' },

    { t: 'h3', text: '1. Distance and route' },
    { t: 'p', text: 'Longer trips cost more, but not in a straight line. Highway kilometres are cheaper to run than ghat sections, congested city stretches or poor roads, which burn more diesel and driver time.' },

    { t: 'h3', text: '2. Truck type and size' },
    { t: 'p', text: 'A bigger vehicle costs more per trip and less per tonne. Body type also matters: open body, closed container, trailer or tipper. Picking the right size is the single biggest saving, so see our [truck size and capacity guide](/blog/truck-types-sizes-and-capacity-guide).' },

    { t: 'h3', text: '3. Lane direction and return loads' },
    { t: 'p', text: 'This is the factor most shippers miss. A truck that delivers to your destination needs a load to carry back. On lanes where return loads are easy to find, the operator can price competitively. Where trucks often return empty, the quote has to cover part of the empty run. That is why A → B and B → A can be priced quite differently.' },

    { t: 'h3', text: '4. Diesel price' },
    { t: 'p', text: 'Fuel is one of the largest running costs for a truck, so diesel price changes feed into quotes quickly. If you have a long-term rate, check whether it has a fuel-linked revision clause.' },

    { t: 'h3', text: '5. Tolls and entry restrictions' },
    { t: 'p', text: 'Toll charges vary by vehicle class and route. Many cities also restrict when heavy vehicles can enter, which can mean waiting outside the city or doing a night delivery.' },

    { t: 'h3', text: '6. Loading, unloading and waiting time' },
    { t: 'p', text: 'A truck that waits half a day at your dock is a truck that cannot earn elsewhere. Quotes usually include some free waiting time, and **detention charges** apply after that. Labour for loading and unloading may be included or extra.' },

    { t: 'h3', text: '7. Season and market demand' },
    { t: 'p', text: 'Truck availability tightens when demand spikes. Watch for these periods:' },
    {
      t: 'ul',
      items: [
        '**Pre-festive season (roughly September to November):** retail and FMCG stock moves ahead of Diwali.',
        '**Harvest periods:** agricultural produce takes up capacity in producing regions.',
        '**Financial year-end (March):** businesses push dispatches before closing books.',
        '**Monsoon:** slower transit, route disruptions and a higher need for covered vehicles or tarpaulins.',
      ],
    },

    { t: 'cta', title: 'Get a quote built on your real load', text: 'Share pickup, drop, material, weight and date. The team prices your route, not a generic rate card.' },

    { t: 'h2', text: 'Where GST fits in' },
    { t: 'p', text: 'Road freight booked through a goods transport agency (GTA), meaning a business that issues a lorry receipt, is taxed under GST. Since the GST rate changes effective **22 September 2025**, GTAs generally choose between **5% without input tax credit** (commonly paid by a registered recipient under reverse charge) and **18% with input tax credit** under forward charge. Who pays and whether you can claim credit depends on the GTA’s option and your registration.' },
    { t: 'note', title: 'Check with your accountant', text: 'GST treatment of freight depends on your specific setup. Treat this as orientation, not tax advice, and confirm with your CA before you set up billing.' },

    { t: 'h2', text: 'How to bring your freight cost down' },
    {
      t: 'ol',
      items: [
        '**Share accurate weight and dimensions.** Overestimating gets you a bigger truck than you need. Underestimating leads to a re-quote or a refused load.',
        '**Be flexible on dates where you can.** A one-day window lets the operator match you with a truck that is already nearby.',
        '**Be ready when the truck arrives.** Packed, labelled cargo and paperwork ready on arrival avoid detention.',
        '**Consolidate shipments.** Two half-loads on the same lane in the same week may fit one truck.',
        '**Plan around peak season.** Book earlier before festivals and the March year-end.',
        '**Ask about regular-lane pricing.** If you move on the same route every month, say so. Recurring volume is easier to plan for.',
      ],
    },
    { t: 'p', text: 'Next, learn to spot the extras that never appear in the headline rate: [hidden costs in a freight quote](/blog/hidden-costs-in-a-freight-quote).' },
  ],
  faqs: [
    { q: 'Why did two transporters quote very different prices for the same route?', a: 'They may have assumed different truck sizes, included or excluded loading, tolls or GST, or one may already have a truck heading that way or a return load lined up. Compare quotes on the same basis before judging them.' },
    { q: 'Is the return trip included in a one-way freight quote?', a: 'Not as a separate line, but the risk of running back empty is built into the price. That is why lanes with poor return-load availability tend to cost more.' },
    { q: 'How far in advance should I book a truck?', a: 'For routine loads, a few days is usually enough. Before festivals, at the March year-end, or for special vehicles such as trailers and low-beds, book as early as you can.' },
  ],
};
