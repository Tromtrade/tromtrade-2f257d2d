import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import img1 from "@/assets/gallery/rooftop-units.webp";
import img2 from "@/assets/gallery/panasonic-outdoor.webp";
import img3 from "@/assets/gallery/samsung-outdoor.webp";
import img4 from "@/assets/gallery/indoor-unit.webp";
import img5 from "@/assets/gallery/floor-unit.webp";
import img6 from "@/assets/gallery/company-van.jpg";

const projects = [
  { src: img1, title: "Katusele paigaldatud välisseadmed", location: "Tartu", type: "Paigaldus" },
  { src: img2, title: "Panasonic välisseade", location: "Tartu", type: "Paigaldus" },
  { src: img3, title: "Samsung välisseade", location: "Elva", type: "Paigaldus" },
  { src: img4, title: "Siseseade elutoas", location: "Tartu", type: "Paigaldus" },
  { src: img5, title: "Põrandaseade puitmajas", location: "Otepää", type: "Paigaldus" },
  { src: img6, title: "Teenindusauto", location: "Tartu", type: "Hooldus" },
];

const ProjectsPage = () => (
  <Layout>
    <section className="hero-gradient py-12">
      <div className="container text-center">
        <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Tehtud tööd</h1>
        <p className="mt-2 text-primary-foreground/80">Valik meie paigaldus- ja hooldustöödest.</p>
      </div>
    </section>
    <section className="py-12">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-xl border border-border bg-card">
              <div className="overflow-hidden">
                <img src={p.src} alt={p.title} className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{p.title}</h3>
                <div className="mt-1 flex gap-2 text-xs text-muted-foreground">
                  <span>{p.location}</span>·<span>{p.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/broneeri">
            <Button size="lg" className="gap-2">Küsi pakkumist <ArrowRight className="h-5 w-5" /></Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default ProjectsPage;
