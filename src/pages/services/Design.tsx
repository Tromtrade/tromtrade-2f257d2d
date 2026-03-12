import ServiceLanding from "@/components/ServiceLanding";

const DesignPage = () => (
  <ServiceLanding
    title="Projekteerimine ja seadustamine | Tromtrade OÜ"
    metaDescription="Kliimaseadmete ja soojuspumpade paigaldusprojektide koostamine ning ehituslubade taotlemine Tartus ja Lõuna-Eestis."
    h1="Projekteerimine ja seadustamine"
    description="Koostame paigaldusprojekte ja aitame seadustada kliimaseadmete ning soojuspumpade paigaldust. Vajalik korterelamutesse ja äriruumidesse."
    benefitsTitle="Miks on projekteerimine vajalik?"
    benefits={[
      "Korterelamu puhul nõuab KÜ projekti",
      "Äriruumides vajalik ehitusloa taotlemiseks",
      "Tagab paigalduse vastavuse normidele",
      "Professionaalne dokumentatsioon",
    ]}
    process={[
      "Objekti hindamine ja vajaduste kaardistamine",
      "Projekti koostamine",
      "Kooskõlastamine KÜ või omavalitsusega",
      "Ehitusloa taotlemine (vajadusel)",
    ]}
    included={[
      "Paigaldusprojekti koostamine",
      "Konsultatsioon seadme valikul",
      "Dokumentatsiooni ettevalmistamine",
    ]}
    notIncluded={[
      "Riigilõivud",
      "Seadme ja paigalduse maksumus (eraldi)",
    ]}
    priceRange="küsi hinda"
    ctaLabel="Küsi pakkumist"
    faqs={[
      { q: "Millal on projekt vajalik?", a: "Korterelamutesse paigaldamisel nõuab KÜ tavaliselt projekti. Äriruumides võib olla vajalik ehitusluba." },
      { q: "Kui kaua projekti koostamine aega võtab?", a: "Tavaliselt 5–10 tööpäeva, sõltuvalt objekti keerukusest." },
      { q: "Kas aitate ka KÜ-ga suhtlemisel?", a: "Jah, aitame koostada vajaliku dokumentatsiooni ja suhelda KÜ-ga." },
      { q: "Kas eramaja puhul on projekti vaja?", a: "Enamasti mitte, aga teatud juhtudel võib omavalitsus seda nõuda." },
    ]}
  />
);

export default DesignPage;
