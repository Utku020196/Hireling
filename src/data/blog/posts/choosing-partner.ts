import type { Post } from '../types';

export const choosingPartner: Post = {
  slug: 'how-to-choose-a-transport-partner',
  title: '12 Questions to Ask Before Choosing a Transport Partner',
  description:
    'Fleet owner or freight broker? Use these 12 questions to check any transport partner on vehicles, documents, communication, claims and payment terms before you hand over a load.',
  category: 'Planning',
  date: '2026-11-18',
  takeaways: [
    'Both fleet owners and freight arrangers (brokers) can be good partners. What matters is accountability, documentation and communication.',
    'Ask who issues the LR, who your single point of contact is, and what happens if a truck breaks down.',
    'Clear claims and payment terms protect you more than the cheapest rate does.',
    'Start with one load, judge the experience, then scale up.',
  ],
  body: [
    { t: 'p', text: 'The rate on a freight quote is easy to compare. Reliability is not. Before you hand over your goods, and your customer’s deadline, these questions will tell you a lot about how a transport partner actually works.' },

    { t: 'h2', text: 'Fleet owner or freight arranger?' },
    { t: 'p', text: 'Some transport companies own their trucks. Others arrange transport by matching your load with suitable vehicles from a network of operators. Neither is automatically better:' },
    {
      t: 'table',
      head: ['', 'Own-fleet transporter', 'Freight arranger / broker'],
      rows: [
        ['Strength', 'Direct control over the vehicle', 'Wider choice of truck sizes, routes and availability'],
        ['Limitation', 'Limited to their own fleet and lanes', 'Quality depends on how well they vet operators'],
        ['Ask about', 'Fleet size and the lanes they actually run', 'How vehicles are selected and verified'],
      ],
    },
    { t: 'p', text: 'Whichever type you use, you want one accountable party who owns the job from pickup to proof of delivery.' },

    { t: 'h2', text: 'The 12 questions' },
    { t: 'h3', text: 'Vehicles and people' },
    {
      t: 'ol',
      items: [
        '**How will you choose the vehicle for my load?** A good answer starts with your weight, dimensions and material, not with "we have all sizes".',
        '**Can you share the vehicle and driver details before arrival?** Vehicle number, driver name and phone.',
        '**Are the vehicle papers in order?** RC, permit, insurance and fitness. You are entitled to ask.',
      ],
    },
    { t: 'h3', text: 'Documents and compliance' },
    {
      t: 'ol',
      start: 4,
      items: [
        '**Who issues the lorry receipt (LR)?** You need one for every load. It is your proof the goods were handed over.',
        '**Who generates or updates the e-way bill?** Agree on this before the truck arrives. See our [e-way bill guide](/blog/e-way-bill-guide-for-truck-shipments).',
        '**How do I get proof of delivery, and how quickly?** A signed, stamped POD closes the job and triggers payment.',
      ],
    },
    { t: 'h3', text: 'Communication' },
    {
      t: 'ol',
      start: 7,
      items: [
        '**Who is my single point of contact?** One named person who answers the phone beats a general helpline.',
        '**How will I know where my load is?** Status updates at pickup, in transit and at delivery, by call, message or tracking.',
        '**What happens if the truck breaks down or is delayed?** Ask how quickly a replacement is arranged and how you will be told.',
      ],
    },
    { t: 'h3', text: 'Money and risk' },
    {
      t: 'ol',
      start: 10,
      items: [
        '**What is included in the quote?** Loading, tolls, GST, free waiting time. See [hidden costs in a freight quote](/blog/hidden-costs-in-a-freight-quote).',
        '**What are the payment terms?** Advance and balance split, and whether the balance is due on POD.',
        '**How are damage or shortage claims handled?** Who to inform, within what time, what evidence is needed, and whether the goods are insured.',
      ],
    },

    { t: 'cta', title: 'Ask us these questions', text: 'Talk to the Hireling team directly about your route and load, and judge the answers for yourself.' },

    { t: 'h2', text: 'Red flags' },
    {
      t: 'ul',
      items: [
        'Will not issue an LR or a proper invoice.',
        'Offers to "adjust" the load beyond the truck’s registered capacity to bring the price down.',
        'Asks for 100% advance on a first load with no documentation.',
        'Cannot tell you the vehicle number until it arrives at your gate.',
        'Has no clear answer on breakdowns, delays or claims.',
        'The quote is far below others with no explanation of why.',
      ],
    },

    { t: 'h2', text: 'Start small, then scale' },
    { t: 'p', text: 'The best test of any transport partner is a real load. Start with one movement, preferably not your most time-critical one, and judge the quote accuracy, communication, punctuality, paperwork and POD turnaround. If it goes well, set up a regular lane with agreed rates and service levels.' },
  ],
  faqs: [
    { q: 'Is it better to use a freight broker or a transporter with its own trucks?', a: 'Both can work well. Own-fleet transporters give direct vehicle control, while freight arrangers offer wider truck choice and availability. Judge either one on accountability, documentation, communication and claims handling.' },
    { q: 'What documents should a transport partner provide?', a: 'At minimum, a lorry receipt (LR) for every load, an invoice for the freight charges, and a signed proof of delivery. On request, they should also share vehicle details such as the RC, permit and insurance.' },
    { q: 'How do I protect myself against damage in transit?', a: 'Insure the goods for their value, make sure the packaging is right for the material, get an LR at pickup, and ask the receiver to note any damage on the proof of delivery before signing.' },
  ],
};
