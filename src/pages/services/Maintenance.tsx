import ServiceLanding from "@/components/ServiceLanding";
import { Link } from "react-router-dom";

const MaintenancePage = () => (
  <ServiceLanding
    title="Õhksoojuspumba hooldus Tartus | Regulaarne hooldus | Tromtrade OÜ"
    metaDescription="Professionaalne soojuspumba hooldus Tartus. Pikenda seadme eluiga, säästa energiakuludelt ja hoia garantii kehtivana. Alates 70€."
    h1="Õhksoojuspumba hooldus Tartus"
    description="Regulaarne hooldus pikendab seadme eluiga kuni 50%, vähendab energiakulu ja hoiab ära kulukad rikked. Tromtrade OÜ teostab professionaalset soojuspumba hooldust Tartus ja kogu Lõuna-Eestis."
    benefitsTitle="Miks on regulaarne hooldus oluline?"
    benefits={[
      "Pikendab seadme eluiga kuni 50%",
      "Vähendab energiakulu kuni 30%",
      "Ennetab kulukaid rikkeid",
      "Hoiab garantii kehtivana",
      "Parandab sisekliima kvaliteeti",
      "Väljastame hooldusprotokoll",
    ]}
    process={[
      "Broneerite hooldusaja",
      "Spetsialist saabub kokkulepitud ajal",
      "Filtrite puhastamine ja soojusvaheti kontroll",
      "Külmaine rõhu ja elektriühenduste kontroll",
      "Testkäivitus ja hooldusprotokoll",
    ]}
    included={[
      "Filtrite puhastus",
      "Soojusvaheti visuaalne kontroll",
      "Kondensaatvee äravoolu kontroll",
      "Töörõhu mõõtmine",
      "Elektriühenduste kontroll",
      "Üldine ülevaatus ja hooldusprotokoll",
    ]}
    notIncluded={[
      "Keemiline soojusvaheti pesu (eraldi, al. 110€)",
      "Külmaine lisamine (eraldi)",
      "Varuosad (vajadusel)",
    ]}
    priceNote="Mitme seadme hooldamisel pakume soodustust."
    priceRange="70€"
    ctaLabel="Broneeri hooldus"
    additionalContent={
      <div className="space-y-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Miks on soojuspumba hooldus hädavajalik?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>Hooldamata soojuspump kaotab efektiivsust kuni 30% aastas. See tähendab otsest rahalist kahju – suuremaid elektriarved igal kuul. Regulaarselt hooldatud seade kestab 15–20 aastat, hooldamata seade sageli vaid 8–10 aastat. Vahe on tuhandeid eurosid.</p>
            <p>Lisaks energiakulule mõjutab hooldus ka sisekliima kvaliteeti. Mustunud filtrid ja hallitunud soojusvaheti levitavad allergeene ja baktereid, mis halvendavad siseõhku. Eriti oluline on see allergia all kannatavatele inimestele ja lastega peredele.</p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Mida hooldus sisaldab?</h3>
          <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
            <p><strong>Filtrite puhastamine:</strong> Filtrid koguvad tolmu, õietolmu ja muid osakesi. Ummistunud filtrid takistavad õhuvoolu ja suurendavad energiakulu. Puhastame filtrid põhjalikult ja kontrollime nende seisukorda.</p>
            <p><strong>Soojusvaheti kontroll:</strong> Kontrollime sise- ja välisseadme soojusvahetit mustuse, hallituse ja kahjustuste suhtes. Vajadusel soovitame keemilist pesu (eraldi teenus).</p>
            <p><strong>Külmaine rõhukontroll:</strong> Madal külmaine tase vähendab efektiivsust ja võib kahjustada kompressorit. Mõõdame rõhu ja tuvastame võimalikud lekked.</p>
            <p><strong>Elektriühendused:</strong> Kontrollime kõiki elektriühendusi, kaitsemeid ja juhtmestikku. Lõdvad kontaktid võivad põhjustada ülekuumenemist ja tuleohtu.</p>
            <p><strong>Kondensaatvee äravool:</strong> Ummistunud drenaaž võib põhjustada veeleket ja hallituse teket. Puhastame ja kontrollime dreenitoru.</p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Millal hooldust tellida?</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">Optimaalne aeg on kevadel enne jahutushooaega või sügisel enne kütteperioodi. Intensiivsema kasutuse korral (äripinnad, allergiaga inimesed) soovitame hooldust kaks korda aastas. <Link to="/blogi/regulaarne-hooldus-energiakulu" className="text-primary font-semibold hover:underline">Loe lähemalt hoolduse mõjust energiakulule</Link>.</p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Keemiline soojusvaheti pesu</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">Kui soojusvaheti on tugevalt mustunud või hallitanud, ei piisa tavalisest puhastamisest. Keemiline pesu eemaldab kõvastunud mustuse, hallituse ja bakterid, taastades soojusvaheti efektiivsuse. Kasutame keskkonnasõbralikke puhastusvahendeid. Keemilise pesu hind algab 110€-st.</p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Mida saab ise teha?</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">Filtrite puhastamine on lihtne toiming, mida saate ise teha igakuiselt. Avage siseseadme eespaneel, eemaldage filtrid ja peske leige veega. Laske täielikult kuivada enne tagasipanemist. Kõik muu – soojusvaheti pesu, rõhukontroll, elektriühendused – vajab professionaali. <Link to="/blogi/soojuspumba-eluiga-pikendamine" className="text-primary font-semibold hover:underline">Loe nõuandeid eluea pikendamiseks</Link>.</p>
        </div>
      </div>
    }
    faqs={[
      { q: "Kui tihti peab hooldama?", a: "Soovitame hooldust vähemalt kord aastas, eelistatavalt kevadel enne jahutushooaega. Intensiivsema kasutuse korral kaks korda aastas." },
      { q: "Kui kaua hooldus kestab?", a: "Ühe seadme hooldus kestab ca 45–60 minutit. Keemiline pesu lisab 30–45 minutit." },
      { q: "Kas hooldus on kohustuslik?", a: "Garantii kehtivuse jaoks on regulaarne hooldus enamasti kohustuslik. Lisaks pikendab see seadme eluiga oluliselt." },
      { q: "Kas saan mitut seadet korraga hooldada?", a: "Jah, mitme seadme puhul pakume soodustust. See on ka ajaliselt efektiivsem." },
      { q: "Kas hooldamata seade läheb kiiremini katki?", a: "Jah, regulaarne hooldus pikendab seadme eluiga kuni 50% ja ennetab kulukaid rikkeid." },
      { q: "Kui palju maksab hooldus?", a: "Regulaarse hoolduse hind algab 70€-st. Keemiline soojusvaheti pesu algab 110€-st. Mitme seadme puhul pakume soodustust." },
    ]}
    mapEmbed="https://maps.google.com/maps?q=Tartu+linn,+Estonia&t=&z=12&ie=UTF8&iwloc=&output=embed"
  />
);

export default MaintenancePage;
