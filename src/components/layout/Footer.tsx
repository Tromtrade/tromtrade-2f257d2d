import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/tromtrade-logo.webp";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Tromtrade" className="h-10 w-10 object-contain" />
            <span className="font-display text-xl font-extrabold">Tromtrade</span>
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
              { label: "Ümberpaigaldus", href: "/seadmete-umberpaigaldus-ja-utiliseerimine" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
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
              { label: "Privaatsuspoliitika", href: "/privaatsus" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Kontakt */}
        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Kontakt</h4>
          <div className="space-y-3">
            <a href="tel:+3725123456" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4 shrink-0" />
              +372 512 3456
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
            <p>Reg.nr: XXXXXXXX</p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container flex flex-col items-center justify-between gap-2 py-4 text-xs text-primary-foreground/40 sm:flex-row">
        <span>© {new Date().getFullYear()} Tromtrade OÜ. Kõik õigused kaitstud.</span>
        <div className="flex gap-4">
          <Link to="/privaatsus" className="hover:text-primary-foreground/70 transition-colors">Privaatsuspoliitika</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
