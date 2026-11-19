import type { Post } from '../types';

export const machinery: Post = {
  slug: 'machinery-and-heavy-equipment-transport-by-road',
  title: 'Moving Machinery and Heavy Equipment by Road: A Planning Guide',
  description:
    'How to plan road transport for industrial machinery in India — specs to collect, choosing the right trailer, over-dimensional cargo, lifting, securing and insurance.',
  category: 'Materials',
  date: '2026-11-18',
  takeaways: [
    'Start with accurate specs: weight, length × width × height, lifting points and centre of gravity.',
    'Match the trailer to the machine. Flatbeds suit long loads, low-beds suit tall or very heavy ones.',
    'Loads beyond standard dimensions are **over-dimensional cargo (ODC)**. They need permissions, route checks and more transit time.',
    'Lifting at both ends is part of the job. Plan the crane or hydra, and the space it needs, before booking the truck.',
  ],
  body: [
    { t: 'p', text: 'Machinery is expensive, heavy and often awkward to handle. Moving it by road is a planning job first and a transport job second. This guide walks through what to sort out before a truck is ever booked.' },

    { t: 'h2', text: 'Step 1: Collect the right specifications' },
    {
      t: 'ul',
      items: [
        '**Weight:** from the nameplate, manual or manufacturer. Do not guess.',
        '**Dimensions:** length, width and height, in the position it will travel (skids, crates and attachments included).',
        '**Lifting points:** where it can safely be picked up from.',
        '**Centre of gravity:** especially for tall or top-heavy machines.',
        '**Detachable parts:** anything that can come off to reduce height, width or weight.',
      ],
    },
    { t: 'p', text: 'Photos of the machine and its surroundings at both ends help a lot. They show access, clearance and the lifting space at a glance.' },

    { t: 'h2', text: 'Step 2: Choose the right vehicle' },
    {
      t: 'table',
      head: ['Vehicle', 'Best for', 'Watch out for'],
      rows: [
        ['Open body truck', 'Smaller machines and parts', 'Side walls can complicate crane loading'],
        ['Flatbed trailer', 'Long equipment, frames, structures', 'Load height adds to deck height'],
        ['Semi low-bed trailer', 'Tall machines that would exceed height on a flatbed', 'Lower ground clearance'],
        ['Low-bed trailer', 'Very heavy or very tall loads: excavators, presses, transformers', 'Availability; longer lead time'],
        ['Closed container', 'Crated, weather-sensitive machinery', 'Needs forklift or dock loading; size limits'],
      ],
    },

    { t: 'h2', text: 'Step 3: Check whether it is over-dimensional cargo' },
    { t: 'p', text: 'Indian road rules set standard limits on how wide, high and long a loaded vehicle can be. For width the limit is about 2.6 m. Loads that go beyond these limits are treated as **over-dimensional cargo (ODC)**. ODC moves typically involve:' },
    {
      t: 'ul',
      items: [
        'Permission from the relevant road authorities, which can vary by state and route.',
        'A route survey covering bridges, overhead wires, flyovers, toll gate widths and tight turns.',
        'Restricted travel times, often limited hours or daytime-only movement.',
        'Escort vehicles and warning signage for larger loads.',
        'Longer e-way bill planning, since ODC validity is 1 day per 20 km instead of per 200 km.',
      ],
    },
    { t: 'note', title: 'Reduce the dimensions if you can', text: 'Removing a hood, mast, attachment or control panel can sometimes bring a load back within normal limits. That saves permits, time and cost. Ask the manufacturer or your maintenance team what can safely be detached.' },

    { t: 'cta', title: 'Planning a machinery move?', text: 'Share the machine’s weight, dimensions and both locations. The team will review the requirement and quote the right setup.' },

    { t: 'h2', text: 'Step 4: Plan lifting at both ends' },
    { t: 'p', text: 'The truck is only part of the job. You also need a safe way to get the machine on and off:' },
    {
      t: 'ul',
      items: [
        '**Crane or hydra:** sized for the weight at the working radius, not just the machine weight.',
        '**Forklift:** for smaller, skid-mounted or crated equipment.',
        '**Space:** room for the crane to set up and for the trailer to park alongside it.',
        '**Ground conditions:** soft or uneven ground under outriggers is a hazard.',
        '**Rigging:** slings, shackles and spreader bars rated for the load.',
      ],
    },

    { t: 'h2', text: 'Step 5: Secure the load properly' },
    { t: 'p', text: 'Machinery must not shift during braking, cornering or on rough roads. Proper securing uses chains or rated straps with binders, wooden blocking or chocks, and protection at contact points. Moving parts should be locked, and fluids drained where the manufacturer recommends it. Ask your transporter how the load will be secured before it leaves.' },

    { t: 'h2', text: 'Step 6: Insurance and documentation' },
    {
      t: 'ul',
      items: [
        'Transit insurance for the full replacement value of the machine.',
        'Invoice or delivery challan, and an e-way bill where applicable.',
        'Lorry receipt from the transporter.',
        'ODC permissions, if needed.',
        'Photos of the machine before loading and after unloading, for condition records.',
      ],
    },
    { t: 'p', text: 'For the full document set, see [documents required for goods transport in India](/blog/documents-required-for-goods-transport-in-india).' },
  ],
  faqs: [
    { q: 'What truck is used to transport heavy machinery?', a: 'It depends on the machine. Flatbed trailers suit long equipment, low-bed and semi low-bed trailers suit tall or very heavy machines, and open-body trucks or containers suit smaller or crated machinery.' },
    { q: 'What is over-dimensional cargo (ODC)?', a: 'Cargo that, once loaded, makes the vehicle exceed standard legal limits for width, height or length. ODC moves need permissions, route checks and often restricted travel times.' },
    { q: 'Who arranges the crane for loading machinery?', a: 'It varies. Sometimes the shipper or receiver has lifting equipment on site, and sometimes it is arranged separately. Confirm responsibility for both ends when you request the quote.' },
  ],
};
