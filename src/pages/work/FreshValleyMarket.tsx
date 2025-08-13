import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const FreshValleyMarket = () => (
  <Layout>
    <Helmet>
      <title>Fresh Valley Market Case Study – Razerfast</title>
      <meta name="description" content="E-commerce and delivery for Fresh Valley Market. Explore the transformation by Razerfast." />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://razerfast.lovable.app/work/fresh-valley-market'} />
    </Helmet>
    <header className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Fresh Valley Market</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">A conversion-focused online store with delivery. Full case study coming soon.</p>
        <div className="mt-8"><a href="/contact"><Button variant="cta">Request a quote</Button></a></div>
      </div>
    </header>
  </Layout>
);

export default FreshValleyMarket;
