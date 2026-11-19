import { processSteps } from '@/data/site';

export function Process() {
  return (
    <section className="sec sec--flush-top" id="process" aria-labelledby="proc-title">
      <div className="wrap">
        <div className="head center">
          <p className="eyebrow">How it works</p>
          <h2 id="proc-title" className="h2">How do I book transport with Hireling?</h2>
          <p className="sub">Six steps from your first message to a delivered load.</p>
        </div>
        <ol className="steps">
          {processSteps.map((s, i) => (
            <li key={s.title}>
              <span className="n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
