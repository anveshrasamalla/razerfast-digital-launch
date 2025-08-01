import Layout from "@/components/Layout";
import { LogoGenerator } from "@/components/LogoGenerator";

export default function LogoDesign() {
  return (
    <Layout>
      <style>
        {`.min-h-screen { background: #F5F4F1 !important; }`}
      </style>
      <div className="min-h-screen" style={{ backgroundColor: '#F5F4F1' }}>
        <LogoGenerator />
      </div>
    </Layout>
  );
}