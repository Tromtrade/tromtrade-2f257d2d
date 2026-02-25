import ServiceLanding from "@/components/ServiceLanding";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface GeoLandingProps {
  city: string;
  cityGenitive: string;
}

const GeoInstallPage = ({ city, cityGenitive }: GeoLandingProps) => (
  <ServiceLanding
    title={`Õhksoojuspumba paigaldus ${city} | Tromtrade OÜ`}
    metaDescription={`Professionaalne õhksoojuspumba paigaldus ${cityGenitive}. Sertifitseeritud töö, garantii ja kiire teenindus. Küsi pakkumist!`}
    h1={`Õhksoojuspumba paigaldus ${cityGenitive}`}
    description={`Tromtrade OÜ teostab professionaalset õhksoojuspumba paigaldust ${cityGenitive} ja lähiümbruses. Pakume energiatõhusaid küttelahendusi eramajadele, korteritele ja äripindadele. Meie sertifitseeritud spetsialistid tagavad kvaliteetse paigalduse koos garantiiga.`}
    benefitsTitle="Miks tellida paigaldus Tromtrade'ilt?"
    benefits={[
      "Sertifitseeritud F-gaasi pädevusega spetsialist",
      `Kiire teenindus ${cityGenitive} ja lähiümbruses`,
      "Kuni 5 aastat garantiid töödele",
      "Tasuta konsultatsioon ja nõustamine",
      "Panasonic, Samsung ja Cooper&Hunter ametlik partner",
      "Paigaldus 1–3 tööpäevaga",
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
      "Torustik kuni 3m",
      "Elektriühendus",
      "Vaakumimine ja lekke kontroll",
      "Testkäivitus ja seadistamine",
      "Kasutuskoolitus",
    ]}
    notIncluded={[
      "Seadme maksumus (eraldi)",
      "Torustik üle 3m",
      "Lisaelektritööd",
    ]}
    priceNote={`Paigalduse hind ${cityGenitive} sõltub objekti eripärast ja torustiku pikkusest.`}
    priceRange="390€"
    additionalContent={
      <div className="space-y-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Õhksoojuspumba paigaldus {cityGenitive} – mida peab teadma?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>Õhksoojuspump on energiatõhus viis kodu kütmiseks ja jahutamiseks. {city} piirkonnas, kus talvised temperatuurid võivad langeda alla -20°C, on oluline valida seade, mis töötab efektiivselt ka madalatel temperatuuridel.</p>
            <p>Professionaalne paigaldus tagab seadme maksimaalse kasuteguri ning pika tööea. Meie spetsialistid hindavad teie objekti eripärasid – ruumi suurust, soojustuse kvaliteeti ja elektrisüsteemi – ning soovitavad optimaalse lahenduse.</p>
            <p>Paigaldus sisaldab seadme kinnitamist, torustiku ja elektriühendust, vaakumimist ja lekke kontrolli, testkäivitust ning kasutusjuhendamist. Kogu protsess võtab tavaliselt 1 tööpäeva.</p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Kui palju maksab õhksoojuspumba paigaldus {cityGenitive}?</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">Standardpaigalduse hind algab 390€-st ja sisaldab sise- ning välisseadme paigaldust, torustikku kuni 3m ja seadistamist. Täpne hind sõltub torustiku pikkusest, seadme tüübist ja paigaldustingimustest. <Link to="/broneeri" className="text-primary font-semibold hover:underline">Küsige personaalset pakkumist</Link>.</p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Kas õhksoojuspump töötab –25 kraadiga?</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">Jah, kaasaegsed invertersoojuspumbad töötavad efektiivselt kuni -25°C juures. Premium-mudelid suudavad toota soojust isegi -30°C juures. <Link to="/blogi/talvine-tookindlus" className="text-primary font-semibold hover:underline">Loe lähemalt talvisest töökindlusest</Link>.</p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Energiasäästlik küte {cityGenitive}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">Soojuspump on 3-5 korda efektiivsem kui elektriküte. 80 m² kodu puhul võib aastane sääst ulatuda 850 euroni. <Link to="/kalkulaator" className="text-primary font-semibold hover:underline">Arvuta oma sääst kalkulaatoriga</Link>.</p>
        </div>
      </div>
    }
    faqs={[
      { q: `Kas paigaldate ka ${cityGenitive} korteritesse?`, a: "Jah, paigaldame soojuspumpasid nii korteritesse kui eramajadesse. Korteri puhul on vajalik KÜ nõusolek välisseadme paigaldamiseks." },
      { q: `Kui kiiresti saate ${city} tulla?`, a: "Tavaliselt saame paigalduse teostada 1-3 tööpäeva jooksul pärast kokkuleppe sõlmimist." },
      { q: "Kas on vaja eraldi elektrit?", a: "Sõltub koormusest, vajadusel soovitame elektriku kaasamist." },
      { q: `Kui palju maksab õhksoojuspumba paigaldus 70m² korterisse ${cityGenitive}?`, a: "Standardpaigalduse hind algab 390€-st. Täpne hind sõltub torustiku pikkusest ja paigaldustingimustest. Küsige pakkumist!" },
      { q: "Kas soojuspump sobib ka eramajja?", a: "Kindlasti! Õhksoojuspump on suurepärane küttelahendus eramajale, eriti kombineerituna olemasoleva küttesüsteemiga." },
    ]}
    mapEmbed={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130168.6!2d26.6!3d58.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36d8d55cecb1%3A0x400b36d18fc6270!2s${encodeURIComponent(city)}!5e0!3m2!1set!2see!4v1`}
  />
);

export const ElvaPage = () => <GeoInstallPage city="Elva" cityGenitive="Elvas" />;
export const VoruPage = () => <GeoInstallPage city="Võru" cityGenitive="Võrus" />;
export default GeoInstallPage;
