import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, ReactNode } from "react";

interface ServiceLandingProps {
  title: string;
  metaDescription?: string;
  h1: string;
  description: string;
  benefits?: string[];
  benefitsTitle?: string;
  process?: string[];
  processTitle?: string;
  included?: string[];
  notIncluded?: string[];
  priceNote?: string;
  priceRange?: string;
  faqs: { q: string; a: string }[];
  ctaLabel?: string;
  additionalContent?: ReactNode;
  mapEmbed?: string;
}

const ServiceLanding = ({ title, metaDescription, h1, description, benefits, benefitsTitle, process, processTitle, included, notIncluded, priceNote, priceRange, faqs, ctaLabel, additionalContent, mapEmbed }: ServiceLandingProps) => {
  useEffect(() => {
    document.title = title;
    const metaEl = document.querySelector('meta[name="description"]');
    if (metaEl && metaDescription) metaEl.setAttribute("content", metaDescription);
  }, [title, metaDescription]);

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="container py-3 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link to="/" itemProp="item" className="hover:text-primary"><span itemProp="name">Avaleht</span></Link>
            <meta itemProp="position" content="1" />
          </li>
          <li className="mx-1">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link to="/teenused" itemProp="item" className="hover:text-primary"><span itemProp="name">Teenused</span></Link>
            <meta itemProp="position" content="2" />
          </li>
          <li className="mx-1">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-foreground font-medium">{h1}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <section className="hero-gradient py-12">
        <div className="container">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl max-w-3xl">{h1}</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/broneeri"><Button variant="accent" size="lg" className="gap-2">{ctaLabel || "Küsi pakkumist"} <ArrowRight className="h-5 w-5" /></Button></Link>
            <a href="tel:+37255644610"><Button variant="hero-outline" size="lg" className="gap-2"><Phone className="h-5 w-5" /> Helista kohe</Button></a>
          </div>
          {/* Conversion triggers */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-primary-foreground/70">
            <span>✓ Tasuta konsultatsioon</span>
            <span>✓ Kiire vastus 24h jooksul</span>
            <span>✓ Kohalik spetsialist Tartus</span>
            <span>✓ Garantiiga töö</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl space-y-12">
          {benefits && benefits.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">{benefitsTitle || "Miks valida meid?"}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {benefits.map(b => (
                  <div key={b} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {process && process.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">{processTitle || "Tööprotsess"}</h2>
              <ol className="mt-4 space-y-3">
                {process.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full hero-gradient text-xs font-bold text-primary-foreground">{i + 1}</span>
                    <span className="text-sm text-muted-foreground pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {(included || notIncluded) && (
            <div className="grid gap-6 md:grid-cols-2">
              {included && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display font-bold text-foreground mb-3">Hind sisaldab</h3>
                  <ul className="space-y-2">{included.map(item => <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-primary">✓</span>{item}</li>)}</ul>
                </div>
              )}
              {notIncluded && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display font-bold text-foreground mb-3">Ei sisalda</h3>
                  <ul className="space-y-2">{notIncluded.map(item => <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-accent">✕</span>{item}</li>)}</ul>
                </div>
              )}
            </div>
          )}

          {/* Additional long-form content */}
          {additionalContent}

          {priceRange && (
            <div className="rounded-xl hero-gradient p-6 text-center">
              {priceNote && <p className="text-primary-foreground/80 text-sm mb-1">{priceNote}</p>}
              <p className="text-primary-foreground/80 text-sm">Hind alates</p>
              <p className="font-display text-3xl font-extrabold text-primary-foreground">{priceRange}</p>
              <Link to="/broneeri" className="mt-4 inline-block"><Button variant="accent" className="gap-2">Küsi täpset hinda <ArrowRight className="h-4 w-4" /></Button></Link>
            </div>
          )}

          {/* Urgency bar */}
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 text-center">
            <p className="text-sm font-semibold text-foreground">⚡ Hooldusperiood enne talve täitub kiiresti — broneeri aeg varakult!</p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Korduma kippuvad küsimused</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-5">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Map embed */}
          {mapEmbed && (
            <div className="rounded-xl border border-border overflow-hidden">
              <iframe src={mapEmbed} className="w-full h-64" loading="lazy" title="Teeninduspiirkond kaardil" />
            </div>
          )}

          {/* Partner logos & credentials */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display font-bold text-foreground mb-4">Volitatud partner ja registreeringud</h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Panasonic_logo_%28Blue%29.svg/320px-Panasonic_logo_%28Blue%29.svg.png" alt="Panasonic ametlik partner" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <span className="text-xs text-muted-foreground">Ametlik partner</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/320px-Samsung_Logo.svg.png" alt="Samsung ametlik partner" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" loading="lazy" />
                <span className="text-xs text-muted-foreground">Ametlik partner</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center h-8 px-3 rounded bg-muted">
                  <span className="font-bold text-sm text-foreground tracking-wide">Cooper&Hunter</span>
                </div>
                <span className="text-xs text-muted-foreground">Ametlik partner</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center h-8 px-3 rounded border border-primary/30 bg-primary/5">
                  <span className="font-bold text-xs text-primary">MTR</span>
                </div>
                <span className="text-xs text-muted-foreground">MTR registreering</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center h-8 px-3 rounded border border-primary/30 bg-primary/5">
                  <span className="font-bold text-xs text-primary">F-GAAS</span>
                </div>
                <span className="text-xs text-muted-foreground">F-gaasi pädevus</span>
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display font-bold text-foreground mb-3">Seotud teenused ja artiklid</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              <Link to="/ohksoojuspumba-paigaldus-tartu" className="text-sm text-primary hover:underline">→ Õhksoojuspumba paigaldus Tartus</Link>
              <Link to="/ohksoojuspumba-hooldus-tartu" className="text-sm text-primary hover:underline">→ Soojuspumba hooldus</Link>
              <Link to="/ohksoojuspumba-remont-tartu" className="text-sm text-primary hover:underline">→ Soojuspumba remont</Link>
              <Link to="/kalkulaator" className="text-sm text-primary hover:underline">→ Säästu kalkulaator</Link>
              <Link to="/blogi/soojuspumba-valik-tartu-kliimas" className="text-sm text-primary hover:underline">→ Kuidas valida õhksoojuspumpa</Link>
              <Link to="/blogi/soojuspump-vs-elektrikute" className="text-sm text-primary hover:underline">→ Soojuspump vs elektriküte</Link>
              <Link to="/kontakt" className="text-sm text-primary hover:underline">→ Võta ühendust</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema JSON-LD: Service + FAQ + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": title,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Tromtrade OÜ",
                "telephone": "+37255644610",
                "email": "info@tromtrade.ee",
                "areaServed": [
                  { "@type": "City", "name": "Tartu" },
                  { "@type": "City", "name": "Elva" },
                  { "@type": "City", "name": "Võru" },
                  { "@type": "City", "name": "Põlva" },
                  { "@type": "City", "name": "Viljandi" },
                  { "@type": "City", "name": "Jõgeva" },
                { "@type": "State", "name": "Lõuna-Eesti" },
              ],
            },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
              })),
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default ServiceLanding;
