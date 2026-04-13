import { company } from "./company";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const BASE = company.url;
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7ebf01c5-b144-4803-abc2-b0922202d6c7/id-preview-b6ba5f71--d3d46328-f18b-433b-a0f0-b1de4abd66f2.lovable.app-1772603640925.png";

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "Õhksoojuspumba paigaldus Tartus | Tromtrade OÜ",
    description:
      "Professionaalne õhksoojuspumba paigaldus, hooldus ja remont Tartus ja Lõuna-Eestis. Küsi tasuta pakkumist – vastame 24h.",
    canonical: BASE,
    ogImage: OG_IMAGE,
  },
  services: {
    title: "Teenused – soojuspumba paigaldus, hooldus, remont | Tromtrade",
    description:
      "Õhksoojuspumba paigaldus alates 390€, hooldus alates 80€, remont alates 60€. Sertifitseeritud tehnikud Tartus.",
    canonical: `${BASE}/teenused`,
  },
  booking: {
    title: "Küsi pakkumist – tasuta hinnapakkumine | Tromtrade",
    description:
      "Täida vorm ja saada tasuta hinnapakkumine õhksoojuspumba paigalduseks. Vastame 24 tunni jooksul.",
    canonical: `${BASE}/broneeri`,
  },
  calculator: {
    title: "Soojuspumba kalkulaator – arvuta sääst | Tromtrade",
    description:
      "Arvuta, kui palju sa säästaksid soojuspumbaga. Sisesta pindala ja praeguse kütte tüüp.",
    canonical: `${BASE}/kalkulaator`,
  },
  contact: {
    title: "Kontakt – Tromtrade OÜ | Tartu",
    description:
      "Võta ühendust Tromtrade'iga: telefon 5564 4610, e-mail info@tromtrade.ee. Asume Tartus, teenindame Lõuna-Eestit.",
    canonical: `${BASE}/kontakt`,
  },
  about: {
    title: "Meist – Tromtrade OÜ | 10+ aastat kogemust",
    description:
      "Tromtrade on Tartu piirkonna juhtiv soojuspumba paigaldaja. Üle 10 aasta kogemust, EVUL sertifikaat.",
    canonical: `${BASE}/meist`,
  },
  pricing: {
    title: "Hinnakiri – soojuspumba paigaldus ja hooldus | Tromtrade",
    description:
      "Selge ja aus hinnakiri: paigaldus alates 390€, hooldus alates 80€, remont alates 60€.",
    canonical: `${BASE}/hinnakiri`,
  },
  projects: {
    title: "Tehtud tööd – paigalduste galerii | Tromtrade",
    description:
      "Vaata meie tehtud töid: soojuspumpade ja kliimaseadmete paigaldused Tartus ja Lõuna-Eestis.",
    canonical: `${BASE}/tehtud-tood`,
  },
  blog: {
    title: "Blogi – soojuspumba nõuanded | Tromtrade",
    description:
      "Praktilised nõuanded soojuspumba valikust, hooldusest ja energiasäästust Eesti kliimas.",
    canonical: `${BASE}/blogi`,
  },
  privacy: {
    title: "Privaatsuspoliitika | Tromtrade OÜ",
    description: "Tromtrade OÜ privaatsuspoliitika ja isikuandmete töötlemise tingimused.",
    canonical: `${BASE}/privaatsus`,
  },
  installationTartu: {
    title: "Õhksoojuspumba paigaldus Tartus – alates 390€ | Tromtrade",
    description:
      "Professionaalne õhk-õhk soojuspumba paigaldus Tartus. Standardpaigaldus alates 390€, F-gaasi sertifikaat, 2a garantii.",
    canonical: `${BASE}/ohksoojuspumba-paigaldus-tartu`,
  },
  maintenanceTartu: {
    title: "Õhksoojuspumba hooldus Tartus – alates 80€ | Tromtrade",
    description:
      "Soojuspumba aastahooldus Tartus. Filtrite puhastus, soojusvaheti pesu, külmaaine kontroll. Alates 80€.",
    canonical: `${BASE}/ohksoojuspumba-hooldus-tartu`,
  },
  repairTartu: {
    title: "Õhksoojuspumba remont Tartus – alates 60€ | Tromtrade",
    description:
      "Soojuspumba rikke diagnostika ja remont Tartus. Kiire väljakutse, veakoodide lugemine. Alates 60€.",
    canonical: `${BASE}/ohksoojuspumba-remont-tartu`,
  },
  acInstall: {
    title: "Kliimaseadme paigaldus Tartus – alates 390€ | Tromtrade",
    description:
      "Kliimaseadme professionaalne paigaldus Tartus. Jahutus ja küte ühes seadmes. Alates 390€.",
    canonical: `${BASE}/kliimaseadme-paigaldus-tartu`,
  },
  relocation: {
    title: "Seadmete ümberpaigaldus ja utiliseerimine | Tromtrade",
    description:
      "Soojuspumba demonteerimine, teisaldamine ja keskkonnasõbralik utiliseerimine. Alates 150€.",
    canonical: `${BASE}/seadmete-umberpaigaldus-ja-utiliseerimine`,
  },
  design: {
    title: "Projekteerimine ja seadustamine | Tromtrade",
    description:
      "Kliimaseadmete paigaldusprojektide koostamine ja ehituslubade taotlemine. Alates 300€.",
    canonical: `${BASE}/projekteerimine-ja-seadustamine`,
  },
  geoElva: {
    title: "Õhksoojuspumba paigaldus Elvas | Tromtrade",
    description:
      "Soojuspumba paigaldus Elvas ja lähiümbruses. Sertifitseeritud tehnikud, 2-aastane garantii.",
    canonical: `${BASE}/ohksoojuspumba-paigaldus-elva`,
  },
  geoVoru: {
    title: "Õhksoojuspumba paigaldus Võrus | Tromtrade",
    description:
      "Soojuspumba paigaldus Võrus ja lähiümbruses. Sertifitseeritud tehnikud, 2-aastane garantii.",
    canonical: `${BASE}/ohksoojuspumba-paigaldus-voru`,
  },
};
