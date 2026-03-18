import ServiceLanding from "@/components/ServiceLanding";

const DesignPage = () => (
  <ServiceLanding
    title="Projekteerimine ja seadustamine | Tromtrade OÜ"
    metaDescription="Soojuspumba ja kliimaseadme seadustamine Tartus ja Lõuna-Eestis. Tagab korrektse andmestiku Ehitisregistris, on vajalik kindlustusjuhtumite puhul ja tõstab kodu turuväärtust."
    h1="Projekteerimine ja seadustamine"
    description="Soojuspumba seadustamine on oluline samm, mis tagab kinnisvara korrektse andmestiku Ehitisregistris (EHR), on vajalik kindlustusjuhtumite puhul ja tõstab kodu turuväärtust. Koostame paigaldusprojekte ja aitame seadustada kliimaseadmete ning soojuspumpade paigaldust."
    benefitsTitle="Miks on seadustamine oluline?"
    benefits={[
      "Tagab korrektse andmestiku Ehitisregistris (EHR)",
      "Vajalik kindlustusjuhtumite puhul",
      "Tõstab kodu turuväärtust",
      "Korterelamu puhul nõuab KÜ projekti",
      "Äriruumides vajalik ehitusloa taotlemiseks",
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
    priceRange="300€"
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
