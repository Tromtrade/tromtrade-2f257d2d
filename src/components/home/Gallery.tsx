import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import img1 from "@/assets/gallery/rooftop-units.webp";
import img2 from "@/assets/gallery/panasonic-outdoor.webp";
import img3 from "@/assets/gallery/samsung-outdoor.webp";
import img4 from "@/assets/gallery/company-van.jpg";

const images = [
  { src: img1, alt: "Katusele paigaldatud välisseadmed" },
  { src: img2, alt: "Panasonic välisseade seinal" },
  { src: img3, alt: "Samsung välisseade alusel" },
  { src: img4, alt: "Tromtrade teenindusauto" },
];

const GallerySection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">Tehtud tööd</h2>
          <p className="mt-3 text-muted-foreground">Valik meie viimastest paigaldustöödest.</p>
        </div>
        <Link to="/tehtud-tood" className="hidden sm:block">
          <Button variant="outline" className="gap-1">
            Vaata kõiki <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {images.map((img, i) => (
          <div key={i} className="group overflow-hidden rounded-xl">
            <img
              src={img.src}
              alt={img.alt}
              className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 text-center sm:hidden">
        <Link to="/tehtud-tood">
          <Button variant="outline" className="gap-1">
            Vaata kõiki <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default GallerySection;
