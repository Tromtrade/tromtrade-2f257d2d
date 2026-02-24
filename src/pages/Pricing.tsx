import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const pricingData = [
  {
    title: "Soojuspumba paigaldus",
    price: "alates 500€",
    items: ["Konsultatsioon ja objekti hindamine", "Sise- ja välisseadme paigaldus", "Torustiku paigaldus (kuni 3m)", "Elektriühendus", "Seadistamine ja juhendamine", "Garantii"],
    note: "Lõplik hind sõltub seadme tüübist, torustiku pikkusest ja paigaldustingimustest.",
  },
  {
    title: "Hooldus",
    price: "alates 89€",
    items: ["Filtrite puhastus ja vahetus", "Sisemise soojusvaheti pesu", "Välisseadme kontroll", "Dreenisüsteemi puhastus", "Töörežiimide kontroll", "Hooldusprotokoll"],
    note: "Mitme seadme hoolduse puhul soodustus.",
  },
  {
    title: "Remont / väljakutse",
    price: "alates 79€",
    items: ["Rikke diagnoosimine", "Veakoodide lugemine", "Lihtsamad remonttööd", "Varuosade hankimine"],
    note: "Keerukamad remonttööd ja varuosad arvestatakse eraldi.",
  },
];

const PricingPage = () => (
  <Layout>
    <section className="hero-gradient py-12">
      <div className="container text-center">
        <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Hinnakiri</h1>
        <p className="mt-2 text-primary-foreground/80">Selge ja aus hinnakujundus ilma varjatud kuludeta.</p>
      </div>
    </section>
    <section className="py-12">
      <div className="container max-w-4xl">
        <div className="grid gap-6 md:grid-cols-3">
          {pricingData.map(p => (
            <div key={p.title} className="flex flex-col rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
              <div className="mt-2 text-2xl font-extrabold text-primary">{p.price}</div>
              <ul className="mt-4 flex-1 space-y-2">
                {p.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground/70">{p.note}</p>
              <Link to="/broneeri" className="mt-4">
                <Button className="w-full gap-2" variant="outline">Küsi pakkumist <ArrowRight className="h-4 w-4" /></Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg bg-secondary p-4 text-center">
          <p className="text-sm text-muted-foreground">
            Täpse hinnapakkumise saamiseks on vajalik objekti ülevaatus. Hinnad ei sisalda seadme maksumust, kui pole eraldi märgitud.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PricingPage;
