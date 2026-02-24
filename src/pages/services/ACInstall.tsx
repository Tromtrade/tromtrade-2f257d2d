import ServiceLanding from "@/components/ServiceLanding";
const ACInstallPage = () => (
  <ServiceLanding
    title="Kliimaseadme paigaldus Tartus"
    h1="Kliimaseadme paigaldus Tartus ja Lõuna-Eestis"
    description="Jahutus- ja kliimaseadmete professionaalne paigaldus kodudesse, kontoritesse ja äriruumidesse."
    benefits={["Jahutus ja küte ühes seadmes", "Energiatõhus lahendus", "Professionaalne paigaldus", "Kõik brändid", "Garantii"]}
    process={["Konsultatsioon ja ruumi hindamine", "Seadme valik ja pakkumine", "Paigaldus", "Seadistamine ja koolitus"]}
    included={["Sise- ja välisseadme paigaldus", "Torustik kuni 3m", "Seadistamine"]}
    notIncluded={["Seadme maksumus", "Torustik üle 3m", "Lisaelektritööd"]}
    priceRange="390€"
    faqs={[
      { q: "Mis vahe on soojuspumbal ja konditsioneeril?", a: "Kaasaegne soojuspump töötab nii jahutus- kui küttereziimil. Konditsioneer on sama seade, mida kasutatakse peamiselt jahutuseks." },
      { q: "Kas kliimaseade jahutab piisavalt?", a: "Jah, õigesti dimensioneeritud seade jahutab ka kuumal suvel efektiivselt." },
      { q: "Kas paigaldus on mürarikkus?", a: "Kaasaegsed seadmed on väga vaiksed — siseseade 20-25 dB." },
      { q: "Kas sobib ka kontorisse?", a: "Kindlasti, paigaldame ka äriruumidesse." },
      { q: "Kui suur ruum vajab mitut siseseadet?", a: "Üle 40m² ruumid võivad vajada mitut siseseadet või multisplit-lahendust." },
      { q: "Kas saab juhtida nutitelefonist?", a: "Jah, enamik kaasaegseid seadmeid on WiFi-ühendusega." },
    ]}
  />
);
export default ACInstallPage;
