import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServiceCards from "@/components/home/ServiceCards";
import HowItWorks from "@/components/home/HowItWorks";
import GallerySection from "@/components/home/Gallery";
import FAQTeaser from "@/components/home/FAQTeaser";
import CTASection from "@/components/home/CTASection";
import CallbackWidget from "@/components/forms/CallbackWidget";
import ServiceAreaSection from "@/components/home/ServiceAreaSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";

const Index = () => (
  <Layout>
    <Hero />
    <TrustBar />
    <ServiceCards />
    <HowItWorks />
    <ExpertiseSection />
    <GallerySection />
    <ServiceAreaSection />
    <FAQTeaser />
    <CTASection />
    <CallbackWidget />
  </Layout>
);

export default Index;
