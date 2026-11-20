import { company, quoteBenefits } from '@/data/site';
import { telHref } from '@/lib/contact';
import { CheckIcon } from '@/components/icons/Icons';
import { QuoteForm } from '@/components/quote/QuoteForm';
import { QuoteVideo } from '@/components/quote/QuoteVideo';

export function QuoteSection() {
  const [p1, p2] = company.phones;
  return (
    <section className="sec sec--flush-top" id="quote" aria-labelledby="quote-title">
      <div className="wrap">
        <div className="quote-wrap">
          <div className="quote">
            <div className="quote-side has-video">
              <QuoteVideo />
              <p className="eyebrow">Request a quote</p>
              <h2 id="quote-title" className="h2">Tell us what needs to move.</h2>
              <p className="sub">The more detail you share, the more accurate your quotation.</p>
              <ol>
                {quoteBenefits.map((b) => (
                  <li key={b.title}>
                    <CheckIcon size={22} strokeWidth={2} />
                    <span><b>{b.title}</b> {b.body}</span>
                  </li>
                ))}
              </ol>
              <div className="quote-call">
                Prefer to talk? Call <a href={telHref(p1)}>{p1}</a> or <a href={telHref(p2)}>{p2}</a>.
              </div>
            </div>
            <div className="form">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
