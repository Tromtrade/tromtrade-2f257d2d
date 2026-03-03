import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const priceRows = [
  { service: "Õhk-õhk soojuspumba standardpaigaldus", desc: "Sise- ja välisosa vaheline torustik koos sidekaabli ja kondensaatvee voolikuga kuni 5m. Ilukarbik torustiku katmiseks kuni 2m. Kliimaseadme välisosa seinakonsool + vibratsioonipuksid. Ø65 mm ava puurimine välisseina kuni 50cm (va. punane tellis, paas, betoon, palk üle 30cm ja maakivi).", unit: "tk", price: "390€" },
  { service: "Õhk-õhk soojuspumba korraline hooldus", desc: "", unit: "tk", price: "70€" },
  { service: "Õhk-õhk soojuspumba demontaaž ja utiliseerimine", desc: "", unit: "tk", price: "70€" },
  { service: "Väljakutse objektile kuni 50km Tartust", desc: "", unit: "tk", price: "40€" },
  { service: "Külmaine kaalumine", desc: "", unit: "tk", price: "60€" },
  { service: "Õhk-õhk soojuspumba defekteerimine", desc: "", unit: "tk", price: "60€" },
  { service: "Õhk-õhk soojuspumba siseseadme keemiline pesu", desc: "", unit: "tk", price: "110€" },
  { service: '1/4"-3/8" trass (külmatoru, sidekaabel, kondensaatvee voolik)', desc: "", unit: "m", price: "18€" },
  { service: '1/4"-1/2" trass (külmatoru, sidekaabel, kondensaatvee voolik)', desc: "", unit: "m", price: "22€" },
  { service: '1/4"-5/8" trass (külmatoru, sidekaabel, kondensaatvee voolik)', desc: "", unit: "m", price: "24€" },
];

const PricingPage = () => (
  <Layout>
    <section className="hero-gradient py-12">
      <div className="container text-center">
        <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Hinnakiri</h1>
        <p className="mt-2 text-primary-foreground/80">Kõik hinnad sisaldavad 24% käibemaksu.</p>
      </div>
    </section>
    <section className="py-12">
      <div className="container max-w-4xl">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Teenus</th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground w-20">Ühik</th>
                  <th className="px-4 py-3 text-right font-semibold text-foreground w-24">Hind</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row, i) => (
                  <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-muted/30"}`}>
                    <td className="px-4 py-3">
                      <div className="font-medium text-foreground">{row.service}</div>
                      {row.desc && <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{row.desc}</div>}
                    </td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{row.unit}</td>
                    <td className="px-4 py-3 text-right font-bold text-primary whitespace-nowrap">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-secondary p-4 text-center">
          <p className="text-sm text-muted-foreground">
            Täpse hinnapakkumise saamiseks on vajalik objekti ülevaatus. Keerukamad tööd ja lisatarvikud arvestatakse eraldi.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/broneeri">
            <Button size="lg" className="gap-2">
              Küsi pakkumist <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <a href="tel:+37255644610">
            <Button variant="accent" size="lg" className="gap-2">
              <Phone className="h-5 w-5" /> 5564 4610
            </Button>
          </a>
          <a href="https://wa.me/37255644610" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 border-green-300 text-green-600 hover:bg-green-50">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default PricingPage;
