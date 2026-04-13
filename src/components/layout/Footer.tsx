import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/tromtrade-logo-new.jpg";
import { company } from "@/config/company";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

const serviceLinks = [
  { label: "Soojuspumba paigaldus", href: "/ohksoojuspumba-paigaldus-tartu" },
  { label: "Hooldus", href: "/ohksoojuspumba-hooldus-tartu" },
  { label: "Remont", href: "/ohksoojuspumba-remont-tartu" },
  { label: "Kliimaseadme paigaldus", href: "/kliimaseadme-paigaldus-tartu" },
  { label: "Ümberpaigaldus", href: "/seadmete-umberpaigaldus-ja-utiliseerimine" },
];

const companyLinks = [
  { label: "Meist", href: "/meist" },
  { label: "Tehtud tööd", href: "/tehtud-tood" },
  { label: "Blogi", href: "/blogi" },
  { label: "Hinnakiri", href: "/hinnakiri" },
  { label: "Privaatsuspoliitika", href: "/privaatsus" },
];

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <img src={logo} alt={company.name} className="w-full max-w-[220px] object-contain rounded" width={220} height={60} loading="lazy" />
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Professionaalne õhk-õhk soojuspumpade ja kliimaseadmete paigaldus, hooldus ja remont {company.serviceAreaLabel}s.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Teenused</h4>
          <nav className="flex flex-col gap-2" aria-label="Teenused">
            {serviceLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Ettevõte</h4>
          <nav className="flex flex-col gap-2" aria-label="Ettevõte">
            {companyLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Kontakt</h4>
          <div className="space-y-3">
            <a href={`tel:${company.phone}`} className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              WhatsApp
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {company.email}
            </a>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{company.serviceAreaLabel}</span>
            </div>
          </div>
          <div className="pt-2 text-xs text-primary-foreground/40">
            <p>{company.legalName}</p>
            <p>Reg.nr: {company.regNr}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 bg-foreground">
      <div className="container flex flex-wrap items-center justify-center gap-4 py-3 text-xs text-primary-foreground/60">
        <span>✓ Kohalik ettevõte Tartus</span>
        <span>✓ Sertifitseeritud paigaldus</span>
        <span>✓ {company.guaranteeYears}-aastane garantii</span>
        <span>✓ Eestikeelne hooldustugi</span>
        <span>✓ Kiire reageerimine</span>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container flex flex-col items-center justify-between gap-2 py-4 text-xs text-primary-foreground/40 sm:flex-row">
        <span>© {new Date().getFullYear()} {company.legalName}. Kõik õigused kaitstud.</span>
        <div className="flex gap-4">
          <Link to="/privaatsus" className="hover:text-primary-foreground/70 transition-colors">Privaatsuspoliitika</Link>
          <a href={company.evulUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors">
            EVUL sertifikaat
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
