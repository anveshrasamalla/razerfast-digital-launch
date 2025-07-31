import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/portfolio" },
    { name: "Expertise", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="py-6 px-4 sm:px-6 lg:px-8 bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold text-foreground tracking-tight hover:text-primary transition-colors"
            >
              razerfast
            </Link>

            {/* Navigation Pills */}
            <div className="flex items-center">
              <div className="flex items-center space-x-1 bg-card/80 backdrop-blur-sm rounded-full px-2 py-2 shadow-card border border-border">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "px-6 py-3 text-sm font-medium rounded-full transition-all duration-200",
                      isActivePath(item.path)
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side spacer to balance the layout */}
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;