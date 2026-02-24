import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Kui palju maksab soojuspumba paigaldus?", a: "Paigalduse hind sõltub seadme tüübist, ruumi suurusest ja paigaldustingimtustest. Tüüpiline hind algab 500€-st. Küsige personaalset pakkumist!" },
  { q: "Kui kaua võtab paigaldus aega?", a: "Standardne ühe siseseadme paigaldus võtab aega 4–8 tundi. Keerukamate lahenduste puhul planeerime tööd mitme päeva peale." },
  { q: "Kas soojuspump töötab ka talvel?", a: "Jah, kaasaegsed õhk-õhk soojuspumbad töötavad efektiivselt kuni -25°C juures. Soovitame kvaliteetseid brände nagu Panasonic ja Cooper&Hunter." },
  { q: "Kui tihti peab soojuspumpa hooldama?", a: "Soovitame hooldust vähemalt kord aastas. Regulaarne hooldus pikendab seadme eluiga ja hoiab energiatõhususe kõrgel." },
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
  </section>
);

export default FAQTeaser;
