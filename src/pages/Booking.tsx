import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import SEOHead from "@/components/shared/SEOHead";
import { pageMeta } from "@/config/seo";
import { company } from "@/config/company";
import { isRateLimited, getUtmParams, isValidEstonianPhone } from "@/utils/form-helpers";
import { analytics } from "@/utils/analytics";

const serviceTypes = ["Paigaldus", "Hooldus", "Remont", "Defekteerimine", "Ümberpaigaldus"];
const propertyTypes = ["Korter", "Maja", "Kontor", "Muu"];
const heatingTypes = ["Elektriradiaator", "Vana soojuspump", "Keskküte", "Muu"];
const brands = ["Panasonic", "Cooper&Hunter", "Muu", "Pole kindel"];
const timeframes = ["Niipea kui võimalik", "1–2 nädalat", "1 kuu", "Paindlik"];
const cities = [...company.serviceAreas, "Muu"] as const;

const inputClass = "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const BookingPage = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "Tartu", address: "",
    service: "Paigaldus", property: "Korter", area: "",
    heating: "Elektriradiaator", brand: "Pole kindel", timeframe: "Paindlik",
    notes: "", consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);
  const formStarted = useRef(false);

  const set = (key: string, val: string | boolean) => {
    if (!formStarted.current) {
      formStarted.current = true;
      analytics.formStart("quote");
    }
    setForm(f => ({ ...f, [key]: val }));
    setErrors(e => ({ ...e, [key]: "" }));
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Nimi on kohustuslik";
    if (!form.phone.trim()) errs.phone = "Telefon on kohustuslik";
    else if (!isValidEstonianPhone(form.phone)) errs.phone = "Sisestage korrektne telefoninumber";
    if (!form.email.trim()) errs.email = "E-mail on kohustuslik";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Sisestage korrektne e-mail";
    if (!form.consent) errs.consent = "Nõusolek on kohustuslik";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypotRef.current?.value) return;

    if (!validate()) return;

    if (isRateLimited()) {
      toast.error("Liiga palju päringuid. Proovige mõne minuti pärast uuesti.");
      return;
    }

    setLoading(true);
    const utm = getUtmParams();
    const { error } = await supabase.from("leads").insert({
      form_type: "quote",
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      city: form.city,
      address: form.address.trim() || null,
      service_type: form.service,
      property_type: form.property,
      area_sqm: form.area ? Number(form.area) : null,
      heating_type: form.heating,
      brand_preference: form.brand,
      timeframe: form.timeframe,
      notes: form.notes.trim() || null,
      consent: form.consent,
      page_url: window.location.pathname,
      ...utm,
    });
    setLoading(false);

    if (error) {
      toast.error("Viga andmete saatmisel. Palun proovige uuesti.");
      return;
    }

    analytics.lead("quote");
    analytics.formSubmit("quote");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <SEOHead meta={pageMeta.booking} />
        <div className="container py-24 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="font-display text-3xl font-extrabold text-foreground">Täname!</h1>
          <p className="mt-3 text-muted-foreground">Vastame teile 24 tunni jooksul ja saadame esmase pakkumise e-mailile.</p>
          <p className="mt-1 text-sm text-muted-foreground/70">
            Kui teil on kiire, helistage{" "}
            <a href={`tel:${company.phone}`} className="text-primary underline">{company.phoneDisplay}</a>.
          </p>
        </div>
      </Layout>
    );
  }

  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? <p className="mt-1 text-xs text-destructive">{errors[field]}</p> : null;

  return (
    <Layout>
      <SEOHead meta={pageMeta.booking} />
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Küsi pakkumist</h1>
          <p className="mt-2 text-primary-foreground/80">Täitke vorm ja saadame teile personaalse hinnapakkumise.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8" noValidate>
            {/* Honeypot — hidden from real users */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">Nimi *</label>
                <input id="name" required value={form.name} onChange={e => set("name", e.target.value)} className={inputClass} aria-invalid={!!errors.name} />
                <FieldError field="name" />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground">Telefon *</label>
                <input id="phone" required type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} className={inputClass} aria-invalid={!!errors.phone} />
                <FieldError field="phone" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">E-mail *</label>
              <input id="email" required type="email" value={form.email} onChange={e => set("email", e.target.value)} className={inputClass} aria-invalid={!!errors.email} />
              <FieldError field="email" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="city" className="text-sm font-medium text-foreground">Piirkond *</label>
                <select id="city" value={form.city} onChange={e => set("city", e.target.value)} className={inputClass}>
                  {cities.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="address" className="text-sm font-medium text-foreground">Aadress</label>
                <input id="address" value={form.address} onChange={e => set("address", e.target.value)} className={inputClass} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className="text-sm font-medium text-foreground">Teenuse tüüp *</label>
                <select id="service" value={form.service} onChange={e => set("service", e.target.value)} className={inputClass}>
                  {serviceTypes.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="property" className="text-sm font-medium text-foreground">Kinnisvara tüüp</label>
                <select id="property" value={form.property} onChange={e => set("property", e.target.value)} className={inputClass}>
                  {propertyTypes.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="area" className="text-sm font-medium text-foreground">Pindala m²</label>
                <input id="area" type="number" min="1" max="10000" value={form.area} onChange={e => set("area", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label htmlFor="heating" className="text-sm font-medium text-foreground">Praegune küte</label>
                <select id="heating" value={form.heating} onChange={e => set("heating", e.target.value)} className={inputClass}>
                  {heatingTypes.map(h => <option key={h}>{h}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="brand" className="text-sm font-medium text-foreground">Brändi eelistus</label>
                <select id="brand" value={form.brand} onChange={e => set("brand", e.target.value)} className={inputClass}>
                  {brands.map(b => <option key={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="timeframe" className="text-sm font-medium text-foreground">Soovitud ajakava</label>
              <select id="timeframe" value={form.timeframe} onChange={e => set("timeframe", e.target.value)} className={inputClass}>
                {timeframes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="notes" className="text-sm font-medium text-foreground">Lisainfo</label>
              <textarea id="notes" rows={3} value={form.notes} onChange={e => set("notes", e.target.value)} className={inputClass} />
            </div>
            <label className="flex items-start gap-2 text-sm text-muted-foreground">
              <input type="checkbox" required checked={form.consent} onChange={e => set("consent", e.target.checked)} className="mt-0.5" />
              Nõustun isikuandmete töötlemisega vastavalt <a href="/privaatsus" className="text-primary underline">privaatsuspoliitikale</a>.
            </label>
            {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}
            <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <><span>Saada päring</span> <ArrowRight className="h-5 w-5" /></>}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
