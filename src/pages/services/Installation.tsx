import ServiceLanding from "@/components/ServiceLanding";
import { Link } from "react-router-dom";

const InstallationPage = () => (
  <ServiceLanding
    title="Õhksoojuspumba paigaldus Tartus – Kiire ja korrektne töö | Tromtrade OÜ"
    metaDescription="Professionaalne õhksoojuspumba paigaldus Tartus ja Lõuna-Eestis. F-gaasi sertifikaat, kuni 5a garantii, paigaldus 1-3 päevaga. Küsi pakkumist!"
    h1="Õhksoojuspumba paigaldus Tartus"
    description="Tromtrade OÜ teostab professionaalset õhksoojuspumba paigaldust Tartus ja kogu Lõuna-Eestis. Meie F-gaasi pädevusega spetsialist tagab kvaliteetse töö koos garantiiga. Pakume täislahendust – konsultatsioonist kuni seadistamiseni."
    benefitsTitle="Miks tellida paigaldus Tromtrade'ilt?"
    benefits={[
      "Sertifitseeritud F-gaasi pädevusega spetsialist",
      "Panasonic, Samsung ja Cooper&Hunter ametlik partner",
      "Kuni 5 aastat garantiid töödele",
      "Paigaldus 1–3 tööpäevaga",
      "Tasuta konsultatsioon ja nõustamine",
      "Korrektsed vakumeerimise ja lekketestid",
    ]}
    process={[
      "Võtate ühendust ja kirjeldate oma vajadust",
      "Hindame objekti ja soovitame sobiva seadme",
      "Esitame selge hinnapakkumise",
      "Paigaldame seadme ja seadistame",
      "Juhendame kasutamist ja anname garantii",
    ]}
    included={[
      "Sise- ja välisseadme paigaldus",
      "Torustik kuni 5m",
      "Elektriühendus kuni 1,5 m välisseadmest",
      "Vakumeerimine ja lekke kontroll",
      "Testkäivitus ja seadistamine",
      "Kasutuskoolitus",
    ]}
    notIncluded={[
      "Seadme maksumus (eraldi)",
      "Torustik üle 5m (lisatasu)",
      "Lisaelektritööd (vajadusel)",
    ]}
    priceNote="Paigalduse hind sõltub objekti eripärast ja torustiku pikkusest."
    priceRange="390€"
    ctaLabel="Küsi täpne pakkumine"
    additionalContent={
      <div className="space-y-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Õhksoojuspumba paigaldus Tartus – mida peab teadma?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>Õhksoojuspump on üks energiatõhusamaid viise kodu kütmiseks ja jahutamiseks. Tartu piirkonnas, kus talvised temperatuurid langevad sageli alla -20°C, on oluline valida seade, mis töötab efektiivselt ka ekstreemsetes tingimustes, ja tagada selle korrektne paigaldus.</p>
            <p>Professionaalne paigaldus on kriitilise tähtsusega – see tagab seadme maksimaalse kasuteguri, pika tööea ja garantii kehtivuse. Tromtrade spetsialistid hindavad teie objekti eripärasid – ruumi suurust, soojustuse kvaliteeti, akende energiaklassi ja elektrisüsteemi – ning soovitavad optimaalse lahenduse.</p>
            <p>Paigaldus hõlmab seadme kinnitamist, vasktoode paigaldust, elektriühendust, süsteemi vakumeerimist ja lekketesti, külmaine lisamist, testkäivitust ning kasutuskoolituist. Kogu protsess võtab tavaliselt 1 tööpäeva.</p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Milliseid seadmeid paigaldame?</h3>
          <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
            <p>Oleme Panasonicu, Samsungi ja Cooper&Hunteri ametlik partner, mis tähendab tehasegarantiid ja originaalvaruosi. Paigaldame ka teiste tootjate seadmeid – Daikin, Mitsubishi Electric, Toshiba jt.</p>
            <p>Pakume nii ühe-ruumi split-süsteeme kui multisplit-lahendusi, kus ühe välisseadmega saab teenindada 2–5 siseseadet. Multisplit on ideaalne lahendus eramajadele ja suurematele korteritele.</p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Kui palju maksab õhksoojuspumba paigaldus Tartus?</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">Standardpaigalduse hind algab 390€-st ja sisaldab sise- ning välisseadme paigaldust, torustikku kuni 5m ja seadistamist. Täpne hind sõltub torustiku pikkusest, seadme tüübist ja paigaldustingimustest. <Link to="/broneeri" className="text-primary font-semibold hover:underline">Küsige personaalset pakkumist</Link>.</p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Paigaldus korterisse vs eramajja</h3>
          <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
            <p><strong>Korter:</strong> Korterisse paigaldamisel on vajalik KÜ nõusolek välisseadme paigaldamiseks. Populaarseim lahendus on välisseadme paigaldamine rõdule või fassaadile. Müratase ja vibratsioon on olulised – soovitame vaiksemaid mudeleid nagu Samsung Wind-Free või Panasonic Etherea. <Link to="/blogi/paigaldus-korterisse" className="text-primary font-semibold hover:underline">Loe lähemalt korterisse paigaldusest</Link>.</p>
            <p><strong>Eramaja:</strong> Eramajas on paigaldus lihtsam, kuna piiranguid on vähem. Välisseade paigaldatakse tavaliselt maja põhjapoolsele küljele varjulisse kohta. Soovitame paigaldada seade vähemalt 30–50 cm kõrgusele maapinnast, et talvine lumevall ei takistaks tööd.</p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Kas soojuspump töötab Eesti talves?</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">Jah, kaasaegsed invertersoojuspumbad töötavad efektiivselt kuni -25°C juures. Premium-mudelid suudavad toota soojust isegi -30°C juures. Isegi -20°C juures on soojuspump 2 korda efektiivsem kui elektriküte. <Link to="/blogi/talvine-tookindlus" className="text-primary font-semibold hover:underline">Loe lähemalt talvisest töökindlusest</Link>.</p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Energiasääst soojuspumbaga</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">Soojuspump on 3-5 korda efektiivsem kui elektriküte. 80 m² kodu puhul võib aastane sääst ulatuda 850 euroni, tasuvusaeg on vaid 2-3 aastat. <Link to="/kalkulaator" className="text-primary font-semibold hover:underline">Arvuta oma sääst kalkulaatoriga</Link>.</p>
        </div>
      </div>
    }
    faqs={[
      { q: "Kas paigaldate ka korteritesse?", a: "Jah, paigaldame soojuspumpasid nii korteritesse kui eramajadesse. Korteri puhul on vajalik KÜ nõusolek välisseadme paigaldamiseks." },
      { q: "Kui kiiresti saate tulla?", a: "Tavaliselt saame paigalduse teostada 1-3 tööpäeva jooksul pärast kokkuleppe sõlmimist." },
      { q: "Kas on vaja eraldi elektrit?", a: "Sõltub koormusest – väiksemad seadmed (kuni 3,5 kW) töötavad tavaliselt olemasoleva elektriühendusega. Suuremad seadmed võivad vajada eraldi kaitset." },
      { q: "Kui palju maksab paigaldus?", a: "Standardpaigalduse hind algab 390€-st. Täpne hind sõltub torustiku pikkusest ja paigaldustingimustest. Küsige pakkumist!" },
      { q: "Kas soojuspump sobib ka eramajja?", a: "Kindlasti! Õhksoojuspump on suurepärane küttelahendus eramajale, eriti kombineerituna olemasoleva küttesüsteemiga." },
      { q: "Millist garantiid pakute?", a: "Pakume paigaldustöödele kuni 5 aasta garantiid. Seadmele kehtib tootjagarantii, mis on tavaliselt 3-5 aastat." },
    ]}
    mapEmbed="https://maps.google.com/maps?q=Tartu+linn,+Estonia&t=&z=12&ie=UTF8&iwloc=&output=embed"
  />
);

export default InstallationPage;
