/** Build a `tel:` href from a display number (strips spaces/dashes). */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

export const mailHref = (email: string, subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  // URLSearchParams encodes spaces as "+", which mail clients don't decode — use %20.
  const qs = params.toString().replace(/\+/g, '%20');
  return `mailto:${email}${qs ? `?${qs}` : ''}`;
};
