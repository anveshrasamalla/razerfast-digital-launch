import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const AutomaxPro = () => (
  <Layout>
    <Helmet>
      <title>AutoMax Pro Case Study – Razerfast</title>
      <meta name="description" content="See how Razerfast accelerated AutoMax Pro with a modern web experience and measurable growth." />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://razerfast.lovable.app/work/automax-pro'} />
    </Helmet>
    <header className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold">AutoMax Pro</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">A streamlined digital experience for a fast-growing automotive brand. Full case study coming soon.</p>
        <div className="mt-8"><a href="/contact"><Button variant="cta">Start a similar project</Button></a></div>
      </div>
    </header>
  </Layout>
);

export default AutomaxPro;
