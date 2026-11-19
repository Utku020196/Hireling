// Photos: Unsplash License (free for commercial use) — Tom Jackson, AFINIS Group, Ryan Liu.
function Photo({ src, w, h }: { src: string; w: number; h: number }) {
  return <img src={src} alt="" width={w} height={h} loading="lazy" decoding="async" />;
}

export function Services() {
  return (
    <section className="sec sec--flush-top" id="services" aria-labelledby="svc-title">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Services</p>
          <h2 id="svc-title" className="h2">What can Hireling move for your business?</h2>
          <p className="sub">
            Freight and material movement for businesses — tell us the load and the route, and we’ll work out the
            right transport.
          </p>
        </div>
        <div className="svc">
          <article className="card">
            <div className="art" aria-hidden="true"><Photo src="/images/svc-freight.jpg" w={900} h={600} /></div>
            <h3>B2B freight</h3>
            <p>Freight transport for businesses that need goods moved between locations — planned around your pickup, drop and timing.</p>
          </article>
          <article className="card">
            <div className="art" aria-hidden="true"><Photo src="/images/svc-material.jpg" w={900} h={675} /></div>
            <h3>Material movement</h3>
            <p>Moving materials for your business from the pickup point to where they’re needed, with the requirement reviewed before a quote.</p>
          </article>
          <article className="card dark">
            <div className="art" aria-hidden="true"><Photo src="/images/svc-custom.jpg" w={900} h={506} /></div>
            <h3>Have a specific load?</h3>
            <p>Share the material, quantity and route. The team will confirm the right transport for it in the quotation.</p>
            <a className="btn btn-sm" href="#quote">Describe your load</a>
          </article>
        </div>
      </div>
    </section>
  );
}
