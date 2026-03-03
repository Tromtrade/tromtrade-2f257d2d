import Layout from "@/components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface BlogArticle {
  title: string;
  metaTitle: string;
  metaDesc: string;
  pillar: string;
  pillarHref: string;
  relatedSlugs: string[];
  faqs: { q: string; a: string }[];
  sections: { heading?: string; paragraphs: string[] }[];
}

const articles: Record<string, BlogArticle> = {
  "soojuspumba-valik-tartu-kliimas": {
    title: "Kuidas valida õhksoojuspumpa Tartu kliimas",
    metaTitle: "Kuidas valida õhksoojuspumpa Tartu kliimas | Tromtrade",
    metaDesc: "Õhksoojuspumba valikul tuleb arvestada võimsust, COP väärtust ja tootja töökindlust. Põhjalik juhend.",
    pillar: "Õhksoojuspumba paigaldus Tartus",
    pillarHref: "/ohksoojuspumba-paigaldus-tartu",
    relatedSlugs: ["soojuspump-vs-elektrikute", "talvine-tookindlus", "paigaldus-korterisse"],
    faqs: [
      { q: "Milline soojuspump sobib 50m² korterisse?", a: "50 m² korterisse sobib tavaliselt 2,5-3,5 kW võimsusega seade. Täpne valik sõltub soojustuse kvaliteedist ja akende suurusest." },
      { q: "Kas odav soojuspump on halb valik?", a: "Mitte tingimata, kuid oluline on kontrollida COP väärtust ja töötemperatuuri piiri. Odavamad mudelid kaotavad efektiivsuse sageli juba -15°C juures." },
      { q: "Kui kaua kestab soojuspumba valik ja paigaldus?", a: "Konsultatsioonist paigalduseni kulub tavaliselt 3-7 tööpäeva, sõltuvalt seadme saadavusest." },
    ],
    sections: [
      { paragraphs: [
        "Õhksoojuspumba valikul tuleb arvestada seadme võimsust, COP väärtust, mürataset ja tootja töökindlust. Eesti kliima seab seadmetele kõrgemad nõudmised, mistõttu tasub valida mudel, mis töötab efektiivselt ka madalatel temperatuuridel.",
        "Tartu piirkonnas, kus talvised temperatuurid võivad langeda alla -20°C, on oluline valida soojuspump, mille tööpiirkond ulatub vähemalt -25°C-ni. Paljud soodsad mudelid kaotavad efektiivsuse juba -15°C juures, mis tähendab, et kõige külmemal ajal, kui kütet enim vajad, ei suuda seade piisavalt soojust toota.",
      ]},
      { heading: "COP väärtus – mis see on ja miks see loeb?", paragraphs: [
        "COP (Coefficient of Performance) näitab, mitu kWh soojusenergiat seade toodab ühe kWh elektrienergia kohta. Kvaliteetse soojuspumba COP on +7°C välisõhu temperatuuril umbes 4-5, mis tähendab, et iga kulutatud kilovatt-tunni kohta saad 4-5 kWh soojust. Mida kõrgem on COP, seda väiksemad on sinu elektrikulud.",
        "SCOP (Seasonal COP) on veel informatiivsem näitaja, kuna see arvestab kogu kütteperioodi keskmist efektiivsust, mitte ainult ühte temperatuuri. Eesti kliimas on hea SCOP väärtus 4,0 ja üle selle. Energiamärgisel vastab see A++ või A+++ klassile.",
        "Praktiline näide: kui elektri hind on 0,15 €/kWh ja COP on 4, siis ühe kWh soojuse tootmine maksab vaid 0,0375 €. Sama soojushulk elektriradiaatoriga maksaks 0,15 € – vahe on neljakordne.",
      ]},
      { heading: "Seadme võimsuse arvutamine m² järgi", paragraphs: [
        "Seadme võimsuse valik sõltub köetava ruumi suurusest, soojustuse kvaliteedist ja akende energiaklassist. Lihtne rusikareegel: 1 kW küttevõimsust iga 10-15 m² kohta hästi soojustatud ruumis. Halvasti soojustatud majas võib see suhe olla 1 kW iga 7-10 m² kohta.",
        "Konkreetsemalt: 30 m² tuba vajab umbes 2-3 kW, 50 m² korter 3,5-5 kW, 80 m² korter 5-7 kW ja 120 m² eramaja 7-10 kW soojuspumpa. Need on ligikaudsed numbrid – täpse arvutuse teeb spetsialist, kes arvestab ka hoone asukoha, tuulekindluse ja muude teguritega.",
        "Oluline on mitte valida liiga väikest ega liiga suurt seadet. Alavõimsusega seade ei suuda kõige külmematel päevadel piisavalt soojust toota. Ülevõimsusega seade on ebamõistlikult kallis ja töötab sageli lühitsüklites, mis kulutab kompressorit.",
      ]},
      { heading: "Müratase – eriti oluline kortermajas", paragraphs: [
        "Müratase on eriti oluline kortermajas, kus välisseade paikneb naabrite akende läheduses. Kaasaegsete premium-mudelite välisseadme müratase on 48-52 dB, mis on võrreldav vaikse vestlusega. Siseseadme müratase jääb tavaliselt 19-24 dB juurde öörežiimil.",
        "Müratase sõltub seadme võimsusest ja tööpunktist. Madalal kiirusel töötav inverterseade on märgatavalt vaiksem kui täisvõimsusel. Öörežiimil piirab seade automaatselt müra, et tagada mugav uni.",
      ]},
      { heading: "Tootjad ja brändid Eesti kliimas", paragraphs: [
        "Tootjate seas on Eesti kliimas end tõestanud Panasonic, Daikin, Mitsubishi Electric ja Samsung. Need brändid pakuvad mudeleid, mis on spetsiaalselt disainitud Põhja-Euroopa tingimustele. Odavamad alternatiivid nagu Cooper&Hunter pakuvad samuti head hinna-kvaliteedi suhet.",
        "Panasonic Etherea ja Aerowill seeriad on eriti populaarsed Eestis tänu oma kõrgele efektiivsusele ja usaldusväärsele tööle madalatel temperatuuridel. Samsung Wind-Free seeria paistab silma innovaatilise tuulevaba õhuvoolu tehnoloogiaga.",
        "Tromtrade on Panasonicu, Samsungi ja Cooper&Hunteri ametlik partner, mis tähendab, et saame pakkuda tehasegarantiid ja originaalvaruosi.",
      ]},
      { heading: "Invertertehnoloogia ja nutijuhtimine", paragraphs: [
        "Invertertehnoloogia on tänapäeval standard – see tähendab, et kompressor reguleerib oma võimsust vastavalt vajadusele, mitte ei tööta lihtsalt sisse-välja režiimil. See tagab ühtlasema temperatuuri, madalama müra ja kuni 30% väiksema energiakulu võrreldes mitteinverterseadmetega.",
        "WiFi-ühendus ja nutijuhtimine on muutunud oluliseks funktsiooniks. Enamik kaasaegseid seadmeid võimaldavad temperatuuri seadistamist nutitelefonist, ajaprogrammide loomist ja energiakulu jälgimist. See on eriti mugav suvilates ja üürikorterites.",
        "Mõned mudelid pakuvad ka geofencing-funktsiooni, mis lülitab kütte automaatselt sisse, kui lähenete kodule, ja välja, kui lahkute. See säästab energiat ja tagab mugavuse.",
      ]},
      { heading: "Kokkuvõte ja soovitus", paragraphs: [
        "Enne soojuspumba ostmist soovitame alati konsulteerida spetsialistiga, kes hindab teie ruumi eripärasid ja soovitab optimaalse lahenduse. Tromtrade pakub tasuta konsultatsiooni, kus analüüsime teie vajadusi ja aitame valida parima seadme.",
        "Kokkuvõttes: ärge valige ainult hinna järgi. Kvaliteetne soojuspump koos professionaalse paigaldusega on investeering, mis tasub end ära juba esimeste aastatega läbi vähenenud küttekulu. Kasutage meie kalkulaatorit, et arvutada oma potentsiaalne sääst.",
      ]},
    ],
  },
  "regulaarne-hooldus-energiakulu": {
    title: "Kas regulaarne hooldus vähendab energiakulu?",
    metaTitle: "Kas regulaarne hooldus vähendab energiakulu? | Tromtrade",
    metaDesc: "Hooldamata seade kaotab efektiivsust kuni 30%. Loe, miks hooldus on oluline.",
    pillar: "Õhksoojuspumba hooldus",
    pillarHref: "/ohksoojuspumba-hooldus-tartu",
    relatedSlugs: ["soojuspumba-eluiga-pikendamine", "levinumad-veakoodid"],
    faqs: [
      { q: "Kui palju maksab soojuspumba hooldus?", a: "Tromtrade'i korralise hoolduse hind algab 80€-st. Mitme seadme puhul pakume soodustust." },
      { q: "Kas filtrite puhastamist saab ise teha?", a: "Jah, filtrite puhastamine on lihtne toiming. Soojusvaheti keemiline pesu vajab aga professionaali." },
      { q: "Kas hooldamata seade läheb kiiremini katki?", a: "Jah, regulaarne hooldus pikendab seadme eluiga kuni 50% ja ennetab kulukaid rikkeid." },
    ],
    sections: [
      { paragraphs: [
        "Hooldamata seade kaotab efektiivsust kuni 30%, mis tähendab otsest rahalist kulu iga kuu. Regulaarne hooldus on kõige lihtsam viis hoida soojuspumba energiakulu kontrolli all ja tagada seadme pikk eluiga.",
        "Uuringud näitavad, et regulaarselt hooldatud soojuspump kestab 15-20 aastat, samas kui hooldamata seadme eluiga jääb sageli 8-10 aasta juurde. See vahe tähendab tuhandeid eurosid säästu.",
      ]},
      { heading: "Filtrite puhastamine – lihtne, kuid oluline", paragraphs: [
        "Soojuspumba filtrid koguvad tolmu, õietolmu ja muid osakesi, mis takistavad õhuvoolu. Ummistunud filtrite korral peab kompressor rohkem tööd tegema, mis tõstab energiakulu ja lühendab seadme eluiga. Filtrite puhastamine on lihtne toiming, mida saab ise teha igakuiselt.",
        "Filtrite puhastamiseks avage siseseadme eespaneel, eemaldage filtrid ja peske need leige veega. Laske filtrid täielikult kuivada enne tagasipanemist. Mõned seadmed on varustatud ioniseeriva filtriga, mis vajab vahetamist iga 1-2 aasta tagant.",
        "Allergia all kannatavatel inimestel soovitame filtreid puhastada sagedamini – iga 2 nädala tagant. Puhtad filtrid parandavad oluliselt sisekliima kvaliteeti.",
      ]},
      { heading: "Soojusvaheti pesu – professionaalne teenus", paragraphs: [
        "Soojusvaheti (evaporaator ja kondensaator) korrastamine nõuab professionaalset sekkumist. Mustus ja hallitus soojusvahetil vähendavad soojusülekannet ja halvendavad sisekliima kvaliteeti. Professionaalne keemiline pesu taastab soojusvaheti efektiivsuse.",
        "Keemiline pesu eemaldab kõvastunud mustuse, hallituse ja bakterid, mida tavalise puhastamisega ei saa kätte. Pärast pesu paraneb soojusülekanne märgatavalt ja siseõhu kvaliteet tõuseb.",
        "Tromtrade kasutab keskkonnasõbralikke puhastusvahendeid, mis on ohutud nii seadmele kui elanikele. Keemilise pesu hind algab 110€-st.",
      ]},
      { heading: "Külmaine ja rõhukontroll", paragraphs: [
        "Külmaine tase on kriitilise tähtsusega. Isegi väike leke vähendab süsteemi efektiivsust märkimisväärselt. Hoolduse käigus kontrollitakse süsteemi rõhku ja vajadusel lisatakse külmainet. Õigeaegne rõhukontroll võib säästa kallist kompressoriremonti.",
        "Külmaineleke tunnused: seade ei küta/jahuta piisavalt, kompressori tööaeg pikeneb, jäätumine soojusvahetil. Kui märkate neid sümptomeid, kutsuge spetsialist.",
      ]},
      { heading: "Kondensaatvee äravool ja elektriühendused", paragraphs: [
        "Kondensaatvee äravool vajab regulaarset kontrolli. Ummistunud drenaaz võib põhjustada veeleket, hallituse kasvu ja seadme rikke. Hoolduse käigus puhastatakse dreenitorustik ja kontrollitakse selle toimivust.",
        "Elektriühenduste kontroll on oluline ohutuse seisukohalt. Lõdvenenud kontaktid võivad põhjustada ülekuumenemist ja tuleohu. Professionaalse hoolduse käigus kontrollitakse kõiki elektriühendusi ja pingutakse vajadusel.",
      ]},
      { heading: "Kompressori hindamine ja hooldusprotokoll", paragraphs: [
        "Kompressori töö hindamine annab ülevaate seadme üldisest seisukorrast. Ebatavaline müra, vibratsioon või pikenenud töötsüklid viitavad probleemidele, mis vajavad tähelepanu. Varajane avastamine hoiab ära kallid remondid.",
        "Hooldusprotokoll on oluline dokument, mis kinnitab regulaarset hooldust. See on vajalik garantiinõuete esitamisel ja tõstab seadme edasimüügiväärtust. Tromtrade väljastab iga hoolduse kohta üksikasjaliku protokolli.",
      ]},
      { heading: "Optimaalne hooldustsükkel", paragraphs: [
        "Optimaalne hooldustsükkel on kord aastas – soovitavalt kevadel enne jahutushooaega. Intensiivsema kasutuse korral (nt äripinnad, allergiaga inimeste kodud) võib kahekordne hooldus olla mõistlik.",
        "Kokkuvõttes: regulaarne hooldus maksab end mitmekordelt tagasi läbi vähenenud energiakulu, pikema eluea ja välditud remondikulude. 80€ hooldus võib säästa sadu eurosid aastas. Broneeri hooldus juba täna!",
      ]},
    ],
  },
  "levinumad-veakoodid": {
    title: "Levinumad veakoodid õhksoojuspumpadel",
    metaTitle: "Levinumad veakoodid õhksoojuspumpadel | Tromtrade",
    metaDesc: "Selgitame tüüpilised veakoodid ja mida need tähendavad. Millal kutsuda spetsialist?",
    pillar: "Soojuspumba remont",
    pillarHref: "/ohksoojuspumba-remont-tartu",
    relatedSlugs: ["remont-vs-vahetus", "regulaarne-hooldus-energiakulu"],
    faqs: [
      { q: "Mida teha, kui veakood ilmub?", a: "Proovige seade välja ja uuesti sisse lülitada. Kui kood kordub, kutsuge spetsialist – ärge proovige ise parandada." },
      { q: "Kas H1 kood tähendab riket?", a: "Ei, H1 on defrosttsükkel – normaalne talvine töörežiim. Seade sulatab jääd ja jätkab siis tavalist tööd." },
    ],
    sections: [
      { paragraphs: [
        "Kaasaegsed õhksoojuspumbad kuvavad rikke korral veakoodi, mis aitab probleemi tuvastada. Veakoodide tundmine aitab otsustada, kas tegemist on lihtsa probleemiga, mille saab ise lahendada, või vajab see professionaalset sekkumist.",
        "Allpool selgitame levinumaid veakoode ja nende tähendusi. Pidage meeles, et iga tootja kasutab oma koode – kontrollige alati kasutusjuhendit.",
      ]},
      { heading: "E1 / F1 – Temperatuurianduri viga", paragraphs: [
        "See viitab anduri rikkele või lahtiühendusele. Mõnikord aitab seadme sisse-välja lülitamine, kuid enamasti vajab see anduri asendamist. Temperatuuriandur on suhteliselt soodne varuosa ja selle asendamine on kiire protseduur.",
        "Sümptomid: seade ei küta/jahuta ühtlaselt, lülitub sageli välja või näitab ekraanil veakoodi. Kui andur on lahti ühendunud, võib spetsialist selle tagasi ühendada ilma asendamata.",
      ]},
      { heading: "E2 / F2 – Jäätumise kaitse", paragraphs: [
        "Seade tuvastab liigset jäätumist soojusvahetil. Põhjuseks võib olla madal külmaine tase, ummistunud filter või rike defrostsüsteemis. See on tõsisem probleem, mis vajab professionaalset diagnostikat.",
        "Esimese sammuna kontrollige ja puhastage filtrid. Kui probleem püsib, on tõenäoliselt tegemist külmainelekkese või defrostanduriga.",
      ]},
      { heading: "E3 / F3 – Kompressori ülekoormuse kaitse", paragraphs: [
        "Kompressor töötab liiga suure koormuse all, mis võib viidata kõrgele rõhule süsteemis, ummistunud kondensaatorile või ventilaatori rikkele. Ärge ignoreerige seda koodi – pikaajaline ülekoormamine kahjustab kompressorit pöördumatult.",
      ]},
      { heading: "E4 / F4 – Sidekommunikatsiooni viga", paragraphs: [
        "Sise- ja välisseade ei saa omavahel ühendust. Kontrollida tuleb sidekaablit ja selle ühendusi. Sageli on põhjuseks lahti tulnud pistik või kahjustunud kaabel.",
      ]},
      { heading: "E5 / F5 ja E6 / F6 – Inverteri ja välisanduri vead", paragraphs: [
        "E5/F5 inverteri mooduli viga on tõsisem rike, mis nõuab professionaalset diagnostikat ja sageli elektroonikaploki asendamist. E6/F6 välisseadme temperatuurianduri viga on sarnane E1-le, kuid puudutab välisseadet.",
      ]},
      { heading: "H1 – Defrosttsükkel (mitte rike!)", paragraphs: [
        "H1 ei ole tegelikult rike – seade sulatab välisseadmel tekkinud jääd. Normaalne talvine töörežiim, mis kestab tavaliselt 5-10 minutit. Sel ajal puhub siseseade jahedat õhku, mis on täiesti normaalne.",
        "Kui defrosttsükkel kestab üle 15 minuti või kordub väga sageli, võib see viidata probleemile defrostsüsteemis.",
      ]},
      { heading: "Seade ei käivitu – mida teha?", paragraphs: [
        "Kui seade ei käivitu üldse, kontrollige esmalt: kas seade on vooluvõrgus? Kas peakaitse on löönud välja? Kas pult on töökorras (vahetage patareid)? Kas on seadistatud taimer, mis takistab käivitamist?",
        "Kui kõik eeltoodu on korras ja seade ei käivitu, kutsuge spetsialist. Tromtrade teostab diagnostika ja paranduse kiirelt ning annab remonttöödele garantii.",
      ]},
      { heading: "Seade jäätub – levinud talvine probleem", paragraphs: [
        "Talvel on normaalne, et välisseadmel tekib kerge jääkiht, mille seade automaatselt sulatab. Kuid kui jää koguneb paksuks kihiks ja ei sula, viitab see probleemile: madal külmaine, rikkis defrosttsükkel või ummistunud ventilaator.",
        "Ärge proovige jääd mehaaniliselt eemaldada – see võib kahjustada soojusvahetit. Kutsuge spetsialist, kes tuvastab ja kõrvaldab probleemi põhjuse.",
      ]},
      { paragraphs: [
        "Oluline: iga tootja kasutab oma veakoodide süsteemi. Panasonicu, Samsungi ja Cooper&Hunteri koodid võivad erineda. Kontrollige alati oma seadme kasutusjuhendit konkreetsete koodide tähenduse osas.",
        "Kui veakood kordub pärast seadme taaskäivitamist, ärge proovige seadet ise parandada – kutsuge spetsialist. Tromtrade teostab diagnostika ja paranduse kiirelt ning annab remonttöödele garantii.",
      ]},
    ],
  },
  "paigaldus-korterisse": {
    title: "Soojuspumba paigaldus korterisse – mida arvestada?",
    metaTitle: "Soojuspumba paigaldus korterisse | Tromtrade",
    metaDesc: "Kõik, mida peate teadma korterisse õhksoojuspumba paigaldamisel. KÜ nõusolek, müra, torustik.",
    pillar: "Õhksoojuspumba paigaldus Tartus",
    pillarHref: "/ohksoojuspumba-paigaldus-tartu",
    relatedSlugs: ["soojuspumba-valik-tartu-kliimas", "soojuspump-vs-elektrikute"],
    faqs: [
      { q: "Kas KÜ peab luba andma?", a: "Jah, välisseadme paigaldamiseks korteri fassaadile on vaja korteriühistu nõusolekut." },
      { q: "Kas rõdule saab paigaldada?", a: "Jah, rõdule paigaldamine on üks populaarsemaid lahendusi korterites." },
    ],
    sections: [
      { paragraphs: [
        "Korterisse õhksoojuspumba paigaldamine erineb eramaja paigaldusest mitme olulise aspekti poolest. Siin on kõik, mida peate teadma enne paigalduse tellimist.",
      ]},
      { heading: "Korteriühistu nõusolek", paragraphs: [
        "Korteriühistu nõusolek on kohustuslik. Kuna välisseade paigaldatakse hoone fassaadile, vajate KÜ juhatuse või üldkoosoleku nõusolekut. Soovitame esitada taotlus koos seadme fotode ja paigaldusplaaniga.",
        "Taotlusele lisage seadme tehnilised andmed (müratase, mõõtmed) ja paigalduskoha visuaal. Mida professionaalsem on taotlus, seda suurem on tõenäosus nõusoleku saamiseks.",
      ]},
      { heading: "Välisseadme asukoht", paragraphs: [
        "Välisseadme asukoht tuleb hoolikalt valida. Seade peab olema ligipääsetav hoolduseks, ei tohi häirida naabreid müra ega vibratsiooniga ja peab vastama hoone arhitektuursele lahendusele. Rõdule paigaldamine on üks populaarsemaid lahendusi.",
        "Fassaadile paigaldamisel tuleb arvestada, et seade ei tilgutaks kondensaatvett alla jalakäijate peale. Vibratsioonisummutid on korteris kohustuslikud.",
      ]},
      { heading: "Torustiku eripärad korteris", paragraphs: [
        "Torustiku pikkus mõjutab nii hinda kui ka efektiivsust. Korterites on torustik sageli pikem kui eramajades – kuni 10-15 meetrit. Pikem torustik tähendab suuremat rõhukadu ja mõnevõrra madalamat efektiivsust.",
        "Ilukarbik varjab torustikku ja muudab paigalduse esteetiliseks. Standardpaigaldus sisaldab ilukarbikut kuni 2m ulatuses.",
      ]},
      { heading: "Kondensaatvesi ja elektriühendus", paragraphs: [
        "Kondensaatvee ärajuhtimine peab olema lahendatud nii, et vesi ei tilgu naabri rõdule ega fassaadile. Dreenivoolik tuleb juhtida sobivasse kohta, näiteks vihmaveesüsteemi.",
        "Elektriühendus peab olema piisava võimsusega. Korteri peakaitse peab taluma soojuspumba käivitusvoolu. Vajadusel tuleb kaasata elektrik peakaitsme suurendamiseks.",
      ]},
      { heading: "Müratase korteris", paragraphs: [
        "Müratase on korteris eriti oluline. Valige mudel, mille siseseadme öörežiimi müratase on alla 22 dB. Välisseadme vibratsioonisummutid on kohustuslikud korteris paigaldamisel.",
        "Panasonic Etherea ja Samsung Wind-Free on eriti vaiksed mudelid, mis sobivad suurepäraselt korterisse.",
      ]},
      { paragraphs: [
        "Kokkuvõttes: korterisse paigaldamine on igati teostatav, kuid nõuab hoolikat planeerimist. Tromtrade aitab kõikide etappidega alates KÜ taotlusest kuni paigalduse ja seadistamiseni.",
      ]},
    ],
  },
  "soojuspump-vs-elektrikute": {
    title: "Õhksoojuspump vs elektriküte – kulude võrdlus",
    metaTitle: "Õhksoojuspump vs elektriküte – kulude võrdlus | Tromtrade",
    metaDesc: "Reaalsed arvutused: kui palju säästab soojuspump võrreldes elektriküttega. Tasuvusaeg ja sääst.",
    pillar: "Õhksoojuspumba paigaldus Tartus",
    pillarHref: "/ohksoojuspumba-paigaldus-tartu",
    relatedSlugs: ["energiatoehus-kodu", "soojuspumba-valik-tartu-kliimas"],
    faqs: [
      { q: "Kui kiiresti tasub soojuspump end ära?", a: "Tüüpiliselt 2-3 aastat elektriküttelt üle minnes. Täpse arvutuse saate meie kalkulaatoriga." },
      { q: "Kas soojuspump töötab ka jahutina?", a: "Jah, kaasaegne soojuspump töötab nii kütte- kui jahutusrežiimil." },
    ],
    sections: [
      { paragraphs: [
        "Paljud Eesti kodud kasutavad veel elektriradiaatoreid, põrandakütet või õlikütet. Kuidas on soojuspumba küttekulu võrreldes nende lahendustega? Allpool esitame reaalsed arvutused ja konkreetsed näited.",
      ]},
      { heading: "Efektiivsuse võrdlus – COP vs otseküte", paragraphs: [
        "Elektriradiaator muudab 1 kWh elektrit 1 kWh soojuseks (COP = 1). Soojuspump toodab aga 1 kWh elektriga 3-5 kWh soojust (COP = 3-5). See tähendab, et soojuspump on 3-5 korda efektiivsem.",
        "Miks on vahe nii suur? Soojuspump ei tooda soojust – ta transpordib seda välisõhust siseruumi. Isegi -15°C juures sisaldab välisõhk piisavalt soojusenergiat, mida soojuspump suudab koguda ja kontsentreerida.",
      ]},
      { heading: "Konkreetne kulude võrdlus – 80 m² korter", paragraphs: [
        "Näide: 80 m² korter vajab kütteperioodil umbes 8000 kWh soojusenergiat. Elektriradiaatoritega: 8000 kWh × 0,15 €/kWh = 1200 €/aastas. Soojuspumbaga (COP 3,5): 2286 kWh × 0,15 €/kWh = 343 €/aastas. Sääst: ~850 € aastas.",
        "Veelgi suurem vahe tekib eramajades, kus köetav pind on suurem. 150 m² eramu puhul võib aastane sääst ulatuda 1500 euroni.",
      ]},
      { heading: "Tasuvusaeg ja investeeringu analüüs", paragraphs: [
        "Investeering soojuspumpa (seade + paigaldus) on tavaliselt 1500-3000 €. Arvestades 850 € aastast säästu, tasub investeering end ära 2-3 aastaga. Seade kestab 15-20 aastat – seega on kogusääst 12 000-15 000 €.",
        "Kasutage meie kalkulaatorit, et arvutada oma konkreetne sääst ja tasuvusaeg.",
      ]},
      { heading: "Lisaväärtused", paragraphs: [
        "Lisaks küttele pakub soojuspump ka jahutust suvel, mis on elektriradiaatoritega võimatu. See on täiendav mugavus, mille eest ei pea eraldi maksma.",
        "Soojuspumba efektiivsus langeb väga madalatel temperatuuridel, kuid isegi -20°C juures on COP umbes 2, mis on ikka kaks korda efektiivsem kui elektriküte.",
        "Kokkuvõttes: soojuspump on selge võitja nii majanduslikult kui mugavuse poolest. Mida varem vahetate, seda rohkem säästate.",
      ]},
    ],
  },
  "soojuspumba-eluiga-pikendamine": {
    title: "Kuidas pikendada soojuspumba eluiga?",
    metaTitle: "Kuidas pikendada soojuspumba eluiga? | Tromtrade",
    metaDesc: "Praktilised nõuanded soojuspumba eluea pikendamiseks 20+ aastani.",
    pillar: "Õhksoojuspumba hooldus",
    pillarHref: "/ohksoojuspumba-hooldus-tartu",
    relatedSlugs: ["regulaarne-hooldus-energiakulu", "remont-vs-vahetus"],
    faqs: [
      { q: "Kui kaua soojuspump kestab?", a: "Õigesti hooldatud soojuspump kestab 15-20 aastat. Hooldamata seadme eluiga on sageli 8-10 aastat." },
      { q: "Kas filtrite puhastamine pikendab eluiga?", a: "Jah, igakuine filtrite puhastamine on üks olulisemaid igapäevaseid hooldustegevusi." },
    ],
    sections: [
      { paragraphs: [
        "Soojuspumba keskmine eluiga on 10-15 aastat, kuid õige hoolduse ja kasutamisega võib see ulatuda 20 aastani. Siin on peamised nõuanded, kuidas oma seadmest maksimumi võtta.",
      ]},
      { heading: "Regulaarne hooldus – kõige olulisem tegur", paragraphs: [
        "Regulaarne hooldus on kõige olulisem tegur. Vähemalt kord aastas professionaalne hooldus ja igakuine filtrite puhastamine hoiavad seadme tippvormis. Hoolduse käigus avastatakse ja parandatakse väikesed probleemid, enne kui need suurteks rikkeks kasvavad.",
      ]},
      { heading: "Temperatuuri seadistamine", paragraphs: [
        "Õige temperatuuri seadistamine aitab vähendada kompressori koormust. Ärge seadistage temperatuuri liiga kõrgeks talvel ega liiga madalaks suvel. Optimaalne vahe välis- ja sisetemperatuuri vahel on 5-7°C jahutusrežiimil.",
        "Kasutage ajaprogramme, et vähendada temperatuuri ööseks ja tööl olles. See vähendab kompressori töökoormust oluliselt.",
      ]},
      { heading: "Välisseadme hooldamine", paragraphs: [
        "Välisseadme ümbruse hoidmine puhtana on oluline. Lehed, praht ja lumekuhjad takistavad õhuvoolu ja sunnivad seadet rohkem tööd tegema. Hoidke vähemalt 50 cm vaba ruumi seadme ümber.",
        "Talvel kontrollige, et lumevall ei kataks seadet ja et jääpurikad ei ohustaks torustikku.",
      ]},
      { heading: "Kasutusharjumused", paragraphs: [
        "Ärge lülitage seadet pidevalt sisse ja välja. Invertertehnoloogiaga seade töötab kõige efektiivsemalt, kui see saab pidevalt töötada madalal võimsusel.",
        "Vältuge seadme kasutamist aknaid avades. See sunnib seadet töötama täisvõimsusel ilma tulemust saavutamata.",
        "Kokkuvõttes: hoolitsege oma soojuspumba eest ja see hoolitseb teie eest. Väikesed igapäevased harjumused pikendavad seadme eluiga oluliselt.",
      ]},
    ],
  },
  "talvine-tookindlus": {
    title: "Talvine töökindlus – mida peaks teadma?",
    metaTitle: "Talvine töökindlus – kas soojuspump töötab Eesti talvel? | Tromtrade",
    metaDesc: "Kuidas soojuspump töötab Eesti talvel ja millele tähelepanu pöörata. -25°C ei ole probleem.",
    pillar: "Õhksoojuspumba paigaldus Tartus",
    pillarHref: "/ohksoojuspumba-paigaldus-tartu",
    relatedSlugs: ["soojuspumba-valik-tartu-kliimas", "soojuspump-vs-elektrikute"],
    faqs: [
      { q: "Kas soojuspump töötab -25 kraadiga?", a: "Jah, kaasaegsed invertersoojuspumbad töötavad efektiivselt kuni -25°C juures." },
      { q: "Mis on defrosttsükkel?", a: "Normaalne talvine protsess, kus seade sulatab välisseadmele tekkinud jää. Kestab 5-10 minutit." },
    ],
    sections: [
      { paragraphs: [
        "Eesti talv on soojuspumpadele tõsine katsumus. Temperatuurid võivad langeda alla -25°C ja küttevajadus on maksimaalne just siis, kui seadme efektiivsus on madalaim. Kas õhksoojuspump on siiski mõistlik valik Eesti kliimas? Vastus on üheselt jah.",
      ]},
      { heading: "Kaasaegsed seadmed ja madalad temperatuurid", paragraphs: [
        "Kaasaegsed invertersoojuspumbad töötavad efektiivselt kuni -25°C juures. Premium-mudelid (Panasonic, Daikin, Mitsubishi) suudavad toota soojust isegi -30°C juures, kuigi efektiivsus on sel juhul madalam.",
        "Isegi -20°C juures on soojuspumba COP umbes 2, mis tähendab, et see on ikka kaks korda efektiivsem kui elektriküte. Seega säästab soojuspump raha ka kõige külmemal ajal.",
      ]},
      { heading: "Defrosttsükkel – normaalne nähtus", paragraphs: [
        "Defrosttsükkel on normaalne talvine nähtus. Kui välistemperatuur on 0°C ümbruses ja õhuniiskus kõrge, tekib välisseadme soojusvahetile jää. Seade lülitub automaatselt sulatutsüklile, mis kestab 5-10 minutit.",
        "Defrosttsükli ajal puhub siseseade jahedat õhku – see on normaalne ja ei viita rikkele.",
      ]},
      { heading: "Välisseadme paigutus talveks", paragraphs: [
        "Välisseadme paigutus mõjutab talvist töökindlust. Seade tuleb paigaldada tuulevaikesse kohta, piisavalt kõrgele maapinnast (lumevall!) ja nii, et sulanud vesi saab vabalt ära voolata.",
        "Soovitame paigaldada välisseade vähemalt 30-50 cm kõrgusele maapinnast, et lumevall ei kataks seadet.",
      ]},
      { heading: "Lisasoojusallikas", paragraphs: [
        "Lisasoojusallikas on mõistlik varuvariandina. Eriti vanade ja halvasti soojustatud majade puhul soovitame hoida elektriradiaatorit varuks kõige külmemate päevade tarbeks.",
        "Kokkuvõttes: kvaliteetne soojuspump koos professionaalse paigaldusega on Eesti talves täiesti töökindel. Oluline on valida õige mudel ja paigaldada see korrektselt.",
      ]},
    ],
  },
  "kliimaseade-kontoris": {
    title: "Kliimaseadme paigaldus kontorisse",
    metaTitle: "Kliimaseadme paigaldus kontorisse | Tromtrade",
    metaDesc: "Nõuanded kontori jahutus- ja küttesüsteemi valikuks ja paigalduseks Tartus.",
    pillar: "Õhksoojuspumba paigaldus Tartus",
    pillarHref: "/kliimaseadme-paigaldus-tartu",
    relatedSlugs: ["soojuspumba-valik-tartu-kliimas", "energiatoehus-kodu"],
    faqs: [
      { q: "Kui suur seade on vajalik kontorisse?", a: "Sõltub ruumi suurusest, inimeste arvust ja tehnika soojuseraldusest. Tavaliselt 1 kW iga 8-10 m² kohta." },
      { q: "Kas multisplit on parem kui mitu eraldi seadet?", a: "Multisplit säästab fassaadipinda ja on sageli soodsam, kuid ühe välisseadme rike mõjutab kõiki siseseadmeid." },
    ],
    sections: [
      { paragraphs: [
        "Kontori kliimaseade on investeering töötajate heaolusse ja tootlikkusse. Uuringud näitavad, et optimaalne temperatuur (21-23°C) tõstab töötajate produktiivsust kuni 15%.",
      ]},
      { heading: "Kontori kliimaseadme valik", paragraphs: [
        "Kontori kliimaseadme valikul tuleb arvestada ruumi suurust, inimeste arvu, arvutite ja muu tehnika poolt toodetud soojust ning akende orientatsiooni. Lõunapoolsete akendega kontor vajab oluliselt suuremat jahutamisvõimsust.",
        "Arvuti toodab umbes 200-300 W soojust, inimene umbes 100 W. 10 inimest ja 10 arvutit on juba 3 kW lisasoojust, mida kliimaseade peab kompenseerima.",
      ]},
      { heading: "Multisplit-süsteem", paragraphs: [
        "Multisplit-süsteem võimaldab ühendada mitu siseseadet ühe välisseadmega, mis on ideaalne lahendus mitme kontoririruumi jahutamiseks. See säästab fassaadipinda ja vähendab paigalduskulu.",
      ]},
      { heading: "Müratase ja energiatõhusus", paragraphs: [
        "Müratase on kontoris eriti oluline. Valige mudel, mille müratase madalal kiirusel ei ületa 25 dB. Kaasaegsed ärikliimaseadmed on disainitud just madala müra jaoks.",
        "Energiatõhusus ja opereerimiskulu on ärikliendi jaoks olulised. A++ energiaklassiga seade säästab oluliselt rohkem kui A-klassiga seade, eriti intensiivse kasutuse korral.",
        "Tromtrade paigaldab kliimaseadmeid kontoripindadele üle Lõuna-Eesti. Pakume lahendusi väikestest büroopindadest kuni suuremate äriruumideni.",
      ]},
    ],
  },
  "remont-vs-vahetus": {
    title: "Millal on remont mõistlik ja millal vahetus?",
    metaTitle: "Millal on remont mõistlik ja millal vahetus? | Tromtrade",
    metaDesc: "Kuidas otsustada, kas remontida vana soojuspumpa või investeerida uude seadmesse.",
    pillar: "Soojuspumba remont",
    pillarHref: "/ohksoojuspumba-remont-tartu",
    relatedSlugs: ["levinumad-veakoodid", "soojuspumba-eluiga-pikendamine"],
    faqs: [
      { q: "Kui vana seadme puhul tasub veel remontida?", a: "Üldreegel: alla 8 aasta vana seadet tasub remontida, kui remondi hind jääb alla 30% uue seadme hinnast." },
      { q: "Kas vana seadme vahetamine uue vastu säästab energiat?", a: "Jah, viimase 10 aasta jooksul on soojuspumpade COP tõusnud 30-50%." },
    ],
    sections: [
      { paragraphs: [
        "Soojuspumba rikke korral tekib alati küsimus: kas tasub remontida või on mõistlikum investeerida uude seadmesse? Siin on mõned juhtnöörid.",
      ]},
      { heading: "Millal on remont mõistlik?", paragraphs: [
        "Remont on mõistlik, kui seade on alla 8 aasta vana, rike on konkreetne ja lokaliseeritud (nt andur, ventilaator, plaat), remondi maksumus jääb alla 30% uue seadme hinnast ja seade on üldiselt heas korras.",
        "Tüüpilised remonditavad rikked: temperatuuriandur (50-100€), ventilaatori mootor (100-200€), juhtplaat (150-300€). Need on suhteliselt soodsad ja kiired remondid.",
      ]},
      { heading: "Millal on vahetus mõistlik?", paragraphs: [
        "Vahetus on mõistlik, kui seade on üle 10 aasta vana, kompressor on rikkis (remont on sageli kallim kui uus seade), seade kasutab vananenud külmainet (R22), energiakulu on märgatavalt kasvanud või rikked korduvad pidevalt.",
        "Uue seadme eelis on ka oluliselt parem energiatõhusus. Viimase 10 aasta jooksul on soojuspumpade COP tõusnud 30-50%, mis tähendab märkimisväärset säästu energiakuludelt.",
      ]},
      { paragraphs: [
        "Tromtrade aitab teil teha õige otsuse. Diagnoosime rikke ja anname ausa hinnangu, kas remont on mõistlik. Kui vahetus on parem valik, aitame valida sobiva seadme ja teostame paigalduse.",
      ]},
    ],
  },
  "energiatoehus-kodu": {
    title: "Energiatõhus kodu ja õhksoojuspumbad",
    metaTitle: "Energiatõhus kodu ja õhksoojuspumbad | Tromtrade",
    metaDesc: "Kuidas õhksoojuspump aitab muuta kodu energiatõhusamaks ja tõsta kinnisvara väärtust.",
    pillar: "Õhksoojuspumba paigaldus Tartus",
    pillarHref: "/ohksoojuspumba-paigaldus-tartu",
    relatedSlugs: ["soojuspump-vs-elektrikute", "soojuspumba-valik-tartu-kliimas"],
    faqs: [
      { q: "Kas soojuspump tõstab kinnisvara väärtust?", a: "Jah, soojuspumba olemasolu tõstab energiamärgise klassi ja seega ka kinnisvara väärtust." },
      { q: "Kas KredEx toetab soojuspumba paigaldamist?", a: "KredEx pakub erinevaid renoveerimistoetusi, mis võivad katta osa paigalduse kuludest. Täpsemad tingimused sõltuvad programmist." },
    ],
    sections: [
      { paragraphs: [
        "Energiatõhusus on tänapäeval üks olulisemaid kriteeriume kodu planeerimisel ja renoveerimisel. Õhksoojuspump on üks efektiivsemaid viise kodu energiatõhususe tõstmiseks ja küttekulude vähendamiseks.",
      ]},
      { heading: "Soojuspumba tööpõhimõte", paragraphs: [
        "Soojuspump kasutab olemasolevat soojusenergiat välisõhust, mis tähendab, et ta ei tooda soojust nullist nagu elektriküte, vaid transpordib seda. See on põhimõtteline erinevus, mis teeb soojuspumba 3-5 korda efektiivsemaks.",
      ]},
      { heading: "Terviklik energiatõhus lahendus", paragraphs: [
        "Kombineerituna hea soojustuse, kvaliteetsete akende ja taastuvenergiaga (nt päikesepaneelid) on õhksoojuspump osa terviklikust energiatõhusast lahendusest. Päikesepaneelid toodavad elektrit, mida soojuspump kasutab kütteks – ring on sulgunud.",
        "Hästi soojustatud majas töötab soojuspump kõige efektiivsemalt, kuna ta peab tootma vähem soojust. Soojustus + soojuspump on parim kombinatsioon energiakulu minimeerimiseks.",
      ]},
      { heading: "Toetused ja energiamärgis", paragraphs: [
        "Eesti riik toetab energiatõhususe parandamist läbi erinevate toetusprogrammide. KredEx pakub renoveerimistoetusi, mis võivad katta osa soojuspumba paigalduse kuludest.",
        "Energiamärgisel on soojuspump oluline faktor. Soojuspumba paigaldamine võib tõsta korteri või maja energiaklassi 1-2 taseme võrra, mis tõstab kinnisvara väärtust.",
        "Kokkuvõttes: õhksoojuspump on mõistlik investeering, mis vähendab energiakulu, tõstab elukvaliteeti ja suurendab kinnisvara väärtust. Tromtrade aitab leida teie kodule parima lahenduse.",
      ]},
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
                <p className="mt-1 text-sm text-muted-foreground">{a.sections[0].paragraphs[0].substring(0, 140)}...</p>
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

  useEffect(() => {
    if (article) {
      document.title = article.metaTitle;
      const metaEl = document.querySelector('meta[name="description"]');
      if (metaEl) metaEl.setAttribute("content", article.metaDesc);
    }
  }, [article]);

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

  const relatedArticles = article.relatedSlugs.map(s => ({ slug: s, title: articles[s]?.title })).filter(a => a.title);

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="container py-3 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link to="/" itemProp="item" className="hover:text-primary"><span itemProp="name">Avaleht</span></Link>
            <meta itemProp="position" content="1" />
          </li>
          <li className="mx-1">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link to="/blogi" itemProp="item" className="hover:text-primary"><span itemProp="name">Blogi</span></Link>
            <meta itemProp="position" content="2" />
          </li>
          <li className="mx-1">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-foreground font-medium">{article.title}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <section className="hero-gradient py-12">
        <div className="container">
          <Link to="/blogi" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4"><ArrowLeft className="h-4 w-4" /> Tagasi blogisse</Link>
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl max-w-3xl">{article.title}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <article>
            {article.sections.map((section, si) => (
              <div key={si} className="mb-8">
                {section.heading && <h2 className="font-display text-xl font-bold text-foreground mb-3">{section.heading}</h2>}
                {section.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
                ))}
              </div>
            ))}
          </article>

          {/* Article FAQ */}
          {article.faqs.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Korduma kippuvad küsimused</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {article.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-5">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Internal links */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <h3 className="font-display font-bold text-foreground mb-3">Seotud artiklid ja teenused</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              <Link to={article.pillarHref} className="text-sm text-primary hover:underline font-semibold">→ {article.pillar}</Link>
              {relatedArticles.map(ra => (
                <Link key={ra.slug} to={`/blogi/${ra.slug}`} className="text-sm text-primary hover:underline">→ {ra.title}</Link>
              ))}
              <Link to="/kalkulaator" className="text-sm text-primary hover:underline">→ Säästu kalkulaator</Link>
              <Link to="/kontakt" className="text-sm text-primary hover:underline">→ Võta ühendust</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl hero-gradient p-6 text-center">
            <p className="text-primary-foreground/80">Vajad abi soojuspumba valikul, paigaldusel või hooldusel?</p>
            <p className="text-primary-foreground/60 text-sm mt-1">✓ Tasuta konsultatsioon · ✓ Kiire vastus 24h · ✓ Garantiiga töö</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link to="/broneeri"><button className="rounded-lg bg-accent px-6 py-2.5 font-bold text-accent-foreground transition-transform hover:scale-105">Küsi pakkumist</button></Link>
              <a href="tel:+37255644610"><button className="rounded-lg border border-primary-foreground/30 px-6 py-2.5 font-bold text-primary-foreground transition-transform hover:scale-105">Helista: 5564 4610</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema: Article + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": article.title,
              "description": article.metaDesc,
              "author": { "@type": "Organization", "name": "Tromtrade OÜ", "url": "https://tromtrade.ee" },
              "publisher": { "@type": "Organization", "name": "Tromtrade OÜ", "url": "https://tromtrade.ee" },
              "datePublished": "2025-01-15",
              "dateModified": "2025-06-01",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://tromtrade.ee/blogi/${slug}`,
              },
              "inLanguage": "et",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": article.faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
              })),
            },
          ]),
        }}
      />
    </Layout>
  );
};

export { BlogListPage, BlogArticlePage };
export default BlogListPage;
