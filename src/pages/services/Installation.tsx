import ServiceLanding from "@/components/ServiceLanding";

const InstallationPage = () => (
  <ServiceLanding
    title="Õhk-õhk soojuspumba paigaldus Tartus"
    h1="Õhk-õhk soojuspumba paigaldus Tartus ja Lõuna-Eestis"
    description="Professionaalne soojuspumba paigaldus koos seadme valikuga. Kiire teenindus, aus hind, kuni 5 aasta garantii."
    benefits={["F-gaasi pädevusega spetsialist", "Kuni 5 aastat garantiid", "Tasuta konsultatsioon", "Panasonic ja Cooper&Hunter ametlik partner", "Paigaldus 1–3 tööpäevaga", "Järelteenindus ja hooldus"]}
    process={["Võtate ühendust ja kirjeldate oma vajadust", "Hindame objekti ja soovitame sobiva seadme", "Esitame selge hinnapakkumise", "Paigaldame seadme ja seadistame", "Juhendame kasutamist ja anname garantii"]}
    included={["Sise- ja välisseadme paigaldus", "Torustik kuni 3m", "Elektriühendus", "Seadistamine", "Kasutuskoolitus"]}
    notIncluded={["Seadme maksumus (eraldi)", "Torustik üle 3m", "Lisaelektritööd"]}
    priceRange="390€"
    faqs={[
      { q: "Kui kaua paigaldus aega võtab?", a: "Standardpaigaldus kestab 4–8 tundi." },
      { q: "Kas seadme saab ise valida?", a: "Jah, aitame valida teie vajaduste ja eelarve järgi parima variandi." },
      { q: "Kas on vaja korteriühistu luba?", a: "Korteri puhul on vajalik KÜ nõusolek välisseadme paigaldamiseks." },
      { q: "Kas garantii kehtib ka paigaldusele?", a: "Jah, anname paigaldustöödele eraldi garantii." },
      { q: "Kas tuleb ka elektrikut?", a: "Standardühenduse teeme ise. Keerulisemate elektritööde korral kaasame elektrikaspetsialisti." },
      { q: "Mis brändide seadmeid paigaldate?", a: "Peamiselt Panasonic, Cooper&Hunter ja Samsung, kuid paigaldame ka teisi brände." },
    ]}
  />
);
export default InstallationPage;
