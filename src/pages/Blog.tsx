import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom";

const articles: Record<string, { title: string; metaTitle: string; metaDesc: string; content: string[] }> = {
  "soojuspumba-valik-tartu-kliimas": {
    title: "Kuidas valida õhksoojuspumpa Tartu kliimas",
    metaTitle: "Kuidas valida õhksoojuspumpa Tartu kliimas | Tromtrade",
    metaDesc: "Õhksoojuspumba valikul tuleb arvestada võimsust, COP väärtust ja tootja töökindlust.",
    content: [
      "Õhksoojuspumba valikul tuleb arvestada seadme võimsust, COP väärtust, mürataset ja tootja töökindlust. Eesti kliima seab seadmetele kõrgemad nõudmised, mistõttu tasub valida mudel, mis töötab efektiivselt ka madalatel temperatuuridel.",
      "Tartu piirkonnas, kus talvised temperatuurid võivad langeda alla -20°C, on oluline valida soojuspump, mille tööpiirkond ulatub vähemalt -25°C-ni. Paljud soodsad mudelid kaotavad efektiivsuse juba -15°C juures, mis tähendab, et kõige külmemal ajal, kui kütet enim vajad, ei suuda seade piisavalt soojust toota.",
      "COP (Coefficient of Performance) näitab, mitu kWh soojusenergiat seade toodab ühe kWh elektrienergia kohta. Kvaliteetse soojuspumba COP on +7°C välisõhu temperatuuril umbes 4-5, mis tähendab, et iga kulutatud kilovatt-tunni kohta saad 4-5 kWh soojust. Mida kõrgem on COP, seda väiksemad on sinu elektrikulud.",
      "Seadme võimsuse valik sõltub köetava ruumi suurusest, soojustuse kvaliteedist ja akende energiaklassist. Lihtne rusikareegel: 1 kW küttevõimsust iga 10-15 m² kohta hästi soojustatud ruumis. Halvasti soojustatud majas võib see suhe olla 1 kW iga 7-10 m² kohta.",
      "Müratase on eriti oluline kortermajas, kus välisseade paikneb naabrite akende läheduses. Kaasaegsete premium-mudelite välisseadme müratase on 48-52 dB, mis on võrreldav vaikse vestlusega. Siseseadme müratase jääb tavaliselt 19-24 dB juurde öörežiimil.",
      "Tootjate seas on Eesti kliimas end tõestanud Panasonic, Daikin, Mitsubishi Electric ja Samsung. Need brändid pakuvad mudeleid, mis on spetsiaalselt disainitud Põhja-Euroopa tingimustele. Odavamad alternatiivid nagu Cooper&Hunter pakuvad samuti head hinna-kvaliteedi suhet.",
      "Invertertehnoloogia on tänapäeval standard – see tähendab, et kompressor reguleerib oma võimsust vastavalt vajadusele, mitte ei tööta lihtsalt sisse-välja režiimil. See tagab ühtlasema temperatuuri, madalama müra ja kuni 30% väiksema energiakulu võrreldes mitteinverterseadmetega.",
      "WiFi-ühendus ja nutijuhtimine on muutunud oluliseks funktsiooniks. Enamik kaasaegseid seadmeid võimaldavad temperatuuri seadistamist nutitelefonist, ajaprogrammide loomist ja energiakulu jälgimist. See on eriti mugav suvilates ja üürikorterites.",
      "Enne soojuspumba ostmist soovitame alati konsulteerida spetsialistiga, kes hindab teie ruumi eripärasid ja soovitab optimaalse lahenduse. Tromtrade pakub tasuta konsultatsiooni, kus analüüsime teie vajadusi ja aitame valida parima seadme.",
      "Kokkuvõttes: ärge valige ainult hinna järgi. Kvaliteetne soojuspump koos professionaalse paigaldusega on investeering, mis tasub end ära juba esimeste aastatega läbi vähenenud küttekulu.",
    ],
  },
  "regulaarne-hooldus-energiakulu": {
    title: "Kas regulaarne hooldus vähendab energiakulu?",
    metaTitle: "Kas regulaarne hooldus vähendab energiakulu? | Tromtrade",
    metaDesc: "Hooldamata seade kaotab efektiivsust kuni 30%. Loe, miks hooldus on oluline.",
    content: [
      "Hooldamata seade kaotab efektiivsust kuni 30%, mis tähendab otsest rahalist kulu iga kuu. Regulaarne hooldus on kõige lihtsam viis hoida soojuspumba energiakulu kontrolli all.",
      "Soojuspumba filtrid koguvad tolmu, õietolmu ja muid osakesi, mis takistavad õhuvoolu. Ummistunud filtrite korral peab kompressor rohkem tööd tegema, mis tõstab energiakulu ja lühendab seadme eluiga. Filtrite puhastamine on lihtne toiming, mida saab ise teha igakuiselt.",
      "Soojusvaheti (evaporaator ja kondensaator) korrastamine nõuab professionaalset sekkumist. Mustus ja hallitus soojusvahetil vähendavad soojusülekannet ja halvendavad sisekliima kvaliteeti. Professionaalne keemiline pesu taastab soojusvaheti efektiivsuse.",
      "Külmaine tase on kriitilise tähtsusega. Isegi väike leke vähendab süsteemi efektiivsust märkimisväärselt. Hoolduse käigus kontrollitakse süsteemi rõhku ja vajadusel lisatakse külmainet. Õigeaegne rõhukontroll võib säästa kallist kompressoriremonti.",
      "Dreenisüsteem ehk kondensaatvee äravool vajab regulaarset kontrolli. Ummistunud drenaaz võib põhjustada veeleket, hallituse kasvu ja seadme rikke. Hoolduse käigus puhastatakse dreenitorustik ja kontrollitakse selle toimivust.",
      "Elektriühenduste kontroll on oluline ohutuse seisukohalt. Lõdvenenud kontaktid võivad põhjustada ülekuumenemist ja tuleohu. Professionaalse hoolduse käigus kontrollitakse kõiki elektriühendusi ja pingutakse vajadusel.",
      "Kompressori töö hindamine annab ülevaate seadme üldisest seisukorrast. Ebatavaline müra, vibratsioon või pikenenud töötsüklid viitavad probleemidele, mis vajavad tähelepanu. Varajane avastamine hoiab ära kallid remondid.",
      "Hooldusprotokoll on oluline dokument, mis kinnitab regulaarset hooldust. See on vajalik garantiinõuete esitamisel ja tõstab seadme edasimüügiväärtust. Tromtrade väljastab iga hoolduse kohta üksikasjaliku protokolli.",
      "Optimaalne hooldustsükkel on kord aastas – soovitavalt kevadel enne jahutushooaega. Intensiivsema kasutuse korral (nt äripinnad, allergiaga inimeste kodud) võib kahekordne hooldus olla mõistlik.",
      "Kokkuvõttes: regulaarne hooldus maksab end mitmekordelt tagasi läbi vähenenud energiakulu, pikema eluea ja välditud remondikulude. 70€ hooldus võib säästa sadu eurosid aastas.",
    ],
  },
  "levinumad-veakoodid": {
    title: "Levinumad veakoodid õhksoojuspumpadel",
    metaTitle: "Levinumad veakoodid õhksoojuspumpadel | Tromtrade",
    metaDesc: "Selgitame tüüpilised veakoodid ja mida need tähendavad.",
    content: [
      "Kaasaegsed õhksoojuspumbad kuvavad rikke korral veakoodi, mis aitab probleemi tuvastada. Veakoodide tundmine aitab otsustada, kas tegemist on lihtsa probleemiga, mille saab ise lahendada, või vajab see professionaalset sekkumist.",
      "E1 / F1 – Temperatuurianduri viga. See viitab anduri rikkele või lahtiühendusele. Mõnikord aitab seadme sisse-välja lülitamine, kuid enamasti vajab see anduri asendamist.",
      "E2 / F2 – Jäätumise kaitse. Seade tuvastab liigset jäätumist soojusvahetil. Põhjuseks võib olla madal külmaine tase, ummistunud filter või rike defrostsüsteemis.",
      "E3 / F3 – Kompressori ülekoormuse kaitse. Kompressor töötab liiga suure koormuse all, mis võib viidata kõrgele rõhule süsteemis, ummistunud kondensaatorile või ventilaatori rikkele.",
      "E4 / F4 – Sidekommunikatsiooni viga. Sise- ja välisseade ei saa omavahel ühendust. Kontrollida tuleb sidekaablit ja selle ühendusi.",
      "E5 / F5 – Inverteri mooduli viga. See on tõsisem rike, mis nõuab professionaalset diagnostikat ja sageli elektroonikaploki asendamist.",
      "E6 / F6 – Välisseadme temperatuurianduri viga. Sarnane E1-le, kuid puudutab välisseadet. Vajab anduri kontrolli ja vajadusel asendamist.",
      "H1 – Defrosttsükkel. See ei ole tegelikult rike – seade sulatab välisseadmel tekkinud jääd. Normaalne talvine töörežiim, mis kestab tavaliselt 5-10 minutit.",
      "Oluline: iga tootja kasutab oma veakoodide süsteemi. Panasonicu, Samsungi ja Cooper&Hunteri koodid võivad erineda. Kontrollige alati oma seadme kasutusjuhendit konkreetsete koodide tähenduse osas.",
      "Kui veakood kordub pärast seadme taaskäivitamist, ärge proovige seadet ise parandada – kutsuge spetsialist. Tromtrade teostab diagnostika ja paranduse kiirelt ning annab remonttöödele garantii.",
    ],
  },
  "paigaldus-korterisse": {
    title: "Soojuspumba paigaldus korterisse – mida arvestada?",
    metaTitle: "Soojuspumba paigaldus korterisse | Tromtrade",
    metaDesc: "Mida tuleb arvestada korterisse õhksoojuspumba paigaldamisel.",
    content: [
      "Korterisse õhksoojuspumba paigaldamine erineb eramaja paigaldusest mitme olulise aspekti poolest. Siin on kõik, mida peate teadma enne paigalduse tellimist.",
      "Korteriühistu nõusolek on kohustuslik. Kuna välisseade paigaldatakse hoone fassaadile, vajate KÜ juhatuse või üldkoosoleku nõusolekut. Soovitame esitada taotlus koos seadme fotode ja paigaldusplaaniga.",
      "Välisseadme asukoht tuleb hoolikalt valida. Seade peab olema ligipääsetav hoolduseks, ei tohi häirida naabreid müra ega vibratsiooniga ja peab vastama hoone arhitektuursele lahendusele. Rõdule paigaldamine on üks populaarsemaid lahendusi.",
      "Torustiku pikkus mõjutab nii hinda kui ka efektiivsust. Korterites on torustik sageli pikem kui eramajades – kuni 10-15 meetrit. Pikem torustik tähendab suuremat rõhukadu ja mõnevõrra madalamat efektiivsust.",
      "Kondensaatvee ärajuhtimine peab olema lahendatud nii, et vesi ei tilgu naabri rõdule ega fassaadile. Dreenivoolik tuleb juhtida sobivasse kohta, näiteks vihmaveesüsteemi.",
      "Elektriühendus peab olema piisava võimsusega. Korteri peakaitse peab taluma soojuspumba käivitusvoolu. Vajadusel tuleb kaasata elektrik peakaitsme suurendamiseks.",
      "Müratase on korteris eriti oluline. Valige mudel, mille siseseadme öörežiimi müratase on alla 22 dB. Välisseadme vibratsioonisummutid on kohustuslikud korteris paigaldamisel.",
      "Kokkuvõttes: korterisse paigaldamine on igati teostatav, kuid nõuab hoolikat planeerimist. Tromtrade aitab kõikide etappidega alates KÜ taotlusest kuni paigalduse ja seadistamiseni.",
    ],
  },
  "soojuspump-vs-elektrikute": {
    title: "Õhksoojuspump vs elektriküte – kulude võrdlus",
    metaTitle: "Õhksoojuspump vs elektriküte – kulude võrdlus | Tromtrade",
    metaDesc: "Reaalsed arvutused: kui palju säästab soojuspump võrreldes elektriküttega.",
    content: [
      "Paljud Eesti kodud kasutavad veel elektriradiaatoreid, põrandakütet või õlikütet. Kuidas on soojuspumba küttekulu võrreldes nende lahendustega?",
      "Elektriradiaator muudab 1 kWh elektrit 1 kWh soojuseks (COP = 1). Soojuspump toodab aga 1 kWh elektriga 3-5 kWh soojust (COP = 3-5). See tähendab, et soojuspump on 3-5 korda efektiivsem.",
      "Näide: 80 m² korter vajab kütteperioodil umbes 8000 kWh soojusenergiat. Elektriradiaatoritega: 8000 kWh × 0,15 €/kWh = 1200 €/aastas. Soojuspumbaga (COP 3,5): 2286 kWh × 0,15 €/kWh = 343 €/aastas. Sääst: ~850 € aastas.",
      "Investeering soojuspumpa (seade + paigaldus) on tavaliselt 1500-3000 €. Arvestades 850 € aastast säästu, tasub investeering end ära 2-3 aastaga.",
      "Lisaks küttele pakub soojuspump ka jahutust suvel, mis on elektriradiaatoritega võimatu. See on täiendav mugavus, mille eest ei pea eraldi maksma.",
      "Soojuspumba efektiivsus langeb väga madalatel temperatuuridel, kuid isegi -20°C juures on COP umbes 2, mis on ikka kaks korda efektiivsem kui elektriküte.",
      "Kokkuvõttes: soojuspump on selge võitja nii majanduslikult kui mugavuse poolest. Mida varem vahetate, seda rohkem säästate.",
    ],
  },
  "soojuspumba-eluiga-pikendamine": {
    title: "Kuidas pikendada soojuspumba eluiga?",
    metaTitle: "Kuidas pikendada soojuspumba eluiga? | Tromtrade",
    metaDesc: "Praktilised nõuanded soojuspumba eluea pikendamiseks.",
    content: [
      "Soojuspumba keskmine eluiga on 10-15 aastat, kuid õige hoolduse ja kasutamisega võib see ulatuda 20 aastani. Siin on peamised nõuanded.",
      "Regulaarne hooldus on kõige olulisem tegur. Vähemalt kord aastas professionaalne hooldus ja igakuine filtrite puhastamine hoiavad seadme tippvormis.",
      "Õige temperatuuri seadistamine aitab vähendada kompressori koormust. Ärge seadistage temperatuuri liiga kõrgeks talvel ega liiga madalaks suvel. Optimaalne vahe välis- ja sisetemperatuuri vahel on 5-7°C jahutusrežiimil.",
      "Välisseadme ümbruse hoidmine puhtana on oluline. Lehed, praht ja lumekuhjad takistavad õhuvoolu ja sunnivad seadet rohkem tööd tegema.",
      "Ärge lülitage seadet pidevalt sisse ja välja. Invertertehnoloogiaga seade töötab kõige efektiivsemalt, kui see saab pidevalt töötada madalal võimsusel, mitte pidevalt käivituda ja seiskuda.",
      "Vältuge seadme kasutamist aknaid avades. See sunnib seadet töötama täisvõimsusel ilma tulemust saavutamata.",
      "Kokkuvõttes: hoolitsege oma soojuspumba eest ja see hoolitseb teie eest. Väikesed igapäevased harjumused pikendavad seadme eluiga oluliselt.",
    ],
  },
  "talvine-tookindlus": {
    title: "Talvine töökindlus – mida peaks teadma?",
    metaTitle: "Talvine töökindlus – mida peaks teadma? | Tromtrade",
    metaDesc: "Kuidas soojuspump töötab Eesti talvel ja millele tähelepanu pöörata.",
    content: [
      "Eesti talv on soojuspumpadele tõsine katsumus. Temperatuurid võivad langeda alla -25°C ja küttevajadus on maksimaalne just siis, kui seadme efektiivsus on madalaim.",
      "Kaasaegsed invertersoojuspumbad töötavad efektiivselt kuni -25°C juures. Premium-mudelid (Panasonic, Daikin, Mitsubishi) suudavad toota soojust isegi -30°C juures, kuigi efektiivsus on sel juhul madalam.",
      "Defrosttsükkel on normaalne talvine nähtus. Kui välistemperatuur on 0°C ümbruses ja õhuniiskus kõrge, tekib välisseadme soojusvahetile jää. Seade lülitub automaatselt sulatutsüklile, mis kestab 5-10 minutit.",
      "Välisseadme paigutus mõjutab talvist töökindlust. Seade tuleb paigaldada tuulevaikesse kohta, piisavalt kõrgele maapinnast (lumevall!) ja nii, et sulanud vesi saab vabalt ära voolata.",
      "Lisasoojusallikas on mõistlik varuvariandina. Eriti vanade ja halvasti soojustatud majade puhul soovitame hoida elektriradiaatorit varuks kõige külmemate päevade tarbeks.",
      "Kokkuvõttes: kvaliteetne soojuspump koos professionaalse paigaldusega on Eesti talves täiesti töökindel. Oluline on valida õige mudel ja paigaldada see korrektselt.",
    ],
  },
  "kliimaseade-kontoris": {
    title: "Kliimaseadme paigaldus kontorisse",
    metaTitle: "Kliimaseadme paigaldus kontorisse | Tromtrade",
    metaDesc: "Nõuanded kontori jahutus- ja küttesüsteemi valikuks ja paigalduseks.",
    content: [
      "Kontori kliimaseade on investeering töötajate heaolusse ja tootlikkusse. Uuringud näitavad, et optimaalne temperatuur (21-23°C) tõstab töötajate produktiivsust kuni 15%.",
      "Kontori kliimaseadme valikul tuleb arvestada ruumi suurust, inimeste arvu, arvutite ja muu tehnika poolt toodetud soojust ning akende orientatsiooni. Lõunapoolsete akendega kontor vajab oluliselt suuremat jahutamisvõimsust.",
      "Multisplit-süsteem võimaldab ühendada mitu siseseadet ühe välisseadmega, mis on ideaalne lahendus mitme kontoririruumi jahutamiseks. See säästab fassaadipinda ja vähendab paigalduskulu.",
      "Müratase on kontoris eriti oluline. Valige mudel, mille müratase madalal kiirusel ei ületa 25 dB. Kaasaegsed ärikliimaseadmed on disainitud just madala müra jaoks.",
      "Energiatõhusus ja opereerimiskulu on ärikliendi jaoks olulised. A++ energiaklassiga seade säästab oluliselt rohkem kui A-klassiga seade, eriti intensiivse kasutuse korral.",
      "Tromtrade paigaldab kliimaseadmeid kontoripindadele üle Lõuna-Eesti. Pakume lahendusi väikestest büroopindadest kuni suuremate äriruumideni.",
    ],
  },
  "remont-vs-vahetus": {
    title: "Millal on remont mõistlik ja millal vahetus?",
    metaTitle: "Millal on remont mõistlik ja millal vahetus? | Tromtrade",
    metaDesc: "Kuidas otsustada, kas remontida vana seadet või investeerida uude.",
    content: [
      "Soojuspumba rikke korral tekib alati küsimus: kas tasub remontida või on mõistlikum investeerida uude seadmesse? Siin on mõned juhtnöörid.",
      "Remont on mõistlik, kui seade on alla 8 aasta vana, rike on konkreetne ja lokaliseeritud (nt andur, ventilaator, plaat), remondi maksumus jääb alla 30% uue seadme hinnast ja seade on üldiselt heas korras.",
      "Vahetus on mõistlik, kui seade on üle 10 aasta vana, kompressor on rikkis (remont on sageli kallim kui uus seade), seade kasutab vananenud külmainet (R22), energiakulu on märgatavalt kasvanud või rikked korduvad pidevalt.",
      "Uue seadme eelis on ka oluliselt parem energiatõhusus. Viimase 10 aasta jooksul on soojuspumpade COP tõusnud 30-50%, mis tähendab märkimisväärset säästu energiakuludelt.",
      "Tromtrade aitab teil teha õige otsuse. Diagnoosime rikke ja anname ausa hinnangu, kas remont on mõistlik. Kui vahetus on parem valik, aitame valida sobiva seadme ja teostame paigalduse.",
    ],
  },
  "energiatoehus-kodu": {
    title: "Energiatõhus kodu ja õhksoojuspumbad",
    metaTitle: "Energiatõhus kodu ja õhksoojuspumbad | Tromtrade",
    metaDesc: "Kuidas õhksoojuspump aitab muuta kodu energiatõhusamaks.",
    content: [
      "Energiatõhusus on tänapäeval üks olulisemaid kriteeriume kodu planeerimisel ja renoveerimisel. Õhksoojuspump on üks efektiivsemaid viise kodu energiatõhususe tõstmiseks.",
      "Soojuspump kasutab olemasolevat soojusenergiat välisõhust, mis tähendab, et ta ei tooda soojust nullist nagu elektriküte, vaid transpordib seda. See on põhimõtteline erinevus, mis teeb soojuspumba 3-5 korda efektiivsemaks.",
      "Kombineerituna hea soojustuse, kvaliteetsete akende ja taastuvenergiaga (nt päikesepaneelid) on õhksoojuspump osa terviklikust energiatõhusast lahendusest. Päikesepaneelid toodavad elektrit, mida soojuspump kasutab kütteks – ring on sulgunud.",
      "Eesti riik toetab energiatõhususe parandamist läbi erinevate toetusprogrammide. KredEx pakub renoveerimistoetusi, mis võivad katta osa soojuspumba paigalduse kuludest.",
      "Energiamärgisel on soojuspump oluline faktor. Soojuspumba paigaldamine võib tõsta korteri või maja energiaklassi 1-2 taseme võrra, mis tõstab kinnisvara väärtust.",
      "Kokkuvõttes: õhksoojuspump on mõistlik investeering, mis vähendab energiakulu, tõstab elukvaliteeti ja suurendab kinnisvara väärtust. Tromtrade aitab leida teie kodule parima lahenduse.",
    ],
  },
};

