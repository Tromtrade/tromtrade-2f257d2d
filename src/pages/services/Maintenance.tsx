import ServiceLanding from "@/components/ServiceLanding";

const MaintenancePage = () => (
  <ServiceLanding
    title="Õhksoojuspumba hooldus Tartus | Regulaarne hooldus"
    metaDescription="Pikenda seadme eluiga ja säästa energiakuludelt. Broneeri hooldus."
    h1="Õhksoojuspumba hooldus Tartus"
    description="Regulaarne hooldus pikendab seadme eluiga ja aitab vähendada energiakulu."
    benefitsTitle="Hooldus sisaldab"
    benefits={[
      "Filtrite puhastust",
      "Soojusvaheti pesu",
      "Kondensaadi kontrolli",
      "Töörõhu kontrolli",
      "Üldist ülevaatust",
    ]}
    priceRange="70€"
    ctaLabel="Broneeri hooldus"
    faqs={[
      { q: "Kui tihti peab hooldama?", a: "Soovitame hooldust vähemalt kord aastas, eelistatavalt kevadel." },
      { q: "Kui kaua hooldus kestab?", a: "Ühe seadme hooldus kestab ca 45–60 minutit." },
      { q: "Kas hooldus on kohustuslik?", a: "Garantii kehtivuse jaoks on regulaarne hooldus enamasti kohustuslik." },
      { q: "Kas saan mitut seadet korraga hooldada?", a: "Jah, mitme seadme puhul pakume soodustust." },
    ]}
  />
);
export default MaintenancePage;
