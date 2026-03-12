import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Services = lazy(() => import("./pages/Services"));
const Booking = lazy(() => import("./pages/Booking"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Projects = lazy(() => import("./pages/Projects"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/Blog").then(m => ({ default: m.BlogArticlePage })));
const Privacy = lazy(() => import("./pages/Privacy"));

const Installation = lazy(() => import("./pages/services/Installation"));
const Maintenance = lazy(() => import("./pages/services/Maintenance"));
const Repair = lazy(() => import("./pages/services/Repair"));
const ACInstall = lazy(() => import("./pages/services/ACInstall"));
const Relocation = lazy(() => import("./pages/services/Relocation"));
const Design = lazy(() => import("./pages/services/Design"));
const GeoElva = lazy(() => import("./pages/services/GeoLanding").then(m => ({ default: m.ElvaPage })));
const GeoVoru = lazy(() => import("./pages/services/GeoLanding").then(m => ({ default: m.VoruPage })));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/teenused" element={<Services />} />
            <Route path="/broneeri" element={<Booking />} />
            <Route path="/kalkulaator" element={<Calculator />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/meist" element={<About />} />
            <Route path="/hinnakiri" element={<Pricing />} />
            <Route path="/tehtud-tood" element={<Projects />} />
            <Route path="/blogi" element={<Blog />} />
            <Route path="/blogi/:slug" element={<BlogArticle />} />
            <Route path="/privaatsus" element={<Privacy />} />
            <Route path="/ohksoojuspumba-paigaldus-tartu" element={<Installation />} />
            <Route path="/ohksoojuspumba-hooldus-tartu" element={<Maintenance />} />
            <Route path="/ohksoojuspumba-remont-tartu" element={<Repair />} />
            <Route path="/kliimaseadme-paigaldus-tartu" element={<ACInstall />} />
            <Route path="/seadmete-umberpaigaldus-ja-utiliseerimine" element={<Relocation />} />
            <Route path="/projekteerimine-ja-seadustamine" element={<Design />} />
            <Route path="/ohksoojuspumba-paigaldus-elva" element={<GeoElva />} />
            <Route path="/ohksoojuspumba-paigaldus-voru" element={<GeoVoru />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
