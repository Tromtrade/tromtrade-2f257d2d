import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const serviceTypes = ["Paigaldus", "Hooldus", "Remont", "Kliimaseade", "Ümberpaigaldus"];
const propertyTypes = ["Korter", "Maja", "Kontor", "Muu"];
const heatingTypes = ["Elektriradiaator", "Vana soojuspump", "Keskküte", "Muu"];
const brands = ["Panasonic", "Cooper&Hunter", "Muu", "Pole kindel"];
const timeframes = ["Niipea kui võimalik", "1–2 nädalat", "1 kuu", "Paindlik"];
const cities = ["Tartu", "Elva", "Otepää", "Võru", "Viljandi", "Valga", "Põlva", "Muu"];

const BookingPage = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "Tartu", address: "",
    service: "Paigaldus", property: "Korter", area: "",
    heating: "Elektriradiaator", brand: "Pole kindel", timeframe: "Paindlik",
    notes: "", consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: string, val: string | boolean) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="font-display text-3xl font-extrabold text-foreground">Täname!</h1>
          <p className="mt-3 text-muted-foreground">Oleme teie päringu kätte saanud ja võtame ühendust 24 tunni jooksul.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Küsi pakkumist</h1>
          <p className="mt-2 text-primary-foreground/80">Täitke vorm ja saadame teile personaalse hinnapakkumise.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">Nimi *</label>
                <input required value={form.name} onChange={e => set("name", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Telefon *</label>
                <input required type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">E-mail</label>
              <input type="email" value={form.email} onChange={e => set("email", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">Piirkond *</label>
                <select value={form.city} onChange={e => set("city", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  {cities.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Aadress</label>
                <input value={form.address} onChange={e => set("address", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">Teenuse tüüp *</label>
                <select value={form.service} onChange={e => set("service", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  {serviceTypes.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Kinnisvara tüüp</label>
                <select value={form.property} onChange={e => set("property", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  {propertyTypes.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-sm font-medium text-foreground">Pindala m²</label>
                <input type="number" value={form.area} onChange={e => set("area", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Praegune küte</label>
                <select value={form.heating} onChange={e => set("heating", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  {heatingTypes.map(h => <option key={h}>{h}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Brändi eelistus</label>
                <select value={form.brand} onChange={e => set("brand", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  {brands.map(b => <option key={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Soovitud ajakava</label>
              <select value={form.timeframe} onChange={e => set("timeframe", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                {timeframes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Lisainfo</label>
              <textarea rows={3} value={form.notes} onChange={e => set("notes", e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <label className="flex items-start gap-2 text-sm text-muted-foreground">
              <input type="checkbox" required checked={form.consent} onChange={e => set("consent", e.target.checked)} className="mt-0.5" />
              Nõustun isikuandmete töötlemisega vastavalt <a href="/privaatsus" className="text-primary underline">privaatsuspoliitikale</a>.
            </label>
            <Button type="submit" size="lg" className="w-full gap-2">
              Saada päring <ArrowRight className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
