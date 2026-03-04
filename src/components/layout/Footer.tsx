import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/tromtrade-logo-new.jpg";

const Footer = () =>
<footer className="border-t border-border bg-foreground text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Tromtrade" className="w-full max-w-[220px] object-contain rounded" />
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Professionaalne õhk-õhk soojuspumpade ja kliimaseadmete paigaldus, hooldus ja remont Tartus ja Lõuna-Eestis.
          </p>
        </div>

        {/* Teenused */}
        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Teenused</h4>
          <nav className="flex flex-col gap-2">
            {[
          { label: "Soojuspumba paigaldus", href: "/ohksoojuspumba-paigaldus-tartu" },
          { label: "Hooldus", href: "/ohksoojuspumba-hooldus-tartu" },
          { label: "Remont", href: "/ohksoojuspumba-remont-tartu" },
          { label: "Kliimaseadme paigaldus", href: "/kliimaseadme-paigaldus-tartu" },
          { label: "Ümberpaigaldus", href: "/seadmete-umberpaigaldus-ja-utiliseerimine" }].
          map((link) =>
          <Link key={link.href} to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
          )}
          </nav>
        </div>

        {/* Ettevõte */}
        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Ettevõte</h4>
          <nav className="flex flex-col gap-2">
            {[
          { label: "Meist", href: "/meist" },
          { label: "Tehtud tööd", href: "/tehtud-tood" },
          { label: "Blogi", href: "/blogi" },
          { label: "Hinnakiri", href: "/hinnakiri" },
          { label: "Privaatsuspoliitika", href: "/privaatsus" }].
          map((link) =>
          <Link key={link.href} to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
          )}
          </nav>
        </div>

        {/* Kontakt */}
        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Kontakt</h4>
          <div className="space-y-3">
            <a href="tel:+37255644610" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4 shrink-0" />
              5564 4610
            </a>
            <a href="https://wa.me/37255644610" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
            <a href="mailto:info@tromtrade.ee" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail className="h-4 w-4 shrink-0" />
              info@tromtrade.ee
            </a>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>Tartu ja Lõuna-Eesti</span>
            </div>
          </div>
          <div className="pt-2 text-xs text-primary-foreground/40">
            <p>Tromtrade OÜ</p>
            <p>Reg.nr: 12314784</p>
          </div>
        </div>
      </div>
    </div>
    {/* Trust bar */}
    <div className="border-t border-primary-foreground/10 bg-foreground">
      <div className="container flex flex-wrap items-center justify-center gap-4 py-3 text-xs text-primary-foreground/60">
        <span>✓ Kohalik ettevõte Tartus</span>
        <span>✓ Sertifitseeritud paigaldus</span>
        <span>✓ Kiire reageerimine</span>
        <span>✓ Garantiiga töö</span>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container flex flex-col items-center justify-between gap-2 py-4 text-xs text-primary-foreground/40 sm:flex-row">
        <span>© {new Date().getFullYear()} Tromtrade OÜ. Kõik õigused kaitstud.</span>
        <div className="flex gap-4">
          <Link to="/privaatsus" className="hover:text-primary-foreground/70 transition-colors">Privaatsuspoliitika</Link>
          <a href="https://evul.ee/liikmed/12314784-TROMTRADE-OU/sertifikaat" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors">
            EVUL sertifikaat
          </a>
        </div>
      </div>
    </div>
  </footer>;


export default Footer;