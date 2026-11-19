import { company } from '@/data/site';
import { mailHref, telHref } from '@/lib/contact';
import { ArrowUpRightIcon } from '@/components/icons/Icons';

export function ContactBand() {
  const lines = [
    ...company.phones.map((p) => ({ label: 'Phone', value: p, href: telHref(p) })),
    { label: 'Email', value: company.email, href: mailHref(company.email) },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="band">
          <div>
            <h2 id="contact-title">Have a load to move?</h2>
            <p>Speak to {company.contactPerson} directly, or send your requirement and get a quotation.</p>
            <a className="btn" href="#quote">Request a quote</a>
          </div>
          <div className="lines">
            {lines.map((l) => (
              <a key={l.value} href={l.href}>
                <span><small>{l.label}</small>{l.value}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
