import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Kui täpne on kalkulaator?", a: "Tegemist on ligikaudse hinnanguga. Tegelik sääst sõltub hoone soojustusest, kliimast, seadme efektiivsusest ja kasutusharjumustest. Täpse arvutuse saamiseks küsige personaalset pakkumist." },
  { q: "Mis on COP väärtus?", a: "COP (Coefficient of Performance) näitab, mitu kWh soojusenergiat seade toodab ühe kWh elektrienergia kohta. Kvaliteetse soojuspumba COP on keskmiselt 3,5." },
  { q: "Kas soojuspump säästab ka suvel?", a: "Jah, soojuspump pakub ka jahutust, mis on elektrikonditsioneerist efektiivsem." },
  { q: "Kui kiiresti tasub soojuspump end ära?", a: "Tüüpiliselt 2-4 aastat, sõltuvalt praegusest küttesüsteemist ja elektri hinnast." },
];

const CalculatorPage = () => {
  const [area, setArea] = useState(80);
  const [currentHeating, setCurrentHeating] = useState("electric");
  const [elPrice, setElPrice] = useState(0.20);
  const [projectCost, setProjectCost] = useState(3000);

  useEffect(() => {
    document.title = "Õhksoojuspumba tasuvuse kalkulaator | Tromtrade OÜ";
    const metaEl = document.querySelector('meta[name="description"]');
    if (metaEl) metaEl.setAttribute("content", "Arvuta, kui palju säästaksid õhksoojuspumbaga küttekulu. Tasuta kalkulaator ja personaalne pakkumine.");
  }, []);

  const kWhPerM2 = currentHeating === "electric" ? 120 : currentHeating === "gas" ? 100 : 80;
  const annualKwh = area * kWhPerM2;
  const currentCost = annualKwh * elPrice;
  const copAvg = 3.5;
  const hpKwh = annualKwh / copAvg;
  const hpCost = hpKwh * elPrice;
  const savings = currentCost - hpCost;
  const payback = savings > 0 ? projectCost / savings : 0;

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="container py-3 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Avaleht</Link></li>
          <li className="mx-1">/</li>
          <li className="text-foreground font-medium">Kalkulaator</li>
        </ol>
      </nav>

      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Õhksoojuspumba tasuvuse kalkulaator</h1>
          <p className="mt-2 text-primary-foreground/80 max-w-2xl mx-auto">Arvutage, kui palju saate õhksoojuspumbaga küttekulu kokku hoida. Sisestage oma andmed ja saage kohene ülevaade potentsiaalsest säästust.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Inputs */}
            <div className="space-y-5 rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" /> Sisendid
              </h2>
              <div>
                <label className="text-sm font-medium text-foreground">Köetav pindala (m²)</label>
                <input type="number" value={area} onChange={e => setArea(+e.target.value)} min={10} max={500} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Praegune kütteviis</label>
                <select value={currentHeating} onChange={e => setCurrentHeating(e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="electric">Elektriradiaator</option>
                  <option value="gas">Gaasküte</option>
                  <option value="old_hp">Vanem soojuspump</option>
                  <option value="other">Muu</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Elektri hind (€/kWh)</label>
                <input type="number" step={0.01} value={elPrice} onChange={e => setElPrice(+e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Projekti eeldatav maksumus (€)</label>
                <input type="number" value={projectCost} onChange={e => setProjectCost(+e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>

            {/* Results */}
            <div className="space-y-5">
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="font-display text-xl font-bold text-foreground">Tulemused</h2>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-sm text-muted-foreground">Aastane kulu praegu</span>
                    <span className="font-semibold text-foreground">{currentCost.toFixed(0)} €</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-sm text-muted-foreground">Aastane kulu soojuspumbaga</span>
                    <span className="font-semibold text-foreground">{hpCost.toFixed(0)} €</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-sm text-primary font-semibold">Aastane sääst</span>
                    <span className="text-xl font-extrabold text-primary">{savings.toFixed(0)} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tasuvusaeg</span>
                    <span className="font-semibold text-foreground">{payback > 0 ? `~${payback.toFixed(1)} aastat` : "–"}</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  ⚠️ Tegemist on ligikaudse hinnanguga. Tegelik sääst sõltub hoone soojustusest, kliimast, seadme efektiivsusest ja kasutusharjumustest.
                </p>
              </div>
              <Link to="/broneeri">
                <Button size="lg" className="w-full gap-2 mt-2">
                  Küsi täpset pakkumist <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* SEO content */}
          <div className="mt-16 space-y-8 max-w-3xl">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Küttekulu kokkuhoid soojuspumbaga</h2>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>Õhksoojuspump on üks efektiivsemaid viise küttekulu vähendamiseks Eesti kliimas. Tänu kõrgele COP väärtusele (3-5) toodab soojuspump iga kulutatud kilovatt-tunni kohta 3-5 kWh soojusenergiat, mis teeb selle 3-5 korda efektiivsemaks kui tavaline elektriküte.</p>
                <p>Tüüpiline 80 m² korter, mis kasutab elektriradiaatoreid, kulutab küttele umbes 1200 € aastas. Soojuspumbaga langeb see kulu umbes 350 euroni – <strong>sääst on ligikaudu 850 € aastas</strong>. Arvestades, et soojuspumba paigalduse hind algab 390 €-st (seade eraldi), tasub investeering end ära juba 2-3 aastaga.</p>
                <p>Soojuspumba tasuvus sõltub mitmest tegurist: hoone soojustuse kvaliteedist, praegusest küttesüsteemist, elektri hinnast ja seadme efektiivsusest. Hästi soojustatud majas on sääst protsentuaalselt suurem, kuna seade töötab optimaalsemas režiimis.</p>
                <p>Lisaks küttekulu kokkuhoiule pakub õhksoojuspump ka jahutust suvel, mis tähendab täiendavat mugavust ilma lisakuludeta. Samuti tõstab soojuspumba olemasolu kinnisvara väärtust ja energiamärgise klassi.</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-foreground">Kui palju maksab õhksoojuspumba paigaldus 70m² korterisse Tartus?</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">70 m² korterisse soojuspumba paigaldus koos seadmega maksab tavaliselt 1500-2500 €, sõltuvalt valitud mudelist ja paigaldustingimustest. Standardpaigalduse hind (ilma seadmeta) algab 390 €-st. <Link to="/ohksoojuspumba-paigaldus-tartu" className="text-primary font-semibold hover:underline">Loe lähemalt paigaldusest Tartus</Link>.</p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-foreground">Kas õhksoojuspump töötab –25 kraadiga?</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">Jah, kaasaegsed invertersoojuspumbad töötavad efektiivselt kuni -25°C juures. Isegi -20°C juures on COP umbes 2, mis on ikka kaks korda efektiivsem kui tavaline elektriküte. <Link to="/blogi/talvine-tookindlus" className="text-primary font-semibold hover:underline">Loe lähemalt talvisest töökindlusest</Link>.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12 max-w-3xl">
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

          {/* Internal links */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 max-w-3xl">
            <h3 className="font-display font-bold text-foreground mb-3">Seotud teenused ja artiklid</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              <Link to="/ohksoojuspumba-paigaldus-tartu" className="text-sm text-primary hover:underline">→ Õhksoojuspumba paigaldus Tartus</Link>
              <Link to="/blogi/soojuspump-vs-elektrikute" className="text-sm text-primary hover:underline">→ Soojuspump vs elektriküte</Link>
              <Link to="/blogi/soojuspumba-valik-tartu-kliimas" className="text-sm text-primary hover:underline">→ Kuidas valida soojuspumpa</Link>
              <Link to="/kontakt" className="text-sm text-primary hover:underline">→ Võta ühendust</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema */}
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
    </Layout>
  );
};

export default CalculatorPage;
