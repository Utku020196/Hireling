import { company } from '@/data/site';
import { summarize, type QuoteFields } from './quote';

/**
 * Web3Forms access key. It is designed to be public (it only allows sending
 * to the inbox it was created for), so it can live in client code.
 * Override per environment with VITE_WEB3FORMS_KEY in a .env file.
 */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'a33d1bb9-517c-4d7b-aa85-73c91cdf0757';
const ENDPOINT = 'https://api.web3forms.com/submit';
const TIMEOUT_MS = 15_000;

/** Sends the quote request to the team's inbox. Resolves on success, throws with a user-safe message otherwise. */
export async function submitQuote(values: QuoteFields): Promise<void> {
  const payload: Record<string, string> = {
    access_key: ACCESS_KEY,
    subject: `New freight requirement — ${values.company.trim()}`,
    from_name: `${company.shortName} website`,
    replyto: values.email.trim(),
    // Labelled fields, in form order, so the email reads cleanly.
    ...Object.fromEntries(summarize(values)),
    page: window.location.href,
  };

  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
    if (!res.ok || !data?.success) throw new Error(data?.message || `Request failed (${res.status})`);
  } catch (err) {
    if (import.meta.env.DEV) console.error('[quote] submit failed', err);
    throw new Error(
      controller.signal.aborted
        ? 'The request timed out. Please check your connection and try again.'
        : 'We couldn’t send your requirement just now. Please try again, or send it by email.',
    );
  } finally {
    window.clearTimeout(timer);
  }
}
