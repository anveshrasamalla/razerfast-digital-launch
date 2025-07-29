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
    <div className="min-h-screen" style={{ backgroundColor: '#a8c8c8' }}>
      {/* Navigation */}
      <nav className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold text-gray-800 tracking-tight"
            >
              razerfast
            </Link>

            {/* Navigation Pills */}
            <div className="flex items-center">
              <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-2 shadow-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "px-6 py-3 text-sm font-medium rounded-full transition-all duration-300",
                      isActivePath(item.path)
                        ? "bg-gray-700 text-white shadow-sm"
                        : "text-gray-700 hover:text-gray-900 hover:bg-white/50"
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