import ServiceLanding from "@/components/ServiceLanding";
const RelocationPage = () => (
  <ServiceLanding
    title="Seadmete ümberpaigaldus ja utiliseerimine"
    h1="Soojuspumba ja kliimaseadme ümberpaigaldus ja utiliseerimine"
    description="Olemasoleva seadme demonteerimine, teisaldamine ja uuesti paigaldamine. Ka vananenud seadmete utiliseerimine."
    benefits={["Ohutu demonteerimine", "F-gaasi käitlemine vastavalt nõuetele", "Uuesti paigaldamine uues asukohas", "Keskkonnasõbralik utiliseerimine"]}
    process={["Hinnangu küsimine", "Demonteerimine", "Transport (vajadusel)", "Paigaldamine uues asukohas"]}
    included={["Demonteerimine", "Külmaine kogumine", "Transport kokkuleppel"]}
    notIncluded={["Uued materjalid uues asukohas", "Paigaldus uues asukohas (eraldi)"]}
    priceRange="150€"
    faqs={[
      { q: "Kas vana seadet saab uuesti kasutada?", a: "Jah, kui seade on töökorras, saab selle uuesti paigaldada." },
      { q: "Kuidas toimub utiliseerimine?", a: "Kogume külmaine vastavalt F-gaasi nõuetele ja seade utiliseeritakse keskkonnasõbralikult." },
      { q: "Kas saate ka ainult demonteerida?", a: "Jah, pakume ka ainult demonteerimist." },
      { q: "Mis juhtub külmainega?", a: "Külmaine kogutakse vastavalt seadusele spetsiaalsesse mahutisse." },
      { q: "Kui palju ümberpaigaldus maksab?", a: "Hind sõltub seadme tüübist ja kaugusest. Küsige pakkumist." },
      { q: "Kas teete ka äriruumide seadmetega?", a: "Jah, teostame ka äriruumide seadmete ümberpaigaldust." },
    ]}
  />
);
export default RelocationPage;
