import { Shield, Award, Briefcase, CheckCircle } from "lucide-react";

const items = [
  { icon: Shield, title: "Sertifitseeritud paigaldus", desc: "F-gaasi pädevustunnistus ja EVUL liikmelisus tagavad kvaliteetse ja nõuetele vastava töö." },
  { icon: Award, title: "Kogemus ja tehniline kompetents", desc: "Üle 10 aasta kogemust õhksoojuspumpade ja kliimaseadmetega. Oleme teostanud sadu paigaldusi üle Lõuna-Eesti." },
  { icon: Briefcase, title: "Teostatud objektid", desc: "Eramajad, korterid, kontorid ja äripinnad – oleme lahendanud väga erinevaid projekte." },
  { icon: CheckCircle, title: "Garantii põhimõtted", desc: "Anname paigaldustöödele ja hooldusele kirjaliku garantii. Garantiiprobleemidele reageerime kiirelt." },
];

const ExpertiseSection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center mb-10">
        <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">Meie kogemus ja pädevus</h2>
        <p className="mt-3 text-muted-foreground">Tromtrade OÜ on kohalik spetsialist, kellel on aastatepikkune kogemus ja tehniline pädevus.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map(item => (
          <div key={item.title} className="rounded-xl border border-border bg-card p-6">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
