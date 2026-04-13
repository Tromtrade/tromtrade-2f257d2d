import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServiceCards from "@/components/home/ServiceCards";
import HowItWorks from "@/components/home/HowItWorks";
import GallerySection from "@/components/home/Gallery";
import FAQTeaser from "@/components/home/FAQTeaser";
import CTASection from "@/components/home/CTASection";
import CallbackWidget from "@/components/forms/CallbackWidget";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import SEOHead from "@/components/shared/SEOHead";
import { pageMeta } from "@/config/seo";

const Index = () => (
  <Layout>
    <SEOHead meta={pageMeta.home} />
    <Hero />
    <TrustBar />
    <ServiceCards />
    <HowItWorks />
    <ExpertiseSection />
    <GallerySection />
    <FAQTeaser />
    <CTASection />
    <CallbackWidget />
  </Layout>
);

export default Index;
