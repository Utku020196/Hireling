import { company, primaryPhone } from '@/data/site';
import { telHref } from '@/lib/contact';
import { ArrowRightIcon, PhoneIcon } from '@/components/icons/Icons';
import { HeroDecor } from '@/components/illustrations/HeroDecor';
import { HeroScene } from '@/components/illustrations/HeroScene';
import { PreviewPanel } from './PreviewPanel';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-inner">
        <div className="hero-photo" aria-hidden="true">
          <img src="/images/hero-highway.jpg" alt="" width={1000} height={500} fetchPriority="high" decoding="async" />
        </div>
        <HeroDecor />
        <span className="pill"><i>B2B</i> Freight &amp; material movement</span>
        <h1 id="hero-title">
          Move your business freight <em>without the follow-ups.</em>
        </h1>
        <p className="lead">
          {company.name} arranges freight and material movement for businesses. Share what needs to move, from
          where and to where — the team reviews it and comes back with a quotation.
        </p>
        <div className="cta-row">
          <a className="btn btn-ink" href="#quote">
            Request a quote <ArrowRightIcon />
          </a>
          <a className="btn btn-line" href={telHref(primaryPhone)}>
            <PhoneIcon /> {primaryPhone}
          </a>
        </div>
      </div>

      <HeroScene />

      <div className="wrap">
        <PreviewPanel />
      </div>
    </section>
  );
}
