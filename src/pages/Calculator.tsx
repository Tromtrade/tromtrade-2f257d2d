import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CalculatorPage = () => {
  const [area, setArea] = useState(80);
  const [currentHeating, setCurrentHeating] = useState("electric");
  const [elPrice, setElPrice] = useState(0.20);
  const [projectCost, setProjectCost] = useState(3000);

  // Rough assumptions
  const kWhPerM2 = currentHeating === "electric" ? 120 : 80;
  const annualKwh = area * kWhPerM2;
  const currentCost = annualKwh * elPrice;
  const copAvg = 3.5;
  const hpKwh = annualKwh / copAvg;
  const hpCost = hpKwh * elPrice;
  const savings = currentCost - hpCost;
  const payback = savings > 0 ? projectCost / savings : 0;

  return (
    <Layout>
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Säästu kalkulaator</h1>
          <p className="mt-2 text-primary-foreground/80">Hinnake, kui palju saate soojuspumbaga küttekulu kokku hoida.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Inputs */}
            <div className="space-y-5 rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" /> Sisendid
              </h2>
              <div>
                <label className="text-sm font-medium text-foreground">Köetav pindala (m²)</label>
                <input type="number" value={area} onChange={e => setArea(+e.target.value)} min={10} max={500} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Praegune kütteviis</label>
                <select value={currentHeating} onChange={e => setCurrentHeating(e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="electric">Elektriradiaator</option>
                  <option value="old_hp">Vanem soojuspump</option>
                  <option value="other">Muu</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Elektri hind (€/kWh)</label>
                <input type="number" step={0.01} value={elPrice} onChange={e => setElPrice(+e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Projekti eeldatav maksumus (€)</label>
                <input type="number" value={projectCost} onChange={e => setProjectCost(+e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>

            {/* Results */}
            <div className="space-y-5">
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="font-display text-xl font-bold text-foreground">Tulemused</h2>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-sm text-muted-foreground">Aastane kulu praegu</span>
                    <span className="font-semibold text-foreground">{currentCost.toFixed(0)} €</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-sm text-muted-foreground">Aastane kulu soojuspumbaga</span>
                    <span className="font-semibold text-foreground">{hpCost.toFixed(0)} €</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-sm text-primary font-semibold">Aastane sääst</span>
                    <span className="text-xl font-extrabold text-primary">{savings.toFixed(0)} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tasuvusaeg</span>
                    <span className="font-semibold text-foreground">{payback > 0 ? `~${payback.toFixed(1)} aastat` : "–"}</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  ⚠️ Tegemist on ligikaudse hinnanguga. Tegelik sääst sõltub hoone soojustusest, kliimast, seadme efektiivsusest ja kasutusharjumustest. Täpse arvutuse saamiseks küsige personaalset pakkumist.
                </p>
              </div>
              <Link to="/broneeri">
                <Button size="lg" className="w-full gap-2 mt-2">
                  Küsi täpset pakkumist <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CalculatorPage;
