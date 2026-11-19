import { useEffect, useMemo } from 'react';
import { QuoteProvider } from '@/context/QuoteContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Materials } from '@/components/sections/Materials';
import { Process } from '@/components/sections/Process';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { Faq } from '@/components/sections/Faq';
import { ContactBand } from '@/components/sections/ContactBand';
import { BlogIndex } from '@/components/blog/BlogIndex';
import { BlogPost } from '@/components/blog/BlogPost';
import { NotFound } from '@/components/blog/NotFound';
import { blogMeta } from '@/data/blog';
import { company } from '@/data/site';
import { resolveRoute, type Route } from '@/lib/route';
import { useReveal } from '@/hooks/useReveal';

function pageMeta(route: Route) {
  switch (route.name) {
    case 'blog':
      return { title: blogMeta.title, description: blogMeta.description };
    case 'post':
      return { title: `${route.post.title} | ${company.shortName}`, description: route.post.description };
    case 'notfound':
      return { title: `Page not found | ${company.shortName}`, description: company.description };
    default:
      return null; // home: keep the title injected into index.html
  }
}

function Home() {
  return (
    <>
      <span id="top" />
      <Hero />
      <About />
      <Services />
      <Materials />
      <Process />
      <QuoteSection />
      <Faq />
      <ContactBand />
    </>
  );
}

export default function App() {
  const route = useMemo(() => resolveRoute(window.location.pathname), []);
  useReveal();

  // Static HTML already carries the right tags in production; this covers dev and client-only loads.
  useEffect(() => {
    const meta = pageMeta(route);
    if (!meta) return;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [route]);

  return (
    <QuoteProvider>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header current={route.name === 'home' ? 'home' : 'blog'} />
      <main id="main" tabIndex={-1} className={route.name === 'home' ? undefined : 'blog-main'}>
        {route.name === 'home' && <Home />}
        {route.name === 'blog' && <BlogIndex />}
        {route.name === 'post' && <BlogPost post={route.post} />}
        {route.name === 'notfound' && <NotFound />}
      </main>
      <Footer />
    </QuoteProvider>
  );
}
