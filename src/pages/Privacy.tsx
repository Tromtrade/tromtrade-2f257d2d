import Layout from "@/components/layout/Layout";

const PrivacyPage = () => (
  <Layout>
    <section className="py-12">
      <div className="container max-w-3xl prose prose-sm">
        <h1 className="font-display text-3xl font-extrabold text-foreground">Privaatsuspoliitika</h1>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Tromtrade OÜ (edaspidi "meie") austab teie privaatsust ja kaitseb teie isikuandmeid vastavalt Euroopa Liidu isikuandmete kaitse üldmäärusele (GDPR).
        </p>
        <h2 className="font-display text-xl font-bold text-foreground mt-8">Milliseid andmeid kogume?</h2>
        <p className="text-muted-foreground leading-relaxed">Kogume ainult andmeid, mis on vajalikud teie päringu töötlemiseks: nimi, telefon, e-mail, aadress, teenuse üksikasjad ja fotod.</p>
        <h2 className="font-display text-xl font-bold text-foreground mt-8">Kuidas andmeid kasutame?</h2>
        <p className="text-muted-foreground leading-relaxed">Kasutame teie andmeid ainult pakkumise koostamiseks, teenuse osutamiseks ja teiega ühenduse võtmiseks. Me ei jaga teie andmeid kolmandate osapooltega ilma teie nõusolekuta.</p>
        <h2 className="font-display text-xl font-bold text-foreground mt-8">Kontakt</h2>
        <p className="text-muted-foreground leading-relaxed">Isikuandmete küsimustes pöörduge: info@tromtrade.ee</p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage;
