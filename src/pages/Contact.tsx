import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import SEOHead from "@/components/shared/SEOHead";
import { pageMeta } from "@/config/seo";
import { company } from "@/config/company";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { isRateLimited, getUtmParams, isValidEstonianPhone } from "@/utils/form-helpers";
import { analytics } from "@/utils/analytics";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);

  const set = (k: string, v: string | boolean) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: "" }));
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Nimi on kohustuslik";
    if (!form.phone.trim()) errs.phone = "Telefon on kohustuslik";
    else if (!isValidEstonianPhone(form.phone)) errs.phone = "Sisestage korrektne telefoninumber";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;
    if (!validate()) return;

    if (isRateLimited()) {
      toast.error("Liiga palju päringuid. Proovige mõne minuti pärast.");
      return;
    }

    setLoading(true);
    const utm = getUtmParams();
    const { error } = await supabase.from("leads").insert({
      form_type: "contact",
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      message: form.message.trim() || null,
      consent: form.consent,
      page_url: window.location.pathname,
      ...utm,
    });
    setLoading(false);

    if (error) {
      toast.error("Viga saatmisel. Palun proovige uuesti.");
      return;
    }

    analytics.lead("contact");
    setSubmitted(true);
  };

  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? <p className="mt-1 text-xs text-destructive">{errors[field]}</p> : null;

  return (
    <Layout>
      <SEOHead meta={pageMeta.contact} />
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Võta ühendust Tromtrade'iga</h1>
          <p className="mt-2 text-primary-foreground/80">Telefon: {company.phoneDisplay} · Email: {company.email} · {company.serviceAreaLabel}</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="font-display text-xl font-bold text-foreground">Kontaktandmed</h2>
                <a href={`tel:${company.phone}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Phone className="h-5 w-5 text-primary" aria-hidden="true" /></div>
                  <div><div className="text-sm text-muted-foreground">Telefon</div><div className="font-semibold">{company.phoneDisplay}</div></div>
                </a>
                <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-green-600 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                    <WhatsAppIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div><div className="text-sm text-muted-foreground">WhatsApp</div><div className="font-semibold">Kirjuta WhatsAppis</div></div>
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Mail className="h-5 w-5 text-primary" aria-hidden="true" /></div>
                  <div><div className="text-sm text-muted-foreground">E-mail</div><div className="font-semibold">{company.email}</div></div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><MapPin className="h-5 w-5 text-primary" aria-hidden="true" /></div>
                  <div><div className="text-sm text-muted-foreground">Aadress</div><div className="font-semibold text-foreground">{company.address.full}</div></div>
                </div>
              </div>
              <div className="rounded-xl border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2089.5!2d26.7282!3d58.3836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb371b1a7585c7%3A0x0!2sLehe+11%2C+Tartu!5e0!3m2!1set!2see!4v1"
                  className="w-full h-48"
                  loading="lazy"
                  title="Tromtrade asukoht kaardil"
                />
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-xl font-bold text-foreground">Sõnum saadetud!</h3>
                  <p className="mt-2 text-muted-foreground">Vastame teile 24 tunni jooksul.</p>
                  <p className="mt-1 text-sm text-muted-foreground/70">Kui teil on kiire, helistage <a href={`tel:${company.phone}`} className="text-primary underline">{company.phoneDisplay}</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6" noValidate>
                  <h2 className="font-display text-xl font-bold text-foreground">Kirjutage meile</h2>
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input type="text" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
                  </div>
                  <div>
                    <input required placeholder="Nimi *" value={form.name} onChange={e => set("name", e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Nimi" aria-invalid={!!errors.name} />
                    <FieldError field="name" />
                  </div>
                  <div>
                    <input required type="tel" placeholder="Telefon *" value={form.phone} onChange={e => set("phone", e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Telefon" aria-invalid={!!errors.phone} />
                    <FieldError field="phone" />
                  </div>
                  <input type="email" placeholder="E-mail" value={form.email} onChange={e => set("email", e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" aria-label="E-mail" />
                  <textarea rows={4} placeholder="Sõnum" value={form.message} onChange={e => set("message", e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Sõnum" />
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
