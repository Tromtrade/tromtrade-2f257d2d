import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="hero-gradient py-16 md:py-24">
    <div className="container text-center">
      <h2 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
        Valmis energiat säästma?
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-lg text-primary-foreground/80">
        Küsige tasuta hinnapakkumist või helistage kohe — aitame leida parima lahenduse teie kodule.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link to="/broneeri">
          <Button variant="accent" size="lg" className="gap-2 text-base">
            Küsi pakkumist <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
        <a href="tel:+3725123456">
          <Button variant="hero-outline" size="lg" className="gap-2 text-base">
            <Phone className="h-5 w-5" /> Helista kohe
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
