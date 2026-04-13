import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "@/config/company";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { analytics } from "@/utils/analytics";

const StickyCallButton = () => (
  <>
    <a
      href={`tel:${company.phone}`}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full accent-gradient shadow-lg shadow-accent/30 transition-transform hover:scale-110 md:hidden"
      aria-label="Helista kohe"
      onClick={() => analytics.ctaClick("sticky_phone")}
    >
      <Phone className="h-6 w-6 text-accent-foreground" />
    </a>
    <Link
      to="/broneeri"
      className="fixed bottom-4 left-4 z-50 flex h-14 items-center gap-2 rounded-full hero-gradient px-5 shadow-lg shadow-primary/30 transition-transform hover:scale-105 md:hidden"
      onClick={() => analytics.ctaClick("sticky_quote")}
    >
      <ArrowRight className="h-5 w-5 text-primary-foreground" />
      <span className="text-sm font-bold text-primary-foreground">Küsi pakkumist</span>
    </Link>
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition-transform hover:scale-110 md:hidden"
      aria-label="Kirjuta WhatsAppis"
      onClick={() => analytics.ctaClick("sticky_whatsapp")}
    >
      <WhatsAppIcon className="h-6 w-6 text-accent-foreground" />
    </a>
  </>
);

export default StickyCallButton;
