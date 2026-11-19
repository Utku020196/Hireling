import { materials } from '@/data/site';
import { useQuote } from '@/context/QuoteContext';
import { MaterialPic } from '@/components/illustrations/MaterialPics';

// Photos: Unsplash License (free for commercial use) — xing bowen, Crystal Kwok, Tim Johnson,
// CPG.IO, Arno Senoner. "Something else" keeps its icon since it's an open-ended choice.
const photos: Partial<Record<(typeof materials)[number]['id'], string>> = {
  industrial: '/images/mat-industrial.jpg',
  machinery: '/images/mat-machinery.jpg',
  construction: '/images/mat-construction.jpg',
  packaged: '/images/mat-packaged.jpg',
  retail: '/images/mat-retail.jpg',
};

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
                <span className={photos[m.id] ? 'pic pic--photo' : 'pic'} aria-hidden="true">
                  {photos[m.id]
                    ? <img src={photos[m.id]} alt="" loading="lazy" decoding="async" />
                    : <MaterialPic id={m.id} />}
                </span>
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
