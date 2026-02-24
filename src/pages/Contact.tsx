import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);
  const set = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", form);
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Kontakt</h1>
          <p className="mt-2 text-primary-foreground/80">Võtke meiega julgelt ühendust!</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="font-display text-xl font-bold text-foreground">Kontaktandmed</h2>
                <a href="tel:+3725123456" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Phone className="h-5 w-5 text-primary" /></div>
                  <div><div className="text-sm text-muted-foreground">Telefon</div><div className="font-semibold">+372 512 3456</div></div>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130168.6012599489!2d26.6217!3d58.3776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36d8d55cecb1%3A0x400b36d18fc6270!2sTartu!5e0!3m2!1set!2see!4v1"
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
                  <p className="mt-2 text-muted-foreground">Vastame esimesel võimalusel.</p>
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
                  <Button type="submit" className="w-full gap-2">Saada sõnum <ArrowRight className="h-4 w-4" /></Button>
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
