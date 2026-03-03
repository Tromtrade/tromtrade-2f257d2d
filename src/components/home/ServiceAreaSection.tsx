import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const cities = [
  { name: "Tartu", href: "/ohksoojuspumba-paigaldus-tartu" },
  { name: "Elva", href: "/ohksoojuspumba-paigaldus-elva" },
  { name: "Võru", href: "/ohksoojuspumba-paigaldus-voru" },
  { name: "Põlva", href: null },
  { name: "Viljandi", href: null },
  { name: "Jõgeva", href: null },
];

const ServiceAreaSection = () => (
  <section className="py-16 md:py-24 surface-warm">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center mb-10">
        <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">Tromtrade teeninduspiirkond</h2>
        <p className="mt-3 text-muted-foreground">Teenindame Tartut ja kogu Lõuna-Eestit. Kiire reageerimine ja professionaalne teenus teie piirkonnas.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {cities.map(city => (
          <div key={city.name} className="rounded-xl border border-border bg-card p-5 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground">{city.name}</h3>
              {city.href ? (
                <Link to={city.href} className="text-sm text-primary hover:underline">Paigaldus {city.name}s →</Link>
              ) : (
                <span className="text-sm text-muted-foreground">Paigaldus, hooldus, remont</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-border overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Tartu+linn,+Estonia&t=&z=12&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64"
          loading="lazy"
          title="Tromtrade teeninduspiirkond"
        />
      </div>
    </div>
  </section>
);

export default ServiceAreaSection;
