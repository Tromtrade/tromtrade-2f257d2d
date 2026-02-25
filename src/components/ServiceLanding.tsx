import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

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
}

const ServiceLanding = ({ title, metaDescription, h1, description, benefits, benefitsTitle, process, processTitle, included, notIncluded, priceNote, priceRange, faqs, ctaLabel }: ServiceLandingProps) => {
  useEffect(() => {
    document.title = title;
    const metaEl = document.querySelector('meta[name="description"]');
    if (metaEl && metaDescription) metaEl.setAttribute("content", metaDescription);
  }, [title, metaDescription]);

  return (
    <Layout>
      <section className="hero-gradient py-12">
        <div className="container">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl max-w-3xl">{h1}</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/broneeri"><Button variant="accent" size="lg" className="gap-2">{ctaLabel || "Küsi pakkumist"} <ArrowRight className="h-5 w-5" /></Button></Link>
            <a href="tel:+37255644610"><Button variant="hero-outline" size="lg" className="gap-2"><Phone className="h-5 w-5" /> Helista kohe</Button></a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl space-y-12">
          {/* Benefits / Included list */}
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

          {/* Process */}
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

          {/* Included/Not */}
          {(included || notIncluded) && (
            <div className="grid gap-6 md:grid-cols-2">
              {included && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display font-bold text-foreground mb-3">Hind sisaldab</h3>
                  <ul className="space-y-2">{included.map(i => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-primary">✓</span>{i}</li>)}</ul>
                </div>
              )}
              {notIncluded && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display font-bold text-foreground mb-3">Ei sisalda</h3>
                  <ul className="space-y-2">{notIncluded.map(i => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-accent">✕</span>{i}</li>)}</ul>
                </div>
              )}
            </div>
          )}

          {/* Price */}
          {priceRange && (
            <div className="rounded-xl hero-gradient p-6 text-center">
              {priceNote && <p className="text-primary-foreground/80 text-sm mb-1">{priceNote}</p>}
              <p className="text-primary-foreground/80 text-sm">Hind alates</p>
              <p className="font-display text-3xl font-extrabold text-primary-foreground">{priceRange}</p>
              <Link to="/broneeri" className="mt-4 inline-block"><Button variant="accent" className="gap-2">Küsi täpset hinda <ArrowRight className="h-4 w-4" /></Button></Link>
            </div>
          )}

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
        </div>
      </section>

      {/* Schema JSON-LD: Service + FAQ */}
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
                  { "@type": "State", "name": "Lõuna-Eesti" },
                ],
              },
              "areaServed": [
                { "@type": "City", "name": "Tartu" },
                { "@type": "State", "name": "Lõuna-Eesti" },
              ],
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
