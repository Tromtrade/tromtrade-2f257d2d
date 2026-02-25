import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Kui kaua paigaldus kestab?", a: "Enamasti 1 tööpäev." },
  { q: "Kas hooldus on vajalik igal aastal?", a: "Soovitame vähemalt kord aastas, et säilitada efektiivsus." },
  { q: "Kas teostate ka remonti?", a: "Jah, tegeleme rikete diagnostika ja parandusega." },
];

const FAQTeaser = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-3xl font-extrabold text-foreground md:text-4xl mb-8">
          Korduma kippuvad küsimused
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-5">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>

    {/* FAQ Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        }),
      }}
    />
  </section>
);

export default FAQTeaser;
