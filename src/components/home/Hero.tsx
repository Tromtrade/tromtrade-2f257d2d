import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/gallery/indoor-unit.webp";

const Hero = () => (
  <section className="relative overflow-hidden hero-gradient">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(207_80%_40%/0.4),transparent_60%)]" />
    {/* Animated floating shapes */}
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
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Tartu ja Lõuna-Eesti
          </motion.div>
          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Soojuspumbad ja kliimaseadmed — professionaalne paigaldus
          </h1>
          <p className="max-w-lg text-lg text-primary-foreground/80 leading-relaxed">
            Paigaldame, hooldame ja remondime õhk-õhk soojuspumpasid ja kliimaseadmeid. Kiire teenindus, aus hind, garantii.
          </p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="tel:+37255644610">
              <Button variant="accent" size="lg" className="gap-2 text-base">
                <Phone className="h-5 w-5" />
                Helista kohe
              </Button>
            </a>
            <a href="https://wa.me/37255644610" target="_blank" rel="noopener noreferrer">
              <Button variant="hero-outline" size="lg" className="gap-2 text-base">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </Button>
            </a>
            <Link to="/broneeri">
              <Button variant="hero-outline" size="lg" className="gap-2 text-base">
                Küsi pakkumist
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
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
              src={heroImg}
              alt="Professionaalselt paigaldatud siseseade"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
          <motion.div
            className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="text-2xl font-display font-extrabold text-foreground">10+</div>
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
