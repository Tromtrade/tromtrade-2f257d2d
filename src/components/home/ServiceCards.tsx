import { Link } from "react-router-dom";
import { Wrench, Wind, Thermometer, ArrowRightLeft, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Thermometer,
    title: "Soojuspumba paigaldus",
    desc: "Õhk-õhk soojuspumba professionaalne paigaldus koos seadistamisega. Standardpaigaldus sisaldab torustikku kuni 5m, ilukarbikut ja seinakonsoolit.",
    price: "390€",
    href: "/ohksoojuspumba-paigaldus-tartu",
  },
  {
    icon: Settings,
    title: "Hooldus",
    desc: "Regulaarne hooldus pikendab seadme eluiga ja hoiab efektiivsuse kõrgel. Sisaldab filtrite puhastust, soojusvaheti pesu ja dreenisüsteemi kontrolli.",
    price: "70€",
    href: "/ohksoojuspumba-hooldus-tartu",
  },
  {
    icon: Wrench,
    title: "Remont ja diagnostika",
    desc: "Kiire rikete diagnoosimine ja remont. Väljakutse Tartus ja lähiümbruses. Defekteerimine ja veakoodide lugemine.",
    price: "60€",
    href: "/ohksoojuspumba-remont-tartu",
  },
  {
    icon: Wind,
    title: "Kliimaseadme paigaldus",
    desc: "Jahutus- ja kliimaseadmete paigaldus kodudesse ja kontoritesse. Kaasaegne seade pakub nii jahutust kui kütet.",
    price: "390€",
    href: "/kliimaseadme-paigaldus-tartu",
  },
  {
    icon: ArrowRightLeft,
    title: "Ümberpaigaldus ja utiliseerimine",
    desc: "Seadmete demonteerimine, teisaldamine ja uuesti paigaldamine. Vananenud seadmete keskkonnasõbralik utiliseerimine.",
    price: "70€",
    href: "/seadmete-umberpaigaldus-ja-utiliseerimine",
  },
];

const ServiceCards = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">Meie teenused</h2>
        <p className="mt-3 text-muted-foreground">Pakume täisteenust soojuspumpade ja kliimaseadmetega — paigaldusest hoolduse ja remondini.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.href}
            to={s.href}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${s.title === "Soojuspumba paigaldus" ? "bg-gradient-to-br from-primary/15 to-accent/15 group-hover:from-primary/25 group-hover:to-accent/25" : "bg-primary/10 group-hover:bg-primary/20"}`}>
              <s.icon className={`h-6 w-6 ${s.title === "Soojuspumba paigaldus" ? "text-transparent bg-gradient-to-br from-primary to-accent bg-clip-text stroke-primary" : "text-primary"}`} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-bold text-primary">Alates {s.price}</span>
              <span className="flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Loe lähemalt <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceCards;
