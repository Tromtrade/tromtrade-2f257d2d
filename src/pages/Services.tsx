import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Thermometer, Settings, Wrench, Wind, ArrowRightLeft } from "lucide-react";

const services = [
  { icon: Thermometer, title: "Õhk-õhk soojuspumba paigaldus", desc: "Professionaalne soojuspumba paigaldus Tartus ja Lõuna-Eestis. Aitame valida õige seadme ja teostame täislahenduse.", href: "/ohksoojuspumba-paigaldus-tartu", price: "alates 390€" },
  { icon: Settings, title: "Soojuspumba hooldus", desc: "Regulaarne hooldus tagab seadme pikaealisuse ja energiatõhususe. Kiire ja asjatundlik teenus.", href: "/ohksoojuspumba-hooldus-tartu", price: "alates 80€" },
  { icon: Wrench, title: "Soojuspumba remont", desc: "Rikete diagnoosimine ja remont. Väljakutsed Tartus ja lähiümbruses, kiire reageerimine.", href: "/ohksoojuspumba-remont-tartu", price: "alates 60€" },
  { icon: Wind, title: "Kliimaseadme paigaldus", desc: "Jahutus- ja kliimaseadmete paigaldus kodudesse, kontoritesse ja äriruumidesse.", href: "/kliimaseadme-paigaldus-tartu", price: "alates 390€" },
  { icon: ArrowRightLeft, title: "Seadmete ümberpaigaldus ja utiliseerimine", desc: "Olemasoleva seadme demonteerimine, teisaldamine ja uuesti paigaldamine.", href: "/seadmete-umberpaigaldus-ja-utiliseerimine", price: "küsi hinda" },
];

const ServicesPage = () => (
  <Layout>
    <section className="hero-gradient py-12">
      <div className="container text-center">
        <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Teenused</h1>
        <p className="mt-2 text-primary-foreground/80 max-w-xl mx-auto">
          Pakume täisteenust soojuspumpade ja kliimaseadmetega alates konsultatsioonist kuni paigalduse, hoolduse ja remondini.
        </p>
      </div>
    </section>
    <section className="py-12">
      <div className="container max-w-4xl space-y-6">
        {services.map(s => (
          <Link key={s.href} to={s.href} className="group flex flex-col sm:flex-row gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-lg font-bold text-foreground">{s.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{s.price}</span>
                <span className="flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Loe lähemalt <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <section className="hero-gradient py-12">
      <div className="container text-center">
        <h2 className="font-display text-2xl font-extrabold text-primary-foreground md:text-3xl">Ei leidnud sobivat teenust?</h2>
        <p className="mt-2 text-primary-foreground/80">Võtke meiega ühendust ja leiame teile parima lahenduse.</p>
        <Link to="/kontakt" className="mt-6 inline-block">
          <Button variant="accent" size="lg" className="gap-2">Võta ühendust <ArrowRight className="h-5 w-5" /></Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
