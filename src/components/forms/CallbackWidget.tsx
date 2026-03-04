import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X, MessageSquare, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CallbackWidget = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", time: "morning" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const params = new URLSearchParams(window.location.search);
    const { error } = await supabase.from("leads").insert({
      form_type: "callback",
      name: form.name,
      phone: form.phone,
      callback_time: form.time,
      consent: true,
      page_url: window.location.pathname,
      utm_source: params.get("utm_source") || null,
      utm_medium: params.get("utm_medium") || null,
      utm_campaign: params.get("utm_campaign") || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Viga saatmisel. Proovige uuesti.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setOpen(false); }, 3000);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 z-40 hidden md:flex h-12 w-12 items-center justify-center rounded-full hero-gradient shadow-lg shadow-primary/30 hover:scale-110 transition-transform"
        aria-label="Helista mulle tagasi"
      >
        <MessageSquare className="h-5 w-5 text-primary-foreground" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 right-4 z-40 hidden md:block w-80 rounded-xl border border-border bg-card shadow-2xl">
      <div className="flex items-center justify-between hero-gradient rounded-t-xl px-4 py-3">
        <div className="flex items-center gap-2 text-primary-foreground">
          <Phone className="h-4 w-4" />
          <span className="font-semibold text-sm">Helista mulle tagasi</span>
        </div>
        <button onClick={() => setOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>
      {submitted ? (
        <div className="p-6 text-center">
          <div className="text-2xl mb-2">✅</div>
          <p className="font-semibold text-foreground">Täname!</p>
          <p className="text-sm text-muted-foreground">Vastame teile 24 tunni jooksul.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 p-4">
          <input
            type="text"
            placeholder="Nimi *"
            required
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="tel"
            placeholder="Telefon *"
            required
            value={form.phone}
            onChange={e => setForm({...form, phone: e.target.value})}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <select
            value={form.time}
            onChange={e => setForm({...form, time: e.target.value})}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="morning">Hommik (9–12)</option>
            <option value="afternoon">Pärastlõuna (12–17)</option>
            <option value="evening">Õhtu (17–20)</option>
          </select>
          <label className="flex items-start gap-2 text-xs text-muted-foreground">
            <input type="checkbox" required className="mt-0.5 rounded border-input" />
            Nõustun isikuandmete töötlemisega
          </label>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Helista mulle"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default CallbackWidget;
