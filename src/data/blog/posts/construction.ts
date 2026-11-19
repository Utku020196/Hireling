import type { Post } from '../types';

export const construction: Post = {
  slug: 'construction-material-transport-guide',
  title: 'Transporting Construction Material: Cement, Steel, Bricks and Aggregates',
  description:
    'The right vehicle, packing and site planning for moving cement, TMT steel, bricks, blocks and aggregates to construction sites — and the mistakes that cause delays.',
  category: 'Materials',
  date: '2026-11-18',
  takeaways: [
    'Construction material is dense, so trucks usually reach their **weight** limit before their space limit. Size vehicles by tonnage.',
    'Cement must stay dry. Use a closed body or a well-secured tarpaulin, especially during the monsoon.',
    'Long TMT bars and pipes need a body or trailer long enough to avoid unsafe overhang.',
    'Site access is the most common cause of delays. Check road width, entry timings and unloading space before dispatch.',
  ],
  body: [
    { t: 'p', text: 'Construction projects run on deliveries. If the cement is late, the pour is late. If the steel arrives on the wrong truck, it cannot be unloaded. Here is how to plan road transport for the most common construction materials.' },

    { t: 'h2', text: 'Material-by-material guide' },
    {
      t: 'table',
      head: ['Material', 'Typical vehicle', 'Key watch-outs'],
      rows: [
        ['Cement (bags)', 'Closed body, or open body with tarpaulin', 'Moisture ruins cement; stack bags flat; count bags at loading'],
        ['TMT bars / steel', 'Long open body or trailer', 'Bar length vs body length; secure bundles; overhang rules'],
        ['Structural steel / beams', 'Flatbed trailer', 'Crane at both ends; proper chaining'],
        ['Bricks / blocks', 'Open body', 'Breakage in transit and unloading; palletised blocks reduce damage'],
        ['Sand / aggregates', 'Tipper', 'Volume vs weight units; state permits and transit passes'],
        ['Pipes (PVC, DI, steel)', 'Open body or trailer', 'Stacking pressure; end damage; chocking'],
        ['Tiles / sanitaryware', 'Closed body', 'Fragile; boxes upright; avoid rough handling'],
      ],
    },

    { t: 'h2', text: 'Cement: keep it dry, keep the count' },
    { t: 'p', text: 'Cement that absorbs moisture starts to set in the bag and can become unusable. For open-body trucks, insist on a good-quality tarpaulin that is tied down properly, not just draped over the top. During the monsoon a closed body is worth asking for. Count bags at loading and at delivery, and record any torn bags on the [proof of delivery](/blog/documents-required-for-goods-transport-in-india).' },

    { t: 'h2', text: 'Steel: length decides the truck' },
    { t: 'p', text: 'TMT bars commonly come in long standard lengths, so the vehicle body has to match. A body that is too short means bars hanging off the back, which is unsafe and can attract penalties. Share bar length and total tonnage, and make sure bundles are tied and the load is chained to the deck.' },

    { t: 'h2', text: 'Bricks and blocks: breakage is the hidden cost' },
    { t: 'p', text: 'Loose bricks are usually loaded and unloaded by hand, and breakage adds up quickly. Palletised or strapped blocks unloaded by forklift or crane cut damage and unloading time. Agree on an acceptable breakage level with your supplier and transporter before delivery.' },

    { t: 'h2', text: 'Sand and aggregates: know your units and permits' },
    { t: 'p', text: 'Aggregates are often sold by volume, in cubic feet or local units like brass, but freight may be priced by weight. Make sure everyone uses the same unit. Many states regulate sand and minerals through **transit passes or royalty documents**, so confirm what is needed for your state before dispatch.' },

    { t: 'cta', title: 'Supplying a site?', text: 'Share the material, tonnage, site location and required date. The team will plan the right vehicle and quote it.' },

    { t: 'h2', text: 'Site access: plan it before you dispatch' },
    { t: 'p', text: 'A loaded truck that cannot reach the site is the most expensive kind of delay. Before dispatch, check:' },
    {
      t: 'ul',
      items: [
        '**Road width and turning space** near the site. Can a long trailer get in?',
        '**City entry restrictions** for heavy vehicles, which often allow only certain hours.',
        '**Height clearance** under gates, wires or temporary structures.',
        '**Unloading space** where the truck can stand without blocking traffic.',
        '**Who unloads:** your site labour, the supplier, or arranged separately.',
        '**Site contact** who will receive the material and sign the POD.',
      ],
    },

    { t: 'h2', text: 'Scheduling tips for project deliveries' },
    {
      t: 'ul',
      items: [
        'Stagger deliveries to match how fast the site can consume and store material.',
        'Book critical deliveries, like steel before a slab or cement before a pour, with a buffer day.',
        'During the monsoon, add transit time and plan covered storage on site.',
        'For long projects, set up a recurring schedule so trucks are planned in advance.',
      ],
    },
  ],
  faqs: [
    { q: 'Which truck is best for transporting cement?', a: 'A closed-body truck protects cement best. An open-body truck works if the load is fully covered with a properly tied tarpaulin, but a closed body is safer in rainy weather.' },
    { q: 'How are TMT bars transported?', a: 'On open-body trucks or trailers long enough for the bar length, with bundles tied and chained to the deck. Share bar length and tonnage when you request a quote so the right vehicle is assigned.' },
    { q: 'Do I need a permit to transport sand?', a: 'In many states, yes. Sand and other minerals often need transit passes or royalty documents. The rules vary by state, so confirm the current requirement locally before dispatch.' },
  ],
};
