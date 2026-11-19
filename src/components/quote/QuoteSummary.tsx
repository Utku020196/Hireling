import { useEffect, useRef } from 'react';
import { primaryPhone } from '@/data/site';
import { telHref } from '@/lib/contact';
import { summarize, type QuoteFields } from '@/lib/quote';
import { CheckIcon } from '@/components/icons/Icons';

interface Props {
  values: QuoteFields;
  /** Clear the form to send another requirement. */
  onReset: () => void;
}

/** Shown after the requirement has been sent successfully. */
export function QuoteSummary({ values, onReset }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rows = summarize(values);

  // Move focus to the confirmation so screen-reader and keyboard users land on it.
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="done" ref={ref} tabIndex={-1} role="status" aria-live="polite" aria-labelledby="done-title">
      <span className="check" aria-hidden="true"><CheckIcon size={26} strokeWidth={2.6} /></span>
      <h3 id="done-title" className="h2">Requirement sent.</h3>
      <p className="sub">
        Thanks, {values.person.trim().split(/\s+/)[0]}. The team will review it and come back with a quotation on{' '}
        {values.email.trim()} or {values.phone.trim()}.
      </p>
      <div className="summary">
        <dl>
          {rows.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </div>
      <div className="cta-row">
        <a className="btn btn-ink" href={telHref(primaryPhone)}>Call {primaryPhone}</a>
        <button className="btn btn-line" type="button" onClick={onReset}>Send another requirement</button>
      </div>
    </div>
  );
}
