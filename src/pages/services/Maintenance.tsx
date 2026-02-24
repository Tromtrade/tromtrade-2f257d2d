import ServiceLanding from "@/components/ServiceLanding";
const MaintenancePage = () => (
  <ServiceLanding
    title="Soojuspumba hooldus Tartus"
    h1="Õhk-õhk soojuspumba hooldus Tartus ja Lõuna-Eestis"
    description="Regulaarne hooldus pikendab seadme eluiga ja hoiab energiatõhususe kõrgel. Professionaalne teenus kogenud spetsialistilt."
    benefits={["Pikendab seadme eluiga", "Hoiab energiatõhususe kõrgel", "Ennetab kulukaid rikkeid", "Kiire ja mugav teenus", "Hooldusprotokoll", "Mitme seadme soodustus"]}
    process={["Broneerige hooldusaeg", "Spetsialist saabub kokkulepitud ajal", "Teostame täieliku hoolduse", "Väljastame hooldusaruande"]}
    included={["Filtrite puhastus", "Soojusvaheti pesu", "Välisseadme kontroll", "Dreenisüsteemi puhastus", "Hooldusprotokoll"]}
    notIncluded={["Varuosade asendamine", "Külmaine lisamine", "Remonttööd"]}
    priceRange="89€"
    faqs={[
      { q: "Kui tihti peab hooldama?", a: "Soovitame hooldust vähemalt kord aastas, eelistatavalt kevadel." },
      { q: "Kui kaua hooldus kestab?", a: "Ühe seadme hooldus kestab ca 45–60 minutit." },
      { q: "Kas hooldus on kohustuslik?", a: "Garantii kehtivuse jaoks on regulaarne hooldus enamasti kohustuslik." },
      { q: "Kas saan mitut seadet korraga hooldada?", a: "Jah, mitme seadme puhul pakume soodustust." },
      { q: "Kas saab hooldust ka nädalavahetusel?", a: "Jah, kokkuleppel võimalik." },
      { q: "Mis siis, kui hoolduse käigus avastatakse rike?", a: "Teavitame koheselt ja pakume remondilahendust." },
    ]}
  />
);
export default MaintenancePage;
