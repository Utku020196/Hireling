import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { useQuote } from '@/context/QuoteContext';
import {
  emptyQuote, movementTypes, summarize, todayISO, validateQuote,
  type FieldName, type QuoteErrors, type QuoteFields,
} from '@/lib/quote';
import { submitQuote } from '@/lib/submitQuote';
import { company } from '@/data/site';
import { mailHref } from '@/lib/contact';
import { Field } from './Field';
import { QuoteSummary } from './QuoteSummary';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFields>(emptyQuote);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const materialRef = useRef<HTMLInputElement>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const { materialRequest } = useQuote();

  // A material was picked in the "What are you moving?" grid.
  useEffect(() => {
    if (!materialRequest) return;
    setValues((v) => ({ ...v, material: materialRequest.value }));
    setSubmitted(false);
    setErrors((e) => ({ ...e, material: undefined }));
    // Wait a frame so the form is mounted if we were on the summary view.
    requestAnimationFrame(() => {
      document.getElementById('quote')?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
      materialRef.current?.focus({ preventScroll: true });
    });
  }, [materialRequest]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName;
    const next = { ...values, [name]: e.target.value } as QuoteFields;
    setValues(next);
    // Only live-validate after the first submit attempt — don't nag while typing.
    if (attempted) setErrors(validateQuote(next));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    if (honeypot.current?.value) return; // bot
    const found = validateQuote(values);
    setErrors(found);
    setAttempted(true);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setSending(true);
    setSendError(null);
    try {
      await submitQuote(values);
      setSubmitted(true);
    } catch (err) {
      setSendError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const onReset = () => {
    setValues(emptyQuote);
    setErrors({});
    setAttempted(false);
    setSendError(null);
    setSubmitted(false);
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('input')?.focus());
  };

  if (submitted) return <QuoteSummary values={values} onReset={onReset} />;

  const fallbackMail = mailHref(
    company.email,
    `Freight requirement — ${values.company.trim()}`,
    summarize(values).map(([k, v]) => `${k}: ${v}`).join('\n'),
  );

  const errorCount = Object.values(errors).filter(Boolean).length;
  const input = (name: FieldName, extra: Record<string, unknown> = {}) => ({
    name,
    value: values[name],
    onChange,
    ...extra,
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-labelledby="quote-title" aria-busy={sending}>
      <fieldset className="fs">
        <legend>Your business</legend>
        <div className="fgrid">
          <Field label="Company name" required error={errors.company}>
            <input {...input('company', { autoComplete: 'organization' })} />
          </Field>
          <Field label="Contact person" required error={errors.person}>
            <input {...input('person', { autoComplete: 'name' })} />
          </Field>
          <Field label="Business email" required error={errors.email}>
            <input {...input('email', { type: 'email', autoComplete: 'email', inputMode: 'email' })} />
          </Field>
          <Field label="Phone" required error={errors.phone}>
            <input {...input('phone', { type: 'tel', autoComplete: 'tel', inputMode: 'tel' })} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="fs">
        <legend>The movement</legend>
        <div className="fgrid">
          <Field label="Pickup location" required error={errors.pickup}>
            <input {...input('pickup', { placeholder: 'Address or city' })} />
          </Field>
          <Field label="Drop location" required error={errors.drop}>
            <input {...input('drop', { placeholder: 'Address or city' })} />
          </Field>
          <Field label="Required date" required error={errors.date}>
            <input {...input('date', { type: 'date', min: todayISO() })} />
          </Field>
          <Field label="Movement type">
            <select {...input('type')}>
              {movementTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="fs">
        <legend>The material</legend>
        <div className="fgrid">
          <Field label="Material / goods" required error={errors.material}>
            <input ref={materialRef} {...input('material', { placeholder: 'What’s being moved' })} />
          </Field>
          <Field label="Approx. weight or quantity">
            <input {...input('qty', { placeholder: 'e.g. tonnes, pallets, units' })} />
          </Field>
        </div>
        <Field label="Anything else we should know?">
          <textarea {...input('notes', { placeholder: 'Loading help, special handling, vehicle preference…' })} />
        </Field>
      </fieldset>

      {/* Honeypot: hidden from people and assistive tech, catches naive bots. */}
      <div className="hp" aria-hidden="true">
        <label>Leave this empty<input ref={honeypot} tabIndex={-1} autoComplete="off" name="website" /></label>
      </div>

      <div className="form-foot">
        {sendError && !errorCount ? (
          <p className="is-error" role="alert">
            {sendError} <a href={fallbackMail}>Send by email instead</a>.
          </p>
        ) : (
          <p className={errorCount ? 'is-error' : undefined} role={errorCount ? 'alert' : undefined}>
            {errorCount
              ? `Please fix ${errorCount} field${errorCount > 1 ? 's' : ''} marked above.`
              : <>Fields marked <span className="req">*</span> are required.</>}
          </p>
        )}
        <button type="submit" className="btn btn-ink" disabled={sending}>
          {sending ? 'Sending…' : 'Submit requirement'}
        </button>
      </div>
    </form>
  );
}