const slugs = Object.keys(articles);

const BlogListPage = () => (
  <Layout>
    <section className="hero-gradient py-12">
      <div className="container text-center">
        <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Blogi</h1>
        <p className="mt-2 text-primary-foreground/80">Kasulikud artiklid soojuspumpade ja kliimaseadmete kohta.</p>
      </div>
    </section>
    <section className="py-12">
      <div className="container max-w-3xl space-y-4">
        {slugs.map(slug => {
          const a = articles[slug];
          return (
            <Link key={slug} to={`/blogi/${slug}`}>
              <article className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md mb-4">
                <h2 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{a.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{a.content[0].substring(0, 120)}...</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary">
                  Loe artiklit <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  </Layout>
);

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <Layout>
        <section className="py-24 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Artiklit ei leitud</h1>
          <Link to="/blogi" className="mt-4 inline-flex items-center gap-1 text-primary font-semibold"><ArrowLeft className="h-4 w-4" /> Tagasi blogisse</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="hero-gradient py-12">
        <div className="container">
          <Link to="/blogi" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4"><ArrowLeft className="h-4 w-4" /> Tagasi blogisse</Link>
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl max-w-3xl">{article.title}</h1>
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-3xl">
          <article className="prose prose-lg max-w-none">
            {article.content.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}
          </article>
          <div className="mt-12 rounded-xl hero-gradient p-6 text-center">
            <p className="text-primary-foreground/80">Vajad abi soojuspumba valikul, paigaldusel või hooldusel?</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link to="/broneeri"><button className="rounded-lg bg-accent px-6 py-2.5 font-bold text-accent-foreground transition-transform hover:scale-105">Küsi pakkumist</button></Link>
              <a href="tel:+37255644610"><button className="rounded-lg border border-primary-foreground/30 px-6 py-2.5 font-bold text-primary-foreground transition-transform hover:scale-105">Helista: 5564 4610</button></a>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "author": { "@type": "Organization", "name": "Tromtrade OÜ" },
            "publisher": { "@type": "Organization", "name": "Tromtrade OÜ" },
          }),
        }}
      />
    </Layout>
  );
};

export { BlogListPage, BlogArticlePage };
export default BlogListPage;
