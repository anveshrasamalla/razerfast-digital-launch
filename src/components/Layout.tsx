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
      <nav className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold text-gray-900 tracking-tight"
            >
              razerfast
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 relative",
                    isActivePath(item.path)
                      ? "text-gray-900 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Discuss a Project
            </Link>
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