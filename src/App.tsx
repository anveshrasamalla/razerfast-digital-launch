import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import LogoDesign from "./pages/LogoDesign";
import NotFound from "./pages/NotFound";
import AutomaxPro from "./pages/work/AutomaxPro";
import BrewBeanCafe from "./pages/work/BrewBeanCafe";
import FreshValleyMarket from "./pages/work/FreshValleyMarket";
import CanvasColorGallery from "./pages/work/CanvasColorGallery";
import BoutiqueFashion from "./pages/work/BoutiqueFashion";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logo-design" element={<LogoDesign />} />
            {/* Work / Case Study Pages (not in main nav) */}
            <Route path="/work/automax-pro" element={<AutomaxPro />} />
            <Route path="/work/brew-bean-cafe" element={<BrewBeanCafe />} />
            <Route path="/work/fresh-valley-market" element={<FreshValleyMarket />} />
            <Route path="/work/canvas-color-gallery" element={<CanvasColorGallery />} />
            <Route path="/work/boutique-fashion" element={<BoutiqueFashion />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
