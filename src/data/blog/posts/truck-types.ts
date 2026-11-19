import type { Post } from '../types';

export const truckTypes: Post = {
  slug: 'truck-types-sizes-and-capacity-guide',
  title: 'Truck Types, Sizes and Capacity: A Guide for Indian Businesses',
  description:
    'From mini trucks to 32 ft containers and low-bed trailers — which commercial vehicle fits your load, what each typically carries, and how to avoid booking the wrong size.',
  category: 'Planning',
  date: '2026-11-18',
  takeaways: [
    'Choose a truck on **both weight and volume**. Bulky light goods fill the space before they reach the weight limit.',
    'Payload figures are typical ranges. The legal limit for any specific truck comes from its registered gross vehicle weight minus its unladen weight.',
    'Body type matters as much as size: open, closed container, trailer, tipper and low-bed each suit different materials.',
    'Booking one size too small causes a re-booking. Booking one size too big means you pay for air.',
  ],
  body: [
    { t: 'p', text: 'Booking the wrong truck is one of the most common, and most avoidable, freight problems. Too small and the load does not fit on the day. Too big and you pay for empty space. This guide walks through the vehicles commonly used for B2B freight in India and what each is good for.' },

    { t: 'h2', text: 'Common truck sizes at a glance' },
    {
      t: 'table',
      head: ['Vehicle', 'Typical body length', 'Typical payload*', 'Good for'],
      rows: [
        ['Mini truck (e.g. Tata Ace class)', '~7 ft', 'up to ~1 t', 'Small intra-city drops, cartons'],
        ['Pickup (e.g. Bolero Pickup class)', '~8–9 ft', '~1.2–1.7 t', 'Small B2B deliveries, spares'],
        ['14 ft LCV', '14 ft', '~3–4 t', 'Packaged goods, small machinery'],
        ['17–19 ft', '17–19 ft', '~5–7 t', 'Retail and warehouse stock'],
        ['20–22 ft', '20–22 ft', '~7–10 t', 'Mixed loads, appliances, pallets'],
        ['32 ft single-axle container (SXL)', '32 ft', '~7–9 t', 'Light, bulky cargo (volume-heavy)'],
        ['32 ft multi-axle container (MXL)', '32 ft', '~14–18 t', 'Heavy and bulky FMCG, industrial goods'],
        ['10–14 wheeler open body', '~22–28 ft', '~16–30 t', 'Steel, cement, bulk materials'],
        ['Trailer / flatbed', '40 ft+', '~25 t and above', 'Long steel, structures, machinery'],
        ['Low-bed / semi low-bed trailer', 'varies', 'heavy, tall loads', 'Excavators, transformers, plant machinery'],
      ],
      caption: '*Indicative ranges only — actual capacity varies by make, model and registration.',
    },

    { t: 'h2', text: 'Body types and what they suit' },
    {
      t: 'ul',
      items: [
        '**Open body:** easy to load from the top or sides with a crane. Good for steel, construction material and machinery. Needs a tarpaulin for weather.',
        '**Closed container:** protects against rain, dust and pilferage. Good for packaged goods, electronics, FMCG and retail stock.',
        '**Flatbed trailer:** long, flat deck for pipes, beams, coils and structures.',
        '**Low-bed trailer:** a lower deck that keeps tall machinery within height limits.',
        '**Tipper:** self-unloading for sand, aggregates and soil.',
        '**Refrigerated (reefer):** temperature-controlled for perishables and some pharma.',
      ],
    },

    { t: 'h2', text: 'Weight or volume — which runs out first?' },
    { t: 'p', text: 'Every truck has two limits: how much it can legally carry (weight) and how much it can physically hold (volume). Dense goods like steel, cement and tiles hit the weight limit with space to spare. Light, bulky goods like foam, plastics and packaged furniture fill the box long before they get heavy.' },
    { t: 'p', text: 'This is why sharing **dimensions, number of pieces or pallets, and approximate weight** matters. With only one of these, the quote is a guess.' },
    { t: 'note', title: 'Quick rule of thumb', text: 'If your goods feel light for their size, ask for a container quote based on volume. If they are dense, size the truck by weight and check that the load can be secured on the deck.' },

    { t: 'cta', title: 'Tell us the load — we’ll match the truck', text: 'Share the material, weight and dimensions or piece count, and the team will confirm the right vehicle in your quotation.' },

    { t: 'h2', text: 'Don’t forget legal limits' },
    { t: 'p', text: 'A truck’s legal payload comes from its **registration certificate**: registered gross vehicle weight minus unladen weight. Loading beyond it is overloading. That is unsafe, it damages roads and vehicles, and it attracts fines under the Motor Vehicles Act. The excess load may also have to be offloaded before the truck can continue. A transporter willing to "just fit it in" is not doing you a favour.' },
    { t: 'p', text: 'Overall dimensions are also regulated. Loads that exceed standard width, height or length are treated as over-dimensional cargo (ODC) and need special planning. See [moving machinery and heavy equipment by road](/blog/machinery-and-heavy-equipment-transport-by-road).' },

    { t: 'h2', text: 'Checklist: what to have ready before asking for a truck' },
    {
      t: 'ul',
      items: [
        'Total approximate weight.',
        'Number of pieces, cartons or pallets, with rough dimensions of the largest item.',
        'Whether the goods can be stacked.',
        'Weather sensitivity (needs a closed body or tarpaulin?).',
        'How it will be loaded: forklift, crane, manual labour or a loading dock.',
        'Access at pickup and drop: road width, height clearance, city entry timings.',
      ],
    },
  ],
  faqs: [
    { q: 'What is the difference between a 32 ft SXL and MXL truck?', a: 'Both have a similar 32 ft container body. SXL (single axle) carries less weight and suits light, bulky cargo. MXL (multi axle) has more axles and a much higher payload for heavier goods.' },
    { q: 'How do I know the legal load capacity of a truck?', a: 'Check the registration certificate. The permissible payload is the registered gross vehicle weight minus the unladen weight. A reputable transporter can share this for the vehicle assigned to you.' },
    { q: 'Can I book a bigger truck just to be safe?', a: 'Yes, but you pay for the whole vehicle. It is usually better to share accurate weight and dimensions and let the transporter recommend the right size.' },
  ],
};
