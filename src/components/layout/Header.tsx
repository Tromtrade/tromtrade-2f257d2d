import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/tromtrade-logo.webp";

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
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Tromtrade OÜ logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold tracking-tight text-foreground md:text-xl">Tromtrade</span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-wide uppercase">Soojuspumbad & Kliima</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground ${
                location.pathname === item.href ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+3725123456" className="hidden sm:flex">
            <Button variant="accent" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <span>+372 512 3456</span>
            </Button>
          </a>
          <Link to="/broneeri" className="hidden md:block">
            <Button size="sm">Küsi pakkumist</Button>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-foreground lg:hidden hover:bg-secondary"
            aria-label="Ava menüü"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
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
              <a href="tel:+3725123456">
                <Button variant="accent" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  Helista kohe
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
