import ServiceLanding from "@/components/ServiceLanding";

const RepairPage = () => (
  <ServiceLanding
    title="Soojuspumba remont Tartus | Kiire reageerimine"
    metaDescription="Diagnostika ja rikete kõrvaldamine Lõuna-Eestis."
    h1="Soojuspumba remont Tartus"
    description="Kui seade ei küta või jahuta korralikult, teostame diagnostika ja paranduse."
    benefitsTitle="Levinud probleemid"
    benefits={[
      "Seade ei käivitu",
      "Ebatavaline müra",
      "Veakood ekraanil",
      "Jäätumine",
    ]}
    priceRange="60€"
    ctaLabel="Helista kiireks reageerimiseks"
    faqs={[
      { q: "Kui kiiresti saate tulla?", a: "Tartus saame enamasti reageerida 24–48 tunni jooksul." },
      { q: "Kas remondit saab teha kohapeal?", a: "Enamiku rikkeid parandame kohapeal. Harvem on vaja seade transportida." },
      { q: "Mis saab, kui seade ei ole remonditav?", a: "Soovitame asendusseadet ja pakume paigaldust." },
      { q: "Kas annate remonttöödele garantii?", a: "Jah, remonttöödele anname garantii." },
    ]}
  />
);
export default RepairPage;
