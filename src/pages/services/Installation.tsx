import ServiceLanding from "@/components/ServiceLanding";

const InstallationPage = () => (
  <ServiceLanding
    title="Õhksoojuspumba paigaldus Tartus – Kiire ja korrektne töö"
    metaDescription="Paigaldame õhksoojuspumbad korterisse ja eramajja. Sertifitseeritud töö ja garantii."
    h1="Õhksoojuspumba paigaldus Tartus"
    description="Õhksoojuspump on energiatõhus viis kodu kütmiseks ja jahutamiseks. Professionaalne paigaldus tagab seadme maksimaalse kasuteguri ning pika tööea."
    benefitsTitle="Paigaldus sisaldab"
    benefits={[
      "Seadme kinnitamist",
      "Torustiku ja elektriühendust",
      "Vaakumimist ja lekke kontrolli",
      "Testkäivitust",
      "Kasutusjuhendamist",
    ]}
    priceNote="Paigalduse hind sõltub objekti eripärast ja torustiku pikkusest."
    priceRange="390€"
    ctaLabel="Küsi täpne pakkumine"
    faqs={[
      { q: "Kas paigaldate ka korteritesse?", a: "Jah." },
      { q: "Kas on vaja eraldi elektrit?", a: "Sõltub koormusest, vajadusel soovitame elektriku." },
    ]}
  />
);
export default InstallationPage;
