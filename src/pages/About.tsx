import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, MapPin, Users, ArrowRight } from "lucide-react";
import vanImg from "@/assets/gallery/company-van.jpeg";

const AboutPage = () => (
  <Layout>
    <section className="hero-gradient py-12">
      <div className="container text-center">
        <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Meist</h1>
        <p className="mt-2 text-primary-foreground/80">Professionaalne partner soojuspumpade ja kliimaseadmete alal.</p>
      </div>
    </section>
    <section className="py-12">
      <div className="container max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">Tromtrade OÜ</h2>
            <p className="text-muted-foreground leading-relaxed">
              Oleme Tartus ja Lõuna-Eestis tegutsev soojuspumpade ja kliimaseadmete spetsialist. Meie meeskond omab aastatepikkust kogemust HVAC valdkonnas ning F-gaasi käitlemise pädevust.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meie eesmärk on pakkuda klientidele usaldusväärset, kvaliteetset ja ausa hinnaga teenust. Iga paigaldus on meile oluline — teeme tööd nii, nagu teeksime enda kodus.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Shield, label: "F-gaasi pädevus" },
                { icon: MapPin, label: "Tartu + Lõuna-Eesti" },
                { icon: Users, label: "Kogenud meeskond" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-foreground">
                  <item.icon className="h-4 w-4 text-primary" /> {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src={vanImg} alt="Tromtrade teenindusauto" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link to="/broneeri">
            <Button size="lg" className="gap-2">Küsi pakkumist <ArrowRight className="h-5 w-5" /></Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
