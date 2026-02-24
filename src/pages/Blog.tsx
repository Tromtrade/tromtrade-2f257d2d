import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  { slug: "soojuspumba-valik-2025", title: "Kuidas valida õiget soojuspumpa 2025. aastal?", excerpt: "Ülevaade peamistest kriteeriumidest soojuspumba valimisel." },
  { slug: "soojuspumba-hooldus-juhend", title: "Soojuspumba hoolduse ABC", excerpt: "Mida peaks iga soojuspumba omanik hoolduse kohta teadma." },
  { slug: "energiasaast-soojuspumbaga", title: "Kui palju saab soojuspumbaga tegelikult säästa?", excerpt: "Reaalsed näited ja arvutused energiakulude kohta." },
  { slug: "soojuspump-talvel", title: "Kas soojuspump töötab ka Eesti talvel?", excerpt: "Vastame levinumale küsimusele soojuspumpade kohta." },
  { slug: "soojuspumba-paigaldus-korterisse", title: "Soojuspumba paigaldamine korterisse", excerpt: "Mida tuleb arvestada korterisse paigaldamisel." },
  { slug: "kuumuspump-vs-konditsioneер", title: "Soojuspump vs konditsioneer — mis vahe on?", excerpt: "Selgitame peamised erinevused ja eelised." },
  { slug: "f-gaas-ja-keskkond", title: "F-gaas ja keskkond: mida peab teadma?", excerpt: "Keskkonnanõuded ja vastutustundlik seadmete käitlemine." },
  { slug: "soojuspumba-murad-ja-lahendused", title: "Levinumad soojuspumba rikked ja nende lahendused", excerpt: "Kiire ülevaade tüüpilistest probleemidest." },
  { slug: "kliimaseade-kontoris", title: "Kliimaseade kontoris — mida arvestada?", excerpt: "Nõuanded kontori jahutus- ja küttesüsteemi valikuks." },
  { slug: "soojuspumba-toetused-2025", title: "Soojuspumba toetused ja soodustused 2025", excerpt: "Ülevaade kehtivatest toetusprogrammidest." },
];

const BlogPage = () => (
  <Layout>
    <section className="hero-gradient py-12">
      <div className="container text-center">
        <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">Blogi</h1>
        <p className="mt-2 text-primary-foreground/80">Kasulikud artiklid soojuspumpade ja kliimaseadmete kohta.</p>
      </div>
    </section>
    <section className="py-12">
      <div className="container max-w-3xl space-y-4">
        {posts.map(post => (
          <article key={post.slug} className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
            <h2 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{post.excerpt}</p>
            <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary">
              Loe artiklit <ArrowRight className="h-4 w-4" />
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default BlogPage;
