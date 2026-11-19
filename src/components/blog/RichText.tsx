import { Fragment } from 'react';
import { isExternal, tokenize } from '@/data/blog/inline';

/** Renders the blog's inline markup (**bold**, [link](href), newlines). */
export function RichText({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {tokenize(line).map((s, i) => {
            if (s.kind === 'bold') return <strong key={i}>{s.value}</strong>;
            if (s.kind === 'link') {
              return isExternal(s.href) ? (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer">{s.value}</a>
              ) : (
                <a key={i} href={s.href}>{s.value}</a>
              );
            }
            return <Fragment key={i}>{s.value}</Fragment>;
          })}
        </Fragment>
      ))}
    </>
  );
}
