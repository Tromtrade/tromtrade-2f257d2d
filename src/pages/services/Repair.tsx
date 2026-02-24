import ServiceLanding from "@/components/ServiceLanding";
const RepairPage = () => (
  <ServiceLanding
    title="Soojuspumba remont Tartus"
    h1="Õhk-õhk soojuspumba remont ja rikete kõrvaldamine Tartus"
    description="Kiire rikete diagnoosimine ja professionaalne remont. Väljakutsed Tartus ja lähiümbruses."
    benefits={["Kiire reageerimine", "Kogenud diagnostik", "Kõikide brändide remont", "Aus hinnakalkulatsioon", "Garantii remonttöödele"]}
    process={["Kirjeldage riket ja sümptomeid", "Diagnoos ja hinnapakkumine", "Remonttööd", "Testimine ja garantii"]}
    included={["Rikke diagnoosimine", "Veakoodide lugemine", "Lihtsamad remonttööd"]}
    notIncluded={["Varuosad (eraldi)", "Keerukad kompressori tööd", "Külmaine lisamine (eraldi)"]}
    priceRange="79€"
    faqs={[
      { q: "Kui kiiresti saate tulla?", a: "Tartus saame enamasti reageerida 24–48 tunni jooksul." },
      { q: "Kas remondit saab teha kohapeal?", a: "Enamiku rikkeid parandame kohapeal. Harvem on vaja seade transportida." },
      { q: "Mis saab, kui seade ei ole remonditav?", a: "Soovitame asendusseadet ja pakume paigaldust." },
      { q: "Kas annate remonttöödele garantii?", a: "Jah, remonttöödele anname garantii." },
      { q: "Kas remondit saab tellida ka nädalavahetusel?", a: "Kiireloomuliste rikete puhul on see kokkuleppel võimalik." },
      { q: "Kas tuleb kohale ka kui ei tea mis rike on?", a: "Loomulikult, diagnoosime rikke kohapeal." },
    ]}
  />
);
export default RepairPage;
