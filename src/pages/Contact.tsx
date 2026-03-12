import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const params = new URLSearchParams(window.location.search);
    const { error } = await supabase.from("leads").insert({
      form_type: "contact",
      name: form.name,
      phone: form.phone,
      email: form.email || null,
      message: form.message || null,
      consent: form.consent,
      page_url: window.location.pathname,
      utm_source: params.get("utm_source") || null,
      utm_medium: params.get("utm_medium") || null,
      utm_campaign: params.get("utm_campaign") || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Viga saatmisel. Palun proovige uuesti.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Võta ühendust Tromtrade'iga</h1>
          <p className="mt-2 text-primary-foreground/80">Telefon: +372 5564 4610 · Email: info@tromtrade.ee · Teeninduspiirkond: Tartu ja Lõuna-Eesti</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="font-display text-xl font-bold text-foreground">Kontaktandmed</h2>
                <a href="tel:+37255644610" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Phone className="h-5 w-5 text-primary" /></div>
                  <div><div className="text-sm text-muted-foreground">Telefon</div><div className="font-semibold">5564 4610</div></div>
                </a>
                <a href="https://wa.me/37255644610" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-green-600 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                    <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div><div className="text-sm text-muted-foreground">WhatsApp</div><div className="font-semibold">Kirjuta WhatsAppis</div></div>
                </a>
                <a href="mailto:info@tromtrade.ee" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Mail className="h-5 w-5 text-primary" /></div>
                  <div><div className="text-sm text-muted-foreground">E-mail</div><div className="font-semibold">info@tromtrade.ee</div></div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><MapPin className="h-5 w-5 text-primary" /></div>
                  <div><div className="text-sm text-muted-foreground">Teeninduspiirkond</div><div className="font-semibold text-foreground">Tartu ja Lõuna-Eesti</div></div>
                </div>
              </div>
              <div className="rounded-xl border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Lehe+11,+Tartu,+Estonia&zoom=15"
                  className="w-full h-48"
                  loading="lazy"
                  title="Tartu kaart"
                />
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-xl font-bold text-foreground">Sõnum saadetud!</h3>
                  <p className="mt-2 text-muted-foreground">Vastame teile 24 tunni jooksul.</p>
                  <p className="mt-1 text-sm text-muted-foreground/70">Kui teil on kiire, helistage <a href="tel:+37255644610" className="text-primary underline">5564 4610</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6">
                  <h2 className="font-display text-xl font-bold text-foreground">Kirjutage meile</h2>
                  <input required placeholder="Nimi *" value={form.name} onChange={e => set("name", e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required type="tel" placeholder="Telefon *" value={form.phone} onChange={e => set("phone", e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input type="email" placeholder="E-mail" value={form.email} onChange={e => set("email", e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <textarea rows={4} placeholder="Sõnum" value={form.message} onChange={e => set("message", e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <label className="flex items-start gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" required checked={form.consent} onChange={e => set("consent", e.target.checked)} className="mt-0.5" />
                    Nõustun <Link to="/privaatsus" className="text-primary underline">privaatsuspoliitikaga</Link>
                  </label>
                  <Button type="submit" className="w-full gap-2" disabled={loading}>
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><span>Saada sõnum</span> <ArrowRight className="h-4 w-4" /></>}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
