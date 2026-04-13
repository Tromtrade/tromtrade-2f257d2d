import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/tromtrade-logo-new.jpg";
import { company } from "@/config/company";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

const navItems = [
  { label: "Avaleht", href: "/" },
  { label: "Teenused", href: "/teenused" },
  { label: "Hinnakiri", href: "/hinnakiri" },
  { label: "Kalkulaator", href: "/kalkulaator" },
  { label: "Tehtud tööd", href: "/tehtud-tood" },
  { label: "Meist", href: "/meist" },
  { label: "Blogi", href: "/blogi" },
  { label: "Kontakt", href: "/kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label={`${company.name} avaleht`}>
          <img src={logo} alt={`${company.name} logo`} className="h-16 md:h-24 object-contain" width={192} height={96} />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Peamenüü">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground whitespace-nowrap ${
                location.pathname === item.href ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${company.phone}`} className="hidden sm:flex">
            <Button variant="accent" size="sm" className="gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{company.phoneDisplay}</span>
            </Button>
          </a>
          <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="hidden sm:flex">
            <Button variant="outline" size="sm" className="gap-2 border-green-300 text-green-600 hover:bg-green-50 hover:text-green-700">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
          <Link to="/broneeri" className="hidden md:block">
            <Button size="sm">Küsi pakkumist</Button>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-foreground xl:hidden hover:bg-secondary"
            aria-label={mobileOpen ? "Sulge menüü" : "Ava menüü"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card xl:hidden">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Mobiilne menüü">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary ${
                  location.pathname === item.href ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <a href={`tel:${company.phone}`}>
                <Button variant="accent" className="w-full gap-2">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Helista: {company.phoneDisplay}
                </Button>
              </a>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full gap-2 border-green-300 text-green-600">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
              <Link to="/broneeri" onClick={() => setMobileOpen(false)}>
                <Button className="w-full">Küsi pakkumist</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
