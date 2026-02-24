import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImg from "@/assets/gallery/indoor-unit.webp";

const Hero = () => (
  <section className="relative overflow-hidden hero-gradient">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(207_80%_40%/0.4),transparent_60%)]" />
    <div className="container relative py-16 md:py-24 lg:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Tartu ja Lõuna-Eesti
          </div>
          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Soojuspumbad ja kliimaseadmed — professionaalne paigaldus
          </h1>
          <p className="max-w-lg text-lg text-primary-foreground/80 leading-relaxed">
            Paigaldame, hooldame ja remondime õhk-õhk soojuspumpasid ja kliimaseadmeid. Kiire teenindus, aus hind, garantii.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+3725123456">
              <Button variant="accent" size="lg" className="gap-2 text-base">
                <Phone className="h-5 w-5" />
                Helista kohe
              </Button>
            </a>
            <Link to="/broneeri">
              <Button variant="hero-outline" size="lg" className="gap-2 text-base">
                Küsi pakkumist
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block" style={{ animationDelay: "0.2s" }}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
            <img
              src={heroImg}
              alt="Professionaalselt paigaldatud siseseade"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-xl">
            <div className="text-2xl font-display font-extrabold text-foreground">10+</div>
            <div className="text-xs text-muted-foreground">aastat kogemust</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
