import { Phone } from "lucide-react";

const StickyCallButton = () => (
  <a
    href="tel:+3725123456"
    className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full accent-gradient shadow-lg shadow-accent/30 transition-transform hover:scale-110 md:hidden"
    aria-label="Helista"
  >
    <Phone className="h-6 w-6 text-accent-foreground" />
  </a>
);

export default StickyCallButton;
