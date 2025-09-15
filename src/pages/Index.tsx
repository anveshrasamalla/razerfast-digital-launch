import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Zap, ShoppingCart, BarChart3 } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";
import caseStudy4 from "@/assets/case-study-4.jpg";
import caseStudy5 from "@/assets/case-study-5.jpg";
const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const words = ["Visible", "Trusted", "Automated", "Optimized", "Digital"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <Layout>
      <style>
        {`.min-h-screen { background: #F5F4F1 !important; }`}
      </style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: "#F5F4F1"
    }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Small subtitle */}
          <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-12">
            RIGHT TOOLS. RIGHT TEAM. RAZERFAST.
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-wide mb-8 flex flex-wrap justify-center">
            Let’s make your business&nbsp;
            <span className="relative w-[120px] sm:w-[150px] inline-block text-left" style={{
            minHeight: "1em"
          }}>
              <span key={words[currentWord]} className="absolute left-0 top-0 transition-opacity duration-500 ease-in-out animate-fade-in-up">
                {words[currentWord]}
              </span>
            </span>
          </h1>

        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F4F1" }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-8">
            TRUSTED BY
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
            <div className="font-bold text-lg sm:text-xl lg:text-2xl">APOLLO</div>
            <div className="font-bold text-lg sm:text-xl lg:text-2xl">Jägermeister</div>
            <div className="font-bold text-lg sm:text-xl lg:text-2xl">THE EXPLORERS CLUB</div>
            <div className="font-bold text-lg sm:text-xl lg:text-2xl">Huddly</div>
            <div className="font-bold text-lg sm:text-xl lg:text-2xl">Pathlock</div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase mb-4">
              WHO WE ARE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-6 leading-tight">
              We are <span className="font-medium">Razerfast</span><br className="hidden sm:block" />
              an award-winning web design agency focused on fostering relationships & work culture<br className="hidden lg:block" />
              to deliver world-class digital products.
            </h2>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Parallax Background Elements */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            background: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)'
          }}
        />
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase mb-4">
              CASE STUDIES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white">
              High-performing digital products with great designs.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Case Study 1 */}
            <div className="group cursor-pointer animate-fade-in hover-scale">
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-black/80 text-white border-white/20">Retail</Badge>
                </div>
                <div className="relative overflow-hidden">
                  <img 
                    src={caseStudy1}
                    alt="E-commerce Platform"
                    className="w-full h-60 sm:h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white text-sm">View Details →</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2 transition-colors duration-300 group-hover:text-blue-400">
                103% conversion increase in a Shopify store with menswear apparel
              </h3>
              <p className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Case study →</p>
            </div>

            {/* Case Study 2 */}
            <div className="group cursor-pointer animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-purple-900 to-blue-900">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-black/80 text-white border-white/20">Electric Mobility</Badge>
                </div>
                <div className="relative overflow-hidden">
                  <img 
                    src={caseStudy2}
                    alt="Mobile App Development"
                    className="w-full h-60 sm:h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white text-sm">View Details →</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2 transition-colors duration-300 group-hover:text-purple-400">
                Enhanced electric scooter experience with an innovative mobile app
              </h3>
              <p className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Case study →</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Case Study 3 */}
            <div className="group cursor-pointer animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-green-900 to-blue-900">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-black/80 text-white border-white/20">Information Technology</Badge>
                </div>
                <div className="relative overflow-hidden">
                  <img 
                    src={caseStudy3}
                    alt="Cybersecurity Website"
                    className="w-full h-48 sm:h-60 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white text-sm">View Details →</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-white mb-2 transition-colors duration-300 group-hover:text-green-400">
                Lightweight and easy-to-read website for a cybersecurity market leader
              </h3>
              <p className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Case study →</p>
            </div>

            {/* Case Study 4 */}
            <div className="group cursor-pointer animate-fade-in hover-scale" style={{ animationDelay: '0.3s' }}>
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-orange-900 to-red-900">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-black/80 text-white border-white/20">Technology</Badge>
                </div>
                <div className="relative overflow-hidden">
                  <img 
                    src={caseStudy4}
                    alt="Sustainability Platform"
                    className="w-full h-48 sm:h-60 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white text-sm">View Details →</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-white mb-2 transition-colors duration-300 group-hover:text-orange-400">
                Unique website with a beautiful presentation of sustainability-oriented ideas
              </h3>
              <p className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Case study →</p>
            </div>

            {/* Case Study 5 */}
            <div className="group cursor-pointer animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-pink-900 to-purple-900">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-black/80 text-white border-white/20">Technology</Badge>
                </div>
                <div className="relative overflow-hidden">
                  <img 
                    src={caseStudy5}
                    alt="E-commerce Innovation"
                    className="w-full h-48 sm:h-60 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white text-sm">View Details →</div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-white mb-2 transition-colors duration-300 group-hover:text-pink-400">
                Lightning-fast headless Shopify with innovative wearables
              </h3>
              <p className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Case study →</p>
            </div>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl font-light text-white mb-6">Hungry for more examples?</h3>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              Check Our Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F4F1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-4">
              PRODUCTS & SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground">
              World-class digital products and five-star services.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1 */}
            <div className="space-y-6">
              <div className="text-6xl font-light text-muted-foreground/30">01</div>
              <h3 className="text-2xl font-medium text-foreground">Websites</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom WordPress Websites</li>
                <li>• Custom HubSpot Websites</li>
                <li>• Custom Headless Websites</li>
                <li>• Custom Webflow Websites</li>
              </ul>
              <p className="text-muted-foreground">
                Reach your business goals with a custom-made, fast & mobile-friendly website.
              </p>
              <Button variant="link" className="text-foreground p-0 h-auto">
                See Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Service 2 */}
            <div className="space-y-6">
              <div className="text-6xl font-light text-muted-foreground/30">02</div>
              <h3 className="text-2xl font-medium text-foreground">E-commerce</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom Shopify E-commerce</li>
                <li>• Custom WooCommerce E-commerce</li>
              </ul>
              <p className="text-muted-foreground">
                Boost your sales with a conversion-oriented, custom-tailored, and high-converting online store.
              </p>
              <Button variant="link" className="text-foreground p-0 h-auto">
                See Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Service 3 */}
            <div className="space-y-6">
              <div className="text-6xl font-light text-muted-foreground/30">03</div>
              <h3 className="text-2xl font-medium text-foreground">Web Apps</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom Web Apps</li>
              </ul>
              <p className="text-muted-foreground">
                Grow your business with a modern & user-friendly web app.
              </p>
              <Button variant="link" className="text-foreground p-0 h-auto">
                See Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Service 4 */}
            <div className="space-y-6">
              <div className="text-6xl font-light text-muted-foreground/30">04</div>
              <h3 className="text-2xl font-medium text-foreground">Mobile Apps</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom Mobile Apps</li>
              </ul>
              <p className="text-muted-foreground">
                Keep your customers engaged with a well-designed & sleek mobile app.
              </p>
              <Button variant="link" className="text-foreground p-0 h-auto">
                See Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white">
              Our clients love working with us!
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-gray-300 rounded"></div>
              <p className="text-white">
                "We've doubled our conversion in just one month. That's the most direct metric of our success."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-white text-sm">5.0</span>
              </div>
              <div>
                <p className="text-white font-medium">Nikh Khosla</p>
                <p className="text-white/60 text-sm">CEO - Seneca (US)</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-gray-300 rounded"></div>
              <p className="text-white">
                "This was the most well-managed project I've been a part of."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-white text-sm">5.0</span>
              </div>
              <div>
                <p className="text-white font-medium">Michael Puterbaugh</p>
                <p className="text-white/60 text-sm">CMO - Pathlock (US)</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-gray-300 rounded"></div>
              <p className="text-white">
                "They were one of the best UX designers I've worked with."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-white text-sm">5.0</span>
              </div>
              <div>
                <p className="text-white font-medium">Mac Piskorz</p>
                <p className="text-white/60 text-sm">CEO - Apollo Scooters (CA)</p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-gray-300 rounded"></div>
              <p className="text-white">
                "The communication was exceptional."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-white text-sm">5.0</span>
              </div>
              <div>
                <p className="text-white font-medium">Sharde Heim</p>
                <p className="text-white/60 text-sm">Product Designer - Curious Thing (AU)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F4F1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-4">
                Q&A
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground mb-8 lg:mb-12">
                Simple answers to big questions.
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3">What are digital products?</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    They are websites, online stores, and applications, including mobile applications. These are our specialty, but they aren't the only things we're passionate about.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3">Can you deliver a complete product?</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Yes, we can create a complete product from scratch. Aside from a number of UX and UI design services, we offer programming, copywriting, and search engine optimization services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3">How much time do you need?</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    We specialize in creating custom products. In general, building a website from the ground up takes us around ten weeks.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3">How much will it cost?</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    The majority of our clients sign a time and materials pricing contract, but we can charge a fixed fee if need be. The starting price for a project is $15,000.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-full h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl lg:rounded-2xl"></div>
                <div className="w-full h-24 sm:h-28 lg:h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-xl lg:rounded-2xl"></div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 lg:pt-8">
                <div className="w-full h-24 sm:h-28 lg:h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl lg:rounded-2xl"></div>
                <div className="w-full h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl lg:rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase mb-4">
            EXCITED?
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-8 lg:mb-12 leading-tight">
            Let's build or improve your digital product
          </h2>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
            Schedule a Call
          </Button>
        </div>
      </section>

    </Layout>;
};
export default Index;