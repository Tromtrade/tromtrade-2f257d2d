import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/config/company";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { analytics } from "@/utils/analytics";

const Hero = () => (
  <section className="relative overflow-hidden hero-gradient">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(207_80%_40%/0.4),transparent_60%)]" />
    <motion.div
      className="absolute top-10 right-[10%] h-72 w-72 rounded-full bg-primary-foreground/5 blur-3xl"
      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-10 left-[5%] h-48 w-48 rounded-full bg-accent/10 blur-2xl"
      animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container relative py-16 md:py-24 lg:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            {company.serviceAreaLabel}
          </motion.div>

          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Õhksoojuspumba paigaldus, hooldus ja remont Tartus ja Lõuna-Eestis
          </h1>

          <p className="max-w-lg text-lg text-primary-foreground/80 leading-relaxed">
            Sertifitseeritud tehnikud, {company.experience.years}+ aastat kogemust ja {company.guaranteeYears}-aastane garantii paigaldustöödele. Küsi tasuta pakkumist — vastame 24h.
          </p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="/broneeri" onClick={() => analytics.ctaClick("hero_quote")}>
              <Button variant="accent" size="lg" className="gap-2 text-base">
                Küsi tasuta pakkumist
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href={`tel:${company.phone}`} onClick={() => analytics.ctaClick("hero_phone")}>
              <Button variant="hero-outline" size="lg" className="gap-2 text-base">
                <Phone className="h-5 w-5" />
                {company.phoneDisplay}
              </Button>
            </a>
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => analytics.ctaClick("hero_whatsapp")}>
              <Button variant="hero-outline" size="lg" className="gap-2 text-base">
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
            <img
              alt="Professionaalselt paigaldatud õhksoojuspumba siseseade"
              className="aspect-[4/3] w-full object-cover"
              width={640}
              height={480}
              loading="eager"
              fetchPriority="high"
              src="/lovable-uploads/c6fb3e88-d6bb-442b-80c9-6e98ee474a3d.jpg"
            />
          </div>
          <motion.div
            className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="text-2xl font-display font-extrabold text-foreground">{company.experience.years}+</div>
            <div className="text-xs text-muted-foreground">aastat kogemust</div>
          </motion.div>
          <motion.div
            className="absolute -top-3 -right-3 rounded-xl bg-card p-3 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="text-lg font-display font-extrabold text-green-600">★ 5.0</div>
            <div className="text-xs text-muted-foreground">EVUL hinnang</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
