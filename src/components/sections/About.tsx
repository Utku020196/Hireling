import { company, facts } from '@/data/site';
import { mailHref, telHref } from '@/lib/contact';

export function About() {
  return (
    <section className="sec" aria-labelledby="what-title">
      <div className="wrap answer">
        <div className="answer-box">
          <p className="eyebrow">In short</p>
          <h2 id="what-title" className="h2">What is {company.name}?</h2>
          <p className="big">
            {company.name} is a <b>B2B freight and material movement</b> company. Businesses share a pickup point, a
            drop point and the material to be moved; the team reviews the requirement, shares a quotation and
            arranges the transport.
          </p>
        </div>
        <div className="facts">
          <dl>
            {facts.slice(0, 3).map((f) => (
              <div key={f.term}><dt>{f.term}</dt><dd>{f.value}</dd></div>
            ))}
            <div>
              <dt>Phone</dt>
              <dd>
                {company.phones.map((p, i) => (
                  <span key={p}>{i > 0 && ', '}<a href={telHref(p)}>{p}</a></span>
                ))}
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href={mailHref(company.email)}>{company.email}</a></dd>
            </div>
            {facts.slice(3).map((f) => (
              <div key={f.term}><dt>{f.term}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
