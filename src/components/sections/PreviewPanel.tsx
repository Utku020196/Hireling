import { company, statusTimeline } from '@/data/site';
import { mailHref, telHref } from '@/lib/contact';
import { CheckIcon, MailIcon, PhoneIcon } from '@/components/icons/Icons';

const requirementPreview = [
  ['Pickup', 'Your site'],
  ['Drop', 'Delivery point'],
  ['Material', 'What’s moving'],
  ['Date', 'When you need it'],
] as const;

export function PreviewPanel() {
  return (
    <aside className="preview" aria-label="How a requirement moves with Hireling">
      <div className="grid12">
        <div className="card c4">
          <div className="card-h">
            <p className="card-title">Your requirement</p>
            <span>Takes 2 minutes</span>
          </div>
          {requirementPreview.map(([k, v]) => (
            <div className="mini-field" key={k}>
              <span>{k}</span>
              <span>{v}</span>
            </div>
          ))}
          <a href="#quote" className="btn btn-ink btn-sm btn-block" style={{ marginTop: 14 }}>
            Start request
          </a>
        </div>

        <div className="card c5">
          <div className="card-h">
            <p className="card-title">From request to delivery</p>
            <span>Every load</span>
          </div>
          <ol className="status">
            {statusTimeline.map((step, i) => (
              <li key={step.label} className={`is-${step.state}`} aria-current={step.state === 'now' ? 'step' : undefined}>
                <span className={`dot is-${step.state}`} aria-hidden="true">
                  {step.state === 'done' ? <CheckIcon size={12} /> : i + 1}
                </span>
                {step.label}
              </li>
            ))}
          </ol>
        </div>

        <div className="card c3">
          <div className="card-h">
            <p className="card-title">Talk to us</p>
          </div>
          <div className="person">
            <span className="avatar" aria-hidden="true">{company.contactInitials}</span>
            <div>
              <p>{company.contactPerson}</p>
              <p>{company.name}</p>
            </div>
          </div>
          {company.phones.map((p) => (
            <a key={p} className="contact-line" href={telHref(p)}>
              <PhoneIcon /> {p}
            </a>
          ))}
          <a className="contact-line" href={mailHref(company.email)}>
            <MailIcon /> {company.email}
          </a>
        </div>
      </div>
    </aside>
  );
}
