/** Tiny inline-markup tokenizer shared by the React renderer and the build-time HTML renderer. */

export type Segment =
  | { kind: 'text'; value: string }
  | { kind: 'bold'; value: string }
  | { kind: 'link'; value: string; href: string };

const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

export function tokenize(input: string): Segment[] {
  const out: Segment[] = [];
  let last = 0;
  for (const m of input.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push({ kind: 'text', value: input.slice(last, at) });
    if (m[1] !== undefined) out.push({ kind: 'bold', value: m[1] });
    else out.push({ kind: 'link', value: m[2] ?? '', href: m[3] ?? '#' });
    last = at + m[0].length;
  }
  if (last < input.length) out.push({ kind: 'text', value: input.slice(last) });
  return out;
}

/** Inline markup removed — for meta tags, JSON-LD and word counts. */
export const plain = (input: string) => tokenize(input).map((s) => s.value).join('');

export const slugify = (s: string) =>
  plain(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const isExternal = (href: string) => /^https?:\/\//.test(href);
