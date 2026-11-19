import { materials } from '@/data/site';
import { useQuote } from '@/context/QuoteContext';
import { MaterialPic } from '@/components/illustrations/MaterialPics';

export function Materials() {
  const { requestMaterial } = useQuote();
  return (
    <section className="sec sec--flush-top" id="moving" aria-labelledby="mov-title">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Start with your load</p>
          <h2 id="mov-title" className="h2">What are you moving?</h2>
          <p className="sub">Pick the closest match — we’ll add it to your request so the team can plan the right transport.</p>
        </div>
        <div className="cats">
          {materials.map((m) => {
            return (
              <button key={m.id} type="button" className="cat" onClick={() => requestMaterial(m.value)}>
                <span className="pic" aria-hidden="true"><MaterialPic id={m.id} /></span>
                <span>
                  <b>{m.title}</b>
                  <small>{m.hint}</small>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
