import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const CanvasColorGallery = () => (
  <Layout>
    <Helmet>
      <title>Canvas & Color Gallery Case Study – Razerfast</title>
      <meta name="description" content="An elegant portfolio and shop experience for Canvas & Color Gallery by Razerfast." />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://razerfast.lovable.app/work/canvas-color-gallery'} />
    </Helmet>
    <header className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Canvas & Color Gallery</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">A polished, gallery-first shopping experience. Full case study coming soon.</p>
        <div className="mt-8"><a href="/contact"><Button variant="cta">Talk to us</Button></a></div>
      </div>
    </header>
  </Layout>
);

export default CanvasColorGallery;
