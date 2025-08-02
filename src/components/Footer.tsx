import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    Company: [{
      name: "About Us",
      path: "/about"
    }, {
      name: "Our Team",
      path: "/about#team"
    }, {
      name: "Careers",
      path: "/careers"
    }, {
      name: "Privacy Policy",
      path: "/privacy"
    }],
    Services: [{
      name: "Web Development",
      path: "/services#web"
    }, {
      name: "E-commerce",
      path: "/services#ecommerce"
    }, {
      name: "Digital Marketing",
      path: "/services#marketing"
    }, {
      name: "Consulting",
      path: "/services#consulting"
    }],
    Industries: [{
      name: "Automotive",
      path: "/portfolio#automotive"
    }, {
      name: "Cafes & Restaurants",
      path: "/portfolio#cafe"
    }, {
      name: "Grocery Stores",
      path: "/portfolio#grocery"
    }, {
      name: "Art & Creative",
      path: "/portfolio#art"
    }],
    Resources: [{
      name: "Blog",
      path: "/blog"
    }, {
      name: "Case Studies",
      path: "/portfolio"
    }, {
      name: "Contact",
      path: "/contact"
    }, {
      name: "Get Quote",
      path: "/contact#quote"
    }]
  };
  const socialLinks = [{
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/razerfast"
  }, {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/razerfast"
  }, {
    name: "Github",
    icon: Github,
    url: "https://github.com/razerfast"
  }];
  return <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Signup */}
        <div className="bg-gradient-accent rounded-2xl p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            
            <p className="text-tech-accent-foreground/80 mb-6">
              Get the latest insights on digital transformation and tech solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg bg-tech-accent-foreground/10 text-tech-accent-foreground placeholder:text-tech-accent-foreground/60 border border-tech-accent-foreground/20 focus:outline-none focus:ring-2 focus:ring-tech-accent-foreground/30" />
              <Button variant="hero" size="lg" className="bg-tech-accent-foreground text-tech-accent hover:bg-tech-accent-foreground/90">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Razerfast</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Helping small and medium local businesses accelerate their digital transformation with cutting-edge technology solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-tech-accent" />
                <span className="text-sm">hello@razerfast.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-tech-accent" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-tech-accent" />
                <span className="text-sm">123 Tech Street, Innovation City</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map(social => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 hover:bg-tech-accent rounded-lg flex items-center justify-center transition-colors duration-300 group">
                  <social.icon className="w-5 h-5 group-hover:text-tech-accent-foreground" />
                </a>)}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => <div key={category}>
              <h4 className="font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map(link => <li key={link.name}>
                    <Link to={link.path} className="text-primary-foreground/80 hover:text-tech-accent transition-colors duration-300 text-sm">
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Razerfast. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-tech-accent text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-tech-accent text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;