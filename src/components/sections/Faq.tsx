import { company, faqs, primaryPhone } from '@/data/site';
import { PlusIcon } from '@/components/icons/Icons';

export function Faq() {
  return (
    <section className="sec sec--flush-top" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq">
        <div className="head">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title" className="h2">Freight questions, answered.</h2>
          <p className="sub">Can’t find your answer? Call {primaryPhone} or email {company.email}.</p>
        </div>
        <div className="qa">
          {faqs.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>
                {item.q}
                <span className="pm" aria-hidden="true"><PlusIcon /></span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
