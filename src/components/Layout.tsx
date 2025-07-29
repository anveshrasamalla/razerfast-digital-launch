import { ReactNode } from "react";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;